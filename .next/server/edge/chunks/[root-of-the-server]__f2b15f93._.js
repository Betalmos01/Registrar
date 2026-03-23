(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__f2b15f93._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
const legacyRedirects = {
    "/index.php": "/",
    "/admin.php": "/admin/dashboard",
    "/staff.php": "/staff/dashboard",
    "/profile.php": "/profile",
    "/access_denied.php": "/access-denied",
    "/auth/login.php": "/",
    "/auth/logout.php": "/",
    "/admin/dashboard.php": "/admin/dashboard",
    "/admin/users.php": "/admin/users",
    "/admin/reports.php": "/admin/reports",
    "/admin/export_reports.php": "/admin/reports/export",
    "/admin/academic_reports.php": "/admin/academic-reports",
    "/admin/integrations.php": "/admin/integrations",
    "/admin/activity.php": "/admin/activity",
    "/admin/settings.php": "/admin/settings",
    "/staff/dashboard.php": "/staff/dashboard",
    "/staff/students.php": "/staff/students",
    "/staff/instructors.php": "/staff/instructors",
    "/staff/classes.php": "/staff/classes",
    "/staff/class_lists.php": "/staff/class-lists",
    "/staff/class_list_view.php": "/staff/class-lists",
    "/staff/enrollments.php": "/staff/enrollments",
    "/staff/grades.php": "/staff/grades",
    "/staff/documents.php": "/staff/documents",
    "/staff/schedules.php": "/staff/schedules",
    "/staff/staff_directory.php": "/staff/staff-directory",
    "/api/students.php": "/api/students",
    "/api/instructors.php": "/api/instructors",
    "/api/classes.php": "/api/classes",
    "/api/class_lists.php": "/api/class-lists",
    "/api/enrollments.php": "/api/enrollments",
    "/api/grades.php": "/api/grades",
    "/api/documents.php": "/api/documents",
    "/api/users.php": "/api/users",
    "/api/reports.php": "/api/reports",
    "/api/academic_reports.php": "/api/academic-reports",
    "/api/notifications.php": "/api/notifications",
    "/api/integrations.php": "/api/integrations"
};
function middleware(request) {
    const target = legacyRedirects[request.nextUrl.pathname];
    if (!target) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const url = request.nextUrl.clone();
    url.pathname = target;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url, 308);
}
const config = {
    matcher: [
        "/:path*"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__f2b15f93._.js.map