module.exports = [
"[project]/.next-internal/server/app/api/[resource]/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/env.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "env",
    ()=>env
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
;
const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    DATABASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    SESSION_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(8),
    APP_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("http://localhost:3000"),
    INTEGRATION_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(""),
    CRAD_STUDENT_LIST_ENDPOINT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(""),
    PREFECT_STUDENT_PERSONAL_INFO_ENDPOINT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(""),
    COMLAB_STUDENT_LIST_ENDPOINT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(""),
    CASHIER_ENROLLMENT_DATA_ENDPOINT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(""),
    CLINIC_STUDENT_PERSONAL_INFO_ENDPOINT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(""),
    GUIDANCE_STUDENT_PERSONAL_INFO_ENDPOINT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(""),
    GUIDANCE_STUDENT_ACADEMIC_RECORDS_ENDPOINT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(""),
    PMED_ENROLLMENT_STATISTICS_ENDPOINT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("")
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
    PMED_ENROLLMENT_STATISTICS_ENDPOINT: process.env.PMED_ENROLLMENT_STATISTICS_ENDPOINT ?? ""
});
}),
"[externals]/pg [external] (pg, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("pg");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/env.ts [app-route] (ecmascript)");
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
const DB_POOL_MAX = Number(process.env.DB_POOL_MAX ?? 10);
const DB_CONNECTION_TIMEOUT_MS = Number(process.env.DB_CONNECTION_TIMEOUT_MS ?? 30000);
const DB_IDLE_TIMEOUT_MS = Number(process.env.DB_IDLE_TIMEOUT_MS ?? 30000);
const DB_QUERY_CONCURRENCY = Number(process.env.DB_QUERY_CONCURRENCY ?? 4);
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
    connectionString: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].DATABASE_URL,
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
    for (const tableName of tableNames){
        if (await hasTable(tableName)) {
            return tableName;
        }
    }
    return null;
}
async function hasColumn(tableName, columnName, schema = "public") {
    const [resolvedSchema, resolvedTable] = tableName.includes(".") ? tableName.split(".", 2) : [
        schema,
        tableName
    ];
    const cacheKey = `${resolvedSchema}.${resolvedTable}.${columnName}`;
    const cached = columnExistsCache.get(cacheKey);
    if (typeof cached === "boolean") {
        return cached;
    }
    const pending = columnExistsPromiseCache.get(cacheKey);
    if (pending) {
        return pending;
    }
    const lookupPromise = (async ()=>{
        const exists = await queryValue(`select column_name
       from information_schema.columns
       where table_schema = $1
         and table_name = $2
         and column_name = $3
       limit 1`, [
            resolvedSchema,
            resolvedTable,
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
"[project]/lib/department-integration.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "dispatchRegistrarDepartmentFlow",
    ()=>dispatchRegistrarDepartmentFlow,
    "getRegistrarDepartmentFlowStatus",
    ()=>getRegistrarDepartmentFlowStatus,
    "getRegistrarDepartmentFlowSummary",
    ()=>getRegistrarDepartmentFlowSummary,
    "getRegistrarDepartmentPreview",
    ()=>getRegistrarDepartmentPreview,
    "hasDepartmentFlowIntegration",
    ()=>hasDepartmentFlowIntegration,
    "listRegistrarDepartmentFlowEvents",
    ()=>listRegistrarDepartmentFlowEvents,
    "listRegistrarIncomingDepartments",
    ()=>listRegistrarIncomingDepartments,
    "listRegistrarOutgoingDepartments",
    ()=>listRegistrarOutgoingDepartments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
function asString(value) {
    return value === null || value === undefined ? "" : String(value);
}
function asNullableString(value) {
    const normalized = asString(value).trim();
    return normalized ? normalized : null;
}
function asNumber(value) {
    const normalized = Number(value ?? 0);
    return Number.isFinite(normalized) ? normalized : 0;
}
function asRouteSummary(value) {
    const record = value ?? {};
    return {
        route_key: asString(record.route_key),
        flow_name: asString(record.flow_name),
        event_code: asString(record.event_code),
        endpoint_path: asString(record.endpoint_path),
        priority: asNumber(record.priority),
        is_required: Boolean(record.is_required)
    };
}
function asRouteSummaryList(value) {
    if (!Array.isArray(value)) {
        return [];
    }
    return value.map((item)=>asRouteSummary(item)).filter((item)=>item.route_key).sort((left, right)=>left.priority - right.priority);
}
function asConnection(value) {
    const record = value ?? {};
    return {
        department_key: asString(record.department_key),
        department_name: asString(record.department_name),
        system_code: asString(record.system_code),
        module_directory: asString(record.module_directory),
        purpose: asString(record.purpose),
        default_action_label: asString(record.default_action_label) || "Dispatch",
        dispatch_rpc_name: asString(record.dispatch_rpc_name) || "dispatch_department_flow",
        status_rpc_name: asString(record.status_rpc_name) || "get_department_flow_status",
        ack_rpc_name: asString(record.ack_rpc_name) || "acknowledge_department_flow",
        dispatch_endpoint: asString(record.dispatch_endpoint) || "/rest/v1/rpc/dispatch_department_flow",
        pending_count: asNumber(record.pending_count),
        in_progress_count: asNumber(record.in_progress_count),
        failed_count: asNumber(record.failed_count),
        completed_count: asNumber(record.completed_count),
        route_count: asNumber(record.route_count),
        latest_status: asNullableString(record.latest_status),
        latest_event_code: asNullableString(record.latest_event_code),
        latest_correlation_id: asNullableString(record.latest_correlation_id),
        latest_created_at: asNullableString(record.latest_created_at),
        routes: asRouteSummaryList(record.routes)
    };
}
function asConnectionList(value) {
    if (!Array.isArray(value)) {
        return [];
    }
    return value.map((item)=>asConnection(item)).filter((item)=>item.department_key);
}
function asDispatchResult(value) {
    const record = value ?? {};
    return {
        ok: Boolean(record.ok),
        event_id: asNullableString(record.event_id) ?? undefined,
        correlation_id: asNullableString(record.correlation_id) ?? undefined,
        route_key: asNullableString(record.route_key) ?? undefined,
        source_department_key: asNullableString(record.source_department_key) ?? undefined,
        target_department_key: asNullableString(record.target_department_key) ?? undefined,
        event_code: asNullableString(record.event_code) ?? undefined,
        status: asNullableString(record.status) ?? undefined,
        dispatch_endpoint: asNullableString(record.dispatch_endpoint) ?? undefined,
        message: asNullableString(record.message) ?? undefined
    };
}
function asStatusResult(value) {
    const record = value ?? {};
    return {
        ok: Boolean(record.ok),
        event_id: asNullableString(record.event_id) ?? undefined,
        correlation_id: asNullableString(record.correlation_id) ?? undefined,
        route_key: asNullableString(record.route_key) ?? undefined,
        flow_name: asNullableString(record.flow_name) ?? undefined,
        source_department_key: asNullableString(record.source_department_key) ?? undefined,
        target_department_key: asNullableString(record.target_department_key) ?? undefined,
        event_code: asNullableString(record.event_code) ?? undefined,
        status: asNullableString(record.status) ?? undefined,
        dispatch_endpoint: asNullableString(record.dispatch_endpoint) ?? undefined,
        source_record_id: asNullableString(record.source_record_id),
        request_payload: record.request_payload ?? {},
        response_payload: record.response_payload ?? {},
        initiated_by: asNullableString(record.initiated_by),
        dispatched_at: asNullableString(record.dispatched_at),
        acknowledged_at: asNullableString(record.acknowledged_at),
        last_error: asNullableString(record.last_error),
        created_at: asNullableString(record.created_at),
        updated_at: asNullableString(record.updated_at),
        message: asNullableString(record.message) ?? undefined
    };
}
function normalizeStudentDirectoryRecord(value) {
    if (!value) {
        return null;
    }
    return {
        student_id: asNumber(value.student_id),
        student_no: asString(value.student_no),
        first_name: asString(value.first_name),
        middle_name: asString(value.middle_name),
        last_name: asString(value.last_name),
        student_name: asString(value.student_name),
        program: asString(value.program),
        year_level: asString(value.year_level),
        section_name: asString(value.section_name),
        registrar_status: asString(value.registrar_status),
        enrollment_status: asString(value.enrollment_status),
        course_year_section: asString(value.course_year_section),
        email: asString(value.email),
        phone: asString(value.phone),
        subject_count: asNumber(value.subject_count),
        subject_codes: asString(value.subject_codes),
        subject_load: value.subject_load ?? []
    };
}
function buildSourceRecordId(targetDepartmentKey, eventCode, studentNo) {
    const sanitize = (value)=>value.trim().toUpperCase().replace(/[^A-Z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "REGISTRAR";
    return [
        "REG",
        sanitize(targetDepartmentKey),
        sanitize(eventCode),
        sanitize(studentNo),
        Date.now().toString()
    ].join("-");
}
function buildPreviewPayload(student, connection, route) {
    return {
        student_id: student.student_id,
        student_no: student.student_no,
        first_name: student.first_name,
        middle_name: student.middle_name,
        last_name: student.last_name,
        student_name: student.student_name,
        program: student.program,
        year_level: student.year_level,
        section_name: student.section_name,
        registrar_status: student.registrar_status,
        enrollment_status: student.enrollment_status,
        course_year_section: student.course_year_section,
        email: student.email,
        phone: student.phone,
        subject_count: student.subject_count,
        subject_codes: student.subject_codes,
        subject_load: Array.isArray(student.subject_load) ? student.subject_load : [],
        source_department_key: "registrar",
        source_department_name: "Registrar",
        target_department_key: connection.department_key,
        target_department_name: connection.department_name,
        route_key: route?.route_key ?? null,
        flow_name: route?.flow_name ?? null,
        event_code: route?.event_code ?? null
    };
}
function selectRoute(connection, eventCode) {
    if (eventCode) {
        return connection.routes.find((route)=>route.event_code === eventCode) ?? null;
    }
    return connection.routes[0] ?? null;
}
async function hasDepartmentFlowIntegration() {
    const [departments, routes, events] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasTable"])("public.integration_departments"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasTable"])("public.integration_flow_routes"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasTable"])("public.integration_flow_events")
    ]);
    return departments && routes && events;
}
async function listRegistrarOutgoingDepartments() {
    if (!await hasDepartmentFlowIntegration()) {
        return [];
    }
    const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])("select public.get_department_integration_registry($1) as payload", [
        "registrar"
    ]);
    return asConnectionList(payload);
}
async function listRegistrarIncomingDepartments() {
    if (!await hasDepartmentFlowIntegration()) {
        return [];
    }
    const rows = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select
        source.department_key,
        source.department_name,
        source.system_code,
        source.module_directory,
        source.purpose,
        source.default_action_label,
        count(distinct route.id)::int as route_count,
        count(event.id) filter (where event.status in ('queued', 'pending'))::int as pending_count,
        count(event.id) filter (where event.status in ('dispatched', 'in_progress', 'awaiting_acknowledgement'))::int as in_progress_count,
        count(event.id) filter (where event.status in ('failed', 'blocked'))::int as failed_count,
        count(event.id) filter (where event.status in ('acknowledged', 'completed'))::int as completed_count,
        latest_event.status as latest_status,
        latest_event.event_code as latest_event_code,
        latest_event.correlation_id as latest_correlation_id,
        latest_event.created_at::text as latest_created_at,
        coalesce(
          jsonb_agg(
            distinct jsonb_build_object(
              'route_key', route.route_key,
              'flow_name', route.flow_name,
              'event_code', route.event_code,
              'endpoint_path', route.endpoint_path,
              'priority', route.priority,
              'is_required', route.is_required
            )
          ) filter (where route.route_key is not null),
          '[]'::jsonb
        ) as routes
      from public.integration_departments source
      join public.integration_flow_routes route
        on route.source_department_key = source.department_key
       and route.target_department_key = 'registrar'
       and route.is_active = true
      left join public.integration_flow_events event
        on event.route_key = route.route_key
      left join lateral (
        select e.status, e.event_code, e.correlation_id, e.created_at
        from public.integration_flow_events e
        where e.source_department_key = source.department_key
          and e.target_department_key = 'registrar'
        order by e.created_at desc
        limit 1
      ) latest_event on true
      where source.is_active = true
      group by
        source.department_key,
        source.department_name,
        source.system_code,
        source.module_directory,
        source.purpose,
        source.default_action_label,
        latest_event.status,
        latest_event.event_code,
        latest_event.correlation_id,
        latest_event.created_at
      order by source.department_name`);
    return rows.map((row)=>asConnection({
            ...row,
            dispatch_rpc_name: "dispatch_department_flow",
            status_rpc_name: "get_department_flow_status",
            ack_rpc_name: "acknowledge_department_flow",
            dispatch_endpoint: "/rest/v1/rpc/dispatch_department_flow"
        }));
}
async function listRegistrarDepartmentFlowEvents(limit = 20) {
    if (!await hasDepartmentFlowIntegration()) {
        return [];
    }
    const rows = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select
        event.id::text as id,
        event.correlation_id,
        event.route_key,
        route.flow_name,
        event.source_department_key,
        source.department_name as source_department_name,
        event.target_department_key,
        target.department_name as target_department_name,
        event.event_code,
        event.status,
        event.dispatch_endpoint,
        event.source_record_id,
        event.request_payload,
        event.response_payload,
        event.initiated_by::text as initiated_by,
        event.dispatched_at::text as dispatched_at,
        event.acknowledged_at::text as acknowledged_at,
        event.last_error,
        event.created_at::text as created_at,
        event.updated_at::text as updated_at
      from public.integration_flow_events event
      join public.integration_flow_routes route
        on route.route_key = event.route_key
      join public.integration_departments source
        on source.department_key = event.source_department_key
      join public.integration_departments target
        on target.department_key = event.target_department_key
      where event.source_department_key = 'registrar'
         or event.target_department_key = 'registrar'
      order by coalesce(event.updated_at, event.created_at) desc
      limit $1`, [
        limit
    ]);
    return rows.map((row)=>({
            id: asString(row.id),
            correlation_id: asString(row.correlation_id),
            route_key: asString(row.route_key),
            flow_name: asString(row.flow_name),
            source_department_key: asString(row.source_department_key),
            source_department_name: asString(row.source_department_name),
            target_department_key: asString(row.target_department_key),
            target_department_name: asString(row.target_department_name),
            event_code: asString(row.event_code),
            status: asString(row.status),
            dispatch_endpoint: asString(row.dispatch_endpoint),
            source_record_id: asNullableString(row.source_record_id),
            request_payload: row.request_payload ?? {},
            response_payload: row.response_payload ?? {},
            initiated_by: asNullableString(row.initiated_by),
            dispatched_at: asNullableString(row.dispatched_at),
            acknowledged_at: asNullableString(row.acknowledged_at),
            last_error: asNullableString(row.last_error),
            created_at: asNullableString(row.created_at),
            updated_at: asNullableString(row.updated_at)
        }));
}
async function getRegistrarDepartmentFlowSummary() {
    if (!await hasDepartmentFlowIntegration()) {
        return {
            enabled: false,
            outgoing_departments: 0,
            outgoing_routes: 0,
            incoming_departments: 0,
            incoming_routes: 0,
            queued_events: 0,
            completed_events: 0,
            failed_events: 0
        };
    }
    const [outgoing, incoming, queuedEvents, completedEvents, failedEvents] = await Promise.all([
        listRegistrarOutgoingDepartments(),
        listRegistrarIncomingDepartments(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*)
       from public.integration_flow_events
       where (source_department_key = 'registrar' or target_department_key = 'registrar')
         and status in ('queued', 'pending', 'dispatched', 'in_progress', 'awaiting_acknowledgement')`),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*)
       from public.integration_flow_events
       where (source_department_key = 'registrar' or target_department_key = 'registrar')
         and status in ('acknowledged', 'completed')`),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*)
       from public.integration_flow_events
       where (source_department_key = 'registrar' or target_department_key = 'registrar')
         and status in ('failed', 'blocked')`)
    ]);
    return {
        enabled: true,
        outgoing_departments: outgoing.length,
        outgoing_routes: outgoing.reduce((total, connection)=>total + connection.route_count, 0),
        incoming_departments: incoming.length,
        incoming_routes: incoming.reduce((total, connection)=>total + connection.route_count, 0),
        queued_events: asNumber(queuedEvents),
        completed_events: asNumber(completedEvents),
        failed_events: asNumber(failedEvents)
    };
}
async function getRegistrarDepartmentFlowStatus({ eventId, correlationId }) {
    if (!await hasDepartmentFlowIntegration()) {
        return {
            ok: false,
            status: "not_configured",
            message: "Shared department integration tables are not available."
        };
    }
    const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])("select public.get_department_flow_status($1::uuid, $2) as payload", [
        eventId?.trim() || null,
        correlationId?.trim() || null
    ]);
    return asStatusResult(payload);
}
async function getRegistrarStudentDirectoryRecord(options) {
    const directoryTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar.student_directory", "public.registrar_student_directory", "registrar_student_directory");
    if (!directoryTable) {
        throw new Error("The registrar student directory view is not available in this database yet.");
    }
    if (options.studentNo?.trim()) {
        return normalizeStudentDirectoryRecord(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryOne"])(`select
            student_id,
            student_no,
            first_name,
            middle_name,
            last_name,
            student_name,
            program,
            year_level,
            section_name,
            registrar_status,
            enrollment_status,
            course_year_section,
            email,
            phone,
            subject_count,
            subject_codes,
            subject_load
         from ${directoryTable}
         where student_no = $1
         limit 1`, [
            options.studentNo.trim()
        ]));
    }
    if (options.studentId && options.studentId > 0) {
        return normalizeStudentDirectoryRecord(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryOne"])(`select
            student_id,
            student_no,
            first_name,
            middle_name,
            last_name,
            student_name,
            program,
            year_level,
            section_name,
            registrar_status,
            enrollment_status,
            course_year_section,
            email,
            phone,
            subject_count,
            subject_codes,
            subject_load
         from ${directoryTable}
         where student_id = $1
         limit 1`, [
            options.studentId
        ]));
    }
    return null;
}
async function getRegistrarDepartmentPreview(options) {
    const connections = await listRegistrarOutgoingDepartments();
    const connection = connections.find((item)=>item.department_key === options.targetDepartmentKey.trim().toLowerCase());
    if (!connection) {
        throw new Error(`No connected department route is configured for ${options.targetDepartmentKey}.`);
    }
    const route = selectRoute(connection, options.eventCode);
    const student = await getRegistrarStudentDirectoryRecord({
        studentNo: options.studentNo,
        studentId: options.studentId
    });
    if (!student) {
        throw new Error("Student not found in the registrar directory.");
    }
    return {
        source_department_key: "registrar",
        target_department_key: connection.department_key,
        target_department_name: connection.department_name,
        endpoint: connection.dispatch_endpoint,
        route,
        source_record_id: buildSourceRecordId(connection.department_key, route?.event_code ?? options.eventCode?.trim() ?? "department_flow", student.student_no),
        student: {
            student_id: student.student_id,
            student_no: student.student_no,
            student_name: student.student_name
        },
        payload: buildPreviewPayload(student, connection, route)
    };
}
async function dispatchRegistrarDepartmentFlow(options) {
    if (!await hasDepartmentFlowIntegration()) {
        return {
            ok: false,
            status: "not_configured",
            message: "Shared department integration tables are not available."
        };
    }
    const preview = await getRegistrarDepartmentPreview(options);
    const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])("select public.dispatch_department_flow($1, $2, $3, $4, $5::jsonb, $6::uuid) as payload", [
        "registrar",
        preview.target_department_key,
        preview.route?.event_code ?? options.eventCode?.trim() ?? null,
        options.sourceRecordId?.trim() || preview.source_record_id,
        JSON.stringify(preview.payload),
        null
    ]);
    return asDispatchResult(payload);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/integration-catalog.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildIntegrationManifest",
    ()=>buildIntegrationManifest,
    "integrationCatalog",
    ()=>integrationCatalog
]);
const integrationCatalog = [
    {
        key: "payment-confirmations",
        label: "Payment Confirmation",
        direction: "incoming",
        office: "Cashier",
        method: "POST",
        description: "Registrar receives payment confirmations before enrollment validation proceeds.",
        consumers: [
            "Registrar"
        ],
        systemFolders: [
            "Registrar"
        ],
        uiMode: "api"
    },
    {
        key: "medical-clearances",
        label: "Medical Clearance",
        direction: "incoming",
        office: "Clinic",
        method: "POST",
        description: "Clinic sends clearance status for enrollment and document release checks.",
        consumers: [
            "Registrar"
        ],
        systemFolders: [
            "Registrar"
        ],
        uiMode: "api"
    },
    {
        key: "counseling-reports",
        label: "Counseling Report",
        direction: "incoming",
        office: "Guidance",
        method: "POST",
        description: "Guidance sends counseling completion or hold information into registrar records.",
        consumers: [
            "Registrar"
        ],
        systemFolders: [
            "Registrar"
        ],
        uiMode: "api"
    },
    {
        key: "discipline-records",
        label: "Discipline Record",
        direction: "incoming",
        office: "Prefect",
        method: "POST",
        description: "Prefect sends discipline holds and incident-linked clearance status into registrar.",
        consumers: [
            "Registrar",
            "PrefectManagementsSystem"
        ],
        systemFolders: [
            "Registrar",
            "PrefectManagementsSystem"
        ],
        uiMode: "folder"
    },
    {
        key: "activity-participation-records",
        label: "Activity Participation Record",
        direction: "incoming",
        office: "CRAD",
        method: "POST",
        description: "CRAD sends participation or completion records that registrar can reference.",
        consumers: [
            "Registrar",
            "CRADManagement"
        ],
        systemFolders: [
            "Registrar",
            "CRADManagement"
        ],
        uiMode: "folder"
    },
    {
        key: "enrollment-data",
        label: "Student Enrollment Data",
        direction: "outgoing",
        office: "Cashier",
        method: "GET",
        query: "student_no=2025-0001",
        description: "Cashier pulls the student's latest enrollment rows and class references.",
        consumers: [
            "Cashier"
        ],
        systemFolders: [
            "Registrar"
        ],
        uiMode: "api"
    },
    {
        key: "enrollment-feed",
        label: "Enrollment Feed",
        direction: "outgoing",
        office: "Cashier",
        method: "GET",
        description: "Cashier pulls a bulk enrollment feed with student and class details in a single request.",
        consumers: [
            "Cashier"
        ],
        systemFolders: [
            "Registrar"
        ],
        uiMode: "api"
    },
    {
        key: "student-personal-info",
        label: "Student Personal Information",
        direction: "outgoing",
        office: "Clinic / Guidance / Prefect",
        method: "GET",
        query: "student_no=2025-0001",
        description: "Consumer systems pull core student identity data for verification workflows.",
        consumers: [
            "Clinic",
            "Guidance",
            "Prefect",
            "PrefectManagementsSystem"
        ],
        systemFolders: [
            "Registrar",
            "PrefectManagementsSystem"
        ],
        uiMode: "hybrid"
    },
    {
        key: "student-academic-records",
        label: "Student Academic Records",
        direction: "outgoing",
        office: "Guidance",
        method: "GET",
        query: "student_no=2025-0001",
        description: "Guidance can pull grades and subject details for advising or intervention workflows.",
        consumers: [
            "Guidance"
        ],
        systemFolders: [
            "Registrar"
        ],
        uiMode: "api"
    },
    {
        key: "student-list",
        label: "Student List",
        direction: "outgoing",
        office: "Computer Laboratory / CRAD",
        method: "GET",
        description: "Shared student list feed for external systems that need registrar roster data.",
        consumers: [
            "Computer Laboratory",
            "CRAD",
            "CRADManagement"
        ],
        systemFolders: [
            "Registrar",
            "CRADManagement"
        ],
        uiMode: "hybrid"
    },
    {
        key: "enrollment-statistics",
        label: "Enrollment Statistics",
        direction: "outgoing",
        office: "PMED",
        method: "GET",
        description: "PMED can pull aggregate enrollment, student, and class counts from registrar.",
        consumers: [
            "PMED"
        ],
        systemFolders: [
            "Registrar"
        ],
        uiMode: "api"
    }
];
function buildIntegrationManifest(basePath = "/api/integrations") {
    const entries = integrationCatalog.map((entry)=>({
            ...entry,
            path: entry.query ? `${basePath}?resource=${entry.key}&${entry.query}` : `${basePath}?resource=${entry.key}`
        }));
    return {
        incoming: entries.filter((entry)=>entry.direction === "incoming"),
        outgoing: entries.filter((entry)=>entry.direction === "outgoing")
    };
}
}),
"[project]/lib/data.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
    "listUsers",
    ()=>listUsers,
    "normalizeRole",
    ()=>normalizeRole,
    "workflowTemplates",
    ()=>workflowTemplates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
    const account = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryOne"])(`select id, username, email, full_name, role, is_super_admin, password_hash, status
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_students", "students");
}
async function getInstructorsTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("hr_instructors", "hr.instructors", "registrar_instructors", "registrar.instructors", "instructors");
}
async function getInstructorAssignmentsTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_instructor_class_assignments", "registrar.instructor_class_assignments", "instructor_class_assignments");
}
async function getClassesTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_classes", "classes");
}
async function getClassListsTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_class_lists", "registrar.class_lists", "class_lists");
}
async function getSchedulesTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_schedules", "schedules");
}
async function getEnrollmentsTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar.enrollments", "registrar_enrollments", "enrollments");
}
async function getGradesTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar.grades", "registrar_grades", "grades");
}
async function getAuditLogsTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_audit_logs", "audit_logs");
}
async function getNotificationsTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_notifications", "notifications");
}
async function getAcademicReportsTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_academic_reports", "academic_reports");
}
async function getUsersTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_users", "users");
}
async function getRolesTable() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_roles", "roles");
}
async function getDashboardStats() {
    const reportsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("reports", "registrar_reports");
    const documentsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("documents", "registrar_documents");
    const gradesTable = await getGradesTable();
    const auditLogsTable = await getAuditLogsTable();
    const studentsTable = await getStudentsTable();
    const classesTable = await getClassesTable();
    const enrollmentsTable = await getEnrollmentsTable();
    const [reports, documents, grades, auditLogs, students, classes, enrollments] = await Promise.all([
        reportsTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${reportsTable}`) : Promise.resolve(0),
        documentsTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${documentsTable} where status = 'Pending'`) : Promise.resolve(0),
        gradesTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${gradesTable}`) : Promise.resolve(0),
        auditLogsTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${auditLogsTable}`) : Promise.resolve(0),
        studentsTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${studentsTable}`) : Promise.resolve(0),
        classesTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${classesTable}`) : Promise.resolve(0),
        enrollmentsTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${enrollmentsTable}`) : Promise.resolve(0)
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
    const students = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select * from ${studentsTable} ${conditions.length ? `where ${conditions.join(" and ")}` : ""}
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
    return students.map((student)=>({
            ...student,
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar.cashier_payment_links", "cashier_payment_links"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar.cashier_integration_events", "cashier_integration_events"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("integration_records")
    ]);
    if (paymentLinksTable) {
        const rows = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select distinct on (source_key) source_key, payment_status
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
        const rows = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select distinct on (source_key) source_key, payment_status
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
        const rows = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select distinct on (student_id) student_id, external_status
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
    const integrationRecordsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("integration_records");
    if (!integrationRecordsTable || students.length === 0) {
        return statusMap;
    }
    const studentIds = students.map((student)=>student.id).filter((value)=>Number.isFinite(value));
    if (studentIds.length === 0) {
        return statusMap;
    }
    const rows = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select distinct on (student_id, record_type) student_id, record_type, external_status
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
    const integrationRecordsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("integration_records");
    if (!integrationRecordsTable || students.length === 0) {
        return detailMap;
    }
    const studentIds = students.map((student)=>student.id).filter((value)=>Number.isFinite(value));
    if (studentIds.length === 0) {
        return detailMap;
    }
    const rows = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select distinct on (student_id, record_type)
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select distinct program from ${studentsTable} where coalesce(program, '') <> '' order by program`),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select distinct year_level from ${studentsTable} where coalesce(year_level, '') <> '' order by year_level`),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${studentsTable} where status = 'Active'`),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${studentsTable} where status = 'On Hold'`)
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
    const latest = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryOne"])(`select student_no
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
    const baseRows = search.trim() ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select id, employee_no, first_name, last_name, department
       from ${instructorsTable}
       where employee_no ilike $1 or first_name ilike $1 or last_name ilike $1 or department ilike $1
       order by last_name, first_name`, [
        `%${search.trim()}%`
    ]) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select id, employee_no, first_name, last_name, department from ${instructorsTable} order by last_name, first_name`);
    if (baseRows.length === 0) {
        return baseRows;
    }
    const assignmentsTable = await getInstructorAssignmentsTable();
    const classesTable = await getClassesTable();
    const employeeNos = baseRows.map((row)=>row.employee_no).filter(Boolean);
    const assignmentMap = new Map();
    if (assignmentsTable && classesTable && employeeNos.length > 0) {
        const assignments = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select assignments.instructor_employee_no, classes.id as class_id, classes.class_code, classes.title
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select classes.id, classes.class_code, classes.title, classes.course, classes.units,
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select distinct day from ${schedulesTable} where coalesce(day, '') <> '' order by day`),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select distinct time from ${schedulesTable} where coalesce(time, '') <> '' order by time`),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select distinct room from ${schedulesTable} where coalesce(room, '') <> '' order by room`),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select distinct course from ${classesTable} where coalesce(course, '') <> '' order by course`)
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select schedules.id, classes.id as class_id, classes.class_code, classes.title, classes.course,
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
    const classInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryOne"])(`select classes.id, classes.class_code, classes.title, classes.course, classes.units,
            schedules.day, schedules.time, schedules.room
     from ${classesTable} as classes
     left join ${schedulesTable} as schedules on schedules.class_id = classes.id
     where classes.id = $1
     limit 1`, [
        classId
    ]);
    const roster = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select enrollments.id as enrollment_id, enrollments.status as enrollment_status,
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select classes.id,
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select id, class_code, title
       from ${classesTable}
       order by class_code`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select classes.id, classes.class_code, classes.title
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
    const hasDeletedAt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "deleted_at");
    const hasCashierEnrollmentFeed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasTable"])("cashier_registrar_student_enrollment_feed");
    const hasAcademicYearColumn = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "academic_year");
    const hasSemesterColumn = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "semester");
    const hasTuitionFeeColumn = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "tuition_fee");
    const hasDownpaymentAmountColumn = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "downpayment_amount");
    const hasMedicalFeeColumn = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "medical_fee");
    const hasIdFeeColumn = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "id_fee");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select enrollments.id, enrollments.student_id, enrollments.class_id,
            ${hasCashierEnrollmentFeed ? "coalesce(nullif(cashier_feed.status, ''), enrollments.status)" : "enrollments.status"} as status,
            enrollments.created_at,
            ${hasAcademicYearColumn ? "enrollments.academic_year," : "'' as academic_year,"}
            ${hasSemesterColumn ? "enrollments.semester," : "'' as semester,"}
            ${hasTuitionFeeColumn ? "enrollments.tuition_fee," : "0::numeric as tuition_fee,"}
            ${hasDownpaymentAmountColumn ? "enrollments.downpayment_amount," : "0::numeric as downpayment_amount,"}
            ${hasMedicalFeeColumn ? "enrollments.medical_fee," : "0::numeric as medical_fee,"}
            ${hasIdFeeColumn ? "enrollments.id_fee," : "0::numeric as id_fee,"}
            students.student_no, students.first_name, students.last_name,
            classes.class_code, classes.title
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
    if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "deleted_at")) {
        return [];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select enrollments.id, enrollments.student_id, enrollments.class_id, enrollments.status, enrollments.created_at,
            enrollments.deleted_at,
            ${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "academic_year") ? "enrollments.academic_year," : "'' as academic_year,"}
            ${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "semester") ? "enrollments.semester," : "'' as semester,"}
            ${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "tuition_fee") ? "enrollments.tuition_fee," : "0::numeric as tuition_fee,"}
            ${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "downpayment_amount") ? "enrollments.downpayment_amount," : "0::numeric as downpayment_amount,"}
            ${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "medical_fee") ? "enrollments.medical_fee," : "0::numeric as medical_fee,"}
            ${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "id_fee") ? "enrollments.id_fee," : "0::numeric as id_fee,"}
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select grades.id, grades.student_id, grades.class_id, ${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(gradesTable, "semester") ? "coalesce(grades.semester, '')" : "''"} as semester, grades.grade, grades.remarks,
            students.student_no, students.first_name, students.last_name,
            classes.class_code, classes.title
     from ${gradesTable} as grades
     join ${studentsTable} as students on students.id = grades.student_id
     join ${classesTable} as classes on classes.id = grades.class_id
     order by grades.created_at desc`);
}
async function listDocuments() {
    const documentsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("documents", "registrar_documents");
    const studentsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_students", "students");
    if (!documentsTable || !studentsTable) {
        return [];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select documents.id, documents.student_id, documents.doc_type, documents.status, documents.requested_at, documents.completed_at,
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select users.id, users.role_id, users.username, users.first_name, users.last_name, users.is_active, roles.name as role
     from ${usersTable} as users
     join ${rolesTable} as roles on roles.id = users.role_id
     order by users.created_at desc`);
}
async function listRoles() {
    const rolesTable = await getRolesTable();
    if (!rolesTable) {
        return [];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select id, name from ${rolesTable} order by name`);
}
async function listReports() {
    const reportsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("reports", "registrar_reports");
    if (!reportsTable) {
        return [];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select * from ${reportsTable} order by created_at desc`);
}
async function getReportMetrics() {
    const documentsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("documents", "registrar_documents");
    const usersTable = await getUsersTable();
    const studentsTable = await getStudentsTable();
    const classesTable = await getClassesTable();
    const enrollmentsTable = await getEnrollmentsTable();
    const gradesTable = await getGradesTable();
    const auditLogsTable = await getAuditLogsTable();
    const [users, students, classes, enrollments, grades, documents, logs] = await Promise.all([
        usersTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${usersTable}`) : Promise.resolve(0),
        studentsTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${studentsTable}`) : Promise.resolve(0),
        classesTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${classesTable}`) : Promise.resolve(0),
        enrollmentsTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${enrollmentsTable}`) : Promise.resolve(0),
        gradesTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${gradesTable}`) : Promise.resolve(0),
        documentsTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${documentsTable}`) : Promise.resolve(0),
        auditLogsTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${auditLogsTable}`) : Promise.resolve(0)
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select academic_reports.id,
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select audit_logs.id, audit_logs.created_at, audit_logs.action, audit_logs.module, audit_logs.details, users.username
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select id, title, message, status, created_at
     from ${notificationsTable}
     order by created_at desc
     limit $1`, [
        limit
    ]);
}
async function getUnreadNotificationCount() {
    const notificationsTable = await getNotificationsTable();
    const count = notificationsTable ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${notificationsTable} where status = 'Unread'`) : 0;
    return Number(count ?? 0);
}
async function listIntegrationRecords(filters) {
    const integrationRecordsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("integration_records");
    const studentsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_students", "students");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select ${integrationRecordsTable}.id, ${integrationRecordsTable}.record_type, ${integrationRecordsTable}.source_office,
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
    const manifest = await __turbopack_context__.A("[project]/lib/integration-catalog.ts [app-route] (ecmascript, async loader)").then(({ buildIntegrationManifest })=>buildIntegrationManifest());
    const integrationRecordsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("integration_records");
    if (!integrationRecordsTable) {
        return {
            incomingOffices: 0,
            outgoingFeeds: manifest.outgoing.length,
            recordsReceived: 0
        };
    }
    const [incoming, outgoing, received] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(distinct source_office) from ${integrationRecordsTable}`),
        Promise.resolve(manifest.outgoing.length),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${integrationRecordsTable}`)
    ]);
    return {
        incomingOffices: Number(incoming ?? 0),
        outgoingFeeds: Number(outgoing),
        recordsReceived: Number(received ?? 0)
    };
}
async function getUserProfile(userId) {
    const account = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryOne"])(`select id, username, email, full_name, role, is_super_admin
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryOne"])(`select users.id, users.username, users.first_name, users.last_name, users.display_name,
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select users.id, users.first_name, users.last_name, users.username, users.is_active, roles.name as role
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${usersTable} where is_active = true`),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${usersTable} as users join ${rolesTable} as roles on users.role_id = roles.id where lower(roles.name) = 'admin'`)
    ]);
    return {
        activeCount: Number(activeCount ?? 0),
        adminCount: Number(adminCount ?? 0)
    };
}
async function getExportRows(workflowKey = "") {
    const documentsTable = workflowKey === "completion-services" ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("documents", "registrar_documents") : null;
    const reportsTable = workflowKey === "" ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("reports", "registrar_reports") : null;
    const studentsTable = workflowKey === "completion-services" ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_students", "students") : null;
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
                rows: usersTable && rolesTable ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select users.username,
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
                rows: exportStudentsTable ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select student_no,
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
                rows: classesTable ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select class_code, title, course, units, created_at from ${classesTable} order by class_code`) : []
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
                rows: enrollmentsTable && exportStudentsTable && classesTable ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select concat(students.student_no, ' - ', students.last_name, ', ', students.first_name) as student_label,
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
                rows: gradesTable && exportStudentsTable && classesTable ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select concat(students.student_no, ' - ', students.last_name, ', ', students.first_name) as student_label,
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
                rows: documentsTable && studentsTable ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select concat(students.student_no, ' - ', students.last_name, ', ', students.first_name) as student_label,
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
                rows: auditLogsTable ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select coalesce(concat(users.first_name, ' ', users.last_name), 'System') as user_name,
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
                rows: reportsTable ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`select title, department, status, due_date, created_at from ${reportsTable} order by created_at desc`) : []
            };
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/integration-payload.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getIntegrationPayload",
    ()=>getIntegrationPayload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function getIntegrationPayload(resource, options = {}) {
    const studentNo = String(options.studentNo ?? "").trim();
    const studentId = Number(options.studentId ?? 0);
    const studentsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_students", "students");
    const enrollmentsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar.enrollments", "registrar_enrollments", "enrollments");
    const classesTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_classes", "classes");
    const gradesTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_grades", "grades");
    const incomingRecordTypeMap = {
        "payment-confirmations": "payment_confirmation",
        "medical-clearances": "medical_clearance",
        "counseling-reports": "counseling_report",
        "discipline-records": "discipline_record",
        "activity-participation-records": "activity_participation_record"
    };
    if (resource in incomingRecordTypeMap) {
        return {
            records: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listIntegrationRecords"])({
                recordType: incomingRecordTypeMap[resource],
                studentNo,
                limit: 50
            })
        };
    }
    if (resource === "student-list") {
        const students = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listStudents"])();
        return {
            students
        };
    }
    if (resource === "enrollment-statistics") {
        const [students, enrollments, classes] = await Promise.all([
            studentsTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${studentsTable}`) : Promise.resolve(0),
            enrollmentsTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${enrollmentsTable}`) : Promise.resolve(0),
            classesTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${classesTable}`) : Promise.resolve(0)
        ]);
        return {
            students: Number(students ?? 0),
            enrollments: Number(enrollments ?? 0),
            classes: Number(classes ?? 0)
        };
    }
    if (resource === "enrollment-feed") {
        if (!enrollmentsTable || !studentsTable || !classesTable) {
            return {
                rows: []
            };
        }
        const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`select
         enrollments.id as enrollment_id,
         enrollments.status as enrollment_status,
         coalesce(enrollments.academic_year, '')::text as academic_year,
         coalesce(enrollments.semester, '')::text as semester,
         coalesce(enrollments.downpayment_amount, 0)::numeric as downpayment_amount,
         coalesce(enrollments.created_at, now())::text as created_at,
         students.student_no,
         coalesce(students.first_name, '')::text as first_name,
         coalesce(students.last_name, '')::text as last_name,
         trim(concat_ws(' ', coalesce(students.first_name, ''), coalesce(students.last_name, '')))::text as full_name,
         classes.class_code,
         coalesce(classes.title, '')::text as title
       from ${enrollmentsTable} as enrollments
       inner join ${studentsTable} as students on students.id = enrollments.student_id
       inner join ${classesTable} as classes on classes.id = enrollments.class_id
       order by enrollments.created_at desc nulls last, enrollments.id desc
       limit 400`);
        return {
            rows: rows.rows
        };
    }
    const student = studentNo ? studentsTable ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryOne"])(`select * from ${studentsTable} where student_no = $1 limit 1`, [
        studentNo
    ]) : null : studentId > 0 ? studentsTable ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryOne"])(`select * from ${studentsTable} where id = $1 limit 1`, [
        studentId
    ]) : null : null;
    if (!student) {
        throw new Error("Student not found.");
    }
    if (resource === "student-personal-info") {
        return {
            student
        };
    }
    if (resource === "enrollment-data") {
        if (!enrollmentsTable || !classesTable) {
            return {
                student,
                enrollments: []
            };
        }
        const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`select enrollments.*, classes.class_code, classes.title
       from ${enrollmentsTable} as enrollments join ${classesTable} as classes on classes.id = enrollments.class_id
       where enrollments.student_id = $1
       order by enrollments.created_at desc`, [
            student.id
        ]);
        return {
            student,
            enrollments: rows.rows
        };
    }
    if (resource === "student-academic-records") {
        if (!gradesTable || !classesTable) {
            return {
                student,
                grades: []
            };
        }
        const grades = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`select grades.*, classes.class_code, classes.title
       from ${gradesTable} as grades join ${classesTable} as classes on classes.id = grades.class_id
       where grades.student_id = $1
       order by grades.created_at desc`, [
            student.id
        ]);
        return {
            student,
            grades: grades.rows
        };
    }
    throw new Error("Unsupported integration resource or method.");
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/integration-delivery.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "deliverIntegrationResource",
    ()=>deliverIntegrationResource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integration$2d$payload$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/integration-payload.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integration$2d$payload$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integration$2d$payload$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function readTargets(resource) {
    const targetMap = {
        "student-list": [
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CRAD_STUDENT_LIST_ENDPOINT ? {
                consumer: "CRADManagement",
                url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CRAD_STUDENT_LIST_ENDPOINT
            } : null,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].COMLAB_STUDENT_LIST_ENDPOINT ? {
                consumer: "Computer Laboratory",
                url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].COMLAB_STUDENT_LIST_ENDPOINT
            } : null
        ].filter(Boolean),
        "student-personal-info": [
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].PREFECT_STUDENT_PERSONAL_INFO_ENDPOINT ? {
                consumer: "PrefectManagementsSystem",
                url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].PREFECT_STUDENT_PERSONAL_INFO_ENDPOINT
            } : null,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CLINIC_STUDENT_PERSONAL_INFO_ENDPOINT ? {
                consumer: "Clinic",
                url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CLINIC_STUDENT_PERSONAL_INFO_ENDPOINT
            } : null,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GUIDANCE_STUDENT_PERSONAL_INFO_ENDPOINT ? {
                consumer: "Guidance",
                url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GUIDANCE_STUDENT_PERSONAL_INFO_ENDPOINT
            } : null
        ].filter(Boolean),
        "enrollment-data": [
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CASHIER_ENROLLMENT_DATA_ENDPOINT ? {
                consumer: "Cashier",
                url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CASHIER_ENROLLMENT_DATA_ENDPOINT
            } : null
        ].filter(Boolean),
        "student-academic-records": [
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GUIDANCE_STUDENT_ACADEMIC_RECORDS_ENDPOINT ? {
                consumer: "Guidance",
                url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GUIDANCE_STUDENT_ACADEMIC_RECORDS_ENDPOINT
            } : null
        ].filter(Boolean),
        "enrollment-statistics": [
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].PMED_ENROLLMENT_STATISTICS_ENDPOINT ? {
                consumer: "PMED",
                url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].PMED_ENROLLMENT_STATISTICS_ENDPOINT
            } : null
        ].filter(Boolean)
    };
    return targetMap[resource] ?? [];
}
async function parseResponse(response) {
    const text = await response.text();
    try {
        return text ? JSON.parse(text) : null;
    } catch  {
        return text;
    }
}
async function persistPmedEnrollmentStatistics(payload) {
    const metrics = [
        {
            metric: "Students",
            current_value: Number(payload?.students ?? 0)
        },
        {
            metric: "Enrollments",
            current_value: Number(payload?.enrollments ?? 0)
        },
        {
            metric: "Classes",
            current_value: Number(payload?.classes ?? 0)
        }
    ];
    const batchId = crypto.randomUUID();
    const sentAt = new Date().toISOString();
    const client = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].connect();
    try {
        await client.query("begin");
        await client.query(`
      create table if not exists public.pmed_enrollment_statistics_feed (
        id bigserial primary key,
        batch_id text not null,
        source text not null default 'Registrar',
        office text not null default 'PMED',
        metric text not null,
        current_value integer not null default 0,
        report_type text not null default 'Enrollment Statistics',
        payload jsonb not null default '{}'::jsonb,
        sent_at timestamptz not null default current_timestamp,
        created_at timestamptz not null default current_timestamp
      )
    `);
        await client.query(`
      create index if not exists pmed_enrollment_statistics_feed_batch_idx
      on public.pmed_enrollment_statistics_feed (batch_id, sent_at desc, metric asc)
    `);
        for (const item of metrics){
            await client.query(`insert into public.pmed_enrollment_statistics_feed
          (batch_id, source, office, metric, current_value, report_type, payload, sent_at, created_at)
         values ($1, $2, $3, $4, $5, $6, $7::jsonb, $8::timestamptz, current_timestamp)`, [
                batchId,
                "Registrar",
                "PMED",
                item.metric,
                item.current_value,
                "Enrollment Statistics",
                JSON.stringify(payload ?? {}),
                sentAt
            ]);
        }
        await client.query("commit");
    } catch (error) {
        await client.query("rollback");
        throw error;
    } finally{
        client.release();
    }
    return {
        batch_id: batchId,
        sent_at: sentAt,
        row_count: metrics.length,
        table: "public.pmed_enrollment_statistics_feed"
    };
}
async function deliverIntegrationResource(resource, options) {
    const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integration$2d$payload$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getIntegrationPayload"])(resource, options);
    const persisted = resource === "enrollment-statistics" ? await persistPmedEnrollmentStatistics(payload) : null;
    const targets = readTargets(resource);
    if (targets.length === 0) {
        return {
            ok: Boolean(persisted),
            message: persisted ? "Integration data stored successfully." : "No delivery endpoint is configured for this integration resource yet.",
            payload,
            storage: persisted,
            deliveries: []
        };
    }
    const deliveries = await Promise.all(targets.map(async (target)=>{
        try {
            const response = await fetch(target.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].INTEGRATION_API_KEY ? {
                        "x-integration-key": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].INTEGRATION_API_KEY
                    } : {}
                },
                body: JSON.stringify({
                    resource,
                    source: "Registrar",
                    sent_at: new Date().toISOString(),
                    data: payload
                }),
                cache: "no-store"
            });
            return {
                consumer: target.consumer,
                url: target.url,
                ok: response.ok,
                status: response.status,
                response: await parseResponse(response)
            };
        } catch (error) {
            return {
                consumer: target.consumer,
                url: target.url,
                ok: false,
                status: 0,
                response: {
                    error: error instanceof Error ? error.message : "Request failed."
                }
            };
        }
    }));
    return {
        ok: Boolean(persisted) || deliveries.every((delivery)=>delivery.ok),
        message: deliveries.every((delivery)=>delivery.ok) ? persisted ? "Integration delivery completed and stored." : "Integration delivery completed." : persisted ? "Integration data stored, but one or more endpoint deliveries failed." : "One or more integration deliveries failed.",
        payload,
        storage: persisted,
        deliveries
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/student-subjects.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSubjectsForStudent",
    ()=>getSubjectsForStudent
]);
function getSubjectsForStudent(program, yearLevel) {
    const normalizedProgram = String(program ?? "").toUpperCase();
    const normalizedYear = String(yearLevel ?? "").trim();
    const yearSubjects = {
        "1": [
            "Communication Skills",
            "Introduction to Computing",
            "Study and Thinking Skills"
        ],
        "2": [
            "Professional Subjects",
            "Applied Elective",
            "Records and Documentation"
        ],
        "3": [
            "Major Subjects",
            "Practicum Preparation",
            "Seminar"
        ],
        "4": [
            "Research 101",
            "Practicum / Internship",
            "Comprehensive Review"
        ]
    };
    const programSubjects = [];
    if (normalizedProgram.startsWith("BSIT")) {
        if (normalizedYear === "1") {
            programSubjects.push("Computer Programming 1", "Productivity Tools");
        }
        if (normalizedYear === "2") {
            programSubjects.push("Data Structures", "Database Systems");
        }
        if (normalizedYear === "3") {
            programSubjects.push("Networking Laboratory", "Systems Analysis and Design");
        }
        if (normalizedYear === "4") {
            programSubjects.push("Capstone");
        }
    }
    if (normalizedProgram === "BSIS") {
        if (normalizedYear === "2") {
            programSubjects.push("Information Management", "Business Process Analysis");
        }
        if (normalizedYear === "3") {
            programSubjects.push("Enterprise Systems", "Project Management");
        }
    }
    const allSubjects = [
        ...yearSubjects[normalizedYear] ?? [
            "General Subjects"
        ],
        ...programSubjects
    ];
    return Array.from(new Set(allSubjects));
}
}),
"[project]/lib/student-data-dispatch.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "dispatchStudentData",
    ()=>dispatchStudentData,
    "getStudentDispatchPreview",
    ()=>getStudentDispatchPreview,
    "listStudentDispatchTargets",
    ()=>listStudentDispatchTargets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$student$2d$subjects$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/student-subjects.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const STUDENT_DISPATCH_TARGETS = [
    {
        key: "cashier",
        label: "Cashier",
        resource: "enrollment-data",
        consumer: "Cashier",
        // Cashier integration is database-first; do not call local HTTP APIs.
        endpoint: ""
    },
    {
        key: "clinic",
        label: "Clinic",
        resource: "student-personal-info",
        consumer: "Clinic",
        endpoint: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CLINIC_STUDENT_PERSONAL_INFO_ENDPOINT
    },
    {
        key: "guidance",
        label: "Guidance",
        resource: "student-personal-info",
        consumer: "Guidance",
        endpoint: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GUIDANCE_STUDENT_PERSONAL_INFO_ENDPOINT
    },
    {
        key: "prefect",
        label: "Prefect",
        resource: "student-personal-info",
        consumer: "Prefect",
        endpoint: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].PREFECT_STUDENT_PERSONAL_INFO_ENDPOINT
    },
    {
        key: "computer-laboratory",
        label: "Computer Laboratory",
        resource: "student-list",
        consumer: "Computer Laboratory",
        endpoint: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].COMLAB_STUDENT_LIST_ENDPOINT
    },
    {
        key: "crad",
        label: "CRAD",
        resource: "student-list",
        consumer: "CRAD",
        endpoint: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CRAD_STUDENT_LIST_ENDPOINT
    }
];
const FEED_CONFIG_BY_TARGET = {
    cashier: {
        schema: "public",
        table: "cashier_registrar_student_enrollment_feed"
    },
    clinic: {
        schema: "clinic",
        table: "registrar_student_personal_info_feed"
    },
    guidance: {
        schema: "guidance",
        table: "registrar_student_full_info_feed"
    },
    prefect: {
        schema: "prefect",
        table: "registrar_student_full_info_feed"
    },
    "computer-laboratory": {
        schema: "computer_laboratory",
        table: "registrar_student_list_feed"
    },
    crad: {
        schema: "public",
        table: "crad_registrar_student_list_feed"
    }
};
const feedEnsurePromiseByTable = new Map();
function getTarget(targetKey) {
    return STUDENT_DISPATCH_TARGETS.find((target)=>target.key === targetKey);
}
function isDatabaseOnlyTarget(target) {
    return target.key === "cashier";
}
function matchesCradSubject(value) {
    return /(research|capstone)/i.test(value);
}
function matchesComputerLabSubject(value) {
    return /(laboratory|computer|programming|network|information technology|it\b|lab\b)/i.test(value);
}
function buildStudentListPayload(target, students) {
    const filteredStudents = students.map((student)=>{
        const subjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$student$2d$subjects$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSubjectsForStudent"])(student.program ?? "", student.year_level ?? "");
        const matchedSubjects = subjects.filter((subject)=>target.key === "crad" ? matchesCradSubject(subject) : matchesComputerLabSubject(subject));
        return {
            student,
            matchedSubjects
        };
    }).filter((entry)=>entry.matchedSubjects.length > 0).map(({ student, matchedSubjects })=>({
            student_no: String(student.student_no ?? ""),
            student_name: `${String(student.last_name ?? "")}, ${String(student.first_name ?? "")}`.trim(),
            program: String(student.program ?? ""),
            year_level: String(student.year_level ?? ""),
            status: String(student.status ?? ""),
            matched_subjects: matchedSubjects
        }));
    return {
        target: target.label,
        audience_rule: target.key === "crad" ? "Students who have or are taking research and capstone subjects." : "Students who are taking computer-related laboratory subjects.",
        total_students: filteredStudents.length,
        rows: filteredStudents
    };
}
async function buildPayload(target, options) {
    if (target.key === "cashier") {
        const studentNoFilter = String(options?.studentNo ?? "").trim();
        const studentIdFilter = Number(options?.studentId ?? 0);
        const enrollments = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listEnrollments"])();
        const filteredEnrollments = enrollments.filter((item)=>{
            if (studentNoFilter && String(item.student_no ?? "").trim() !== studentNoFilter) {
                return false;
            }
            if (studentIdFilter > 0 && Number(item.student_id ?? 0) !== studentIdFilter) {
                return false;
            }
            return true;
        });
        return {
            target: target.label,
            total_enrollments: filteredEnrollments.length,
            rows: filteredEnrollments.map((item)=>({
                    student_no: String(item.student_no ?? ""),
                    student_name: `${String(item.last_name ?? "")}, ${String(item.first_name ?? "")}`.trim(),
                    class_code: String(item.class_code ?? ""),
                    subject: String(item.title ?? ""),
                    academic_year: String(item.academic_year ?? ""),
                    semester: String(item.semester ?? ""),
                    status: String(item.status ?? ""),
                    tuition_fee: Number(item.tuition_fee ?? 0),
                    downpayment_amount: Number(item.downpayment_amount ?? 0),
                    medical_fee: Number(item.medical_fee ?? 0),
                    id_fee: Number(item.id_fee ?? 0)
                }))
        };
    }
    const students = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listStudents"])();
    if (target.key === "clinic" || target.key === "guidance" || target.key === "prefect") {
        return {
            target: target.label,
            total_students: students.length,
            rows: students.map((student)=>{
                const base = {
                    student_no: String(student.student_no ?? ""),
                    first_name: String(student.first_name ?? ""),
                    middle_name: String(student.middle_name ?? ""),
                    last_name: String(student.last_name ?? ""),
                    program: String(student.program ?? ""),
                    year_level: String(student.year_level ?? ""),
                    status: String(student.status ?? ""),
                    birth_date: String(student.birth_date ?? ""),
                    mother_name: String(student.mother_name ?? ""),
                    father_name: String(student.father_name ?? ""),
                    guardian_name: String(student.guardian_name ?? ""),
                    address: String(student.address ?? ""),
                    email: String(student.email ?? ""),
                    phone: String(student.phone ?? "")
                };
                return target.key === "clinic" ? {
                    ...base,
                    payment_status: String(student.payment_status ?? "Pending")
                } : base;
            })
        };
    }
    return buildStudentListPayload(target, students);
}
async function parseResponse(response) {
    const text = await response.text();
    try {
        return text ? JSON.parse(text) : null;
    } catch  {
        return text;
    }
}
function getFeedTableName(config) {
    return `${config.schema}.${config.table}`;
}
async function ensureDispatchFeedTable(config) {
    const tableName = getFeedTableName(config);
    const cachedPromise = feedEnsurePromiseByTable.get(tableName);
    if (cachedPromise) {
        return cachedPromise;
    }
    const ensurePromise = (async ()=>{
        const isCashierFeed = config.schema === "public" && config.table === "cashier_registrar_student_enrollment_feed";
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`create schema if not exists ${config.schema}`);
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`create table if not exists ${tableName} (
        id bigserial primary key,
        batch_id text not null,
        source text not null default 'Registrar',
        target_key text not null,
        target_label text not null,
        row_index integer not null,
        student_no text,
        student_name text,
        program text,
        year_level text,
        status text,
        payload jsonb not null default '{}'::jsonb,
        sent_at timestamptz not null default current_timestamp,
        created_at timestamptz not null default current_timestamp
      )`);
        const requiredColumns = [
            {
                name: "batch_id",
                definition: "text not null default ''"
            },
            {
                name: "source",
                definition: "text not null default 'Registrar'"
            },
            {
                name: "target_key",
                definition: "text not null default ''"
            },
            {
                name: "target_label",
                definition: "text not null default ''"
            },
            {
                name: "row_index",
                definition: "integer not null default 0"
            },
            {
                name: "student_no",
                definition: "text"
            },
            {
                name: "student_name",
                definition: "text"
            },
            {
                name: "program",
                definition: "text"
            },
            {
                name: "year_level",
                definition: "text"
            },
            {
                name: "status",
                definition: "text"
            },
            ...isCashierFeed ? [
                {
                    name: "academic_year",
                    definition: "text"
                },
                {
                    name: "semester",
                    definition: "text"
                },
                {
                    name: "tuition_fee",
                    definition: "numeric(12,2) not null default 0.00"
                },
                {
                    name: "downpayment_amount",
                    definition: "numeric(12,2) not null default 0.00"
                },
                {
                    name: "medical_fee",
                    definition: "numeric(12,2) not null default 0.00"
                },
                {
                    name: "id_fee",
                    definition: "numeric(12,2) not null default 0.00"
                }
            ] : [],
            {
                name: "payload",
                definition: "jsonb not null default '{}'::jsonb"
            },
            {
                name: "sent_at",
                definition: "timestamptz not null default current_timestamp"
            },
            {
                name: "created_at",
                definition: "timestamptz not null default current_timestamp"
            }
        ];
        for (const column of requiredColumns){
            if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(tableName, column.name)) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`alter table ${tableName} add column ${column.name} ${column.definition}`);
            }
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`create index if not exists ${config.table}_batch_idx
       on ${tableName} (batch_id, sent_at desc, row_index asc)`);
        return tableName;
    })();
    feedEnsurePromiseByTable.set(tableName, ensurePromise);
    try {
        return await ensurePromise;
    } catch (error) {
        feedEnsurePromiseByTable.delete(tableName);
        throw error;
    }
}
function getFeedRowStudentName(row) {
    const directName = String(row.student_name ?? "").trim();
    if (directName) return directName;
    const firstName = String(row.first_name ?? "").trim();
    const lastName = String(row.last_name ?? "").trim();
    const combined = [
        lastName,
        firstName
    ].filter(Boolean).join(", ").trim();
    return combined || null;
}
async function persistStudentBatch(target, payload) {
    const rows = Array.isArray(payload?.rows) ? payload.rows : [];
    if (rows.length === 0) {
        throw new Error(`No rows are available to send to ${target.label}.`);
    }
    const config = FEED_CONFIG_BY_TARGET[target.key];
    const tableName = await ensureDispatchFeedTable(config);
    const isCashierFeed = target.key === "cashier";
    const batchId = crypto.randomUUID();
    const sentAt = new Date().toISOString();
    const client = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].connect();
    try {
        await client.query("begin");
        for(let index = 0; index < rows.length; index += 1){
            const row = rows[index];
            const commonValues = [
                batchId,
                "Registrar",
                target.key,
                target.label,
                index + 1,
                String(row.student_no ?? ""),
                getFeedRowStudentName(row),
                String(row.program ?? ""),
                String(row.year_level ?? ""),
                String(row.status ?? "")
            ];
            if (isCashierFeed) {
                await client.query(`insert into ${tableName}
            (batch_id, source, target_key, target_label, row_index, student_no, student_name, program, year_level, status, academic_year, semester, tuition_fee, downpayment_amount, medical_fee, id_fee, payload, sent_at, created_at)
           values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17::jsonb, $18::timestamptz, current_timestamp)`, [
                    ...commonValues,
                    String(row.academic_year ?? ""),
                    String(row.semester ?? ""),
                    Number(row.tuition_fee ?? 0),
                    Number(row.downpayment_amount ?? 0),
                    Number(row.medical_fee ?? 0),
                    Number(row.id_fee ?? 0),
                    JSON.stringify(row),
                    sentAt
                ]);
            } else {
                await client.query(`insert into ${tableName}
            (batch_id, source, target_key, target_label, row_index, student_no, student_name, program, year_level, status, payload, sent_at, created_at)
           values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11::jsonb, $12::timestamptz, current_timestamp)`, [
                    ...commonValues,
                    JSON.stringify(row),
                    sentAt
                ]);
            }
        }
        await client.query("commit");
    } catch (error) {
        await client.query("rollback");
        throw error;
    } finally{
        client.release();
    }
    return {
        batch_id: batchId,
        source: "Registrar",
        sent_at: sentAt,
        row_count: rows.length,
        table: tableName
    };
}
async function getStudentDispatchPreview(options) {
    const target = getTarget(options.targetKey);
    if (!target) {
        throw new Error("Unknown student integration destination.");
    }
    const payload = await buildPayload(target, {
        studentNo: options.studentNo,
        studentId: options.studentId
    });
    return {
        target: {
            key: target.key,
            label: target.label,
            consumer: target.consumer,
            resource: target.resource,
            endpoint: target.endpoint
        },
        payload
    };
}
async function dispatchStudentData(options) {
    const preview = await getStudentDispatchPreview(options);
    try {
        const storage = await persistStudentBatch(preview.target, preview.payload);
        let endpointDelivery = null;
        if (!isDatabaseOnlyTarget(preview.target) && preview.target.endpoint) {
            try {
                const response = await fetch(preview.target.endpoint, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].INTEGRATION_API_KEY ? {
                            "x-integration-key": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].INTEGRATION_API_KEY
                        } : {}
                    },
                    body: JSON.stringify({
                        resource: preview.target.resource,
                        source: "Registrar",
                        consumer: preview.target.consumer,
                        sent_at: storage.sent_at,
                        batch_id: storage.batch_id,
                        data: preview.target.resource === "student-list" ? {
                            ...preview.payload,
                            students: Array.isArray(preview.payload?.rows) ? preview.payload.rows : []
                        } : preview.payload
                    }),
                    cache: "no-store"
                });
                endpointDelivery = {
                    ok: response.ok,
                    status: response.status,
                    response: await parseResponse(response)
                };
            } catch (error) {
                endpointDelivery = {
                    ok: false,
                    status: 0,
                    response: {
                        error: error instanceof Error ? error.message : "Request failed."
                    }
                };
            }
        }
        return {
            ok: true,
            message: isDatabaseOnlyTarget(preview.target) ? `Student data saved to ${preview.target.label} feed table via database.` : `Student data sent to ${preview.target.label}.`,
            target: preview.target,
            payload: preview.payload,
            storage,
            delivery: {
                ok: true,
                status: 200,
                response: {
                    ok: true,
                    message: `Student data stored in ${storage.table}.`,
                    data: {
                        ...storage,
                        endpoint_delivery: endpointDelivery
                    }
                }
            }
        };
    } catch (error) {
        return {
            ok: false,
            message: error instanceof Error ? error.message : `Failed to send student data to ${preview.target.label}.`,
            target: preview.target,
            payload: preview.payload,
            storage: null,
            delivery: {
                ok: false,
                status: 0,
                response: {
                    error: error instanceof Error ? error.message : "Request failed."
                }
            }
        };
    }
}
function listStudentDispatchTargets() {
    return STUDENT_DISPATCH_TARGETS.map((target)=>({
            key: target.key,
            label: target.label
        }));
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/mutations.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function requireDocumentsTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("documents", "registrar_documents");
    if (!tableName) {
        throw new Error("The documents table has not been created in this database yet.");
    }
    return tableName;
}
async function requireReportsTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("reports", "registrar_reports");
    if (!tableName) {
        throw new Error("The reports table has not been created in this database yet.");
    }
    return tableName;
}
async function requireGradesTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar.grades", "registrar_grades", "grades");
    if (!tableName) {
        throw new Error("The grades table has not been created in this database yet.");
    }
    return tableName;
}
async function requireClassesTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_classes", "classes");
    if (!tableName) {
        throw new Error("The classes table has not been created in this database yet.");
    }
    return tableName;
}
async function requireSchedulesTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_schedules", "schedules");
    if (!tableName) {
        throw new Error("The schedules table has not been created in this database yet.");
    }
    return tableName;
}
async function requireEnrollmentsTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar.enrollments", "registrar_enrollments", "enrollments");
    if (!tableName) {
        throw new Error("The enrollments table has not been created in this database yet.");
    }
    return tableName;
}
async function requireStudentsTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_students", "students");
    if (!tableName) {
        throw new Error("The students table has not been created in this database yet.");
    }
    return tableName;
}
async function requireUsersTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_users", "users");
    if (!tableName) {
        throw new Error("The users table has not been created in this database yet.");
    }
    return tableName;
}
async function requireRolesTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_roles", "roles");
    if (!tableName) {
        throw new Error("The roles table has not been created in this database yet.");
    }
    return tableName;
}
async function requireAuditLogsTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_audit_logs", "audit_logs");
    if (!tableName) {
        throw new Error("The audit logs table has not been created in this database yet.");
    }
    return tableName;
}
async function requireNotificationsTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_notifications", "notifications");
    if (!tableName) {
        throw new Error("The notifications table has not been created in this database yet.");
    }
    return tableName;
}
async function requireAcademicReportsTable() {
    const tableName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_academic_reports", "academic_reports");
    if (!tableName) {
        throw new Error("The academic reports table has not been created in this database yet.");
    }
    return tableName;
}
async function logAction(userId, action, moduleName, details) {
    try {
        const auditLogsTable = await requireAuditLogsTable();
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${auditLogsTable} (user_id, action, module, details, created_at)
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${notificationsTable} (title, message, status, created_at)
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
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`select grades.grade, classes.units
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
    const exists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryOne"])(`select id from ${studentsTable} where student_no = $1`, [
        input.studentNo
    ]);
    if (exists) {
        throw new Error("Student No already exists.");
    }
    const optionalColumns = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(studentsTable, "middle_name"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(studentsTable, "birth_date"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(studentsTable, "mother_name"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(studentsTable, "father_name"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(studentsTable, "guardian_name"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(studentsTable, "address"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(studentsTable, "email"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(studentsTable, "phone")
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
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${studentsTable} (${columns.join(", ")})
     values (${dynamicPlaceholders.join(", ")})
     returning id`, values);
    await logAction(input.actorId, "Create", "Student Records", `Added student ${input.studentNo}`);
    return result.rows[0]?.id;
}
async function updateStudent(input) {
    const studentsTable = await requireStudentsTable();
    const exists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryOne"])(`select id from ${studentsTable} where student_no = $1 and id <> $2`, [
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
        if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(studentsTable, entry.column)) {
            values.push(entry.value);
            setClauses.push(`${entry.column} = $${values.length}`);
        }
    }
    values.push(input.id);
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`update ${studentsTable}
     set ${setClauses.join(", ")}
     where id = $${values.length}`, values);
    await logAction(input.actorId, "Update", "Student Records", `Updated student ID ${input.id}`);
}
async function deleteStudent(input) {
    const studentsTable = await requireStudentsTable();
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`delete from ${studentsTable} where id = $1`, [
        input.id
    ]);
    await logAction(input.actorId, "Delete", "Student Records", `Deleted student ID ${input.id}`);
}
async function createInstructor(input) {
    const instructorsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("hr_instructors", "hr.instructors", "registrar_instructors", "registrar.instructors", "instructors");
    if (!instructorsTable) throw new Error("The instructors table has not been created in this database yet.");
    const exists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryOne"])(`select id from ${instructorsTable} where employee_no = $1`, [
        input.employeeNo
    ]);
    if (exists) {
        throw new Error("Employee No already exists.");
    }
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${instructorsTable} (employee_no, first_name, last_name, department, created_at)
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
    const instructorsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("hr_instructors", "hr.instructors", "registrar_instructors", "registrar.instructors", "instructors");
    if (!instructorsTable) throw new Error("The instructors table has not been created in this database yet.");
    const exists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryOne"])(`select id from ${instructorsTable} where employee_no = $1 and id <> $2`, [
        input.employeeNo,
        input.id
    ]);
    if (exists) {
        throw new Error("Employee No already exists.");
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`update ${instructorsTable} set employee_no = $1, first_name = $2, last_name = $3, department = $4 where id = $5`, [
        input.employeeNo,
        input.firstName,
        input.lastName,
        input.department ?? "",
        input.id
    ]);
    await logAction(input.actorId, "Update", "Instructors", `Updated instructor ID ${input.id}`);
}
async function deleteInstructor(input) {
    const instructorsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("hr_instructors", "hr.instructors", "registrar_instructors", "registrar.instructors", "instructors");
    if (!instructorsTable) throw new Error("The instructors table has not been created in this database yet.");
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`delete from ${instructorsTable} where id = $1`, [
        input.id
    ]);
    await logAction(input.actorId, "Delete", "Instructors", `Deleted instructor ID ${input.id}`);
}
async function assignInstructorClass(input) {
    const assignmentsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_instructor_class_assignments", "registrar.instructor_class_assignments", "instructor_class_assignments");
    if (!assignmentsTable) {
        throw new Error("The instructor class assignments table has not been created in this database yet.");
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${assignmentsTable} (instructor_employee_no, class_id, assigned_at, assigned_by)
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
    const assignmentsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_instructor_class_assignments", "registrar.instructor_class_assignments", "instructor_class_assignments");
    if (!assignmentsTable) {
        throw new Error("The instructor class assignments table has not been created in this database yet.");
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`delete from ${assignmentsTable}
     where instructor_employee_no = $1 and class_id = $2`, [
        input.employeeNo,
        input.classId
    ]);
    await logAction(input.actorId, "Unassign", "Instructors", `Removed class ID ${input.classId} from instructor ${input.employeeNo}`);
}
async function createClassSchedule(input) {
    const classesTable = await requireClassesTable();
    const schedulesTable = await requireSchedulesTable();
    const client = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].connect();
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
    const client = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].connect();
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
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`delete from ${classesTable} where id = $1`, [
        input.classId
    ]);
    await logAction(input.actorId, "Delete", "Classes & Schedules", `Deleted class ID ${input.classId}`);
}
async function createClassList(input) {
    const classListsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_class_lists", "registrar.class_lists", "class_lists");
    if (!classListsTable) {
        throw new Error("The class lists table has not been created in this database yet.");
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${classListsTable} (class_id, published_at, published_by)
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "academic_year"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "semester"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "tuition_fee"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "downpayment_amount"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "medical_fee"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "id_fee")
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
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${enrollmentsTable} (${columns.join(", ")})
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
        if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, entry.column)) {
            values.push(entry.value);
            setClauses.push(`${entry.column} = $${values.length}`);
        }
    }
    values.push(input.id);
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`update ${enrollmentsTable} set ${setClauses.join(", ")} where id = $${values.length}`, values);
    await logAction(input.actorId, "Update", "Enrollment", `Updated enrollment ID ${input.id}`);
}
async function deleteEnrollment(input) {
    const enrollmentsTable = await requireEnrollmentsTable();
    const hasDeletedAt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "deleted_at");
    if (hasDeletedAt) {
        const hasDeletedBy = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "deleted_by");
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`update ${enrollmentsTable}
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
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`delete from ${enrollmentsTable} where id = $1`, [
        input.id
    ]);
    await logAction(input.actorId, "Delete", "Enrollment", `Deleted enrollment ID ${input.id}`);
}
async function restoreEnrollment(input) {
    const enrollmentsTable = await requireEnrollmentsTable();
    if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "deleted_at")) {
        throw new Error("Recycle bin is not available for enrollments in this database yet.");
    }
    const hasDeletedBy = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(enrollmentsTable, "deleted_by");
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`update ${enrollmentsTable}
     set deleted_at = null${hasDeletedBy ? ", deleted_by = null" : ""}
     where id = $1`, [
        input.id
    ]);
    await logAction(input.actorId, "Restore", "Enrollment", `Restored enrollment ID ${input.id} from bin`);
}
async function purgeEnrollment(input) {
    const enrollmentsTable = await requireEnrollmentsTable();
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`delete from ${enrollmentsTable} where id = $1`, [
        input.id
    ]);
    await logAction(input.actorId, "Delete", "Enrollment", `Permanently deleted enrollment ID ${input.id}`);
}
async function createGrade(input) {
    const gradesTable = await requireGradesTable();
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${gradesTable} (student_id, class_id, grade, remarks, created_at)
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
    const hasSemester = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasColumn"])(gradesTable, "semester");
    if (hasSemester) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`update ${gradesTable}
       set semester = $1, grade = $2, remarks = $3
       where id = $4`, [
            input.semester ?? "",
            input.grade,
            input.remarks ?? "",
            input.id
        ]);
    } else {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`update ${gradesTable} set grade = $1, remarks = $2 where id = $3`, [
            input.grade,
            input.remarks ?? "",
            input.id
        ]);
    }
    await logAction(input.actorId, "Update", "Grades", `Updated grade ID ${input.id}`);
}
async function deleteGrade(input) {
    const gradesTable = await requireGradesTable();
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`delete from ${gradesTable} where id = $1`, [
        input.id
    ]);
    await logAction(input.actorId, "Delete", "Grades", `Deleted grade ID ${input.id}`);
}
async function createDocumentRequest(input) {
    const documentsTable = await requireDocumentsTable();
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${documentsTable} (student_id, doc_type, status, requested_at)
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
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`update ${documentsTable}
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
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`delete from ${documentsTable} where id = $1`, [
        input.id
    ]);
    await logAction(input.actorId, "Delete", "Document Requests", `Deleted document request ${input.id}`);
}
async function createUserAccount(input) {
    const usersTable = await requireUsersTable();
    const exists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryOne"])(`select id from ${usersTable} where username = $1`, [
        input.username
    ]);
    if (exists) {
        throw new Error("Username already exists.");
    }
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${usersTable} (role_id, username, password_hash, first_name, last_name, is_active)
     values ($1, $2, $3, $4, $5, true)
     returning id`, [
        input.roleId,
        input.username,
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(input.password, 10),
        input.firstName,
        input.lastName
    ]);
    await logAction(input.actorId, "Create", "Users", `Created user ${input.username}`);
    return result.rows[0]?.id;
}
async function updateUserAccount(input) {
    const usersTable = await requireUsersTable();
    const exists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryOne"])(`select id from ${usersTable} where username = $1 and id <> $2`, [
        input.username,
        input.id
    ]);
    if (exists) {
        throw new Error("Username already exists.");
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`update ${usersTable} set role_id = $1, username = $2, first_name = $3, last_name = $4 where id = $5`, [
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
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`update ${usersTable} set is_active = $1 where id = $2`, [
        input.isActive,
        input.id
    ]);
    await logAction(input.actorId, "Update", "Users", `Set active=${input.isActive ? 1 : 0} for user ID ${input.id}`);
}
async function resetUserPassword(input) {
    const usersTable = await requireUsersTable();
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`update ${usersTable} set password_hash = $1 where id = $2`, [
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(input.password, 10),
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
    const target = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryOne"])(`select roles.name as role, users.is_active
     from ${usersTable} as users join ${rolesTable} as roles on users.role_id = roles.id
     where users.id = $1`, [
        input.id
    ]);
    if (!target) {
        throw new Error("User not found.");
    }
    if (target.role.toLowerCase() === "administrator" && target.is_active) {
        const admins = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*)
       from ${usersTable} as users join ${rolesTable} as roles on users.role_id = roles.id
       where lower(roles.name) = 'admin' and users.is_active = true`);
        if (Number(admins ?? 0) <= 1) {
            throw new Error("Cannot delete the last active administrator.");
        }
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`delete from ${usersTable} where id = $1`, [
        input.id
    ]);
    await logAction(input.actorId, "Delete", "Users", `Deleted user ID ${input.id}`);
}
async function createReport(input) {
    const reportsTable = await requireReportsTable();
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${reportsTable} (title, department, status, due_date, created_at)
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
    const template = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["workflowTemplates"][input.workflowKey];
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
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${reportsTable} (title, department, status, due_date, created_at)
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
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`update ${reportsTable} set title = $1, department = $2, status = $3, due_date = $4 where id = $5`, [
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
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`delete from ${reportsTable} where id = $1`, [
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
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${academicReportsTable}
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
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`update ${academicReportsTable}
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
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`delete from ${academicReportsTable} where id = $1`, [
        input.id
    ]);
    await logAction(input.actorId, "Delete", "Academic Reports", `Deleted academic report ID ${input.id}`);
}
async function createIntegrationRecord(input) {
    const integrationRecordsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTableName"])("integration_records");
    if (!integrationRecordsTable) {
        throw new Error("The integration_records table is not available in this database yet.");
    }
    const studentsTable = await requireStudentsTable();
    const student = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryOne"])(`select id from ${studentsTable} where student_no = $1 limit 1`, [
        input.studentNo
    ]);
    if (!student) {
        throw new Error("Student not found.");
    }
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`insert into ${integrationRecordsTable}
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
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`update ${notificationsTable} set status = 'Read' where id = $1`, [
        input.id
    ]);
}
async function markAllNotificationsRead() {
    const notificationsTable = await requireNotificationsTable();
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pool"].query(`update ${notificationsTable} set status = 'Read' where status = 'Unread'`);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/lib/session.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
;
const COOKIE_NAME = "bpc_registrar_session";
const FLASH_COOKIE_NAME = "bpc_registrar_flash_success";
const MAX_AGE_SECONDS = 60 * 60 * 12;
function sign(value) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].createHmac("sha256", __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].SESSION_SECRET).update(value).digest("hex");
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
    const jar = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const raw = jar.get(COOKIE_NAME)?.value;
    if (!raw) return null;
    return decode(raw)?.user ?? null;
}
async function setSession(user) {
    const jar = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
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
    const jar = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    jar.delete(COOKIE_NAME);
}
async function setSuccessFlash(message) {
    const jar = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    jar.set(FLASH_COOKIE_NAME, message, {
        httpOnly: false,
        sameSite: "lax",
        secure: ("TURBOPACK compile-time value", "development") === "production",
        path: "/",
        maxAge: 60
    });
}
async function getSuccessFlash() {
    const jar = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    return jar.get(FLASH_COOKIE_NAME)?.value ?? "";
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getSessionUser,
    setSession,
    clearSession,
    setSuccessFlash,
    getSuccessFlash
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getSessionUser, "001d88def72b885b662f6b1d8a41721d644a4c822d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(setSession, "40e26bab1a16e352dd2193407f09812fe689c95408", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(clearSession, "009a37838fb250d29438b83e6aa1c2e17f0575ff86", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(setSuccessFlash, "40f0cfb20b0deaeb6d5ab33d4a931c0cbf4f508dc1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getSuccessFlash, "0039bcb811d5bef163273fd29cd9905f5c8a234f09", null);
}),
"[project]/app/api/[resource]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$department$2d$integration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/department-integration.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integration$2d$catalog$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/integration-catalog.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integration$2d$delivery$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/integration-delivery.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integration$2d$payload$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/integration-payload.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$student$2d$data$2d$dispatch$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/student-data-dispatch.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mutations.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$department$2d$integration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integration$2d$delivery$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integration$2d$payload$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$student$2d$data$2d$dispatch$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$department$2d$integration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integration$2d$delivery$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integration$2d$payload$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$student$2d$data$2d$dispatch$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
async function getInput(request) {
    const type = request.headers.get("content-type") || "";
    if (type.includes("application/json")) {
        return await request.json();
    }
    const form = await request.formData();
    return Object.fromEntries(form.entries());
}
function json(data, status = 200) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data, {
        status
    });
}
async function requireSessionRole(role) {
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSessionUser"])();
    if (!user) return null;
    const userRole = user.role.trim().toLowerCase() === "admin" ? "admin" : "staff";
    const needed = role.trim().toLowerCase() === "administrator" ? "admin" : "staff";
    if (needed === "staff" && userRole === "admin") return user;
    return userRole === needed ? user : null;
}
async function requireIntegrationAccess(request) {
    const apiKey = request.headers.get("x-integration-key") || request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") || "";
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].INTEGRATION_API_KEY) {
        const host = new URL(request.url).hostname.toLowerCase();
        if (host === "localhost" || host === "127.0.0.1") {
            return {
                id: null,
                role: "integration"
            };
        }
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].INTEGRATION_API_KEY && apiKey === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].INTEGRATION_API_KEY) {
        return {
            id: null,
            role: "integration"
        };
    }
    return requireSessionRole("Administrator");
}
async function requireIntegrationUser(request) {
    const apiKey = request.headers.get("x-integration-key") || request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") || "";
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].INTEGRATION_API_KEY) {
        const host = new URL(request.url).hostname.toLowerCase();
        if (host === "localhost" || host === "127.0.0.1") {
            return {
                id: null,
                role: "integration"
            };
        }
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].INTEGRATION_API_KEY && apiKey === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].INTEGRATION_API_KEY) {
        return {
            id: null,
            role: "integration"
        };
    }
    return requireSessionRole("Registrar Staff");
}
async function GET(request, context) {
    const { resource } = await context.params;
    const slug = resource.toLowerCase();
    const url = new URL(request.url);
    try {
        if (slug === "integrations") {
            const integrationResource = String(url.searchParams.get("resource") ?? "manifest").toLowerCase();
            if (integrationResource === "department-manifest") {
                const user = await requireIntegrationAccess(request);
                if (!user) return json({
                    ok: false,
                    error: "Unauthorized."
                }, 401);
                const [summary, outgoing, incoming] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$department$2d$integration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRegistrarDepartmentFlowSummary"])(),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$department$2d$integration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listRegistrarOutgoingDepartments"])(),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$department$2d$integration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listRegistrarIncomingDepartments"])()
                ]);
                return json({
                    ok: true,
                    data: {
                        source_department_key: "registrar",
                        summary,
                        outgoing,
                        incoming
                    }
                });
            }
            if (integrationResource === "department-preview") {
                const user = await requireIntegrationAccess(request);
                if (!user) return json({
                    ok: false,
                    error: "Unauthorized."
                }, 401);
                const preview = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$department$2d$integration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRegistrarDepartmentPreview"])({
                    targetDepartmentKey: String(url.searchParams.get("target_department_key") ?? "").trim(),
                    eventCode: String(url.searchParams.get("event_code") ?? "").trim() || undefined,
                    studentNo: String(url.searchParams.get("student_no") ?? "").trim() || undefined,
                    studentId: Number(url.searchParams.get("student_id") ?? 0) || undefined
                });
                return json({
                    ok: true,
                    message: "Department flow preview prepared.",
                    data: {
                        preview
                    }
                });
            }
            if (integrationResource === "department-status") {
                const user = await requireIntegrationAccess(request);
                if (!user) return json({
                    ok: false,
                    error: "Unauthorized."
                }, 401);
                const status = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$department$2d$integration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRegistrarDepartmentFlowStatus"])({
                    eventId: String(url.searchParams.get("event_id") ?? "").trim() || undefined,
                    correlationId: String(url.searchParams.get("correlation_id") ?? "").trim() || undefined
                });
                return json({
                    ok: status.ok,
                    data: status
                }, status.ok ? 200 : 404);
            }
            if (integrationResource === "student-dispatch-preview") {
                const user = await requireIntegrationAccess(request);
                if (!user) return json({
                    ok: false,
                    error: "Unauthorized."
                }, 401);
                const preview = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$student$2d$data$2d$dispatch$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getStudentDispatchPreview"])({
                    targetKey: String(url.searchParams.get("target_key") ?? "").trim(),
                    studentNo: String(url.searchParams.get("student_no") ?? "").trim() || undefined
                });
                return json({
                    ok: true,
                    message: "Student integration preview prepared.",
                    data: preview
                });
            }
            const outgoingMapping = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integration$2d$catalog$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integrationCatalog"].find((entry)=>entry.direction === "outgoing" && entry.key === integrationResource);
            const user = outgoingMapping ? await requireIntegrationAccess(request) : await requireIntegrationUser(request);
            if (!user) return json({
                ok: false,
                error: "Unauthorized."
            }, 401);
            if (integrationResource === "manifest") {
                return json({
                    ok: true,
                    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integration$2d$catalog$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildIntegrationManifest"])("/api/integrations")
                });
            }
            return json({
                ok: true,
                data: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integration$2d$payload$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getIntegrationPayload"])(integrationResource, {
                    studentNo: String(url.searchParams.get("student_no") ?? "").trim(),
                    studentId: Number(url.searchParams.get("student_id") ?? 0)
                })
            });
        }
        const user = await requireSessionRole(slug === "users" || slug === "reports" || slug === "academic-reports" ? "Administrator" : "Registrar Staff");
        if (!user) return json({
            ok: false,
            error: "Unauthorized."
        }, 401);
        switch(slug){
            case "students":
                return json({
                    ok: true,
                    data: {
                        students: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listStudents"])()
                    }
                });
            case "instructors":
                return json({
                    ok: true,
                    data: {
                        instructors: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listInstructors"])()
                    }
                });
            case "classes":
                return json({
                    ok: true,
                    data: {
                        classes: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listClasses"])()
                    }
                });
            case "class-lists":
                {
                    const classId = Number(url.searchParams.get("class_id") ?? 0);
                    if (classId > 0) {
                        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getClassRoster"])(classId);
                        return json({
                            ok: true,
                            data: {
                                class: data.classInfo,
                                roster: data.roster
                            }
                        });
                    }
                    return json({
                        ok: true,
                        data: {
                            classes: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listClassListSummary"])(String(url.searchParams.get("q") ?? ""))
                        }
                    });
                }
            case "enrollments":
                return json({
                    ok: true,
                    data: {
                        enrollments: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listEnrollments"])()
                    }
                });
            case "grades":
                return json({
                    ok: true,
                    data: {
                        grades: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listGrades"])()
                    }
                });
            case "documents":
                return json({
                    ok: true,
                    data: {
                        documents: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listDocuments"])()
                    }
                });
            case "users":
                return json({
                    ok: true,
                    data: {
                        users: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listUsers"])()
                    }
                });
            case "reports":
                return json({
                    ok: true,
                    data: {
                        reports: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listReports"])(),
                        templates: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["workflowTemplates"]
                    }
                });
            case "academic-reports":
                return json({
                    ok: true,
                    data: {
                        academic_reports: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listAcademicReports"])()
                    }
                });
            case "notifications":
                {
                    return json({
                        ok: true,
                        data: {
                            notifications: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listNotifications"])(20)
                        }
                    });
                }
            default:
                return json({
                    ok: false,
                    error: "Unknown resource."
                }, 404);
        }
    } catch (error) {
        return json({
            ok: false,
            error: error instanceof Error ? error.message : "Request failed."
        }, 500);
    }
}
async function POST(request, context) {
    const { resource } = await context.params;
    const slug = resource.toLowerCase();
    const input = await getInput(request);
    try {
        if (slug === "integrations") {
            const integrationResource = String(input.resource ?? "").toLowerCase();
            const action = String(input.action ?? "").toLowerCase();
            if (action === "dispatch_department_flow") {
                const user = await requireIntegrationAccess(request);
                if (!user) return json({
                    ok: false,
                    error: "Unauthorized."
                }, 401);
                const preview = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$department$2d$integration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRegistrarDepartmentPreview"])({
                    targetDepartmentKey: String(input.target_department_key ?? input.targetDepartmentKey ?? "").trim(),
                    eventCode: String(input.event_code ?? input.eventCode ?? "").trim() || undefined,
                    studentNo: String(input.student_no ?? input.studentNo ?? "").trim() || undefined,
                    studentId: Number(input.student_id ?? input.studentId ?? 0) || undefined
                });
                const dispatch = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$department$2d$integration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dispatchRegistrarDepartmentFlow"])({
                    targetDepartmentKey: String(input.target_department_key ?? input.targetDepartmentKey ?? "").trim(),
                    eventCode: String(input.event_code ?? input.eventCode ?? "").trim() || undefined,
                    studentNo: String(input.student_no ?? input.studentNo ?? "").trim() || undefined,
                    studentId: Number(input.student_id ?? input.studentId ?? 0) || undefined,
                    sourceRecordId: String(input.source_record_id ?? input.sourceRecordId ?? "").trim() || undefined
                });
                return json({
                    ok: dispatch.ok,
                    message: dispatch.message,
                    data: {
                        preview,
                        dispatch
                    }
                }, dispatch.ok ? 200 : 422);
            }
            if (action === "dispatch_student_data") {
                const user = await requireIntegrationAccess(request);
                if (!user) return json({
                    ok: false,
                    error: "Unauthorized."
                }, 401);
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$student$2d$data$2d$dispatch$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dispatchStudentData"])({
                    targetKey: String(input.target_key ?? input.targetKey ?? "").trim(),
                    studentNo: String(input.student_no ?? input.studentNo ?? "").trim() || undefined
                });
                return json({
                    ok: result.ok,
                    message: result.message,
                    data: result
                }, result.ok ? 200 : 422);
            }
            const outgoingMapping = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integration$2d$catalog$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integrationCatalog"].find((entry)=>entry.direction === "outgoing" && entry.key === integrationResource);
            if (action === "deliver" && outgoingMapping) {
                const user = await requireIntegrationAccess(request);
                if (!user) return json({
                    ok: false,
                    error: "Unauthorized."
                }, 401);
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integration$2d$delivery$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deliverIntegrationResource"])(integrationResource, {
                    studentNo: String(input.student_no ?? input.studentNo ?? "").trim(),
                    studentId: Number(input.student_id ?? input.studentId ?? 0)
                });
                return json({
                    ok: result.ok,
                    message: result.message,
                    data: result
                }, result.ok ? 200 : 422);
            }
            const user = await requireIntegrationAccess(request);
            if (!user) return json({
                ok: false,
                error: "Unauthorized."
            }, 401);
            const mapping = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integration$2d$catalog$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integrationCatalog"].find((entry)=>entry.direction === "incoming" && entry.key === integrationResource);
            if (!mapping) return json({
                ok: false,
                error: "Unsupported integration resource."
            }, 405);
            const id = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createIntegrationRecord"])({
                studentNo: String(input.student_no ?? input.studentNo ?? "").trim(),
                sourceOffice: String(input.source_office ?? mapping.office).trim(),
                recordType: String(input.record_type ?? mapping.key.replace(/-/g, "_").replace(/s$/, "")).trim(),
                referenceNo: String(input.reference_no ?? "").trim(),
                externalStatus: String(input.status ?? input.external_status ?? "Received").trim() || "Received",
                title: String(input.title ?? "").trim(),
                notes: String(input.notes ?? "").trim(),
                actorId: user.id
            });
            return json({
                ok: true,
                message: "Integration record received successfully.",
                data: {
                    id
                }
            }, 201);
        }
        const user = await requireSessionRole(slug === "users" || slug === "reports" || slug === "academic-reports" ? "Administrator" : "Registrar Staff");
        if (!user) return json({
            ok: false,
            error: "Unauthorized."
        }, 401);
        const action = String(input.action ?? "").toLowerCase();
        switch(slug){
            case "students":
                if (action === "create") return json({
                    ok: true,
                    data: {
                        id: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createStudent"])({
                            studentNo: String(input.student_no ?? ""),
                            firstName: String(input.first_name ?? ""),
                            lastName: String(input.last_name ?? ""),
                            program: String(input.program ?? ""),
                            yearLevel: String(input.year_level ?? ""),
                            status: String(input.status ?? "Active"),
                            actorId: user.id
                        })
                    }
                });
                if (action === "update") return json({
                    ok: true,
                    data: {
                        id: Number(input.id ?? 0)
                    },
                    message: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateStudent"])({
                        id: Number(input.id ?? 0),
                        studentNo: String(input.student_no ?? ""),
                        firstName: String(input.first_name ?? ""),
                        lastName: String(input.last_name ?? ""),
                        program: String(input.program ?? ""),
                        yearLevel: String(input.year_level ?? ""),
                        status: String(input.status ?? "Active"),
                        actorId: user.id
                    }), "Student updated.")
                });
                if (action === "delete") return json({
                    ok: true,
                    data: {
                        id: Number(input.id ?? 0)
                    },
                    message: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteStudent"])({
                        id: Number(input.id ?? 0),
                        actorId: user.id
                    }), "Student deleted.")
                });
                break;
            case "instructors":
                if (action === "create") return json({
                    ok: true,
                    data: {
                        id: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createInstructor"])({
                            employeeNo: String(input.employee_no ?? ""),
                            firstName: String(input.first_name ?? ""),
                            lastName: String(input.last_name ?? ""),
                            department: String(input.department ?? ""),
                            actorId: user.id
                        })
                    }
                });
                if (action === "update") return json({
                    ok: true,
                    message: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateInstructor"])({
                        id: String(input.id ?? ""),
                        employeeNo: String(input.employee_no ?? ""),
                        firstName: String(input.first_name ?? ""),
                        lastName: String(input.last_name ?? ""),
                        department: String(input.department ?? ""),
                        actorId: user.id
                    }), "Instructor updated.")
                });
                if (action === "delete") return json({
                    ok: true,
                    message: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteInstructor"])({
                        id: String(input.id ?? ""),
                        actorId: user.id
                    }), "Instructor deleted.")
                });
                break;
            case "classes":
                if (action === "create") return json({
                    ok: true,
                    data: {
                        id: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClassSchedule"])({
                            classCode: String(input.class_code ?? ""),
                            title: String(input.class_title ?? ""),
                            course: String(input.course ?? ""),
                            units: Number(input.units ?? 0),
                            day: String(input.day ?? ""),
                            time: String(input.time ?? ""),
                            room: String(input.room ?? ""),
                            actorId: user.id
                        })
                    }
                });
                if (action === "update") return json({
                    ok: true,
                    message: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateClassSchedule"])({
                        classId: Number(input.class_id ?? 0),
                        classCode: String(input.class_code ?? ""),
                        title: String(input.class_title ?? ""),
                        course: String(input.course ?? ""),
                        units: Number(input.units ?? 0),
                        day: String(input.day ?? ""),
                        time: String(input.time ?? ""),
                        room: String(input.room ?? ""),
                        actorId: user.id
                    }), "Class updated.")
                });
                if (action === "delete") return json({
                    ok: true,
                    message: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteClassSchedule"])({
                        classId: Number(input.class_id ?? 0),
                        actorId: user.id
                    }), "Class deleted.")
                });
                break;
            case "enrollments":
                if (action === "create") return json({
                    ok: true,
                    data: {
                        id: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createEnrollment"])({
                            studentId: Number(input.student_id ?? 0),
                            classId: Number(input.class_id ?? 0),
                            status: String(input.status ?? "Enrolled"),
                            academicYear: String(input.academic_year ?? ""),
                            semester: String(input.semester ?? ""),
                            tuitionFee: Number(input.tuition_fee ?? 5000),
                            downpaymentAmount: Number(input.downpayment_amount ?? 0),
                            medicalFee: Number(input.medical_fee ?? 0),
                            idFee: Number(input.id_fee ?? 0),
                            actorId: user.id
                        })
                    }
                });
                if (action === "update") return json({
                    ok: true,
                    message: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateEnrollment"])({
                        id: Number(input.id ?? 0),
                        status: String(input.status ?? ""),
                        academicYear: String(input.academic_year ?? ""),
                        semester: String(input.semester ?? ""),
                        tuitionFee: Number(input.tuition_fee ?? 5000),
                        downpaymentAmount: Number(input.downpayment_amount ?? 0),
                        medicalFee: Number(input.medical_fee ?? 0),
                        idFee: Number(input.id_fee ?? 0),
                        actorId: user.id
                    }), "Enrollment updated.")
                });
                if (action === "delete") return json({
                    ok: true,
                    message: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteEnrollment"])({
                        id: Number(input.id ?? 0),
                        actorId: user.id
                    }), "Enrollment deleted.")
                });
                break;
            case "grades":
                if (action === "create") return json({
                    ok: true,
                    data: {
                        id: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGrade"])({
                            studentId: Number(input.student_id ?? 0),
                            classId: Number(input.class_id ?? 0),
                            semester: String(input.semester ?? ""),
                            grade: String(input.grade ?? ""),
                            remarks: String(input.remarks ?? ""),
                            actorId: user.id
                        })
                    }
                });
                if (action === "update") return json({
                    ok: true,
                    message: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateGrade"])({
                        id: Number(input.id ?? 0),
                        grade: String(input.grade ?? ""),
                        remarks: String(input.remarks ?? ""),
                        actorId: user.id
                    }), "Grade updated.")
                });
                if (action === "delete") return json({
                    ok: true,
                    message: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteGrade"])({
                        id: Number(input.id ?? 0),
                        actorId: user.id
                    }), "Grade deleted.")
                });
                break;
            case "documents":
                if (action === "create") return json({
                    ok: true,
                    data: {
                        id: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDocumentRequest"])({
                            studentId: Number(input.student_id ?? 0),
                            docType: String(input.doc_type ?? ""),
                            actorId: user.id
                        })
                    }
                });
                if (action === "update") return json({
                    ok: true,
                    message: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateDocumentRequest"])({
                        id: Number(input.doc_id ?? 0),
                        status: String(input.status ?? ""),
                        actorId: user.id
                    }), "Document updated.")
                });
                if (action === "delete") return json({
                    ok: true,
                    message: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteDocumentRequest"])({
                        id: Number(input.doc_id ?? 0),
                        actorId: user.id
                    }), "Document deleted.")
                });
                break;
            case "users":
                if (action === "create") return json({
                    ok: true,
                    data: {
                        id: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createUserAccount"])({
                            roleId: Number(input.role_id ?? 0),
                            username: String(input.username ?? ""),
                            password: String(input.password ?? ""),
                            firstName: String(input.first_name ?? ""),
                            lastName: String(input.last_name ?? ""),
                            actorId: user.id
                        })
                    }
                });
                if (action === "update") return json({
                    ok: true,
                    message: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateUserAccount"])({
                        id: Number(input.id ?? 0),
                        roleId: Number(input.role_id ?? 0),
                        username: String(input.username ?? ""),
                        firstName: String(input.first_name ?? ""),
                        lastName: String(input.last_name ?? ""),
                        actorId: user.id
                    }), "User updated.")
                });
                if (action === "toggle_active") return json({
                    ok: true,
                    message: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toggleUserAccount"])({
                        id: Number(input.id ?? 0),
                        isActive: Number(input.is_active ?? 0) === 1,
                        actorId: user.id
                    }), "User status updated.")
                });
                if (action === "reset_password") return json({
                    ok: true,
                    message: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resetUserPassword"])({
                        id: Number(input.id ?? 0),
                        password: String(input.password ?? ""),
                        actorId: user.id
                    }), "Password reset successful.")
                });
                if (action === "delete") return json({
                    ok: true,
                    message: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteUserAccount"])({
                        id: Number(input.id ?? 0),
                        actorId: user.id
                    }), "User deleted.")
                });
                break;
            case "reports":
                if (action === "create") return json({
                    ok: true,
                    data: {
                        id: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createReport"])({
                            title: String(input.title ?? ""),
                            department: String(input.department ?? ""),
                            status: String(input.status ?? "Pending"),
                            dueDate: String(input.due_date ?? ""),
                            actorId: user.id
                        })
                    }
                });
                if (action === "create_workflow_report") return json({
                    ok: true,
                    data: {
                        id: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createWorkflowReport"])({
                            workflowKey: String(input.workflow_key ?? ""),
                            title: String(input.title ?? ""),
                            department: String(input.department ?? ""),
                            status: String(input.status ?? "Pending"),
                            dueDate: String(input.due_date ?? ""),
                            actorId: user.id
                        })
                    }
                });
                if (action === "update") return json({
                    ok: true,
                    message: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateReport"])({
                        id: Number(input.id ?? 0),
                        title: String(input.title ?? ""),
                        department: String(input.department ?? ""),
                        status: String(input.status ?? "Pending"),
                        dueDate: String(input.due_date ?? ""),
                        actorId: user.id
                    }), "Report updated.")
                });
                if (action === "delete") return json({
                    ok: true,
                    message: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteReport"])({
                        id: Number(input.id ?? 0),
                        actorId: user.id
                    }), "Report deleted.")
                });
                break;
            case "academic-reports":
                if (action === "create") return json({
                    ok: true,
                    data: {
                        id: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAcademicReport"])({
                            studentId: Number(input.student_id ?? 0),
                            title: String(input.title ?? ""),
                            coverage: String(input.coverage ?? ""),
                            reportType: String(input.report_type ?? "Transcript"),
                            semester: String(input.semester ?? ""),
                            authorizationStatus: String(input.authorization_status ?? "Pending"),
                            outputFormat: String(input.output_format ?? "Transcript / Grade Report"),
                            status: String(input.status ?? "Draft"),
                            actorId: user.id
                        })
                    }
                });
                if (action === "update") return json({
                    ok: true,
                    message: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateAcademicReport"])({
                        id: Number(input.id ?? 0),
                        studentId: Number(input.student_id ?? 0),
                        title: String(input.title ?? ""),
                        coverage: String(input.coverage ?? ""),
                        reportType: String(input.report_type ?? "Transcript"),
                        semester: String(input.semester ?? ""),
                        authorizationStatus: String(input.authorization_status ?? "Pending"),
                        outputFormat: String(input.output_format ?? "Transcript / Grade Report"),
                        status: String(input.status ?? "Draft"),
                        actorId: user.id
                    }), "Academic report updated.")
                });
                if (action === "delete") return json({
                    ok: true,
                    message: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteAcademicReport"])({
                        id: Number(input.id ?? 0),
                        actorId: user.id
                    }), "Academic report deleted.")
                });
                break;
            case "notifications":
                if (action === "mark_read") return json({
                    ok: true,
                    message: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["markNotificationRead"])({
                        id: Number(input.id ?? 0)
                    }), "Marked as read.")
                });
                if (action === "mark_all_read") return json({
                    ok: true,
                    message: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mutations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["markAllNotificationsRead"])(), "All notifications marked as read.")
                });
                break;
        }
        return json({
            ok: false,
            error: "Unknown action."
        }, 400);
    } catch (error) {
        return json({
            ok: false,
            error: error instanceof Error ? error.message : "Request failed."
        }, 422);
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__45accc5d._.js.map