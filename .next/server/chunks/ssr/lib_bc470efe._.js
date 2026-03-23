module.exports = [
"[project]/lib/integration-payload.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getIntegrationPayload",
    ()=>getIntegrationPayload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function getIntegrationPayload(resource, options = {}) {
    const studentNo = String(options.studentNo ?? "").trim();
    const studentId = Number(options.studentId ?? 0);
    const studentsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_students", "students");
    const enrollmentsTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar.enrollments", "registrar_enrollments", "enrollments");
    const classesTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_classes", "classes");
    const gradesTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTableName"])("registrar_grades", "grades");
    const incomingRecordTypeMap = {
        "payment-confirmations": "payment_confirmation",
        "medical-clearances": "medical_clearance",
        "counseling-reports": "counseling_report",
        "discipline-records": "discipline_record",
        "activity-participation-records": "activity_participation_record"
    };
    if (resource in incomingRecordTypeMap) {
        return {
            records: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listIntegrationRecords"])({
                recordType: incomingRecordTypeMap[resource],
                studentNo,
                limit: 50
            })
        };
    }
    if (resource === "student-list") {
        const students = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listStudents"])();
        return {
            students
        };
    }
    if (resource === "enrollment-statistics") {
        const [students, enrollments, classes] = await Promise.all([
            studentsTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${studentsTable}`) : Promise.resolve(0),
            enrollmentsTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${enrollmentsTable}`) : Promise.resolve(0),
            classesTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryValue"])(`select count(*) from ${classesTable}`) : Promise.resolve(0)
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
        const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`select
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
    const student = studentNo ? studentsTable ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryOne"])(`select * from ${studentsTable} where student_no = $1 limit 1`, [
        studentNo
    ]) : null : studentId > 0 ? studentsTable ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryOne"])(`select * from ${studentsTable} where id = $1 limit 1`, [
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
        const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`select enrollments.*, classes.class_code, classes.title
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
        const grades = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`select grades.*, classes.class_code, classes.title
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
"[project]/lib/integration-delivery.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "deliverIntegrationResource",
    ()=>deliverIntegrationResource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/env.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integration$2d$payload$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/integration-payload.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integration$2d$payload$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integration$2d$payload$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function readTargets(resource) {
    const targetMap = {
        "student-list": [
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CRAD_STUDENT_LIST_ENDPOINT ? {
                consumer: "CRADManagement",
                url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CRAD_STUDENT_LIST_ENDPOINT
            } : null,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].COMLAB_STUDENT_LIST_ENDPOINT ? {
                consumer: "Computer Laboratory",
                url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].COMLAB_STUDENT_LIST_ENDPOINT
            } : null
        ].filter(Boolean),
        "student-personal-info": [
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].PREFECT_STUDENT_PERSONAL_INFO_ENDPOINT ? {
                consumer: "PrefectManagementsSystem",
                url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].PREFECT_STUDENT_PERSONAL_INFO_ENDPOINT
            } : null,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CLINIC_STUDENT_PERSONAL_INFO_ENDPOINT ? {
                consumer: "Clinic",
                url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CLINIC_STUDENT_PERSONAL_INFO_ENDPOINT
            } : null,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].GUIDANCE_STUDENT_PERSONAL_INFO_ENDPOINT ? {
                consumer: "Guidance",
                url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].GUIDANCE_STUDENT_PERSONAL_INFO_ENDPOINT
            } : null
        ].filter(Boolean),
        "enrollment-data": [
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CASHIER_ENROLLMENT_DATA_ENDPOINT ? {
                consumer: "Cashier",
                url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CASHIER_ENROLLMENT_DATA_ENDPOINT
            } : null
        ].filter(Boolean),
        "student-academic-records": [
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].GUIDANCE_STUDENT_ACADEMIC_RECORDS_ENDPOINT ? {
                consumer: "Guidance",
                url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].GUIDANCE_STUDENT_ACADEMIC_RECORDS_ENDPOINT
            } : null
        ].filter(Boolean),
        "enrollment-statistics": [
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].PMED_ENROLLMENT_STATISTICS_ENDPOINT ? {
                consumer: "PMED",
                url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].PMED_ENROLLMENT_STATISTICS_ENDPOINT
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
    const client = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].connect();
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
    const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integration$2d$payload$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIntegrationPayload"])(resource, options);
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
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].INTEGRATION_API_KEY ? {
                        "x-integration-key": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].INTEGRATION_API_KEY
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
];

//# sourceMappingURL=lib_bc470efe._.js.map