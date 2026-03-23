module.exports = [
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/lib/env.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "env",
    ()=>env
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
;
const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    DATABASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    SESSION_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(8),
    APP_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("http://localhost:3000"),
    INTEGRATION_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(""),
    CRAD_STUDENT_LIST_ENDPOINT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(""),
    PREFECT_STUDENT_PERSONAL_INFO_ENDPOINT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(""),
    COMLAB_STUDENT_LIST_ENDPOINT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(""),
    CASHIER_ENROLLMENT_DATA_ENDPOINT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(""),
    CLINIC_STUDENT_PERSONAL_INFO_ENDPOINT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(""),
    GUIDANCE_STUDENT_PERSONAL_INFO_ENDPOINT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(""),
    GUIDANCE_STUDENT_ACADEMIC_RECORDS_ENDPOINT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(""),
    PMED_ENROLLMENT_STATISTICS_ENDPOINT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(""),
    PMED_REPORT_QUEUE_ENDPOINT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("")
});
const env = schema.parse({
    DATABASE_URL: process.env.DATABASE_URL,
    SESSION_SECRET: process.env.SESSION_SECRET ?? "change-me-now",
    APP_URL: process.env.APP_URL,
    INTEGRATION_API_KEY: process.env.INTEGRATION_API_KEY ?? "",
    CRAD_STUDENT_LIST_ENDPOINT: process.env.CRAD_STUDENT_LIST_ENDPOINT ?? "",
    PREFECT_STUDENT_PERSONAL_INFO_ENDPOINT: process.env.PREFECT_STUDENT_PERSONAL_INFO_ENDPOINT ?? "",
    COMLAB_STUDENT_LIST_ENDPOINT: process.env.COMLAB_STUDENT_LIST_ENDPOINT ?? "",
    CASHIER_ENROLLMENT_DATA_ENDPOINT: process.env.CASHIER_ENROLLMENT_DATA_ENDPOINT ?? "",
    CLINIC_STUDENT_PERSONAL_INFO_ENDPOINT: process.env.CLINIC_STUDENT_PERSONAL_INFO_ENDPOINT ?? "",
    GUIDANCE_STUDENT_PERSONAL_INFO_ENDPOINT: process.env.GUIDANCE_STUDENT_PERSONAL_INFO_ENDPOINT ?? "",
    GUIDANCE_STUDENT_ACADEMIC_RECORDS_ENDPOINT: process.env.GUIDANCE_STUDENT_ACADEMIC_RECORDS_ENDPOINT ?? "",
    PMED_ENROLLMENT_STATISTICS_ENDPOINT: process.env.PMED_ENROLLMENT_STATISTICS_ENDPOINT ?? "",
    PMED_REPORT_QUEUE_ENDPOINT: process.env.PMED_REPORT_QUEUE_ENDPOINT ?? ""
});
}),
"[project]/lib/session.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"001d88def72b885b662f6b1d8a41721d644a4c822d":"getSessionUser","0039bcb811d5bef163273fd29cd9905f5c8a234f09":"getSuccessFlash","009a37838fb250d29438b83e6aa1c2e17f0575ff86":"clearSession","40e26bab1a16e352dd2193407f09812fe689c95408":"setSession","40f0cfb20b0deaeb6d5ab33d4a931c0cbf4f508dc1":"setSuccessFlash"},"",""] */ __turbopack_context__.s([
    "clearSession",
    ()=>clearSession,
    "getSessionUser",
    ()=>getSessionUser,
    "getSuccessFlash",
    ()=>getSuccessFlash,
    "setSession",
    ()=>setSession,
    "setSuccessFlash",
    ()=>setSuccessFlash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/env.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const COOKIE_NAME = "bpc_registrar_session";
const FLASH_COOKIE_NAME = "bpc_registrar_flash_success";
const MAX_AGE_SECONDS = 60 * 60 * 12;
function sign(value) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].createHmac("sha256", __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].SESSION_SECRET).update(value).digest("hex");
}
function encode(payload) {
    const base = Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
    return `${base}.${sign(base)}`;
}
function decode(raw) {
    const [base, signature] = raw.split(".");
    if (!base || !signature) return null;
    if (sign(base) !== signature) return null;
    try {
        const payload = JSON.parse(Buffer.from(base, "base64url").toString("utf8"));
        if (payload.exp < Math.floor(Date.now() / 1000)) return null;
        return payload;
    } catch  {
        return null;
    }
}
async function getSessionUser() {
    const jar = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const raw = jar.get(COOKIE_NAME)?.value;
    if (!raw) return null;
    return decode(raw)?.user ?? null;
}
async function setSession(user) {
    const jar = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const payload = {
        user,
        exp: Math.floor(Date.now() / 1000) + MAX_AGE_SECONDS
    };
    jar.set(COOKIE_NAME, encode(payload), {
        httpOnly: true,
        sameSite: "lax",
        secure: ("TURBOPACK compile-time value", "development") === "production",
        path: "/",
        maxAge: MAX_AGE_SECONDS
    });
}
async function clearSession() {
    const jar = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    jar.delete(COOKIE_NAME);
}
async function setSuccessFlash(message) {
    const jar = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    jar.set(FLASH_COOKIE_NAME, message, {
        httpOnly: false,
        sameSite: "lax",
        secure: ("TURBOPACK compile-time value", "development") === "production",
        path: "/",
        maxAge: 60
    });
}
async function getSuccessFlash() {
    const jar = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    return jar.get(FLASH_COOKIE_NAME)?.value ?? "";
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getSessionUser,
    setSession,
    clearSession,
    setSuccessFlash,
    getSuccessFlash
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSessionUser, "001d88def72b885b662f6b1d8a41721d644a4c822d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(setSession, "40e26bab1a16e352dd2193407f09812fe689c95408", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(clearSession, "009a37838fb250d29438b83e6aa1c2e17f0575ff86", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(setSuccessFlash, "40f0cfb20b0deaeb6d5ab33d4a931c0cbf4f508dc1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSuccessFlash, "0039bcb811d5bef163273fd29cd9905f5c8a234f09", null);
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/pg [external] (pg, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("pg");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "hasColumn",
    ()=>hasColumn,
    "hasTable",
    ()=>hasTable,
    "pool",
    ()=>pool,
    "query",
    ()=>query,
    "queryOne",
    ()=>queryOne,
    "queryValue",
    ()=>queryValue,
    "resolveTableName",
    ()=>resolveTableName
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/env.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const globalForDb = globalThis;
const tableExistsCache = new Map();
const columnExistsCache = new Map();
const tableExistsPromiseCache = new Map();
const columnExistsPromiseCache = new Map();
const tableNameResolveCache = new Map();
const tableNameResolvePromiseCache = new Map();
const IS_SUPABASE = /supabase\.(co|in)/i.test(String(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].DATABASE_URL ?? ""));
const DB_POOL_MAX = Number(process.env.DB_POOL_MAX ?? (IS_SUPABASE ? 5 : 10));
const DB_CONNECTION_TIMEOUT_MS = Number(process.env.DB_CONNECTION_TIMEOUT_MS ?? (IS_SUPABASE ? 10000 : 30000));
const DB_IDLE_TIMEOUT_MS = Number(process.env.DB_IDLE_TIMEOUT_MS ?? (IS_SUPABASE ? 10000 : 30000));
const DB_QUERY_CONCURRENCY = Number(process.env.DB_QUERY_CONCURRENCY ?? (IS_SUPABASE ? 2 : 4));
let activeQueryCount = 0;
const queryWaitQueue = [];
function isTransientPoolTimeoutError(error) {
    if (!(error instanceof Error)) return false;
    const message = String(error.message || "").toLowerCase();
    return message.includes("unable to check out connection from the pool due to timeout");
}
function delay(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
async function withQuerySlot(execute) {
    const concurrencyLimit = Number.isFinite(DB_QUERY_CONCURRENCY) && DB_QUERY_CONCURRENCY > 0 ? DB_QUERY_CONCURRENCY : 4;
    if (activeQueryCount >= concurrencyLimit) {
        await new Promise((resolve)=>{
            queryWaitQueue.push(resolve);
        });
    }
    activeQueryCount += 1;
    try {
        return await execute();
    } finally{
        activeQueryCount = Math.max(0, activeQueryCount - 1);
        const next = queryWaitQueue.shift();
        if (next) next();
    }
}
const pool = globalForDb.pool ?? new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__["Pool"]({
    connectionString: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    },
    max: Number.isFinite(DB_POOL_MAX) && DB_POOL_MAX > 0 ? DB_POOL_MAX : 10,
    connectionTimeoutMillis: Number.isFinite(DB_CONNECTION_TIMEOUT_MS) && DB_CONNECTION_TIMEOUT_MS > 0 ? DB_CONNECTION_TIMEOUT_MS : 30000,
    idleTimeoutMillis: Number.isFinite(DB_IDLE_TIMEOUT_MS) && DB_IDLE_TIMEOUT_MS > 0 ? DB_IDLE_TIMEOUT_MS : 30000
});
if ("TURBOPACK compile-time truthy", 1) {
    globalForDb.pool = pool;
}
async function query(sql, params = []) {
    let attempt = 0;
    let lastError = null;
    while(attempt < 3){
        try {
            const result = await withQuerySlot(()=>pool.query(sql, params));
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
async function queryOne(sql, params = []) {
    const rows = await query(sql, params);
    return rows[0] ?? null;
}
async function queryValue(sql, params = []) {
    const rows = await query(sql, params);
    const row = rows[0];
    if (!row) return null;
    const firstKey = Object.keys(row)[0];
    return firstKey ? row[firstKey] : null;
}
async function hasTable(tableName, schema = "public") {
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
    const lookupPromise = (async ()=>{
        const exists = await queryValue("select to_regclass($1) as table_name", [
            qualifiedName
        ]);
        const present = Boolean(exists);
        tableExistsCache.set(cacheKey, present);
        return present;
    })();
    tableExistsPromiseCache.set(cacheKey, lookupPromise);
    try {
        return await lookupPromise;
    } finally{
        tableExistsPromiseCache.delete(cacheKey);
    }
}
async function resolveTableName(...tableNames) {
    const cacheKey = tableNames.join("|");
    const cached = tableNameResolveCache.get(cacheKey);
    if (typeof cached !== "undefined") {
        return cached;
    }
    const pending = tableNameResolvePromiseCache.get(cacheKey);
    if (pending) {
        return pending;
    }
    const lookupPromise = (async ()=>{
        for (const tableName of tableNames){
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
    } finally{
        tableNameResolvePromiseCache.delete(cacheKey);
    }
}
async function hasColumn(tableName, columnName, schema = "public") {
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
    const lookupPromise = (async ()=>{
        const exists = await queryValue(`select exists(
         select 1
         from pg_attribute
         where attrelid = to_regclass($1)
           and attname = $2
           and not attisdropped
       )`, [
            qualifiedName,
            columnName
        ]);
        const present = Boolean(exists);
        columnExistsCache.set(cacheKey, present);
        return present;
    })();
    columnExistsPromiseCache.set(cacheKey, lookupPromise);
    try {
        return await lookupPromise;
    } finally{
        columnExistsPromiseCache.delete(cacheKey);
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getAuthUserByLogin",
    ()=>getAuthUserByLogin,
    "getClassFilters",
    ()=>getClassFilters,
    "getClassRoster",
    ()=>getClassRoster,
    "getDashboardStats",
    ()=>getDashboardStats,
    "getExportRows",
    ()=>getExportRows,
    "getIntegrationSummary",
    ()=>getIntegrationSummary,
    "getNextStudentNumber",
    ()=>getNextStudentNumber,
    "getReportMetrics",
    ()=>getReportMetrics,
    "getStaffDirectoryMetrics",
    ()=>getStaffDirectoryMetrics,
    "getStudentFilters",
    ()=>getStudentFilters,
    "getUnreadNotificationCount",
    ()=>getUnreadNotificationCount,
    "getUserProfile",
    ()=>getUserProfile,
    "listAcademicReports",
    ()=>listAcademicReports,
    "listAuditLogs",
    ()=>listAuditLogs,
    "listAvailableClassesForClassLists",
    ()=>listAvailableClassesForClassLists,
    "listClassListSummary",
    ()=>listClassListSummary,
    "listClasses",
    ()=>listClasses,
    "listDocuments",
    ()=>listDocuments,
    "listEnrollmentBin",
    ()=>listEnrollmentBin,
    "listEnrollments",
    ()=>listEnrollments,
    "listGrades",
    ()=>listGrades,
    "listInstructors",
    ()=>listInstructors,
    "listIntegrationRecords",
    ()=>listIntegrationRecords,
    "listNotifications",
    ()=>listNotifications,
    "listReports",
    ()=>listReports,
    "listRoles",
    ()=>listRoles,
    "listSchedules",
    ()=>listSchedules,
    "listStaffDirectory",
    ()=>listStaffDirectory,
    "listStudents",
    ()=>listStudents,
    "listStudentsBasic",
    ()=>listStudentsBasic,
    "listUsers",
    ()=>listUsers,
    "normalizeRole",
    ()=>normalizeRole,
    "workflowTemplates",
    ()=>workflowTemplates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
function splitFullName(fullName) {
    const normalized = fullName.trim().replace(/\s+/g, " ");
    if (!normalized) {
        return {
            firstName: "",
            lastName: ""
        };
    }
    const parts = normalized.split(" ");
    if (parts.length === 1) {
        return {
            firstName: parts[0],
            lastName: ""
        };
    }
    return {
        firstName: parts.slice(0, -1).join(" "),
        lastName: parts[parts.length - 1]
    };
}
function normalizeRole(role, isSuperAdmin = false) {
    if (isSuperAdmin || role.trim().toLowerCase() === "admin") {
        return "admin";
    }
    return "staff";
}
const workflowTemplates = {
    "access-setup": {
        label: "Access Setup",
        title: "Access Setup Compliance Report",
        department: "Registrar Administration",
        summary: "Review user provisioning, role assignments, and account readiness across the registrar office.",
        dueInDays: 3
    },
    "student-intake": {
        label: "Student Intake",
        title: "Student Intake Master List Report",
        department: "Student Records",
        summary: "Summarize newly encoded student records, intake readiness, and pending validation items.",
        dueInDays: 5
    },
    "class-planning": {
        label: "Class Planning",
        title: "Class Planning and Subject Offering Report",
        department: "Scheduling",
        summary: "Track prepared subjects, room schedules, and section readiness before enrollment starts.",
        dueInDays: 5
    },
    "enrollment-validation": {
        label: "Enrollment Validation",
        title: "Enrollment Validation Summary",
        department: "Enrollment",
        summary: "Measure confirmed registrations, pending validations, and load assignment progress.",
        dueInDays: 4
    },
    "grade-posting": {
        label: "Grade Posting",
        title: "Grade Posting Completion Report",
        department: "Academic Records",
        summary: "Review subject grade completion, posting progress, and release readiness by semester.",
        dueInDays: 4
    },
    "completion-services": {
        label: "Completion Services",
        title: "Completion Services Release Report",
        department: "Document Services",
        summary: "Monitor transcript, certification, and other registrar release services for completed records.",
        dueInDays: 6
    },
    "compliance-reports": {
        label: "Compliance & Reports",
        title: "Registrar Compliance and Reporting Overview",
        department: "Registrar Compliance",
        summary: "Roll up audit, workflow, and institutional reporting checkpoints into one operational view.",
        dueInDays: 7
    }
};
async function getAuthUserByLogin(login) {
    const account = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryOne"])(`select id, username, email, full_name, role, is_super_admin, password_hash, status
     from admin_users
     where (lower(username) = lower($1) or lower(coalesce(email, '')) = lower($1))
       and lower(coalesce(status, 'inactive')) = 'active'
     limit 1`, [
        login
    ]);
    if (!account) {
        return null;
    }
    const name = splitFullName(account.full_name ?? "");
    const appRole = normalizeRole(account.role, Boolean(Number(account.is_super_admin ?? 0)));
    return {
        id: account.id,
        username: account.username,
        email: account.email ?? "",
        password_hash: account.password_hash,
        first_name: name.firstName,
        last_name: name.lastName,
        display_name: account.full_name ?? account.username,
        profile_photo: "",
        profile_title: account.role,
        profile_bio: account.email ?? "",
        profile_accent: appRole === "admin" ? "#8B1E3F" : "#2F6BD9",
        role: appRole
    };
}
async function getStudentsTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_students", "students");
}
async function getInstructorsTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("hr_instructors", "hr.instructors", "registrar_instructors", "registrar.instructors", "instructors");
}
async function getInstructorAssignmentsTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_instructor_class_assignments", "registrar.instructor_class_assignments", "instructor_class_assignments");
}
async function getClassesTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_classes", "classes");
}
async function getClassListsTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_class_lists", "registrar.class_lists", "class_lists");
}
async function getSchedulesTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_schedules", "schedules");
}
async function getEnrollmentsTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar.enrollments", "registrar_enrollments", "enrollments");
}
async function getGradesTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar.grades", "registrar_grades", "grades");
}
async function getAuditLogsTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_audit_logs", "audit_logs");
}
async function getNotificationsTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_notifications", "notifications");
}
async function getAcademicReportsTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_academic_reports", "academic_reports");
}
async function getUsersTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_users", "users");
}
async function getRolesTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_roles", "roles");
}
async function getDashboardStats() {
    const reportsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("reports", "registrar_reports");
    const documentsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("documents", "registrar_documents");
    const gradesTable = await getGradesTable();
    const auditLogsTable = await getAuditLogsTable();
    const studentsTable = await getStudentsTable();
    const classesTable = await getClassesTable();
    const enrollmentsTable = await getEnrollmentsTable();
    const [reports, documents, grades, auditLogs, students, classes, enrollments] = await Promise.all([
        reportsTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${reportsTable}`) : Promise.resolve(0),
        documentsTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${documentsTable} where status = 'Pending'`) : Promise.resolve(0),
        gradesTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${gradesTable}`) : Promise.resolve(0),
        auditLogsTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${auditLogsTable}`) : Promise.resolve(0),
        studentsTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${studentsTable}`) : Promise.resolve(0),
        classesTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${classesTable}`) : Promise.resolve(0),
        enrollmentsTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${enrollmentsTable}`) : Promise.resolve(0)
    ]);
    return {
        reports: Number(reports ?? 0),
        pendingDocuments: Number(documents ?? 0),
        grades: Number(grades ?? 0),
        auditLogs: Number(auditLogs ?? 0),
        students: Number(students ?? 0),
        classes: Number(classes ?? 0),
        enrollments: Number(enrollments ?? 0)
    };
}
async function listStudents(search = "", program = "", year = "") {
    const studentsTable = await getStudentsTable();
    if (!studentsTable) {
        return [];
    }
    const conditions = [];
    const params = [];
    if (search.trim()) {
        params.push(`%${search.trim()}%`);
        conditions.push(`(student_no ilike $${params.length} or first_name ilike $${params.length} or last_name ilike $${params.length})`);
    }
    if (program.trim()) {
        params.push(program.trim());
        conditions.push(`program = $${params.length}`);
    }
    if (year.trim()) {
        params.push(year.trim());
        conditions.push(`year_level = $${params.length}`);
    }
    const students = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select * from ${studentsTable} ${conditions.length ? `where ${conditions.join(" and ")}` : ""}
       order by last_name, first_name, student_no`, params);
    if (students.length === 0) {
        return students;
    }
    const paymentStatuses = await getStudentPaymentStatuses(students.map((student)=>({
            id: Number(student.id),
            student_no: String(student.student_no ?? "")
        })));
    const incomingStatuses = await getStudentIncomingIntegrationStatuses(students.map((student)=>({
            id: Number(student.id)
        })));
    const incomingDetails = await getStudentIncomingIntegrationDetails(students.map((student)=>({
            id: Number(student.id)
        })));
    const enrollmentStatuses = await getStudentLatestEnrollmentStatuses(students.map((student)=>({
            id: Number(student.id),
            student_no: String(student.student_no ?? "")
        })));
    return students.map((student)=>({
            ...student,
            enrollment_status: enrollmentStatuses.get(Number(student.id)) ?? "Not Enrolled",
            payment_status: paymentStatuses.get(String(student.student_no ?? "").trim()) ?? "Pending",
            ...incomingStatuses.get(Number(student.id)) ?? {
                medical_clearance_status: "Pending",
                counseling_report_status: "Pending",
                discipline_record_status: "Pending",
                activity_participation_status: "Pending"
            },
            ...incomingDetails.get(Number(student.id)) ?? {}
        }));
}
async function listStudentsBasic() {
    const studentsTable = await getStudentsTable();
    if (!studentsTable) {
        return [];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select id, student_no, first_name, last_name, program, year_level
     from ${studentsTable}
     order by last_name, first_name, student_no`);
}
async function getStudentLatestEnrollmentStatuses(students) {
    const statusMap = new Map();
    if (students.length === 0) {
        return statusMap;
    }
    const enrollmentsTable = await getEnrollmentsTable();
    if (!enrollmentsTable) {
        return statusMap;
    }
    const studentIds = students.map((student)=>Number(student.id)).filter((value)=>Number.isFinite(value));
    if (studentIds.length === 0) {
        return statusMap;
    }
    const hasDeletedAt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "deleted_at");
    const enrollmentRows = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select distinct on (student_id) student_id, status
     from ${enrollmentsTable}
     where student_id = any($1)
     ${hasDeletedAt ? "and deleted_at is null" : ""}
     order by student_id, created_at desc nulls last, id desc`, [
        studentIds
    ]);
    enrollmentRows.forEach((row)=>{
        const normalized = String(row.status ?? "").trim();
        if (normalized) {
            statusMap.set(Number(row.student_id), normalized);
        }
    });
    const cashierFeedTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("cashier_registrar_student_enrollment_feed");
    if (cashierFeedTable) {
        const studentNos = students.map((student)=>String(student.student_no ?? "").trim()).filter(Boolean);
        if (studentNos.length > 0) {
            const feedRows = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select distinct on (student_no) student_no, status
         from ${cashierFeedTable}
         where student_no = any($1)
         order by student_no, coalesce(action_at, sent_at, created_at) desc nulls last, id desc`, [
                studentNos
            ]);
            const studentIdByNo = new Map(students.map((student)=>[
                    String(student.student_no ?? "").trim(),
                    Number(student.id)
                ]));
            feedRows.forEach((row)=>{
                const studentId = studentIdByNo.get(String(row.student_no ?? "").trim());
                if (!studentId) return;
                const normalized = String(row.status ?? "").trim();
                if (normalized) {
                    statusMap.set(studentId, normalized);
                }
            });
        }
    }
    return statusMap;
}
function normalizePaymentStatus(status) {
    const normalized = String(status ?? "").trim().toLowerCase();
    if (!normalized) {
        return "Pending";
    }
    if ([
        "paid",
        "verified",
        "completed",
        "settled",
        "cleared"
    ].includes(normalized)) {
        return "Paid";
    }
    if ([
        "rejected",
        "failed",
        "unpaid",
        "declined"
    ].includes(normalized)) {
        return "Unpaid";
    }
    return normalized === "submitted" ? "Pending" : normalized.replace(/\b\w/g, (value)=>value.toUpperCase());
}
async function getStudentPaymentStatuses(students) {
    const paymentMap = new Map();
    const studentNos = students.map((student)=>student.student_no).filter(Boolean);
    const studentIds = students.map((student)=>student.id).filter((value)=>Number.isFinite(value));
    if (studentNos.length === 0) {
        return paymentMap;
    }
    const [paymentLinksTable, paymentEventsTable, integrationRecordsTable] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar.cashier_payment_links", "cashier_payment_links"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar.cashier_integration_events", "cashier_integration_events"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("integration_records")
    ]);
    if (paymentLinksTable) {
        const rows = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select distinct on (source_key) source_key, payment_status
       from ${paymentLinksTable}
       where source_key = any($1)
       order by source_key, coalesce(cashier_verified_at, paid_at, updated_at, created_at) desc nulls last`, [
            studentNos
        ]);
        rows.forEach((row)=>{
            paymentMap.set(String(row.source_key), normalizePaymentStatus(row.payment_status));
        });
    }
    if (paymentEventsTable) {
        const rows = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select distinct on (source_key) source_key, payment_status
       from ${paymentEventsTable}
       where source_key = any($1)
       order by source_key, coalesce(synced_at, updated_at, created_at) desc nulls last`, [
            studentNos
        ]);
        rows.forEach((row)=>{
            if (!paymentMap.has(String(row.source_key))) {
                paymentMap.set(String(row.source_key), normalizePaymentStatus(row.payment_status));
            }
        });
    }
    if (integrationRecordsTable && studentIds.length > 0) {
        const rows = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select distinct on (student_id) student_id, external_status
       from ${integrationRecordsTable}
       where record_type = 'payment_confirmation'
         and student_id = any($1)
       order by student_id, received_at desc nulls last, created_at desc nulls last`, [
            studentIds
        ]);
        const studentNoById = new Map(students.map((student)=>[
                student.id,
                student.student_no
            ]));
        rows.forEach((row)=>{
            const studentNo = studentNoById.get(Number(row.student_id));
            if (studentNo && !paymentMap.has(studentNo)) {
                paymentMap.set(studentNo, normalizePaymentStatus(row.external_status));
            }
        });
    }
    return paymentMap;
}
function formatIntegrationStatus(value) {
    const normalized = String(value ?? "").trim();
    return normalized ? normalized.replace(/\b\w/g, (part)=>part.toUpperCase()) : "Pending";
}
async function getStudentIncomingIntegrationStatuses(students) {
    const statusMap = new Map();
    const integrationRecordsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("integration_records");
    if (!integrationRecordsTable || students.length === 0) {
        return statusMap;
    }
    const studentIds = students.map((student)=>student.id).filter((value)=>Number.isFinite(value));
    if (studentIds.length === 0) {
        return statusMap;
    }
    const rows = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select distinct on (student_id, record_type) student_id, record_type, external_status
     from ${integrationRecordsTable}
     where student_id = any($1)
       and record_type = any($2)
     order by student_id, record_type, received_at desc nulls last, created_at desc nulls last`, [
        studentIds,
        [
            "medical_clearance",
            "counseling_report",
            "discipline_record",
            "activity_participation_record"
        ]
    ]);
    rows.forEach((row)=>{
        const current = statusMap.get(Number(row.student_id)) ?? {
            medical_clearance_status: "Pending",
            counseling_report_status: "Pending",
            discipline_record_status: "Pending",
            activity_participation_status: "Pending"
        };
        const status = formatIntegrationStatus(row.external_status);
        if (row.record_type === "medical_clearance") {
            current.medical_clearance_status = status;
        }
        if (row.record_type === "counseling_report") {
            current.counseling_report_status = status;
        }
        if (row.record_type === "discipline_record") {
            current.discipline_record_status = status;
        }
        if (row.record_type === "activity_participation_record") {
            current.activity_participation_status = status;
        }
        statusMap.set(Number(row.student_id), current);
    });
    return statusMap;
}
async function getStudentIncomingIntegrationDetails(students) {
    const detailMap = new Map();
    const integrationRecordsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("integration_records");
    if (!integrationRecordsTable || students.length === 0) {
        return detailMap;
    }
    const studentIds = students.map((student)=>student.id).filter((value)=>Number.isFinite(value));
    if (studentIds.length === 0) {
        return detailMap;
    }
    const rows = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select distinct on (student_id, record_type)
            student_id,
            record_type,
            source_office,
            reference_no,
            external_status,
            title,
            notes,
            received_at
     from ${integrationRecordsTable}
     where student_id = any($1)
       and record_type = any($2)
     order by student_id, record_type, received_at desc nulls last, created_at desc nulls last`, [
        studentIds,
        [
            "medical_clearance",
            "counseling_report",
            "discipline_record",
            "activity_participation_record"
        ]
    ]);
    rows.forEach((row)=>{
        const current = detailMap.get(Number(row.student_id)) ?? {};
        const detail = {
            source_office: row.source_office ?? "",
            reference_no: row.reference_no ?? "",
            external_status: formatIntegrationStatus(row.external_status),
            title: row.title ?? "",
            notes: row.notes ?? "",
            received_at: row.received_at ?? null
        };
        if (row.record_type === "medical_clearance") {
            current.medical_clearance_record = detail;
        }
        if (row.record_type === "counseling_report") {
            current.counseling_report_record = detail;
        }
        if (row.record_type === "discipline_record") {
            current.discipline_record_record = detail;
        }
        if (row.record_type === "activity_participation_record") {
            current.activity_participation_record_record = detail;
        }
        detailMap.set(Number(row.student_id), current);
    });
    return detailMap;
}
async function getStudentFilters() {
    const studentsTable = await getStudentsTable();
    if (!studentsTable) {
        return {
            programs: [],
            years: [],
            activeStudents: 0,
            onHoldStudents: 0
        };
    }
    const [programs, years, activeStudents, onHoldStudents] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select distinct program from ${studentsTable} where coalesce(program, '') <> '' order by program`),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select distinct year_level from ${studentsTable} where coalesce(year_level, '') <> '' order by year_level`),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${studentsTable} where status = 'Active'`),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${studentsTable} where status = 'On Hold'`)
    ]);
    return {
        programs: programs.map((row)=>row.program),
        years: years.map((row)=>row.year_level),
        activeStudents: Number(activeStudents ?? 0),
        onHoldStudents: Number(onHoldStudents ?? 0)
    };
}
async function getNextStudentNumber() {
    const studentsTable = await getStudentsTable();
    const currentYear = new Date().getFullYear();
    if (!studentsTable) {
        return `${currentYear}-0001`;
    }
    const latest = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryOne"])(`select student_no
     from ${studentsTable}
     where student_no ~ $1
     order by student_no desc
     limit 1`, [
        `^${currentYear}-[0-9]+$`
    ]);
    if (!latest?.student_no) {
        return `${currentYear}-0001`;
    }
    const match = latest.student_no.match(/^(\d{4})-(\d+)$/);
    if (!match) {
        return `${currentYear}-0001`;
    }
    const nextNumber = String(Number(match[2]) + 1).padStart(Math.max(match[2].length, 4), "0");
    return `${match[1]}-${nextNumber}`;
}
async function listInstructors(search = "") {
    const instructorsTable = await getInstructorsTable();
    if (!instructorsTable) {
        return [];
    }
    const baseRows = search.trim() ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select id, employee_no, first_name, last_name, department
       from ${instructorsTable}
       where employee_no ilike $1 or first_name ilike $1 or last_name ilike $1 or department ilike $1
       order by last_name, first_name`, [
        `%${search.trim()}%`
    ]) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select id, employee_no, first_name, last_name, department from ${instructorsTable} order by last_name, first_name`);
    if (baseRows.length === 0) {
        return baseRows;
    }
    const assignmentsTable = await getInstructorAssignmentsTable();
    const classesTable = await getClassesTable();
    const employeeNos = baseRows.map((row)=>row.employee_no).filter(Boolean);
    const assignmentMap = new Map();
    if (assignmentsTable && classesTable && employeeNos.length > 0) {
        const assignments = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select assignments.instructor_employee_no, classes.id as class_id, classes.class_code, classes.title
       from ${assignmentsTable} as assignments
       join ${classesTable} as classes on classes.id = assignments.class_id
       where assignments.instructor_employee_no = any($1)
       order by classes.class_code`, [
            employeeNos
        ]);
        assignments.forEach((assignment)=>{
            const current = assignmentMap.get(assignment.instructor_employee_no) ?? [];
            current.push({
                class_id: Number(assignment.class_id),
                class_code: assignment.class_code,
                title: assignment.title
            });
            assignmentMap.set(assignment.instructor_employee_no, current);
        });
    }
    return baseRows.map((row)=>({
            ...row,
            assigned_classes: assignmentMap.get(row.employee_no) ?? []
        }));
}
async function listClasses(course = "") {
    const classesTable = await getClassesTable();
    const schedulesTable = await getSchedulesTable();
    if (!classesTable || !schedulesTable) {
        return [];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select classes.id, classes.class_code, classes.title, classes.course, classes.units,
            schedules.day, schedules.time, schedules.room
     from ${classesTable} as classes
     left join ${schedulesTable} as schedules on schedules.class_id = classes.id
     ${course.trim() ? "where classes.course = $1" : ""}
     order by classes.class_code`, course.trim() ? [
        course.trim()
    ] : []);
}
async function getClassFilters() {
    const schedulesTable = await getSchedulesTable();
    const classesTable = await getClassesTable();
    if (!schedulesTable || !classesTable) {
        return {
            days: [],
            times: [],
            rooms: [],
            courses: []
        };
    }
    const [days, times, rooms, courses] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select distinct day from ${schedulesTable} where coalesce(day, '') <> '' order by day`),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select distinct time from ${schedulesTable} where coalesce(time, '') <> '' order by time`),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select distinct room from ${schedulesTable} where coalesce(room, '') <> '' order by room`),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select distinct course from ${classesTable} where coalesce(course, '') <> '' order by course`)
    ]);
    return {
        days: days.map((row)=>row.day),
        times: times.map((row)=>row.time),
        rooms: rooms.map((row)=>row.room),
        courses: courses.map((row)=>row.course)
    };
}
async function listSchedules(search = "", day = "", room = "") {
    const schedulesTable = await getSchedulesTable();
    const classesTable = await getClassesTable();
    if (!schedulesTable || !classesTable) {
        return [];
    }
    const conditions = [];
    const params = [];
    if (search.trim()) {
        params.push(`%${search.trim()}%`);
        conditions.push(`(classes.class_code ilike $${params.length} or classes.title ilike $${params.length} or schedules.room ilike $${params.length})`);
    }
    if (day.trim()) {
        params.push(day.trim());
        conditions.push(`schedules.day = $${params.length}`);
    }
    if (room.trim()) {
        params.push(room.trim());
        conditions.push(`schedules.room = $${params.length}`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select schedules.id, classes.id as class_id, classes.class_code, classes.title, classes.course,
            schedules.day, schedules.time, schedules.room
     from ${schedulesTable} as schedules
     join ${classesTable} as classes on schedules.class_id = classes.id
     ${conditions.length ? `where ${conditions.join(" and ")}` : ""}
     order by schedules.created_at desc`, params);
}
async function getClassRoster(classId) {
    const classesTable = await getClassesTable();
    const schedulesTable = await getSchedulesTable();
    const enrollmentsTable = await getEnrollmentsTable();
    const studentsTable = await getStudentsTable();
    const gradesTable = await getGradesTable();
    if (!classesTable || !schedulesTable || !enrollmentsTable || !studentsTable || !gradesTable) {
        return {
            classInfo: null,
            roster: []
        };
    }
    const classInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryOne"])(`select classes.id, classes.class_code, classes.title, classes.course, classes.units,
            schedules.day, schedules.time, schedules.room
     from ${classesTable} as classes
     left join ${schedulesTable} as schedules on schedules.class_id = classes.id
     where classes.id = $1
     limit 1`, [
        classId
    ]);
    const roster = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select enrollments.id as enrollment_id, enrollments.status as enrollment_status,
            students.id as student_id, students.student_no, students.first_name, students.last_name, students.program, students.year_level,
            grades.id as grade_id, grades.grade, grades.remarks
     from ${enrollmentsTable} as enrollments
     join ${studentsTable} as students on students.id = enrollments.student_id
     left join ${gradesTable} as grades on grades.student_id = enrollments.student_id and grades.class_id = enrollments.class_id
     where enrollments.class_id = $1
     order by students.last_name, students.first_name`, [
        classId
    ]);
    return {
        classInfo,
        roster
    };
}
async function listClassListSummary(search = "") {
    const classesTable = await getClassesTable();
    const enrollmentsTable = await getEnrollmentsTable();
    const classListsTable = await getClassListsTable();
    const schedulesTable = await getSchedulesTable();
    if (!classesTable || !enrollmentsTable) {
        return [];
    }
    const sourceTable = classListsTable ? `${classListsTable} as class_lists` : `${classesTable} as class_lists`;
    const classJoin = classListsTable ? "class_lists.class_id" : "class_lists.id";
    const params = search.trim() ? [
        `%${search.trim()}%`
    ] : [];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select classes.id,
            classes.class_code,
            classes.title,
            classes.course,
            schedules.day,
            schedules.time,
            schedules.room,
            sum(case when enrollments.status = 'Enrolled' then 1 else 0 end) as enrolled_students,
            count(enrollments.id) as total_students
     from ${sourceTable}
     join ${classesTable} as classes on classes.id = ${classJoin}
     left join ${schedulesTable} as schedules on schedules.class_id = classes.id
     left join ${enrollmentsTable} as enrollments on classes.id = enrollments.class_id
     ${search.trim() ? "where classes.class_code ilike $1 or classes.title ilike $1" : ""}
     group by classes.id, classes.class_code, classes.title, classes.course, schedules.day, schedules.time, schedules.room
     order by classes.class_code`, params);
}
async function listAvailableClassesForClassLists() {
    const classesTable = await getClassesTable();
    const classListsTable = await getClassListsTable();
    if (!classesTable) {
        return [];
    }
    if (!classListsTable) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select id, class_code, title
       from ${classesTable}
       order by class_code`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select classes.id, classes.class_code, classes.title
     from ${classesTable} as classes
     left join ${classListsTable} as class_lists on class_lists.class_id = classes.id
     where class_lists.class_id is null
     order by classes.class_code`);
}
async function listEnrollments() {
    const enrollmentsTable = await getEnrollmentsTable();
    const studentsTable = await getStudentsTable();
    const classesTable = await getClassesTable();
    if (!enrollmentsTable || !studentsTable || !classesTable) {
        return [];
    }
    const hasDeletedAt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "deleted_at");
    const hasCashierEnrollmentFeed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasTable"])("cashier_registrar_student_enrollment_feed");
    const hasAcademicYearColumn = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "academic_year");
    const hasSemesterColumn = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "semester");
    const hasTuitionFeeColumn = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "tuition_fee");
    const hasDownpaymentAmountColumn = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "downpayment_amount");
    const hasMedicalFeeColumn = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "medical_fee");
    const hasIdFeeColumn = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "id_fee");
    const cashierFeedJoin = hasCashierEnrollmentFeed ? `left join lateral (
         select feed.status
         from public.cashier_registrar_student_enrollment_feed as feed
         where feed.student_no = students.student_no
           and (
             ${hasAcademicYearColumn ? "coalesce(feed.academic_year, '') = '' or feed.academic_year = enrollments.academic_year" : "true"}
           )
           and (
             ${hasSemesterColumn ? "coalesce(feed.semester, '') = '' or feed.semester = enrollments.semester" : "true"}
           )
         order by coalesce(feed.action_at, feed.sent_at, feed.created_at) desc nulls last, feed.id desc
         limit 1
       ) as cashier_feed on true` : "";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select enrollments.id, enrollments.student_id, enrollments.class_id,
            ${hasCashierEnrollmentFeed ? "coalesce(nullif(cashier_feed.status, ''), enrollments.status)" : "enrollments.status"} as status,
            enrollments.created_at,
            ${hasAcademicYearColumn ? "enrollments.academic_year," : "'' as academic_year,"}
            ${hasSemesterColumn ? "enrollments.semester," : "'' as semester,"}
            ${hasTuitionFeeColumn ? "enrollments.tuition_fee," : "0::numeric as tuition_fee,"}
            ${hasDownpaymentAmountColumn ? "enrollments.downpayment_amount," : "0::numeric as downpayment_amount,"}
            ${hasMedicalFeeColumn ? "enrollments.medical_fee," : "0::numeric as medical_fee,"}
            ${hasIdFeeColumn ? "enrollments.id_fee," : "0::numeric as id_fee,"}
            students.student_no, students.first_name, students.last_name, students.program, students.year_level,
            classes.class_code, classes.title, classes.course
     from ${enrollmentsTable} as enrollments
     join ${studentsTable} as students on students.id = enrollments.student_id
     join ${classesTable} as classes on classes.id = enrollments.class_id
     ${cashierFeedJoin}
     ${hasDeletedAt ? "where enrollments.deleted_at is null" : ""}
     order by enrollments.created_at desc`);
}
async function listEnrollmentBin() {
    const enrollmentsTable = await getEnrollmentsTable();
    const studentsTable = await getStudentsTable();
    const classesTable = await getClassesTable();
    if (!enrollmentsTable || !studentsTable || !classesTable) {
        return [];
    }
    if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "deleted_at")) {
        return [];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select enrollments.id, enrollments.student_id, enrollments.class_id, enrollments.status, enrollments.created_at,
            enrollments.deleted_at,
            ${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "academic_year") ? "enrollments.academic_year," : "'' as academic_year,"}
            ${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "semester") ? "enrollments.semester," : "'' as semester,"}
            ${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "tuition_fee") ? "enrollments.tuition_fee," : "0::numeric as tuition_fee,"}
            ${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "downpayment_amount") ? "enrollments.downpayment_amount," : "0::numeric as downpayment_amount,"}
            ${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "medical_fee") ? "enrollments.medical_fee," : "0::numeric as medical_fee,"}
            ${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "id_fee") ? "enrollments.id_fee," : "0::numeric as id_fee,"}
            students.student_no, students.first_name, students.last_name,
            classes.class_code, classes.title
     from ${enrollmentsTable} as enrollments
     join ${studentsTable} as students on students.id = enrollments.student_id
     join ${classesTable} as classes on classes.id = enrollments.class_id
     where enrollments.deleted_at is not null
     order by enrollments.deleted_at desc nulls last, enrollments.created_at desc`);
}
async function listGrades() {
    const gradesTable = await getGradesTable();
    const studentsTable = await getStudentsTable();
    const classesTable = await getClassesTable();
    if (!gradesTable || !studentsTable || !classesTable) {
        return [];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select grades.id, grades.student_id, grades.class_id, ${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(gradesTable, "semester") ? "coalesce(grades.semester, '')" : "''"} as semester, grades.grade, grades.remarks,
            students.student_no, students.first_name, students.last_name,
            classes.class_code, classes.title,
            avg(
              case
                when trim(coalesce(grades.grade, '')) ~ '^[0-9]+(\.[0-9]+)?$'
                then cast(grades.grade as numeric)
                else null
              end
            ) over (partition by grades.student_id) as student_average
     from ${gradesTable} as grades
     join ${studentsTable} as students on students.id = grades.student_id
     join ${classesTable} as classes on classes.id = grades.class_id
     order by grades.created_at desc`);
}
async function listDocuments() {
    const documentsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("documents", "registrar_documents");
    const studentsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_students", "students");
    if (!documentsTable || !studentsTable) {
        return [];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select documents.id, documents.student_id, documents.doc_type, documents.status, documents.requested_at, documents.completed_at,
            students.student_no, students.first_name, students.last_name
     from ${documentsTable} as documents
     join ${studentsTable} as students on students.id = documents.student_id
     order by documents.requested_at desc`);
}
async function listUsers() {
    const usersTable = await getUsersTable();
    const rolesTable = await getRolesTable();
    if (!usersTable || !rolesTable) {
        return [];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select users.id, users.role_id, users.username, users.first_name, users.last_name, users.is_active, roles.name as role
     from ${usersTable} as users
     join ${rolesTable} as roles on roles.id = users.role_id
     order by users.created_at desc`);
}
async function listRoles() {
    const rolesTable = await getRolesTable();
    if (!rolesTable) {
        return [];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select id, name from ${rolesTable} order by name`);
}
async function listReports() {
    const reportsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("reports", "registrar_reports");
    if (!reportsTable) {
        return [];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select * from ${reportsTable} order by created_at desc`);
}
async function getReportMetrics() {
    const documentsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("documents", "registrar_documents");
    const usersTable = await getUsersTable();
    const studentsTable = await getStudentsTable();
    const classesTable = await getClassesTable();
    const enrollmentsTable = await getEnrollmentsTable();
    const gradesTable = await getGradesTable();
    const auditLogsTable = await getAuditLogsTable();
    const [users, students, classes, enrollments, grades, documents, logs] = await Promise.all([
        usersTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${usersTable}`) : Promise.resolve(0),
        studentsTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${studentsTable}`) : Promise.resolve(0),
        classesTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${classesTable}`) : Promise.resolve(0),
        enrollmentsTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${enrollmentsTable}`) : Promise.resolve(0),
        gradesTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${gradesTable}`) : Promise.resolve(0),
        documentsTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${documentsTable}`) : Promise.resolve(0),
        auditLogsTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${auditLogsTable}`) : Promise.resolve(0)
    ]);
    return {
        workflowStats: {
            "access-setup": Number(users ?? 0),
            "student-intake": Number(students ?? 0),
            "class-planning": Number(classes ?? 0),
            "enrollment-validation": Number(enrollments ?? 0),
            "grade-posting": Number(grades ?? 0),
            "completion-services": Number(documents ?? 0),
            "compliance-reports": Number(logs ?? 0)
        }
    };
}
async function listAcademicReports() {
    const reportsTable = await getAcademicReportsTable();
    if (!reportsTable) {
        return [];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select academic_reports.id,
            academic_reports.title,
            academic_reports.coverage,
            academic_reports.status,
            academic_reports.created_at,
            null::text as report_type,
            null::text as semester,
            null::text as authorization_status,
            null::text as output_format,
            null::numeric as gpa,
            null::bigint as student_id,
            null::text as student_no,
            null::text as first_name,
            null::text as last_name
     from ${reportsTable} as academic_reports
     order by academic_reports.created_at desc`);
}
async function listAuditLogs() {
    const auditLogsTable = await getAuditLogsTable();
    if (!auditLogsTable) {
        return [];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select audit_logs.id, audit_logs.created_at, audit_logs.action, audit_logs.module, audit_logs.details, users.username
     from ${auditLogsTable} as audit_logs
     left join admin_users as users on users.id = audit_logs.user_id
     order by audit_logs.created_at desc
     limit 100`);
}
async function listNotifications(limit = 6) {
    const notificationsTable = await getNotificationsTable();
    if (!notificationsTable) {
        return [];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select id, title, message, status, created_at
     from ${notificationsTable}
     order by created_at desc
     limit $1`, [
        limit
    ]);
}
async function getUnreadNotificationCount() {
    const notificationsTable = await getNotificationsTable();
    const count = notificationsTable ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${notificationsTable} where status = 'Unread'`) : 0;
    return Number(count ?? 0);
}
async function listIntegrationRecords(filters) {
    const integrationRecordsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("integration_records");
    const studentsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_students", "students");
    if (!integrationRecordsTable) {
        return [];
    }
    const clauses = [];
    const params = [];
    if (filters?.recordType?.trim()) {
        params.push(filters.recordType.trim());
        clauses.push(`${integrationRecordsTable}.record_type = $${params.length}`);
    }
    if (filters?.studentNo?.trim()) {
        params.push(filters.studentNo.trim());
        clauses.push(`students.student_no = $${params.length}`);
    }
    params.push(Number(filters?.limit ?? 20));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select ${integrationRecordsTable}.id, ${integrationRecordsTable}.record_type, ${integrationRecordsTable}.source_office,
            ${integrationRecordsTable}.reference_no, ${integrationRecordsTable}.external_status, ${integrationRecordsTable}.title,
            ${integrationRecordsTable}.notes, ${integrationRecordsTable}.received_at,
            ${studentsTable ? "students.student_no, students.first_name, students.last_name" : "null as student_no, null as first_name, null as last_name"}
     from ${integrationRecordsTable}
     ${studentsTable ? `left join ${studentsTable} as students on students.id = ${integrationRecordsTable}.student_id` : ""}
     ${clauses.length ? `where ${clauses.join(" and ")}` : ""}
     order by ${integrationRecordsTable}.received_at desc
     limit $${params.length}`, params);
}
async function getIntegrationSummary() {
    const manifest = await __turbopack_context__.A("[project]/lib/integration-catalog.ts [app-rsc] (ecmascript, async loader)").then(({ buildIntegrationManifest })=>buildIntegrationManifest());
    const integrationRecordsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("integration_records");
    if (!integrationRecordsTable) {
        return {
            incomingOffices: 0,
            outgoingFeeds: manifest.outgoing.length,
            recordsReceived: 0
        };
    }
    const [incoming, outgoing, received] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(distinct source_office) from ${integrationRecordsTable}`),
        Promise.resolve(manifest.outgoing.length),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${integrationRecordsTable}`)
    ]);
    return {
        incomingOffices: Number(incoming ?? 0),
        outgoingFeeds: Number(outgoing),
        recordsReceived: Number(received ?? 0)
    };
}
async function getUserProfile(userId) {
    const account = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryOne"])(`select id, username, email, full_name, role, is_super_admin
     from admin_users
     where id = $1
     limit 1`, [
        userId
    ]);
    if (account) {
        const name = splitFullName(account.full_name ?? "");
        return {
            id: account.id,
            username: account.username,
            first_name: name.firstName,
            last_name: name.lastName,
            display_name: account.full_name ?? account.username,
            profile_photo: "",
            profile_title: account.role,
            profile_bio: account.email ?? "",
            profile_accent: normalizeRole(account.role, Boolean(Number(account.is_super_admin ?? 0))) === "admin" ? "#8B1E3F" : "#2F6BD9",
            role: normalizeRole(account.role, Boolean(Number(account.is_super_admin ?? 0)))
        };
    }
    const usersTable = await getUsersTable();
    const rolesTable = await getRolesTable();
    if (!usersTable || !rolesTable) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryOne"])(`select users.id, users.username, users.first_name, users.last_name, users.display_name,
            users.profile_photo, users.profile_title, users.profile_bio, users.profile_accent,
            roles.name as role
     from ${usersTable} as users
     join ${rolesTable} as roles on roles.id = users.role_id
     where users.id = $1
     limit 1`, [
        userId
    ]);
}
async function listStaffDirectory(search = "") {
    const usersTable = await getUsersTable();
    const rolesTable = await getRolesTable();
    if (!usersTable || !rolesTable) {
        return [];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select users.id, users.first_name, users.last_name, users.username, users.is_active, roles.name as role
     from ${usersTable} as users
     join ${rolesTable} as roles on roles.id = users.role_id
     ${search.trim() ? "where users.username ilike $1 or users.first_name ilike $1 or users.last_name ilike $1 or roles.name ilike $1" : ""}
     order by roles.name, users.last_name, users.first_name`, search.trim() ? [
        `%${search.trim()}%`
    ] : []);
}
async function getStaffDirectoryMetrics() {
    const usersTable = await getUsersTable();
    const rolesTable = await getRolesTable();
    if (!usersTable || !rolesTable) {
        return {
            activeCount: 0,
            adminCount: 0
        };
    }
    const [activeCount, adminCount] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${usersTable} where is_active = true`),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${usersTable} as users join ${rolesTable} as roles on users.role_id = roles.id where lower(roles.name) = 'admin'`)
    ]);
    return {
        activeCount: Number(activeCount ?? 0),
        adminCount: Number(adminCount ?? 0)
    };
}
async function getExportRows(workflowKey = "") {
    const documentsTable = workflowKey === "completion-services" ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("documents", "registrar_documents") : null;
    const reportsTable = workflowKey === "" ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("reports", "registrar_reports") : null;
    const studentsTable = workflowKey === "completion-services" ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_students", "students") : null;
    const enrollmentsTable = workflowKey === "enrollment-validation" ? await getEnrollmentsTable() : null;
    const classesTable = workflowKey === "enrollment-validation" || workflowKey === "grade-posting" || workflowKey === "class-planning" ? await getClassesTable() : null;
    const gradesTable = workflowKey === "enrollment-validation" || workflowKey === "grade-posting" ? await getGradesTable() : null;
    const exportStudentsTable = workflowKey === "enrollment-validation" || workflowKey === "grade-posting" ? await getStudentsTable() : studentsTable;
    const usersTable = workflowKey === "access-setup" || workflowKey === "compliance-reports" ? await getUsersTable() : null;
    const rolesTable = workflowKey === "access-setup" ? await getRolesTable() : null;
    const auditLogsTable = workflowKey === "compliance-reports" ? await getAuditLogsTable() : null;
    switch(workflowKey){
        case "access-setup":
            return {
                title: workflowTemplates[workflowKey].title,
                columns: [
                    "Username",
                    "Name",
                    "Role",
                    "Status",
                    "Created"
                ],
                rows: usersTable && rolesTable ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select users.username,
                  concat(users.first_name, ' ', users.last_name) as full_name,
                  roles.name as role,
                  case when users.is_active = true then 'Active' else 'Inactive' end as account_status,
                  users.created_at
           from ${usersTable} as users
           join ${rolesTable} as roles on users.role_id = roles.id
           order by roles.name, users.last_name, users.first_name`) : []
            };
        case "student-intake":
            return {
                title: workflowTemplates[workflowKey].title,
                columns: [
                    "Student No",
                    "Name",
                    "Program",
                    "Year",
                    "Status"
                ],
                rows: exportStudentsTable ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select student_no,
                      concat(last_name, ', ', first_name) as full_name,
                      program,
                      year_level,
                      status
               from ${exportStudentsTable}
               order by last_name, first_name`) : []
            };
        case "class-planning":
            return {
                title: workflowTemplates[workflowKey].title,
                columns: [
                    "Subject Code",
                    "Subject Title",
                    "Course",
                    "Units",
                    "Created"
                ],
                rows: classesTable ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select class_code, title, course, units, created_at from ${classesTable} order by class_code`) : []
            };
        case "enrollment-validation":
            return {
                title: workflowTemplates[workflowKey].title,
                columns: [
                    "Student",
                    "Subject",
                    "Status",
                    "Semester",
                    "Created"
                ],
                rows: enrollmentsTable && exportStudentsTable && classesTable ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select concat(students.student_no, ' - ', students.last_name, ', ', students.first_name) as student_label,
                  concat(classes.class_code, ' - ', classes.title) as subject_label,
                  enrollments.status,
                  '' as semester_label,
                  enrollments.created_at
           from ${enrollmentsTable} as enrollments
           join ${exportStudentsTable} as students on students.id = enrollments.student_id
           join ${classesTable} as classes on classes.id = enrollments.class_id
           ${gradesTable ? `left join ${gradesTable} as grades on grades.student_id = enrollments.student_id and grades.class_id = enrollments.class_id` : ""}
           order by enrollments.created_at desc`) : []
            };
        case "grade-posting":
            return {
                title: workflowTemplates[workflowKey].title,
                columns: [
                    "Student",
                    "Semester",
                    "Subject",
                    "Grade",
                    "Remarks"
                ],
                rows: gradesTable && exportStudentsTable && classesTable ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select concat(students.student_no, ' - ', students.last_name, ', ', students.first_name) as student_label,
                  '' as semester,
                  concat(classes.class_code, ' - ', classes.title) as subject_label,
                  grades.grade,
                  grades.remarks
           from ${gradesTable} as grades
           join ${exportStudentsTable} as students on students.id = grades.student_id
           join ${classesTable} as classes on classes.id = grades.class_id
           order by students.last_name, students.first_name, classes.class_code`) : []
            };
        case "completion-services":
            return {
                title: workflowTemplates[workflowKey].title,
                columns: [
                    "Student",
                    "Document Type",
                    "Status",
                    "Requested",
                    "Completed"
                ],
                rows: documentsTable && studentsTable ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select concat(students.student_no, ' - ', students.last_name, ', ', students.first_name) as student_label,
                      documents.doc_type,
                      documents.status,
                      documents.requested_at,
                      documents.completed_at
               from ${documentsTable} as documents
               join ${studentsTable} as students on students.id = documents.student_id
               order by documents.requested_at desc`) : []
            };
        case "compliance-reports":
            return {
                title: workflowTemplates[workflowKey].title,
                columns: [
                    "User",
                    "Action",
                    "Module",
                    "Details",
                    "Created"
                ],
                rows: auditLogsTable ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select coalesce(nullif(trim(users.full_name), ''), nullif(trim(users.username), ''), 'System') as user_name,
                  audit_logs.action,
                  audit_logs.module,
                  audit_logs.details,
                  audit_logs.created_at
           from ${auditLogsTable} as audit_logs
           left join admin_users as users on users.id = audit_logs.user_id
           order by audit_logs.created_at desc`) : []
            };
        default:
            return {
                title: "Registrar Reports Export",
                columns: [
                    "Title",
                    "Department",
                    "Status",
                    "Due Date",
                    "Created"
                ],
                rows: reportsTable ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`select title, department, status, due_date, created_at from ${reportsTable} order by created_at desc`) : []
            };
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/mutations.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "assignInstructorClass",
    ()=>assignInstructorClass,
    "createAcademicReport",
    ()=>createAcademicReport,
    "createClassList",
    ()=>createClassList,
    "createClassSchedule",
    ()=>createClassSchedule,
    "createDocumentRequest",
    ()=>createDocumentRequest,
    "createEnrollment",
    ()=>createEnrollment,
    "createGrade",
    ()=>createGrade,
    "createInstructor",
    ()=>createInstructor,
    "createIntegrationRecord",
    ()=>createIntegrationRecord,
    "createReport",
    ()=>createReport,
    "createStudent",
    ()=>createStudent,
    "createUserAccount",
    ()=>createUserAccount,
    "createWorkflowReport",
    ()=>createWorkflowReport,
    "deleteAcademicReport",
    ()=>deleteAcademicReport,
    "deleteClassSchedule",
    ()=>deleteClassSchedule,
    "deleteDocumentRequest",
    ()=>deleteDocumentRequest,
    "deleteEnrollment",
    ()=>deleteEnrollment,
    "deleteGrade",
    ()=>deleteGrade,
    "deleteInstructor",
    ()=>deleteInstructor,
    "deleteReport",
    ()=>deleteReport,
    "deleteStudent",
    ()=>deleteStudent,
    "deleteUserAccount",
    ()=>deleteUserAccount,
    "markAllNotificationsRead",
    ()=>markAllNotificationsRead,
    "markNotificationRead",
    ()=>markNotificationRead,
    "purgeEnrollment",
    ()=>purgeEnrollment,
    "resetUserPassword",
    ()=>resetUserPassword,
    "restoreEnrollment",
    ()=>restoreEnrollment,
    "toggleUserAccount",
    ()=>toggleUserAccount,
    "unassignInstructorClass",
    ()=>unassignInstructorClass,
    "updateAcademicReport",
    ()=>updateAcademicReport,
    "updateClassSchedule",
    ()=>updateClassSchedule,
    "updateDocumentRequest",
    ()=>updateDocumentRequest,
    "updateEnrollment",
    ()=>updateEnrollment,
    "updateGrade",
    ()=>updateGrade,
    "updateInstructor",
    ()=>updateInstructor,
    "updateReport",
    ()=>updateReport,
    "updateStudent",
    ()=>updateStudent,
    "updateUserAccount",
    ()=>updateUserAccount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function requireDocumentsTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("documents", "registrar_documents");
    if (!tableName) {
        throw new Error("The documents table has not been created in this database yet.");
    }
    return tableName;
}
async function requireReportsTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("reports", "registrar_reports");
    if (!tableName) {
        throw new Error("The reports table has not been created in this database yet.");
    }
    return tableName;
}
async function requireGradesTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar.grades", "registrar_grades", "grades");
    if (!tableName) {
        throw new Error("The grades table has not been created in this database yet.");
    }
    return tableName;
}
async function requireClassesTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_classes", "classes");
    if (!tableName) {
        throw new Error("The classes table has not been created in this database yet.");
    }
    return tableName;
}
async function requireSchedulesTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_schedules", "schedules");
    if (!tableName) {
        throw new Error("The schedules table has not been created in this database yet.");
    }
    return tableName;
}
async function requireEnrollmentsTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar.enrollments", "registrar_enrollments", "enrollments");
    if (!tableName) {
        throw new Error("The enrollments table has not been created in this database yet.");
    }
    return tableName;
}
async function requireStudentsTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_students", "students");
    if (!tableName) {
        throw new Error("The students table has not been created in this database yet.");
    }
    return tableName;
}
async function requireUsersTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_users", "users");
    if (!tableName) {
        throw new Error("The users table has not been created in this database yet.");
    }
    return tableName;
}
async function requireRolesTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_roles", "roles");
    if (!tableName) {
        throw new Error("The roles table has not been created in this database yet.");
    }
    return tableName;
}
async function requireAuditLogsTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_audit_logs", "audit_logs");
    if (!tableName) {
        throw new Error("The audit logs table has not been created in this database yet.");
    }
    return tableName;
}
async function requireNotificationsTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_notifications", "notifications");
    if (!tableName) {
        throw new Error("The notifications table has not been created in this database yet.");
    }
    return tableName;
}
async function requireAcademicReportsTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_academic_reports", "academic_reports");
    if (!tableName) {
        throw new Error("The academic reports table has not been created in this database yet.");
    }
    return tableName;
}
async function logAction(userId, action, moduleName, details) {
    try {
        const auditLogsTable = await requireAuditLogsTable();
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${auditLogsTable} (user_id, action, module, details, created_at)
       values ($1, $2, $3, $4, current_timestamp)`, [
            userId,
            action,
            moduleName,
            details
        ]);
    } catch  {
    // Non-blocking.
    }
}
async function createNotification(title, message) {
    try {
        const notificationsTable = await requireNotificationsTable();
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${notificationsTable} (title, message, status, created_at)
       values ($1, $2, 'Unread', current_timestamp)`, [
            title,
            message
        ]);
    } catch  {
    // Non-blocking.
    }
}
async function computeGpa(studentId) {
    const gradesTable = await requireGradesTable();
    const classesTable = await requireClassesTable();
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`select grades.grade, classes.units
     from ${gradesTable} as grades
     join ${classesTable} as classes on grades.class_id = classes.id
     where grades.student_id = $1`, [
        studentId
    ]);
    let weightedTotal = 0;
    let unitTotal = 0;
    for (const row of rows.rows){
        const grade = String(row.grade ?? "").trim();
        const units = Number(row.units ?? 0);
        if (!grade || Number.isNaN(Number(grade)) || units <= 0) {
            continue;
        }
        weightedTotal += Number(grade) * units;
        unitTotal += units;
    }
    return unitTotal > 0 ? Number((weightedTotal / unitTotal).toFixed(2)) : null;
}
async function createStudent(input) {
    const studentsTable = await requireStudentsTable();
    const exists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryOne"])(`select id from ${studentsTable} where student_no = $1`, [
        input.studentNo
    ]);
    if (exists) {
        throw new Error("Student No already exists.");
    }
    const optionalColumns = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(studentsTable, "middle_name"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(studentsTable, "birth_date"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(studentsTable, "mother_name"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(studentsTable, "father_name"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(studentsTable, "guardian_name"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(studentsTable, "address"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(studentsTable, "email"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(studentsTable, "phone")
    ]);
    const columns = [
        "student_no",
        "first_name",
        "last_name",
        "program",
        "year_level",
        "status",
        "created_at"
    ];
    const values = [
        input.studentNo,
        input.firstName,
        input.lastName,
        input.program ?? "",
        input.yearLevel ?? "",
        input.status ?? "Active"
    ];
    const placeholders = columns.map((_, index)=>`$${index + 1}`);
    placeholders[columns.length - 1] = "current_timestamp";
    const optionalEntries = [
        {
            enabled: optionalColumns[0],
            column: "middle_name",
            value: input.middleName ?? ""
        },
        {
            enabled: optionalColumns[1],
            column: "birth_date",
            value: input.birthDate || null
        },
        {
            enabled: optionalColumns[2],
            column: "mother_name",
            value: input.motherName ?? ""
        },
        {
            enabled: optionalColumns[3],
            column: "father_name",
            value: input.fatherName ?? ""
        },
        {
            enabled: optionalColumns[4],
            column: "guardian_name",
            value: input.guardianName ?? ""
        },
        {
            enabled: optionalColumns[5],
            column: "address",
            value: input.address ?? ""
        },
        {
            enabled: optionalColumns[6],
            column: "email",
            value: input.email ?? ""
        },
        {
            enabled: optionalColumns[7],
            column: "phone",
            value: input.phone ?? ""
        }
    ];
    optionalEntries.forEach((entry)=>{
        if (!entry.enabled) return;
        columns.splice(columns.length - 1, 0, entry.column);
        values.push(entry.value);
    });
    const dynamicPlaceholders = columns.map((column, index)=>column === "created_at" ? "current_timestamp" : `$${values.length >= index + 1 ? index + 1 : values.length}`);
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${studentsTable} (${columns.join(", ")})
     values (${dynamicPlaceholders.join(", ")})
     returning id`, values);
    await logAction(input.actorId, "Create", "Student Records", `Added student ${input.studentNo}`);
    return result.rows[0]?.id;
}
async function updateStudent(input) {
    const studentsTable = await requireStudentsTable();
    const exists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryOne"])(`select id from ${studentsTable} where student_no = $1 and id <> $2`, [
        input.studentNo,
        input.id
    ]);
    if (exists) {
        throw new Error("Student No already exists.");
    }
    const setClauses = [
        "student_no = $1",
        "first_name = $2",
        "last_name = $3",
        "program = $4",
        "year_level = $5",
        "status = $6"
    ];
    const values = [
        input.studentNo,
        input.firstName,
        input.lastName,
        input.program ?? "",
        input.yearLevel ?? "",
        input.status ?? "Active"
    ];
    const optionalEntries = [
        {
            column: "middle_name",
            value: input.middleName ?? ""
        },
        {
            column: "birth_date",
            value: input.birthDate || null
        },
        {
            column: "mother_name",
            value: input.motherName ?? ""
        },
        {
            column: "father_name",
            value: input.fatherName ?? ""
        },
        {
            column: "guardian_name",
            value: input.guardianName ?? ""
        },
        {
            column: "address",
            value: input.address ?? ""
        },
        {
            column: "email",
            value: input.email ?? ""
        },
        {
            column: "phone",
            value: input.phone ?? ""
        }
    ];
    for (const entry of optionalEntries){
        if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(studentsTable, entry.column)) {
            values.push(entry.value);
            setClauses.push(`${entry.column} = $${values.length}`);
        }
    }
    values.push(input.id);
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`update ${studentsTable}
     set ${setClauses.join(", ")}
     where id = $${values.length}`, values);
    await logAction(input.actorId, "Update", "Student Records", `Updated student ID ${input.id}`);
}
async function deleteStudent(input) {
    const studentsTable = await requireStudentsTable();
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`delete from ${studentsTable} where id = $1`, [
        input.id
    ]);
    await logAction(input.actorId, "Delete", "Student Records", `Deleted student ID ${input.id}`);
}
async function createInstructor(input) {
    const instructorsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("hr_instructors", "hr.instructors", "registrar_instructors", "registrar.instructors", "instructors");
    if (!instructorsTable) throw new Error("The instructors table has not been created in this database yet.");
    const exists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryOne"])(`select id from ${instructorsTable} where employee_no = $1`, [
        input.employeeNo
    ]);
    if (exists) {
        throw new Error("Employee No already exists.");
    }
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${instructorsTable} (employee_no, first_name, last_name, department, created_at)
     values ($1, $2, $3, $4, current_timestamp)
     returning id`, [
        input.employeeNo,
        input.firstName,
        input.lastName,
        input.department ?? ""
    ]);
    await logAction(input.actorId, "Create", "Instructors", `Added instructor ${input.employeeNo}`);
    return result.rows[0]?.id;
}
async function updateInstructor(input) {
    const instructorsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("hr_instructors", "hr.instructors", "registrar_instructors", "registrar.instructors", "instructors");
    if (!instructorsTable) throw new Error("The instructors table has not been created in this database yet.");
    const exists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryOne"])(`select id from ${instructorsTable} where employee_no = $1 and id <> $2`, [
        input.employeeNo,
        input.id
    ]);
    if (exists) {
        throw new Error("Employee No already exists.");
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`update ${instructorsTable} set employee_no = $1, first_name = $2, last_name = $3, department = $4 where id = $5`, [
        input.employeeNo,
        input.firstName,
        input.lastName,
        input.department ?? "",
        input.id
    ]);
    await logAction(input.actorId, "Update", "Instructors", `Updated instructor ID ${input.id}`);
}
async function deleteInstructor(input) {
    const instructorsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("hr_instructors", "hr.instructors", "registrar_instructors", "registrar.instructors", "instructors");
    if (!instructorsTable) throw new Error("The instructors table has not been created in this database yet.");
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`delete from ${instructorsTable} where id = $1`, [
        input.id
    ]);
    await logAction(input.actorId, "Delete", "Instructors", `Deleted instructor ID ${input.id}`);
}
async function assignInstructorClass(input) {
    const assignmentsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_instructor_class_assignments", "registrar.instructor_class_assignments", "instructor_class_assignments");
    if (!assignmentsTable) {
        throw new Error("The instructor class assignments table has not been created in this database yet.");
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${assignmentsTable} (instructor_employee_no, class_id, assigned_at, assigned_by)
     values ($1, $2, current_timestamp, $3)
     on conflict (instructor_employee_no, class_id)
     do update set assigned_at = current_timestamp, assigned_by = excluded.assigned_by`, [
        input.employeeNo,
        input.classId,
        input.actorId
    ]);
    await logAction(input.actorId, "Assign", "Instructors", `Assigned class ID ${input.classId} to instructor ${input.employeeNo}`);
}
async function unassignInstructorClass(input) {
    const assignmentsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_instructor_class_assignments", "registrar.instructor_class_assignments", "instructor_class_assignments");
    if (!assignmentsTable) {
        throw new Error("The instructor class assignments table has not been created in this database yet.");
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`delete from ${assignmentsTable}
     where instructor_employee_no = $1 and class_id = $2`, [
        input.employeeNo,
        input.classId
    ]);
    await logAction(input.actorId, "Unassign", "Instructors", `Removed class ID ${input.classId} from instructor ${input.employeeNo}`);
}
async function createClassSchedule(input) {
    const classesTable = await requireClassesTable();
    const schedulesTable = await requireSchedulesTable();
    const client = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].connect();
    try {
        await client.query("begin");
        const classResult = await client.query(`insert into ${classesTable} (class_code, title, course, units, created_at)
       values ($1, $2, $3, $4, current_timestamp)
       returning id`, [
            input.classCode,
            input.title,
            input.course ?? "",
            input.units ?? 0
        ]);
        const classId = classResult.rows[0]?.id;
        await client.query(`insert into ${schedulesTable} (class_id, day, time, room, created_at)
       values ($1, $2, $3, $4, current_timestamp)`, [
            classId,
            input.day ?? "",
            input.time ?? "",
            input.room ?? ""
        ]);
        await client.query("commit");
        await logAction(input.actorId, "Create", "Classes & Schedules", `Added class ${input.classCode}`);
        return classId;
    } catch (error) {
        await client.query("rollback");
        throw error;
    } finally{
        client.release();
    }
}
async function updateClassSchedule(input) {
    const classesTable = await requireClassesTable();
    const schedulesTable = await requireSchedulesTable();
    const client = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].connect();
    try {
        await client.query("begin");
        await client.query(`update ${classesTable} set class_code = $1, title = $2, course = $3, units = $4 where id = $5`, [
            input.classCode,
            input.title,
            input.course ?? "",
            input.units ?? 0,
            input.classId
        ]);
        const existingSchedule = await client.query(`select id from ${schedulesTable} where class_id = $1 limit 1`, [
            input.classId
        ]);
        if (existingSchedule.rows[0]?.id) {
            await client.query(`update ${schedulesTable} set day = $1, time = $2, room = $3 where id = $4`, [
                input.day ?? "",
                input.time ?? "",
                input.room ?? "",
                existingSchedule.rows[0].id
            ]);
        } else {
            await client.query(`insert into ${schedulesTable} (class_id, day, time, room, created_at)
         values ($1, $2, $3, $4, current_timestamp)`, [
                input.classId,
                input.day ?? "",
                input.time ?? "",
                input.room ?? ""
            ]);
        }
        await client.query("commit");
        await logAction(input.actorId, "Update", "Classes & Schedules", `Updated class ID ${input.classId}`);
    } catch (error) {
        await client.query("rollback");
        throw error;
    } finally{
        client.release();
    }
}
async function deleteClassSchedule(input) {
    const classesTable = await requireClassesTable();
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`delete from ${classesTable} where id = $1`, [
        input.classId
    ]);
    await logAction(input.actorId, "Delete", "Classes & Schedules", `Deleted class ID ${input.classId}`);
}
async function createClassList(input) {
    const classListsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_class_lists", "registrar.class_lists", "class_lists");
    if (!classListsTable) {
        throw new Error("The class lists table has not been created in this database yet.");
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${classListsTable} (class_id, published_at, published_by)
     values ($1, current_timestamp, $2)
     on conflict (class_id) do nothing`, [
        input.classId,
        input.actorId
    ]);
    await logAction(input.actorId, "Create", "Class Lists", `Published class list for class ID ${input.classId}`);
}
async function createEnrollment(input) {
    const enrollmentsTable = await requireEnrollmentsTable();
    const optionalColumns = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "academic_year"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "semester"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "tuition_fee"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "downpayment_amount"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "medical_fee"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "id_fee")
    ]);
    const columns = [
        "student_id",
        "class_id",
        "status",
        "created_at"
    ];
    const values = [
        input.studentId,
        input.classId,
        input.status ?? "Enrolled"
    ];
    const optionalEntries = [
        {
            enabled: optionalColumns[0],
            column: "academic_year",
            value: input.academicYear ?? ""
        },
        {
            enabled: optionalColumns[1],
            column: "semester",
            value: input.semester ?? ""
        },
        {
            enabled: optionalColumns[2],
            column: "tuition_fee",
            value: input.tuitionFee ?? 5000
        },
        {
            enabled: optionalColumns[3],
            column: "downpayment_amount",
            value: input.downpaymentAmount ?? 0
        },
        {
            enabled: optionalColumns[4],
            column: "medical_fee",
            value: input.medicalFee ?? 0
        },
        {
            enabled: optionalColumns[5],
            column: "id_fee",
            value: input.idFee ?? 0
        }
    ];
    optionalEntries.forEach((entry)=>{
        if (!entry.enabled) return;
        columns.splice(columns.length - 1, 0, entry.column);
        values.push(entry.value);
    });
    const placeholders = columns.map((column, index)=>column === "created_at" ? "current_timestamp" : `$${index + 1}`);
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${enrollmentsTable} (${columns.join(", ")})
     values (${placeholders.join(", ")})
     returning id`, values);
    await logAction(input.actorId, "Create", "Enrollment", `Enrolled student ID ${input.studentId} to class ID ${input.classId}`);
    return result.rows[0]?.id;
}
async function updateEnrollment(input) {
    const enrollmentsTable = await requireEnrollmentsTable();
    const setClauses = [
        "status = $1"
    ];
    const values = [
        input.status
    ];
    const optionalEntries = [
        {
            column: "academic_year",
            value: input.academicYear ?? ""
        },
        {
            column: "semester",
            value: input.semester ?? ""
        },
        {
            column: "tuition_fee",
            value: input.tuitionFee ?? 5000
        },
        {
            column: "downpayment_amount",
            value: input.downpaymentAmount ?? 0
        },
        {
            column: "medical_fee",
            value: input.medicalFee ?? 0
        },
        {
            column: "id_fee",
            value: input.idFee ?? 0
        }
    ];
    for (const entry of optionalEntries){
        if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, entry.column)) {
            values.push(entry.value);
            setClauses.push(`${entry.column} = $${values.length}`);
        }
    }
    values.push(input.id);
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`update ${enrollmentsTable} set ${setClauses.join(", ")} where id = $${values.length}`, values);
    await logAction(input.actorId, "Update", "Enrollment", `Updated enrollment ID ${input.id}`);
}
async function deleteEnrollment(input) {
    const enrollmentsTable = await requireEnrollmentsTable();
    const hasDeletedAt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "deleted_at");
    if (hasDeletedAt) {
        const hasDeletedBy = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "deleted_by");
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`update ${enrollmentsTable}
       set deleted_at = current_timestamp${hasDeletedBy ? ", deleted_by = $2" : ""}
       where id = $1`, hasDeletedBy ? [
            input.id,
            input.actorId
        ] : [
            input.id
        ]);
        await logAction(input.actorId, "Delete", "Enrollment", `Moved enrollment ID ${input.id} to bin`);
        return;
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`delete from ${enrollmentsTable} where id = $1`, [
        input.id
    ]);
    await logAction(input.actorId, "Delete", "Enrollment", `Deleted enrollment ID ${input.id}`);
}
async function restoreEnrollment(input) {
    const enrollmentsTable = await requireEnrollmentsTable();
    if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "deleted_at")) {
        throw new Error("Recycle bin is not available for enrollments in this database yet.");
    }
    const hasDeletedBy = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "deleted_by");
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`update ${enrollmentsTable}
     set deleted_at = null${hasDeletedBy ? ", deleted_by = null" : ""}
     where id = $1`, [
        input.id
    ]);
    await logAction(input.actorId, "Restore", "Enrollment", `Restored enrollment ID ${input.id} from bin`);
}
async function purgeEnrollment(input) {
    const enrollmentsTable = await requireEnrollmentsTable();
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`delete from ${enrollmentsTable} where id = $1`, [
        input.id
    ]);
    await logAction(input.actorId, "Delete", "Enrollment", `Permanently deleted enrollment ID ${input.id}`);
}
async function createGrade(input) {
    const gradesTable = await requireGradesTable();
    const hasSemester = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(gradesTable, "semester");
    const existing = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryOne"])(`select id
     from ${gradesTable}
     where student_id = $1 and class_id = $2
     order by created_at desc nulls last, id desc
     limit 1`, [
        input.studentId,
        input.classId
    ]);
    if (existing?.id) {
        if (hasSemester) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`update ${gradesTable}
         set semester = $1, grade = $2, remarks = $3
         where id = $4`, [
                input.semester ?? "",
                input.grade,
                input.remarks ?? "",
                existing.id
            ]);
        } else {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`update ${gradesTable}
         set grade = $1, remarks = $2
         where id = $3`, [
                input.grade,
                input.remarks ?? "",
                existing.id
            ]);
        }
        await logAction(input.actorId, "Update", "Grades", `Updated existing subject grade for student ID ${input.studentId} in class ID ${input.classId}`);
        return existing.id;
    }
    const result = hasSemester ? await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${gradesTable} (student_id, class_id, semester, grade, remarks, created_at)
         values ($1, $2, $3, $4, $5, current_timestamp)
         returning id`, [
        input.studentId,
        input.classId,
        input.semester ?? "",
        input.grade,
        input.remarks ?? ""
    ]) : await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${gradesTable} (student_id, class_id, grade, remarks, created_at)
         values ($1, $2, $3, $4, current_timestamp)
         returning id`, [
        input.studentId,
        input.classId,
        input.grade,
        input.remarks ?? ""
    ]);
    await logAction(input.actorId, "Create", "Grades", `Recorded subject grade for student ID ${input.studentId} in ${input.semester}`);
    return result.rows[0]?.id;
}
async function updateGrade(input) {
    const gradesTable = await requireGradesTable();
    const hasSemester = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(gradesTable, "semester");
    if (hasSemester) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`update ${gradesTable}
       set semester = $1, grade = $2, remarks = $3
       where id = $4`, [
            input.semester ?? "",
            input.grade,
            input.remarks ?? "",
            input.id
        ]);
    } else {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`update ${gradesTable} set grade = $1, remarks = $2 where id = $3`, [
            input.grade,
            input.remarks ?? "",
            input.id
        ]);
    }
    await logAction(input.actorId, "Update", "Grades", `Updated grade ID ${input.id}`);
}
async function deleteGrade(input) {
    const gradesTable = await requireGradesTable();
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`delete from ${gradesTable} where id = $1`, [
        input.id
    ]);
    await logAction(input.actorId, "Delete", "Grades", `Deleted grade ID ${input.id}`);
}
async function createDocumentRequest(input) {
    const documentsTable = await requireDocumentsTable();
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${documentsTable} (student_id, doc_type, status, requested_at)
     values ($1, $2, 'Pending', current_timestamp)
     returning id`, [
        input.studentId,
        input.docType
    ]);
    await createNotification("New Document Request", `A new document request was filed: ${input.docType}.`);
    await logAction(input.actorId, "Create", "Document Requests", `Requested ${input.docType}`);
    return result.rows[0]?.id;
}
async function updateDocumentRequest(input) {
    const documentsTable = await requireDocumentsTable();
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`update ${documentsTable}
     set status = $1,
         completed_at = case when $1 = 'Completed' then current_timestamp else completed_at end
     where id = $2`, [
        input.status,
        input.id
    ]);
    if (input.status.toLowerCase() === "completed") {
        await createNotification("Document Completed", `A document request was marked as Completed (ID ${input.id}).`);
    }
    await logAction(input.actorId, "Update", "Document Requests", `Updated document request ${input.id}`);
}
async function deleteDocumentRequest(input) {
    const documentsTable = await requireDocumentsTable();
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`delete from ${documentsTable} where id = $1`, [
        input.id
    ]);
    await logAction(input.actorId, "Delete", "Document Requests", `Deleted document request ${input.id}`);
}
async function createUserAccount(input) {
    const usersTable = await requireUsersTable();
    const exists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryOne"])(`select id from ${usersTable} where username = $1`, [
        input.username
    ]);
    if (exists) {
        throw new Error("Username already exists.");
    }
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${usersTable} (role_id, username, password_hash, first_name, last_name, is_active)
     values ($1, $2, $3, $4, $5, true)
     returning id`, [
        input.roleId,
        input.username,
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].hash(input.password, 10),
        input.firstName,
        input.lastName
    ]);
    await logAction(input.actorId, "Create", "Users", `Created user ${input.username}`);
    return result.rows[0]?.id;
}
async function updateUserAccount(input) {
    const usersTable = await requireUsersTable();
    const exists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryOne"])(`select id from ${usersTable} where username = $1 and id <> $2`, [
        input.username,
        input.id
    ]);
    if (exists) {
        throw new Error("Username already exists.");
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`update ${usersTable} set role_id = $1, username = $2, first_name = $3, last_name = $4 where id = $5`, [
        input.roleId,
        input.username,
        input.firstName,
        input.lastName,
        input.id
    ]);
    await logAction(input.actorId, "Update", "Users", `Updated user ID ${input.id}`);
}
async function toggleUserAccount(input) {
    if (input.id === input.actorId) {
        throw new Error("You cannot change your own active status.");
    }
    const usersTable = await requireUsersTable();
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`update ${usersTable} set is_active = $1 where id = $2`, [
        input.isActive,
        input.id
    ]);
    await logAction(input.actorId, "Update", "Users", `Set active=${input.isActive ? 1 : 0} for user ID ${input.id}`);
}
async function resetUserPassword(input) {
    const usersTable = await requireUsersTable();
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`update ${usersTable} set password_hash = $1 where id = $2`, [
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].hash(input.password, 10),
        input.id
    ]);
    await logAction(input.actorId, "Update", "Users", `Reset password for user ID ${input.id}`);
}
async function deleteUserAccount(input) {
    if (input.id === input.actorId) {
        throw new Error("You cannot delete your own account.");
    }
    const usersTable = await requireUsersTable();
    const rolesTable = await requireRolesTable();
    const target = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryOne"])(`select roles.name as role, users.is_active
     from ${usersTable} as users join ${rolesTable} as roles on users.role_id = roles.id
     where users.id = $1`, [
        input.id
    ]);
    if (!target) {
        throw new Error("User not found.");
    }
    if (target.role.toLowerCase() === "administrator" && target.is_active) {
        const admins = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*)
       from ${usersTable} as users join ${rolesTable} as roles on users.role_id = roles.id
       where lower(roles.name) = 'admin' and users.is_active = true`);
        if (Number(admins ?? 0) <= 1) {
            throw new Error("Cannot delete the last active administrator.");
        }
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`delete from ${usersTable} where id = $1`, [
        input.id
    ]);
    await logAction(input.actorId, "Delete", "Users", `Deleted user ID ${input.id}`);
}
async function createReport(input) {
    const reportsTable = await requireReportsTable();
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${reportsTable} (title, department, status, due_date, created_at)
     values ($1, $2, $3, $4, current_timestamp)
     returning id`, [
        input.title,
        input.department,
        input.status ?? "Pending",
        input.dueDate || null
    ]);
    await logAction(input.actorId, "Create", "Reports", `Generated report ${input.title}`);
    return result.rows[0]?.id;
}
async function createWorkflowReport(input) {
    const reportsTable = await requireReportsTable();
    const template = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["workflowTemplates"][input.workflowKey];
    if (!template) {
        throw new Error("Unknown registrar workflow report template.");
    }
    const title = input.title?.trim() || `${template.title} - ${new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric"
    })}`;
    const department = input.department?.trim() || template.department;
    const dueDate = input.dueDate?.trim() || new Date(Date.now() + template.dueInDays * 86400000).toISOString().slice(0, 10);
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${reportsTable} (title, department, status, due_date, created_at)
     values ($1, $2, $3, $4, current_timestamp)
     returning id`, [
        title,
        department,
        input.status ?? "Pending",
        dueDate
    ]);
    await logAction(input.actorId, "Create", "Reports", `Generated workflow report ${title}`);
    return result.rows[0]?.id;
}
async function updateReport(input) {
    const reportsTable = await requireReportsTable();
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`update ${reportsTable} set title = $1, department = $2, status = $3, due_date = $4 where id = $5`, [
        input.title,
        input.department,
        input.status ?? "Pending",
        input.dueDate || null,
        input.id
    ]);
    await logAction(input.actorId, "Update", "Reports", `Updated report ID ${input.id}`);
}
async function deleteReport(input) {
    const reportsTable = await requireReportsTable();
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`delete from ${reportsTable} where id = $1`, [
        input.id
    ]);
    await logAction(input.actorId, "Delete", "Reports", `Deleted report ID ${input.id}`);
}
async function createAcademicReport(input) {
    const academicReportsTable = await requireAcademicReportsTable();
    if (input.authorizationStatus !== "Approved") {
        throw new Error("Authorization must be approved before generating an academic report.");
    }
    const gpa = await computeGpa(input.studentId);
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${academicReportsTable}
      (title, coverage, status, created_at)
     values ($1, $2, $3, current_timestamp)
     returning id`, [
        input.title,
        input.coverage,
        input.status
    ]);
    await logAction(input.actorId, "Generate", "Academic Reports", `Generated ${input.reportType} for student ID ${input.studentId} with GPA ${gpa ?? "N/A"}`);
    return result.rows[0]?.id;
}
async function updateAcademicReport(input) {
    const academicReportsTable = await requireAcademicReportsTable();
    if (input.authorizationStatus !== "Approved") {
        throw new Error("Authorization must be approved before generating an academic report.");
    }
    const gpa = await computeGpa(input.studentId);
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`update ${academicReportsTable}
     set title = $1, coverage = $2, status = $3
     where id = $4`, [
        input.title,
        input.coverage,
        input.status,
        input.id
    ]);
    await logAction(input.actorId, "Update", "Academic Reports", `Updated academic report ID ${input.id} for student ID ${input.studentId}`);
}
async function deleteAcademicReport(input) {
    const academicReportsTable = await requireAcademicReportsTable();
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`delete from ${academicReportsTable} where id = $1`, [
        input.id
    ]);
    await logAction(input.actorId, "Delete", "Academic Reports", `Deleted academic report ID ${input.id}`);
}
async function createIntegrationRecord(input) {
    const integrationRecordsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("integration_records");
    if (!integrationRecordsTable) {
        throw new Error("The integration_records table is not available in this database yet.");
    }
    const studentsTable = await requireStudentsTable();
    const student = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryOne"])(`select id from ${studentsTable} where student_no = $1 limit 1`, [
        input.studentNo
    ]);
    if (!student) {
        throw new Error("Student not found.");
    }
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${integrationRecordsTable}
      (student_id, record_type, source_office, reference_no, external_status, title, notes, payload_json, received_at, created_at)
     values ($1, $2, $3, $4, $5, $6, $7, '{}'::jsonb, current_timestamp, current_timestamp)
     returning id`, [
        student.id,
        input.recordType,
        input.sourceOffice,
        input.referenceNo ?? "",
        input.externalStatus ?? "Received",
        input.title ?? "",
        input.notes ?? ""
    ]);
    await logAction(input.actorId, "Create", "Office Integrations", `Stored ${input.recordType} from ${input.sourceOffice}`);
    return result.rows[0]?.id;
}
async function markNotificationRead(input) {
    const notificationsTable = await requireNotificationsTable();
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`update ${notificationsTable} set status = 'Read' where id = $1`, [
        input.id
    ]);
}
async function markAllNotificationsRead() {
    const notificationsTable = await requireNotificationsTable();
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`update ${notificationsTable} set status = 'Read' where status = 'Unread'`);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"00953aae29e65fb01d605af009c5d9aa8e3ff3600b":"markAllNotificationsReadAction","00fbd8a47c93d5d0e9d489ac78e871d82f54b67806":"logoutAction","400113efd36a0e2dbead60a1a7d9265945da8b0fba":"updateAcademicReportAction","4005f98195e16de7d72948ee7dfe1e3c9e095f90d9":"deleteClassAction","400cddd234a825df64b0782bc6311cbe8df33c6e41":"createClassAction","4010bf1335b86249236c61b0922fd27db340b011b1":"createWorkflowReportAction","4012ba53f8a5c7f87c9770f02e51295ecd79da44a4":"createEnrollmentAction","4023a03c59ef1cf2502c0fb593018ad57ca26cde98":"deleteEnrollmentAction","402a5b19eaf37fa8123915c874395d9fdec3f69e4e":"purgeEnrollmentAction","40313e823791757a392828d02707f786420b91d181":"deleteStudentAction","4032420f728bdf7155f8526ef72261a135351dbb1d":"updateGradeAction","4037a0b3c3ce771eebf6fb6e907db53345820f7e8e":"loginAction","4039974221cc611b25dca29ca9a3058e7bd6fb17f0":"createIntegrationRecordAction","4044188e195081ed40abb3ac2a4ada5558ec232f39":"updateStudentAction","40444c8d11b49fdd52bbc36333b2ca4b0ffd5a0aa3":"deleteAcademicReportAction","40482a21b8bf87650137b088a0a6cfbfd8d749d4c9":"assignInstructorClassAction","406570b7ce4057cfa20f1ce338a05a9c5d41902bea":"createAcademicReportAction","40659dc96466de48d37423ff5a5dce6696e40c2f10":"createGradeAction","4066f227f07a14e2f4357621b930dddd407ca27806":"toggleUserAction","40686947e251b9a84710352d6596fbc69080c54cda":"resetUserPasswordAction","40729c019495a4b3bb7b3c8a6e6daaeb9c9cbf18dd":"markNotificationReadAction","407b89d0e9105d244e268e753a848744a8a0aee91b":"createUserAction","407c91e5fe34617743bfbd756b58acda9ba1902f08":"deleteDocumentAction","407f100101cb1f8b396d7a3fba2b8d2afd4ba060bb":"updateClassAction","4083cf4651849835e2760776df257656d87688da4f":"unassignInstructorClassAction","408d7e82e32fdec6c267b4ab8f58be853090763272":"updateUserAction","409311d8daa4ccd9d16379ba22e408f924b3d3fa66":"updateInstructorAction","409c9457a8f73dc7a10e6b72e87fa994a240cb416b":"deleteGradeAction","40ad8bba2e666c6715562e8496179d59581bd7f129":"createStudentAction","40c2990f014679a90ae38ec1024e69670b949a7835":"updateEnrollmentAction","40c54a1f6db0ca1473d920a462206be8f4fa1117e7":"updateReportAction","40c848877229d64ebdaf7acb11f0206bc5b68dbfdb":"deleteInstructorAction","40ca0aa1c5ec66aad7e4c20185ec00e1f83f2e5600":"createInstructorAction","40caead711f8f6691512f9da4e933be66ece9dd799":"updateDocumentAction","40d07a83b548e97480c1d6a0cf22274649e56e219b":"createDocumentAction","40ddd62ee58dda93e7c1b8e43a3b8c69cec32300b8":"restoreEnrollmentAction","40e21e152062cb006b8957ff3e82ad6b89d394ad3e":"createClassListAction","40f2bb3366ae16d8da91fc478d3bf630153415f501":"updateProfileAction","40f42b094fed604816413cb1876ea117190feb3410":"createReportAction","40fa90dfd420c271871ba91511c8e84c9e9430ab01":"deleteReportAction","40fb0fc82fd5760d1398d9a21bab4e7fe8c6fb4924":"deleteUserAction"},"",""] */ __turbopack_context__.s([
    "assignInstructorClassAction",
    ()=>assignInstructorClassAction,
    "createAcademicReportAction",
    ()=>createAcademicReportAction,
    "createClassAction",
    ()=>createClassAction,
    "createClassListAction",
    ()=>createClassListAction,
    "createDocumentAction",
    ()=>createDocumentAction,
    "createEnrollmentAction",
    ()=>createEnrollmentAction,
    "createGradeAction",
    ()=>createGradeAction,
    "createInstructorAction",
    ()=>createInstructorAction,
    "createIntegrationRecordAction",
    ()=>createIntegrationRecordAction,
    "createReportAction",
    ()=>createReportAction,
    "createStudentAction",
    ()=>createStudentAction,
    "createUserAction",
    ()=>createUserAction,
    "createWorkflowReportAction",
    ()=>createWorkflowReportAction,
    "deleteAcademicReportAction",
    ()=>deleteAcademicReportAction,
    "deleteClassAction",
    ()=>deleteClassAction,
    "deleteDocumentAction",
    ()=>deleteDocumentAction,
    "deleteEnrollmentAction",
    ()=>deleteEnrollmentAction,
    "deleteGradeAction",
    ()=>deleteGradeAction,
    "deleteInstructorAction",
    ()=>deleteInstructorAction,
    "deleteReportAction",
    ()=>deleteReportAction,
    "deleteStudentAction",
    ()=>deleteStudentAction,
    "deleteUserAction",
    ()=>deleteUserAction,
    "loginAction",
    ()=>loginAction,
    "logoutAction",
    ()=>logoutAction,
    "markAllNotificationsReadAction",
    ()=>markAllNotificationsReadAction,
    "markNotificationReadAction",
    ()=>markNotificationReadAction,
    "purgeEnrollmentAction",
    ()=>purgeEnrollmentAction,
    "resetUserPasswordAction",
    ()=>resetUserPasswordAction,
    "restoreEnrollmentAction",
    ()=>restoreEnrollmentAction,
    "toggleUserAction",
    ()=>toggleUserAction,
    "unassignInstructorClassAction",
    ()=>unassignInstructorClassAction,
    "updateAcademicReportAction",
    ()=>updateAcademicReportAction,
    "updateClassAction",
    ()=>updateClassAction,
    "updateDocumentAction",
    ()=>updateDocumentAction,
    "updateEnrollmentAction",
    ()=>updateEnrollmentAction,
    "updateGradeAction",
    ()=>updateGradeAction,
    "updateInstructorAction",
    ()=>updateInstructorAction,
    "updateProfileAction",
    ()=>updateProfileAction,
    "updateReportAction",
    ()=>updateReportAction,
    "updateStudentAction",
    ()=>updateStudentAction,
    "updateUserAction",
    ()=>updateUserAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mutations.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
function requireSessionUser() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSessionUser"])().then((user)=>{
        if (!user) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
        }
        return user;
    });
}
function revalidateCorePaths() {
    [
        "/admin/dashboard",
        "/staff/dashboard",
        "/admin/activity",
        "/profile"
    ].forEach((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path));
}
const TEMP_BYPASS_USERS = [
    {
        id: -1,
        username: "admin@gmail.com",
        password: "admin123",
        first_name: "Admin",
        last_name: "User",
        display_name: "Admin User",
        profile_photo: "",
        profile_title: "Admin",
        profile_bio: "Temporary registrar bypass account",
        profile_accent: "#8B1E3F",
        role: "admin"
    },
    {
        id: -2,
        username: "staff@gmail.com",
        aliases: [
            "staf@gmail.com"
        ],
        password: "admin123",
        first_name: "Staff",
        last_name: "User",
        display_name: "Staff User",
        profile_photo: "",
        profile_title: "Staff",
        profile_bio: "Temporary registrar bypass account",
        profile_accent: "#2F6BD9",
        role: "staff"
    }
];
const FIXED_TUITION_FEE = 6000;
const FIXED_DOWNPAYMENT_AMOUNT = 500;
const FIXED_MEDICAL_FEE = 250;
const FIXED_ID_FEE = 250;
const FIXED_REPORT_DEPARTMENT = "PMED";
function parseCurrencyInput(value, fallback) {
    const parsed = Number(value ?? fallback);
    return Number.isFinite(parsed) ? parsed : fallback;
}
async function loginAction(formData) {
    const username = String(formData.get("username") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    if (!username) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/?error=username_required");
    }
    if (username.length < 3) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/?error=username_short");
    }
    if (!password) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/?error=password_required");
    }
    if (password.length < 6) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/?error=password_short");
    }
    const bypassUser = TEMP_BYPASS_USERS.find((item)=>[
            item.username,
            ..."aliases" in item ? item.aliases ?? [] : []
        ].some((login)=>login.toLowerCase() === username.toLowerCase()) && item.password === password);
    if (bypassUser) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSession"])({
            id: bypassUser.id,
            username: bypassUser.username,
            first_name: bypassUser.first_name,
            last_name: bypassUser.last_name,
            display_name: bypassUser.display_name,
            profile_photo: bypassUser.profile_photo,
            profile_title: bypassUser.profile_title,
            profile_bio: bypassUser.profile_bio,
            profile_accent: bypassUser.profile_accent,
            role: bypassUser.role
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(bypassUser.role === "admin" ? "/admin/dashboard" : "/staff/dashboard");
    }
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthUserByLogin"])(username);
    if (!user || !await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].compare(password, user.password_hash)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/?error=invalid_credentials");
    }
    await __turbopack_context__.A("[project]/lib/db.ts [app-rsc] (ecmascript, async loader)").then(({ pool })=>pool.query("update admin_users set last_login_at = current_timestamp where id = $1", [
            user.id
        ]));
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSession"])({
        id: user.id,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        display_name: user.display_name,
        profile_photo: user.profile_photo,
        profile_title: user.profile_title,
        profile_bio: user.profile_bio,
        profile_accent: user.profile_accent,
        role: user.role
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(user.role === "admin" ? "/admin/dashboard" : "/staff/dashboard");
}
async function logoutAction() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clearSession"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
}
async function createStudentAction(formData) {
    const user = await requireSessionUser();
    const { getNextStudentNumber } = await __turbopack_context__.A("[project]/lib/data.ts [app-rsc] (ecmascript, async loader)");
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStudent"])({
        studentNo: String(formData.get("student_no") ?? "").trim() || await getNextStudentNumber(),
        firstName: String(formData.get("first_name") ?? "").trim(),
        lastName: String(formData.get("last_name") ?? "").trim(),
        middleName: String(formData.get("middle_name") ?? "").trim(),
        program: String(formData.get("program") ?? "").trim(),
        yearLevel: String(formData.get("year_level") ?? "").trim(),
        status: String(formData.get("status") ?? "Active").trim() || "Active",
        birthDate: String(formData.get("birth_date") ?? "").trim(),
        motherName: String(formData.get("mother_name") ?? "").trim(),
        fatherName: String(formData.get("father_name") ?? "").trim(),
        guardianName: String(formData.get("guardian_name") ?? "").trim(),
        address: String(formData.get("address") ?? "").trim(),
        email: String(formData.get("email") ?? "").trim(),
        phone: String(formData.get("phone") ?? "").trim(),
        actorId: user.id
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Student saved successfully.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/students");
    revalidateCorePaths();
}
async function updateStudentAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateStudent"])({
        id: Number(formData.get("id") ?? 0),
        studentNo: String(formData.get("student_no") ?? "").trim(),
        firstName: String(formData.get("first_name") ?? "").trim(),
        lastName: String(formData.get("last_name") ?? "").trim(),
        middleName: String(formData.get("middle_name") ?? "").trim(),
        program: String(formData.get("program") ?? "").trim(),
        yearLevel: String(formData.get("year_level") ?? "").trim(),
        status: String(formData.get("status") ?? "Active").trim() || "Active",
        birthDate: String(formData.get("birth_date") ?? "").trim(),
        motherName: String(formData.get("mother_name") ?? "").trim(),
        fatherName: String(formData.get("father_name") ?? "").trim(),
        guardianName: String(formData.get("guardian_name") ?? "").trim(),
        address: String(formData.get("address") ?? "").trim(),
        email: String(formData.get("email") ?? "").trim(),
        phone: String(formData.get("phone") ?? "").trim(),
        actorId: user.id
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Student updated successfully.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/students");
    revalidateCorePaths();
}
async function deleteStudentAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteStudent"])({
        id: Number(formData.get("id") ?? 0),
        actorId: user.id
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Student deleted successfully.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/students");
    revalidateCorePaths();
}
async function createInstructorAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createInstructor"])({
        employeeNo: String(formData.get("employee_no") ?? "").trim(),
        firstName: String(formData.get("first_name") ?? "").trim(),
        lastName: String(formData.get("last_name") ?? "").trim(),
        department: String(formData.get("department") ?? "").trim(),
        actorId: user.id
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Instructor saved successfully.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/instructors");
    revalidateCorePaths();
}
async function updateInstructorAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateInstructor"])({
        id: String(formData.get("id") ?? "").trim(),
        employeeNo: String(formData.get("employee_no") ?? "").trim(),
        firstName: String(formData.get("first_name") ?? "").trim(),
        lastName: String(formData.get("last_name") ?? "").trim(),
        department: String(formData.get("department") ?? "").trim(),
        actorId: user.id
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Instructor updated successfully.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/instructors");
    revalidateCorePaths();
}
async function deleteInstructorAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteInstructor"])({
        id: String(formData.get("id") ?? "").trim(),
        actorId: user.id
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Instructor deleted successfully.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/instructors");
    revalidateCorePaths();
}
async function assignInstructorClassAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assignInstructorClass"])({
        employeeNo: String(formData.get("employee_no") ?? "").trim(),
        classId: Number(formData.get("class_id") ?? 0),
        actorId: user.id
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Instructor class assignment saved successfully.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/instructors");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/classes");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/schedules");
    revalidateCorePaths();
}
async function unassignInstructorClassAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unassignInstructorClass"])({
        employeeNo: String(formData.get("employee_no") ?? "").trim(),
        classId: Number(formData.get("class_id") ?? 0),
        actorId: user.id
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Assigned class removed successfully.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/instructors");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/classes");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/schedules");
    revalidateCorePaths();
}
async function createClassAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClassSchedule"])({
        classCode: String(formData.get("class_code") ?? "").trim(),
        title: String(formData.get("class_title") ?? "").trim(),
        course: String(formData.get("course") ?? "").trim(),
        units: Number(formData.get("units") ?? 0),
        day: String(formData.get("day") ?? "").trim(),
        time: String(formData.get("time") ?? "").trim(),
        room: String(formData.get("room") ?? "").trim(),
        actorId: user.id
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Class saved successfully.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/classes");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/class-lists");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/schedules");
    revalidateCorePaths();
}
async function updateClassAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateClassSchedule"])({
        classId: Number(formData.get("class_id") ?? 0),
        classCode: String(formData.get("class_code") ?? "").trim(),
        title: String(formData.get("class_title") ?? "").trim(),
        course: String(formData.get("course") ?? "").trim(),
        units: Number(formData.get("units") ?? 0),
        day: String(formData.get("day") ?? "").trim(),
        time: String(formData.get("time") ?? "").trim(),
        room: String(formData.get("room") ?? "").trim(),
        actorId: user.id
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Class updated successfully.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/classes");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/class-lists");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/schedules");
    revalidateCorePaths();
}
async function deleteClassAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteClassSchedule"])({
        classId: Number(formData.get("class_id") ?? 0),
        actorId: user.id
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Class deleted successfully.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/classes");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/class-lists");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/schedules");
    revalidateCorePaths();
}
async function createClassListAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClassList"])({
        classId: Number(formData.get("class_id") ?? 0),
        actorId: user.id
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Class list saved successfully.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/class-lists");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/classes");
    revalidateCorePaths();
}
async function createEnrollmentAction(formData) {
    const user = await requireSessionUser();
    let studentId = Number(formData.get("student_id") ?? 0);
    const tuitionFee = parseCurrencyInput(formData.get("tuition_fee"), FIXED_TUITION_FEE);
    const downpaymentAmount = parseCurrencyInput(formData.get("downpayment_amount"), FIXED_DOWNPAYMENT_AMOUNT);
    const medicalFee = parseCurrencyInput(formData.get("medical_fee"), FIXED_MEDICAL_FEE);
    const idFee = parseCurrencyInput(formData.get("id_fee"), FIXED_ID_FEE);
    if (!studentId) {
        const { getNextStudentNumber } = await __turbopack_context__.A("[project]/lib/data.ts [app-rsc] (ecmascript, async loader)");
        studentId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStudent"])({
            studentNo: String(formData.get("student_no") ?? "").trim() || await getNextStudentNumber(),
            firstName: String(formData.get("first_name") ?? "").trim(),
            lastName: String(formData.get("last_name") ?? "").trim(),
            middleName: String(formData.get("middle_name") ?? "").trim(),
            program: String(formData.get("program") ?? "").trim(),
            yearLevel: String(formData.get("year_level") ?? "").trim(),
            status: String(formData.get("student_status") ?? "Active").trim() || "Active",
            birthDate: String(formData.get("birth_date") ?? "").trim(),
            motherName: String(formData.get("mother_name") ?? "").trim(),
            fatherName: String(formData.get("father_name") ?? "").trim(),
            guardianName: String(formData.get("guardian_name") ?? "").trim(),
            address: String(formData.get("address") ?? "").trim(),
            email: String(formData.get("email") ?? "").trim(),
            phone: String(formData.get("phone") ?? "").trim(),
            actorId: user.id
        });
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEnrollment"])({
        studentId,
        classId: Number(formData.get("class_id") ?? 0),
        status: String(formData.get("status") ?? "Enrolled").trim() || "Enrolled",
        academicYear: String(formData.get("academic_year") ?? "").trim(),
        semester: String(formData.get("semester") ?? "").trim(),
        tuitionFee,
        downpaymentAmount,
        medicalFee,
        idFee,
        actorId: user.id
    });
    try {
        await __turbopack_context__.A("[project]/lib/student-data-dispatch.ts [app-rsc] (ecmascript, async loader)").then(({ dispatchStudentData })=>dispatchStudentData({
                targetKey: "cashier",
                studentId
            }));
    } catch  {
    // Non-blocking if cashier shared feed table is unavailable temporarily.
    }
    try {
        const flowResult = await __turbopack_context__.A("[project]/lib/department-integration.ts [app-rsc] (ecmascript, async loader)").then(({ dispatchRegistrarDepartmentFlow })=>dispatchRegistrarDepartmentFlow({
                targetDepartmentKey: "cashier",
                studentId
            }));
        if (!flowResult.ok) {
            await __turbopack_context__.A("[project]/lib/integration-delivery.ts [app-rsc] (ecmascript, async loader)").then(({ deliverIntegrationResource })=>deliverIntegrationResource("enrollment-data", {
                    studentId
                }));
        }
    } catch  {
        try {
            await __turbopack_context__.A("[project]/lib/integration-delivery.ts [app-rsc] (ecmascript, async loader)").then(({ deliverIntegrationResource })=>deliverIntegrationResource("enrollment-data", {
                    studentId
                }));
        } catch  {
        // Non-blocking if shared or legacy cashier delivery is not configured yet.
        }
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Enrollment saved successfully.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/enrollments");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/bin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/class-lists");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/integrations");
    revalidateCorePaths();
}
async function updateEnrollmentAction(formData) {
    const user = await requireSessionUser();
    const tuitionFee = parseCurrencyInput(formData.get("tuition_fee"), FIXED_TUITION_FEE);
    const downpaymentAmount = parseCurrencyInput(formData.get("downpayment_amount"), FIXED_DOWNPAYMENT_AMOUNT);
    const medicalFee = parseCurrencyInput(formData.get("medical_fee"), FIXED_MEDICAL_FEE);
    const idFee = parseCurrencyInput(formData.get("id_fee"), FIXED_ID_FEE);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateEnrollment"])({
        id: Number(formData.get("id") ?? 0),
        status: String(formData.get("status") ?? "").trim(),
        academicYear: String(formData.get("academic_year") ?? "").trim(),
        semester: String(formData.get("semester") ?? "").trim(),
        tuitionFee,
        downpaymentAmount,
        medicalFee,
        idFee,
        actorId: user.id
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Enrollment updated successfully.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/enrollments");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/bin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/class-lists");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/students");
    revalidateCorePaths();
}
async function deleteEnrollmentAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEnrollment"])({
        id: Number(formData.get("id") ?? 0),
        actorId: user.id
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Enrollment moved to bin successfully.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/enrollments");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/bin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/class-lists");
    revalidateCorePaths();
}
async function restoreEnrollmentAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["restoreEnrollment"])({
        id: Number(formData.get("id") ?? 0),
        actorId: user.id
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Enrollment restored successfully.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/enrollments");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/bin");
    revalidateCorePaths();
}
async function purgeEnrollmentAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["purgeEnrollment"])({
        id: Number(formData.get("id") ?? 0),
        actorId: user.id
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Enrollment deleted permanently.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/bin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/enrollments");
    revalidateCorePaths();
}
async function createGradeAction(formData) {
    const user = await requireSessionUser();
    const studentId = Number(formData.get("student_id") ?? 0);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createGrade"])({
        studentId,
        classId: Number(formData.get("class_id") ?? 0),
        semester: String(formData.get("semester") ?? "").trim(),
        grade: String(formData.get("grade") ?? "").trim(),
        remarks: String(formData.get("remarks") ?? "").trim(),
        actorId: user.id
    });
    if (studentId > 0) {
        try {
            await __turbopack_context__.A("[project]/lib/student-data-dispatch.ts [app-rsc] (ecmascript, async loader)").then(({ dispatchStudentData })=>dispatchStudentData({
                    targetKey: "crad",
                    studentId
                }));
        } catch  {
        // Non-blocking if CRAD shared feed table is unavailable temporarily.
        }
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Grade saved successfully.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/grades");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/class-lists");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/integrations");
    revalidateCorePaths();
}
async function updateGradeAction(formData) {
    const user = await requireSessionUser();
    const studentId = Number(formData.get("student_id") ?? 0);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateGrade"])({
        id: Number(formData.get("id") ?? 0),
        semester: String(formData.get("semester") ?? "").trim(),
        grade: String(formData.get("grade") ?? "").trim(),
        remarks: String(formData.get("remarks") ?? "").trim(),
        actorId: user.id
    });
    if (studentId > 0) {
        try {
            await __turbopack_context__.A("[project]/lib/student-data-dispatch.ts [app-rsc] (ecmascript, async loader)").then(({ dispatchStudentData })=>dispatchStudentData({
                    targetKey: "crad",
                    studentId
                }));
        } catch  {
        // Non-blocking if CRAD shared feed table is unavailable temporarily.
        }
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Grade updated successfully.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/grades");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/class-lists");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/integrations");
    revalidateCorePaths();
}
async function deleteGradeAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteGrade"])({
        id: Number(formData.get("id") ?? 0),
        actorId: user.id
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Grade deleted successfully.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/grades");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/class-lists");
    revalidateCorePaths();
}
async function createDocumentAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDocumentRequest"])({
        studentId: Number(formData.get("student_id") ?? 0),
        docType: String(formData.get("doc_type") ?? "").trim(),
        actorId: user.id
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Document request saved successfully.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/documents");
    revalidateCorePaths();
}
async function updateDocumentAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateDocumentRequest"])({
        id: Number(formData.get("doc_id") ?? 0),
        status: String(formData.get("status") ?? "").trim(),
        actorId: user.id
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Document request updated successfully.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/documents");
    revalidateCorePaths();
}
async function deleteDocumentAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteDocumentRequest"])({
        id: Number(formData.get("doc_id") ?? 0),
        actorId: user.id
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"])("Document request deleted successfully.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/documents");
    revalidateCorePaths();
}
async function createUserAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createUserAccount"])({
        roleId: Number(formData.get("role_id") ?? 0),
        username: String(formData.get("username") ?? "").trim(),
        password: String(formData.get("password") ?? ""),
        firstName: String(formData.get("first_name") ?? "").trim(),
        lastName: String(formData.get("last_name") ?? "").trim(),
        actorId: user.id
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/users");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/staff-directory");
    revalidateCorePaths();
}
async function updateUserAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateUserAccount"])({
        id: Number(formData.get("id") ?? 0),
        roleId: Number(formData.get("role_id") ?? 0),
        username: String(formData.get("username") ?? "").trim(),
        firstName: String(formData.get("first_name") ?? "").trim(),
        lastName: String(formData.get("last_name") ?? "").trim(),
        actorId: user.id
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/users");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/staff-directory");
    revalidateCorePaths();
}
async function toggleUserAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toggleUserAccount"])({
        id: Number(formData.get("id") ?? 0),
        isActive: String(formData.get("is_active") ?? "0") === "1",
        actorId: user.id
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/users");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/staff-directory");
    revalidateCorePaths();
}
async function resetUserPasswordAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resetUserPassword"])({
        id: Number(formData.get("id") ?? 0),
        password: String(formData.get("password") ?? ""),
        actorId: user.id
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/users");
    revalidateCorePaths();
}
async function deleteUserAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteUserAccount"])({
        id: Number(formData.get("id") ?? 0),
        actorId: user.id
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/users");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/staff/staff-directory");
    revalidateCorePaths();
}
async function createReportAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createReport"])({
        title: String(formData.get("title") ?? "").trim(),
        department: FIXED_REPORT_DEPARTMENT,
        status: String(formData.get("status") ?? "Pending").trim() || "Pending",
        dueDate: String(formData.get("due_date") ?? "").trim(),
        actorId: user.id
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/reports");
    revalidateCorePaths();
}
async function createWorkflowReportAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createWorkflowReport"])({
        workflowKey: String(formData.get("workflow_key") ?? ""),
        title: String(formData.get("title") ?? "").trim(),
        department: FIXED_REPORT_DEPARTMENT,
        status: String(formData.get("status") ?? "Pending").trim() || "Pending",
        dueDate: String(formData.get("due_date") ?? "").trim(),
        actorId: user.id
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/reports");
    revalidateCorePaths();
}
async function updateReportAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateReport"])({
        id: Number(formData.get("id") ?? 0),
        title: String(formData.get("title") ?? "").trim(),
        department: FIXED_REPORT_DEPARTMENT,
        status: String(formData.get("status") ?? "Pending").trim() || "Pending",
        dueDate: String(formData.get("due_date") ?? "").trim(),
        actorId: user.id
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/reports");
    revalidateCorePaths();
}
async function deleteReportAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteReport"])({
        id: Number(formData.get("id") ?? 0),
        actorId: user.id
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/reports");
    revalidateCorePaths();
}
async function createAcademicReportAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAcademicReport"])({
        studentId: Number(formData.get("student_id") ?? 0),
        title: String(formData.get("title") ?? "").trim(),
        coverage: String(formData.get("coverage") ?? "").trim(),
        reportType: String(formData.get("report_type") ?? "Transcript").trim() || "Transcript",
        semester: String(formData.get("semester") ?? "").trim(),
        authorizationStatus: String(formData.get("authorization_status") ?? "Pending").trim() || "Pending",
        outputFormat: String(formData.get("output_format") ?? "Transcript / Grade Report").trim() || "Transcript / Grade Report",
        status: String(formData.get("status") ?? "Draft").trim() || "Draft",
        actorId: user.id
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/academic-reports");
    revalidateCorePaths();
}
async function updateAcademicReportAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAcademicReport"])({
        id: Number(formData.get("id") ?? 0),
        studentId: Number(formData.get("student_id") ?? 0),
        title: String(formData.get("title") ?? "").trim(),
        coverage: String(formData.get("coverage") ?? "").trim(),
        reportType: String(formData.get("report_type") ?? "Transcript").trim() || "Transcript",
        semester: String(formData.get("semester") ?? "").trim(),
        authorizationStatus: String(formData.get("authorization_status") ?? "Pending").trim() || "Pending",
        outputFormat: String(formData.get("output_format") ?? "Transcript / Grade Report").trim() || "Transcript / Grade Report",
        status: String(formData.get("status") ?? "Draft").trim() || "Draft",
        actorId: user.id
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/academic-reports");
    revalidateCorePaths();
}
async function deleteAcademicReportAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteAcademicReport"])({
        id: Number(formData.get("id") ?? 0),
        actorId: user.id
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/academic-reports");
    revalidateCorePaths();
}
async function createIntegrationRecordAction(formData) {
    const user = await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createIntegrationRecord"])({
        studentNo: String(formData.get("student_no") ?? "").trim(),
        sourceOffice: String(formData.get("source_office") ?? "").trim(),
        recordType: String(formData.get("record_type") ?? "").trim(),
        referenceNo: String(formData.get("reference_no") ?? "").trim(),
        externalStatus: String(formData.get("external_status") ?? "Received").trim() || "Received",
        title: String(formData.get("title") ?? "").trim(),
        notes: String(formData.get("notes") ?? "").trim(),
        actorId: user.id
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/integrations");
    revalidateCorePaths();
}
async function updateProfileAction(formData) {
    const sessionUser = await requireSessionUser();
    const firstName = String(formData.get("first_name") ?? "").trim();
    const lastName = String(formData.get("last_name") ?? "").trim();
    const displayName = String(formData.get("display_name") ?? "").trim();
    const profileTitle = String(formData.get("profile_title") ?? "").trim();
    const profileBio = String(formData.get("profile_bio") ?? "").trim();
    const profileAccent = String(formData.get("profile_accent") ?? "#2F6BD9").trim() || "#2F6BD9";
    const fullName = `${firstName} ${lastName}`.trim();
    await __turbopack_context__.A("[project]/lib/db.ts [app-rsc] (ecmascript, async loader)").then(({ pool })=>pool.query(`update admin_users
       set full_name = $1, last_login_at = coalesce(last_login_at, current_timestamp)
       where id = $2`, [
            fullName,
            sessionUser.id
        ]));
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSession"])({
        ...sessionUser,
        first_name: firstName,
        last_name: lastName,
        display_name: displayName,
        profile_title: profileTitle,
        profile_bio: profileBio,
        profile_accent: profileAccent
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/profile");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/settings");
    revalidateCorePaths();
}
async function markNotificationReadAction(formData) {
    await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markNotificationRead"])({
        id: Number(formData.get("id") ?? 0)
    });
    revalidateCorePaths();
}
async function markAllNotificationsReadAction() {
    await requireSessionUser();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markAllNotificationsRead"])();
    revalidateCorePaths();
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    loginAction,
    logoutAction,
    createStudentAction,
    updateStudentAction,
    deleteStudentAction,
    createInstructorAction,
    updateInstructorAction,
    deleteInstructorAction,
    assignInstructorClassAction,
    unassignInstructorClassAction,
    createClassAction,
    updateClassAction,
    deleteClassAction,
    createClassListAction,
    createEnrollmentAction,
    updateEnrollmentAction,
    deleteEnrollmentAction,
    restoreEnrollmentAction,
    purgeEnrollmentAction,
    createGradeAction,
    updateGradeAction,
    deleteGradeAction,
    createDocumentAction,
    updateDocumentAction,
    deleteDocumentAction,
    createUserAction,
    updateUserAction,
    toggleUserAction,
    resetUserPasswordAction,
    deleteUserAction,
    createReportAction,
    createWorkflowReportAction,
    updateReportAction,
    deleteReportAction,
    createAcademicReportAction,
    updateAcademicReportAction,
    deleteAcademicReportAction,
    createIntegrationRecordAction,
    updateProfileAction,
    markNotificationReadAction,
    markAllNotificationsReadAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(loginAction, "4037a0b3c3ce771eebf6fb6e907db53345820f7e8e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logoutAction, "00fbd8a47c93d5d0e9d489ac78e871d82f54b67806", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createStudentAction, "40ad8bba2e666c6715562e8496179d59581bd7f129", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateStudentAction, "4044188e195081ed40abb3ac2a4ada5558ec232f39", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteStudentAction, "40313e823791757a392828d02707f786420b91d181", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createInstructorAction, "40ca0aa1c5ec66aad7e4c20185ec00e1f83f2e5600", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateInstructorAction, "409311d8daa4ccd9d16379ba22e408f924b3d3fa66", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteInstructorAction, "40c848877229d64ebdaf7acb11f0206bc5b68dbfdb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(assignInstructorClassAction, "40482a21b8bf87650137b088a0a6cfbfd8d749d4c9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(unassignInstructorClassAction, "4083cf4651849835e2760776df257656d87688da4f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createClassAction, "400cddd234a825df64b0782bc6311cbe8df33c6e41", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateClassAction, "407f100101cb1f8b396d7a3fba2b8d2afd4ba060bb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteClassAction, "4005f98195e16de7d72948ee7dfe1e3c9e095f90d9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createClassListAction, "40e21e152062cb006b8957ff3e82ad6b89d394ad3e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createEnrollmentAction, "4012ba53f8a5c7f87c9770f02e51295ecd79da44a4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateEnrollmentAction, "40c2990f014679a90ae38ec1024e69670b949a7835", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEnrollmentAction, "4023a03c59ef1cf2502c0fb593018ad57ca26cde98", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(restoreEnrollmentAction, "40ddd62ee58dda93e7c1b8e43a3b8c69cec32300b8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(purgeEnrollmentAction, "402a5b19eaf37fa8123915c874395d9fdec3f69e4e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createGradeAction, "40659dc96466de48d37423ff5a5dce6696e40c2f10", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateGradeAction, "4032420f728bdf7155f8526ef72261a135351dbb1d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteGradeAction, "409c9457a8f73dc7a10e6b72e87fa994a240cb416b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createDocumentAction, "40d07a83b548e97480c1d6a0cf22274649e56e219b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateDocumentAction, "40caead711f8f6691512f9da4e933be66ece9dd799", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteDocumentAction, "407c91e5fe34617743bfbd756b58acda9ba1902f08", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createUserAction, "407b89d0e9105d244e268e753a848744a8a0aee91b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateUserAction, "408d7e82e32fdec6c267b4ab8f58be853090763272", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(toggleUserAction, "4066f227f07a14e2f4357621b930dddd407ca27806", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(resetUserPasswordAction, "40686947e251b9a84710352d6596fbc69080c54cda", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteUserAction, "40fb0fc82fd5760d1398d9a21bab4e7fe8c6fb4924", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createReportAction, "40f42b094fed604816413cb1876ea117190feb3410", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createWorkflowReportAction, "4010bf1335b86249236c61b0922fd27db340b011b1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateReportAction, "40c54a1f6db0ca1473d920a462206be8f4fa1117e7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteReportAction, "40fa90dfd420c271871ba91511c8e84c9e9430ab01", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createAcademicReportAction, "406570b7ce4057cfa20f1ce338a05a9c5d41902bea", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAcademicReportAction, "400113efd36a0e2dbead60a1a7d9265945da8b0fba", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteAcademicReportAction, "40444c8d11b49fdd52bbc36333b2ca4b0ffd5a0aa3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createIntegrationRecordAction, "4039974221cc611b25dca29ca9a3058e7bd6fb17f0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProfileAction, "40f2bb3366ae16d8da91fc478d3bf630153415f501", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(markNotificationReadAction, "40729c019495a4b3bb7b3c8a6e6daaeb9c9cbf18dd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(markAllNotificationsReadAction, "00953aae29e65fb01d605af009c5d9aa8e3ff3600b", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(protected)/staff/students/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/session.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(protected)/staff/students/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/session.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "001d88def72b885b662f6b1d8a41721d644a4c822d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSessionUser"],
    "0039bcb811d5bef163273fd29cd9905f5c8a234f09",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSuccessFlash"],
    "00953aae29e65fb01d605af009c5d9aa8e3ff3600b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markAllNotificationsReadAction"],
    "009a37838fb250d29438b83e6aa1c2e17f0575ff86",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clearSession"],
    "00fbd8a47c93d5d0e9d489ac78e871d82f54b67806",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logoutAction"],
    "40313e823791757a392828d02707f786420b91d181",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteStudentAction"],
    "4044188e195081ed40abb3ac2a4ada5558ec232f39",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateStudentAction"],
    "40729c019495a4b3bb7b3c8a6e6daaeb9c9cbf18dd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markNotificationReadAction"],
    "40ad8bba2e666c6715562e8496179d59581bd7f129",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStudentAction"],
    "40e26bab1a16e352dd2193407f09812fe689c95408",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSession"],
    "40f0cfb20b0deaeb6d5ab33d4a931c0cbf4f508dc1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSuccessFlash"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$protected$292f$staff$2f$students$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(protected)/staff/students/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/session.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$protected$292f$staff$2f$students$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$protected$292f$staff$2f$students$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/(protected)/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(protected)/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/navigation.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNavigation",
    ()=>getNavigation
]);
function getNavigation(role) {
    const normalizedRole = role.trim().toLowerCase();
    const isAdmin = normalizedRole === "administrator" || normalizedRole === "admin";
    if (isAdmin) {
        return [
            {
                section: "Campus Control",
                items: [
                    {
                        label: "Dashboard",
                        href: "/admin/dashboard",
                        icon: "dashboard"
                    },
                    {
                        label: "User Management",
                        href: "/admin/users",
                        icon: "users"
                    }
                ]
            },
            {
                section: "Registrar Workflow",
                items: [
                    {
                        label: "Student Records",
                        href: "/staff/students",
                        icon: "students"
                    },
                    {
                        label: "Faculty / Instructor Management",
                        href: "/staff/instructors",
                        icon: "faculty"
                    },
                    {
                        label: "Classes and Schedules",
                        href: "/staff/classes",
                        icon: "classes"
                    },
                    {
                        label: "Enrollment Monitoring",
                        href: "/staff/enrollments",
                        icon: "enrollment"
                    },
                    {
                        label: "Recycle Bin",
                        href: "/staff/bin",
                        icon: "bin"
                    },
                    {
                        label: "Grade Records",
                        href: "/staff/grades",
                        icon: "grades"
                    },
                    {
                        label: "Document Requests",
                        href: "/staff/documents",
                        icon: "documents"
                    },
                    {
                        label: "Staff Directory",
                        href: "/staff/staff-directory",
                        icon: "directory"
                    },
                    {
                        label: "Academic Reports",
                        href: "/admin/academic-reports",
                        icon: "academic"
                    },
                    {
                        label: "Office Integrations",
                        href: "/admin/integrations",
                        icon: "reports"
                    },
                    {
                        label: "System Logs",
                        href: "/admin/activity",
                        icon: "logs"
                    }
                ]
            },
            {
                section: "Reports",
                items: [
                    {
                        label: "Reports",
                        href: "/admin/reports",
                        icon: "reports"
                    }
                ]
            },
            {
                section: "Account",
                items: [
                    {
                        label: "My Profile",
                        href: "/profile",
                        icon: "profile"
                    },
                    {
                        label: "System Settings",
                        href: "/admin/settings",
                        icon: "settings"
                    }
                ]
            }
        ];
    }
    return [
        {
            section: "Registrar System",
            items: [
                {
                    label: "Dashboard",
                    href: "/staff/dashboard",
                    icon: "dashboard"
                }
            ]
        },
        {
            section: "Student Workflow",
            items: [
                {
                    label: "Student Management",
                    href: "/staff/students",
                    icon: "students"
                },
                {
                    label: "Faculty / Instructor Management",
                    href: "/staff/instructors",
                    icon: "faculty"
                },
                {
                    label: "Manage Classes and Schedules",
                    href: "/staff/classes",
                    icon: "classes"
                },
                {
                    label: "Enroll Students",
                    href: "/staff/enrollments",
                    icon: "enrollment"
                },
                {
                    label: "Recycle Bin",
                    href: "/staff/bin",
                    icon: "bin"
                },
                {
                    label: "Record Grades",
                    href: "/staff/grades",
                    icon: "grades"
                },
                {
                    label: "Document Requests",
                    href: "/staff/documents",
                    icon: "documents"
                },
                {
                    label: "Staff Directory",
                    href: "/staff/staff-directory",
                    icon: "directory"
                }
            ]
        },
        {
            section: "Account",
            items: [
                {
                    label: "My Profile",
                    href: "/profile",
                    icon: "profile"
                }
            ]
        }
    ];
}
}),
"[project]/components/app-shell-client.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "AppShellClient",
    ()=>AppShellClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const AppShellClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AppShellClient() from the server but AppShellClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/app-shell-client.tsx <module evaluation>", "AppShellClient");
}),
"[project]/components/app-shell-client.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "AppShellClient",
    ()=>AppShellClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const AppShellClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AppShellClient() from the server but AppShellClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/app-shell-client.tsx", "AppShellClient");
}),
"[project]/components/app-shell-client.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$shell$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/app-shell-client.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$shell$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/app-shell-client.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$shell$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/app-shell.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "AppShell",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/navigation.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$shell$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app-shell-client.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
async function AppShell({ user, title, description, children }) {
    const nav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNavigation"])(user.role);
    const [notifications, unreadCount, successMessage] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listNotifications"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUnreadNotificationCount"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSuccessFlash"])()
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$shell$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppShellClient"], {
        user: user,
        title: title,
        description: description,
        nav: nav,
        notifications: notifications,
        unreadCount: unreadCount,
        successMessage: successMessage,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/app-shell.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/section-card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionCard",
    ()=>SectionCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function SectionCard({ title, description, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-head",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/section-card.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/components/section-card.tsx",
                            lineNumber: 17,
                            columnNumber: 26
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/section-card.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/section-card.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/section-card.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/student-data-integration-panel.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "StudentDataIntegrationPanel",
    ()=>StudentDataIntegrationPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const StudentDataIntegrationPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StudentDataIntegrationPanel() from the server but StudentDataIntegrationPanel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/student-data-integration-panel.tsx <module evaluation>", "StudentDataIntegrationPanel");
}),
"[project]/components/student-data-integration-panel.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "StudentDataIntegrationPanel",
    ()=>StudentDataIntegrationPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const StudentDataIntegrationPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StudentDataIntegrationPanel() from the server but StudentDataIntegrationPanel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/student-data-integration-panel.tsx", "StudentDataIntegrationPanel");
}),
"[project]/components/student-data-integration-panel.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$student$2d$data$2d$integration$2d$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/student-data-integration-panel.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$student$2d$data$2d$integration$2d$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/student-data-integration-panel.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$student$2d$data$2d$integration$2d$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/students-table-panel.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "StudentsTablePanel",
    ()=>StudentsTablePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const StudentsTablePanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StudentsTablePanel() from the server but StudentsTablePanel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/students-table-panel.tsx <module evaluation>", "StudentsTablePanel");
}),
"[project]/components/students-table-panel.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "StudentsTablePanel",
    ()=>StudentsTablePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const StudentsTablePanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StudentsTablePanel() from the server but StudentsTablePanel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/students-table-panel.tsx", "StudentsTablePanel");
}),
"[project]/components/students-table-panel.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$students$2d$table$2d$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/students-table-panel.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$students$2d$table$2d$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/students-table-panel.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$students$2d$table$2d$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/lib/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "requireRole",
    ()=>requireRole,
    "requireUser",
    ()=>requireUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session.ts [app-rsc] (ecmascript)");
;
;
function normalizeRequestedRole(role) {
    const normalized = role.trim().toLowerCase();
    if (normalized === "administrator" || normalized === "admin") {
        return "admin";
    }
    return "staff";
}
async function requireUser() {
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSessionUser"])();
    if (!user) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
    }
    return user;
}
async function requireRole(role) {
    const user = await requireUser();
    const userRole = normalizeRequestedRole(user.role);
    const needed = normalizeRequestedRole(role);
    if (needed === "staff" && userRole === "admin") {
        return user;
    }
    if (userRole !== needed) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(userRole === "admin" ? "/admin/dashboard" : "/staff/dashboard");
    }
    return user;
}
}),
"[project]/app/(protected)/staff/students/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>StudentsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$shell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app-shell.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/section-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$student$2d$data$2d$integration$2d$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/student-data-integration-panel.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$students$2d$table$2d$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/students-table-panel.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$shell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$shell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
async function StudentsPage({ searchParams }) {
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireRole"])("Registrar Staff");
    const params = await searchParams;
    const [students, filters, nextStudentNumber] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listStudents"])(params.q ?? "", params.program ?? "", params.year ?? ""),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStudentFilters"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNextStudentNumber"])()
    ]);
    const isAdmin = user.role.trim().toLowerCase() === "admin";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$shell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppShell"], {
        user: user,
        title: "Student Management",
        description: "Student intake and maintenance fully handled in the translated TypeScript app.",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stats-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-label",
                                children: "Intake Queue"
                            }, void 0, false, {
                                fileName: "[project]/app/(protected)/staff/students/page.tsx",
                                lineNumber: 25,
                                columnNumber: 36
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-value",
                                children: students.length
                            }, void 0, false, {
                                fileName: "[project]/app/(protected)/staff/students/page.tsx",
                                lineNumber: 25,
                                columnNumber: 82
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-note",
                                children: "Current student records in view."
                            }, void 0, false, {
                                fileName: "[project]/app/(protected)/staff/students/page.tsx",
                                lineNumber: 25,
                                columnNumber: 133
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(protected)/staff/students/page.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-label",
                                children: "Enrollment Ready"
                            }, void 0, false, {
                                fileName: "[project]/app/(protected)/staff/students/page.tsx",
                                lineNumber: 26,
                                columnNumber: 36
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-value",
                                children: filters.activeStudents
                            }, void 0, false, {
                                fileName: "[project]/app/(protected)/staff/students/page.tsx",
                                lineNumber: 26,
                                columnNumber: 86
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-note",
                                children: "Students marked active."
                            }, void 0, false, {
                                fileName: "[project]/app/(protected)/staff/students/page.tsx",
                                lineNumber: 26,
                                columnNumber: 144
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(protected)/staff/students/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-label",
                                children: "Needs Review"
                            }, void 0, false, {
                                fileName: "[project]/app/(protected)/staff/students/page.tsx",
                                lineNumber: 27,
                                columnNumber: 36
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-value",
                                children: filters.onHoldStudents
                            }, void 0, false, {
                                fileName: "[project]/app/(protected)/staff/students/page.tsx",
                                lineNumber: 27,
                                columnNumber: 82
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-note",
                                children: "Records on hold for validation."
                            }, void 0, false, {
                                fileName: "[project]/app/(protected)/staff/students/page.tsx",
                                lineNumber: 27,
                                columnNumber: 140
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(protected)/staff/students/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-label",
                                children: "Programs"
                            }, void 0, false, {
                                fileName: "[project]/app/(protected)/staff/students/page.tsx",
                                lineNumber: 28,
                                columnNumber: 36
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-value",
                                children: filters.programs.length
                            }, void 0, false, {
                                fileName: "[project]/app/(protected)/staff/students/page.tsx",
                                lineNumber: 28,
                                columnNumber: 78
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-note",
                                children: "Program filters available."
                            }, void 0, false, {
                                fileName: "[project]/app/(protected)/staff/students/page.tsx",
                                lineNumber: 28,
                                columnNumber: 137
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(protected)/staff/students/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(protected)/staff/students/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "content-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "Student Master List",
                        description: "This list remains the intake endpoint for the rest of the registrar workflow.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$students$2d$table$2d$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StudentsTablePanel"], {
                            students: students,
                            filters: filters,
                            params: params,
                            nextStudentNumber: nextStudentNumber,
                            canManage: isAdmin
                        }, void 0, false, {
                            fileName: "[project]/app/(protected)/staff/students/page.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(protected)/staff/students/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "Student Data Integrations",
                        description: "Send registrar student datasets to Cashier, Clinic, Guidance, Prefect, Computer Laboratory, and CRAD from this page.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$student$2d$data$2d$integration$2d$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StudentDataIntegrationPanel"], {
                            targets: [
                                {
                                    key: "cashier",
                                    label: "Cashier"
                                },
                                {
                                    key: "clinic",
                                    label: "Clinic"
                                },
                                {
                                    key: "guidance",
                                    label: "Guidance"
                                },
                                {
                                    key: "prefect",
                                    label: "Prefect"
                                },
                                {
                                    key: "computer-laboratory",
                                    label: "Computer Laboratory"
                                },
                                {
                                    key: "crad",
                                    label: "CRAD"
                                }
                            ]
                        }, void 0, false, {
                            fileName: "[project]/app/(protected)/staff/students/page.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(protected)/staff/students/page.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/app/(protected)/staff/students/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(protected)/staff/students/page.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/(protected)/staff/students/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(protected)/staff/students/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4d4fff71._.js.map