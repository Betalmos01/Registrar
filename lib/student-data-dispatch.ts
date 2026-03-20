import { env } from "@/lib/env";
import { listEnrollments, listStudents } from "@/lib/data";
import { pool } from "@/lib/db";
import { getSubjectsForStudent } from "@/lib/student-subjects";

export type StudentDispatchTargetKey =
  | "cashier"
  | "clinic"
  | "guidance"
  | "prefect"
  | "computer-laboratory"
  | "crad";

type StudentDispatchTarget = {
  key: StudentDispatchTargetKey;
  label: string;
  resource: string;
  consumer: string;
  endpoint: string;
};

type FeedConfig = {
  schema: string;
  table: string;
};

const STUDENT_DISPATCH_TARGETS: StudentDispatchTarget[] = [
  {
    key: "cashier",
    label: "Cashier",
    resource: "enrollment-data",
    consumer: "Cashier",
    endpoint: env.CASHIER_ENROLLMENT_DATA_ENDPOINT
  },
  {
    key: "clinic",
    label: "Clinic",
    resource: "student-personal-info",
    consumer: "Clinic",
    endpoint: env.CLINIC_STUDENT_PERSONAL_INFO_ENDPOINT
  },
  {
    key: "guidance",
    label: "Guidance",
    resource: "student-personal-info",
    consumer: "Guidance",
    endpoint: env.GUIDANCE_STUDENT_PERSONAL_INFO_ENDPOINT
  },
  {
    key: "prefect",
    label: "Prefect",
    resource: "student-personal-info",
    consumer: "Prefect",
    endpoint: env.PREFECT_STUDENT_PERSONAL_INFO_ENDPOINT
  },
  {
    key: "computer-laboratory",
    label: "Computer Laboratory",
    resource: "student-list",
    consumer: "Computer Laboratory",
    endpoint: env.COMLAB_STUDENT_LIST_ENDPOINT
  },
  {
    key: "crad",
    label: "CRAD",
    resource: "student-list",
    consumer: "CRAD",
    endpoint: env.CRAD_STUDENT_LIST_ENDPOINT
  }
];

const FEED_CONFIG_BY_TARGET: Record<StudentDispatchTargetKey, FeedConfig> = {
  cashier: {
    schema: "cashier",
    table: "registrar_student_enrollment_feed"
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

function getTarget(targetKey: string) {
  return STUDENT_DISPATCH_TARGETS.find((target) => target.key === targetKey);
}

function matchesCradSubject(value: string) {
  return /(research|capstone)/i.test(value);
}

function matchesComputerLabSubject(value: string) {
  return /(laboratory|computer|programming|network|information technology|it\b|lab\b)/i.test(value);
}

function buildStudentListPayload(target: StudentDispatchTarget, students: any[]) {
  const filteredStudents = students
    .map((student) => {
      const subjects = getSubjectsForStudent(student.program ?? "", student.year_level ?? "");
      const matchedSubjects = subjects.filter((subject) =>
        target.key === "crad" ? matchesCradSubject(subject) : matchesComputerLabSubject(subject)
      );

      return {
        student,
        matchedSubjects
      };
    })
    .filter((entry) => entry.matchedSubjects.length > 0)
    .map(({ student, matchedSubjects }) => ({
      student_no: String(student.student_no ?? ""),
      student_name: `${String(student.last_name ?? "")}, ${String(student.first_name ?? "")}`.trim(),
      program: String(student.program ?? ""),
      year_level: String(student.year_level ?? ""),
      status: String(student.status ?? ""),
      matched_subjects: matchedSubjects
    }));

  return {
    target: target.label,
    audience_rule:
      target.key === "crad"
        ? "Students who have or are taking research and capstone subjects."
        : "Students who are taking computer-related laboratory subjects.",
    total_students: filteredStudents.length,
    rows: filteredStudents
  };
}

async function buildPayload(target: StudentDispatchTarget, studentNo?: string) {
  if (target.key === "cashier") {
    const enrollments = await listEnrollments();
    return {
      target: target.label,
      total_enrollments: enrollments.length,
      rows: (enrollments as any[]).map((item) => ({
        student_no: String(item.student_no ?? ""),
        student_name: `${String(item.last_name ?? "")}, ${String(item.first_name ?? "")}`.trim(),
        class_code: String(item.class_code ?? ""),
        subject: String(item.title ?? ""),
        academic_year: String(item.academic_year ?? ""),
        semester: String(item.semester ?? ""),
        status: String(item.status ?? ""),
        downpayment_amount: String(item.downpayment_amount ?? 0)
      }))
    };
  }

  const students = await listStudents();

  if (target.key === "clinic" || target.key === "guidance" || target.key === "prefect") {
    return {
      target: target.label,
      total_students: students.length,
      rows: (students as any[]).map((student) => {
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

        return target.key === "clinic"
          ? {
              ...base,
              payment_status: String(student.payment_status ?? "Pending")
            }
          : base;
      })
    };
  }

  return buildStudentListPayload(target, students as any[]);
}

async function parseResponse(response: Response) {
  const text = await response.text();
  try {
    return text ? JSON.parse(text) : null;
  } catch {
    return text;
  }
}

function getFeedTableName(config: FeedConfig) {
  return `${config.schema}.${config.table}`;
}

async function ensureDispatchFeedTable(config: FeedConfig) {
  const tableName = getFeedTableName(config);

  await pool.query(`create schema if not exists ${config.schema}`);
  await pool.query(
    `create table if not exists ${tableName} (
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
    )`
  );
  await pool.query(
    `create index if not exists ${config.table}_batch_idx
     on ${tableName} (batch_id, sent_at desc, row_index asc)`
  );
  return tableName;
}

function getFeedRowStudentName(row: Record<string, unknown>) {
  const directName = String(row.student_name ?? "").trim();
  if (directName) return directName;

  const firstName = String(row.first_name ?? "").trim();
  const lastName = String(row.last_name ?? "").trim();
  const combined = [lastName, firstName].filter(Boolean).join(", ").trim();
  return combined || null;
}

async function persistStudentBatch(target: StudentDispatchTarget, payload: any) {
  const rows = Array.isArray(payload?.rows) ? payload.rows : [];
  if (rows.length === 0) {
    throw new Error(`No rows are available to send to ${target.label}.`);
  }

  const config = FEED_CONFIG_BY_TARGET[target.key];
  const tableName = await ensureDispatchFeedTable(config);
  const batchId = crypto.randomUUID();
  const sentAt = new Date().toISOString();
  const client = await pool.connect();

  try {
    await client.query("begin");

    for (let index = 0; index < rows.length; index += 1) {
      const row = rows[index] as Record<string, unknown>;
      await client.query(
        `insert into ${tableName}
          (batch_id, source, target_key, target_label, row_index, student_no, student_name, program, year_level, status, payload, sent_at, created_at)
         values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11::jsonb, $12::timestamptz, current_timestamp)`,
        [
          batchId,
          "Registrar",
          target.key,
          target.label,
          index + 1,
          String(row.student_no ?? ""),
          getFeedRowStudentName(row),
          String(row.program ?? ""),
          String(row.year_level ?? ""),
          String(row.status ?? ""),
          JSON.stringify(row),
          sentAt
        ]
      );
    }

    await client.query("commit");
  } catch (error) {
    await client.query("rollback");
    throw error;
  } finally {
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

export async function getStudentDispatchPreview(options: { targetKey: string; studentNo?: string }) {
  const target = getTarget(options.targetKey);
  if (!target) {
    throw new Error("Unknown student integration destination.");
  }

  const payload = await buildPayload(target, options.studentNo);

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

export async function dispatchStudentData(options: { targetKey: string; studentNo?: string }) {
  const preview = await getStudentDispatchPreview(options);

  try {
    const storage = await persistStudentBatch(preview.target, preview.payload);
    let endpointDelivery: {
      ok: boolean;
      status: number;
      response: unknown;
    } | null = null;

    if (preview.target.endpoint) {
      try {
        const response = await fetch(preview.target.endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(env.INTEGRATION_API_KEY ? { "x-integration-key": env.INTEGRATION_API_KEY } : {})
          },
          body: JSON.stringify({
            resource: preview.target.resource,
            source: "Registrar",
            consumer: preview.target.consumer,
            sent_at: storage.sent_at,
            batch_id: storage.batch_id,
            data:
              preview.target.resource === "student-list"
                ? {
                    ...preview.payload,
                    students: Array.isArray(preview.payload?.rows) ? preview.payload.rows : []
                  }
                : preview.payload
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
      message: `Student data sent to ${preview.target.label}.`,
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

export function listStudentDispatchTargets() {
  return STUDENT_DISPATCH_TARGETS.map((target) => ({
    key: target.key,
    label: target.label
  }));
}
