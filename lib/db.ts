import { Pool, type QueryResultRow } from "pg";
import { env } from "./env";

const globalForDb = globalThis as typeof globalThis & { pool?: Pool };
const tableExistsCache = new Map<string, boolean>();
const columnExistsCache = new Map<string, boolean>();
const tableExistsPromiseCache = new Map<string, Promise<boolean>>();
const columnExistsPromiseCache = new Map<string, Promise<boolean>>();
const tableNameResolveCache = new Map<string, string | null>();
const tableNameResolvePromiseCache = new Map<string, Promise<string | null>>();
const IS_SUPABASE = /supabase\.(co|in)/i.test(String(env.DATABASE_URL ?? ""));
const DB_POOL_MAX = Number(process.env.DB_POOL_MAX ?? (IS_SUPABASE ? 5 : 10));
const DB_CONNECTION_TIMEOUT_MS = Number(process.env.DB_CONNECTION_TIMEOUT_MS ?? (IS_SUPABASE ? 10000 : 30000));
const DB_IDLE_TIMEOUT_MS = Number(process.env.DB_IDLE_TIMEOUT_MS ?? (IS_SUPABASE ? 10000 : 30000));
const DB_QUERY_CONCURRENCY = Number(process.env.DB_QUERY_CONCURRENCY ?? (IS_SUPABASE ? 2 : 4));
let activeQueryCount = 0;
const queryWaitQueue: Array<() => void> = [];

function isTransientPoolTimeoutError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  const message = String(error.message || "").toLowerCase();
  return message.includes("unable to check out connection from the pool due to timeout");
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function withQuerySlot<T>(execute: () => Promise<T>): Promise<T> {
  const concurrencyLimit = Number.isFinite(DB_QUERY_CONCURRENCY) && DB_QUERY_CONCURRENCY > 0
    ? DB_QUERY_CONCURRENCY
    : 4;
  if (activeQueryCount >= concurrencyLimit) {
    await new Promise<void>((resolve) => {
      queryWaitQueue.push(resolve);
    });
  }
  activeQueryCount += 1;
  try {
    return await execute();
  } finally {
    activeQueryCount = Math.max(0, activeQueryCount - 1);
    const next = queryWaitQueue.shift();
    if (next) next();
  }
}

export const pool =
  globalForDb.pool ??
  new Pool({
    connectionString: env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    max: Number.isFinite(DB_POOL_MAX) && DB_POOL_MAX > 0 ? DB_POOL_MAX : 10,
    connectionTimeoutMillis:
      Number.isFinite(DB_CONNECTION_TIMEOUT_MS) && DB_CONNECTION_TIMEOUT_MS > 0
        ? DB_CONNECTION_TIMEOUT_MS
        : 30000,
    idleTimeoutMillis:
      Number.isFinite(DB_IDLE_TIMEOUT_MS) && DB_IDLE_TIMEOUT_MS > 0
        ? DB_IDLE_TIMEOUT_MS
        : 30000
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.pool = pool;
}

export async function query<T extends QueryResultRow = QueryResultRow>(
  sql: string,
  params: unknown[] = []
): Promise<T[]> {
  let attempt = 0;
  let lastError: unknown = null;
  while (attempt < 3) {
    try {
      const result = await withQuerySlot(() => pool.query<T>(sql, params));
      return result.rows;
    } catch (error) {
      lastError = error;
      if (!isTransientPoolTimeoutError(error)) {
        throw error;
      }
      attempt += 1;
      if (attempt >= 3) {
        break;
      }
      // Backoff reduces retry stampede when pool is saturated.
      await delay(200 * attempt);
    }
  }
  throw lastError;
}

export async function queryOne<T extends QueryResultRow = QueryResultRow>(
  sql: string,
  params: unknown[] = []
): Promise<T | null> {
  const rows = await query<T>(sql, params);
  return rows[0] ?? null;
}

export async function queryValue<T = unknown>(
  sql: string,
  params: unknown[] = []
): Promise<T | null> {
  const rows = await query<Record<string, T>>(sql, params);
  const row = rows[0];
  if (!row) return null;
  const firstKey = Object.keys(row)[0];
  return firstKey ? row[firstKey] : null;
}

export async function hasTable(tableName: string, schema = "public"): Promise<boolean> {
  const qualifiedName = tableName.includes(".") ? tableName : `${schema}.${tableName}`;
  const cacheKey = qualifiedName;
  const cached = tableExistsCache.get(cacheKey);
  if (typeof cached === "boolean") {
    return cached;
  }
  const pending = tableExistsPromiseCache.get(cacheKey);
  if (pending) {
    return pending;
  }
  const lookupPromise = (async () => {
    const exists = await queryValue<string>(
      "select to_regclass($1) as table_name",
      [qualifiedName]
    );
    const present = Boolean(exists);
    tableExistsCache.set(cacheKey, present);
    return present;
  })();
  tableExistsPromiseCache.set(cacheKey, lookupPromise);
  try {
    return await lookupPromise;
  } finally {
    tableExistsPromiseCache.delete(cacheKey);
  }
}

export async function resolveTableName(...tableNames: string[]): Promise<string | null> {
  const cacheKey = tableNames.join("|");
  const cached = tableNameResolveCache.get(cacheKey);
  if (typeof cached !== "undefined") {
    return cached;
  }

  const pending = tableNameResolvePromiseCache.get(cacheKey);
  if (pending) {
    return pending;
  }

  const lookupPromise = (async () => {
    for (const tableName of tableNames) {
      if (await hasTable(tableName)) {
        tableNameResolveCache.set(cacheKey, tableName);
        return tableName;
      }
    }

    tableNameResolveCache.set(cacheKey, null);
    return null;
  })();
  tableNameResolvePromiseCache.set(cacheKey, lookupPromise);
  try {
    return await lookupPromise;
  } finally {
    tableNameResolvePromiseCache.delete(cacheKey);
  }
}

export async function hasColumn(tableName: string, columnName: string, schema = "public"): Promise<boolean> {
  const qualifiedName = tableName.includes(".") ? tableName : `${schema}.${tableName}`;
  const cacheKey = `${qualifiedName}.${columnName}`;
  const cached = columnExistsCache.get(cacheKey);
  if (typeof cached === "boolean") {
    return cached;
  }
  const pending = columnExistsPromiseCache.get(cacheKey);
  if (pending) {
    return pending;
  }
  const lookupPromise = (async () => {
    const exists = await queryValue<boolean>(
      `select exists(
         select 1
         from pg_attribute
         where attrelid = to_regclass($1)
           and attname = $2
           and not attisdropped
       )`,
      [qualifiedName, columnName]
    );
    const present = Boolean(exists);
    columnExistsCache.set(cacheKey, present);
    return present;
  })();
  columnExistsPromiseCache.set(cacheKey, lookupPromise);
  try {
    return await lookupPromise;
  } finally {
    columnExistsPromiseCache.delete(cacheKey);
  }
}
