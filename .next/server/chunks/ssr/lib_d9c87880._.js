module.exports = [
"[project]/lib/student-subjects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/student-data-dispatch.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/env.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$student$2d$subjects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/student-subjects.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
        endpoint: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CLINIC_STUDENT_PERSONAL_INFO_ENDPOINT
    },
    {
        key: "guidance",
        label: "Guidance",
        resource: "student-personal-info",
        consumer: "Guidance",
        endpoint: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].GUIDANCE_STUDENT_PERSONAL_INFO_ENDPOINT
    },
    {
        key: "prefect",
        label: "Prefect",
        resource: "student-personal-info",
        consumer: "Prefect",
        endpoint: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].PREFECT_STUDENT_PERSONAL_INFO_ENDPOINT
    },
    {
        key: "computer-laboratory",
        label: "Computer Laboratory",
        resource: "student-list",
        consumer: "Computer Laboratory",
        endpoint: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].COMLAB_STUDENT_LIST_ENDPOINT
    },
    {
        key: "crad",
        label: "CRAD",
        resource: "student-list",
        consumer: "CRAD",
        endpoint: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CRAD_STUDENT_LIST_ENDPOINT
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
        const subjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$student$2d$subjects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSubjectsForStudent"])(student.program ?? "", student.year_level ?? "");
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
        const enrollments = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listEnrollments"])();
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
    const students = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listStudents"])();
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`create schema if not exists ${config.schema}`);
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`create table if not exists ${tableName} (
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
            if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasColumn"])(tableName, column.name)) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`alter table ${tableName} add column ${column.name} ${column.definition}`);
            }
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].query(`create index if not exists ${config.table}_batch_idx
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
    const client = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pool"].connect();
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
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].INTEGRATION_API_KEY ? {
                            "x-integration-key": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].INTEGRATION_API_KEY
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
];

//# sourceMappingURL=lib_d9c87880._.js.map