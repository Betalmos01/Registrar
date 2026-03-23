import { hasColumn, pool, queryOne, queryValue, resolveTableName } from "@/lib/db";
import { getExportRows, listIntegrationRecords, listStudents, workflowTemplates } from "@/lib/data";

export async function getIntegrationPayload(
  resource: string,
  options: { studentNo?: string; studentId?: number; reportId?: string | number } = {}
) {
  const studentNo = String(options.studentNo ?? "").trim();
  const studentId = Number(options.studentId ?? 0);
  const reportId = Number(options.reportId ?? 0);
  const studentsTable = await resolveTableName("registrar_students", "students");
  const enrollmentsTable = await resolveTableName("registrar.enrollments", "registrar_enrollments", "enrollments");
  const classesTable = await resolveTableName("registrar_classes", "classes");
  const gradesTable = await resolveTableName("registrar_grades", "grades");
  const reportsTable = await resolveTableName("reports", "registrar_reports");
  const incomingRecordTypeMap: Record<string, string> = {
    "payment-confirmations": "payment_confirmation",
    "medical-clearances": "medical_clearance",
    "counseling-reports": "counseling_report",
    "discipline-records": "discipline_record",
    "activity-participation-records": "activity_participation_record"
  };

  if (resource in incomingRecordTypeMap) {
    return {
      records: await listIntegrationRecords({
        recordType: incomingRecordTypeMap[resource],
        studentNo,
        limit: 50
      })
    };
  }

  if (resource === "student-list") {
    const students = await listStudents();
    return { students };
  }

  if (resource === "enrollment-statistics") {
    const [students, enrollments, classes] = await Promise.all([
      studentsTable ? queryValue<number>(`select count(*) from ${studentsTable}`) : Promise.resolve(0),
      enrollmentsTable ? queryValue<number>(`select count(*) from ${enrollmentsTable}`) : Promise.resolve(0),
      classesTable ? queryValue<number>(`select count(*) from ${classesTable}`) : Promise.resolve(0)
    ]);
    return { students: Number(students ?? 0), enrollments: Number(enrollments ?? 0), classes: Number(classes ?? 0) };
  }

  if (resource === "enrollment-feed") {
    if (!enrollmentsTable || !studentsTable || !classesTable) {
      return { rows: [] };
    }

    const rows = await pool.query(
      `select
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
       limit 400`
    );

    return { rows: rows.rows };
  }

  if (resource === "report-queue") {
    if (!reportsTable) {
      return { rows: [] };
    }

    const reportFilterSql = Number.isFinite(reportId) && reportId > 0 ? " and id = $1" : "";
    const reportFilterParams = Number.isFinite(reportId) && reportId > 0 ? [reportId] : [];

    const rows = await pool.query(
      `select
         id,
         coalesce(title, '')::text as title,
         'PMED'::text as department,
         coalesce(status, 'Pending')::text as status,
         coalesce(due_date::text, '')::text as due_date,
         coalesce(created_at::text, now()::text) as created_at
       from ${reportsTable}
       where upper(trim(coalesce(department, ''))) = 'PMED'${reportFilterSql}
       order by created_at desc nulls last, id desc`,
      reportFilterParams
    );

    const studentStatusRows = studentsTable
      ? await pool.query(
          `select
             coalesce(nullif(trim(status), ''), 'Unknown')::text as status,
             count(*)::int as count
           from ${studentsTable}
           group by 1
           order by 2 desc, 1 asc`
        )
      : { rows: [] as Array<{ status: string; count: number }> };

    const gradeSummaryRows = gradesTable
      ? await pool.query(
          `select
             count(*)::int as total_grade_records,
             count(distinct student_id)::int as distinct_students
           from ${gradesTable}`
        )
      : { rows: [{ total_grade_records: 0, distinct_students: 0 }] };

    const hasGradeSemesterColumn = gradesTable ? await hasColumn(gradesTable, "semester") : false;
    const semesterSelect = hasGradeSemesterColumn
      ? "coalesce(grades.semester, '')::text as semester,"
      : "''::text as semester,";

    const recentGradeRows =
      gradesTable && studentsTable && classesTable
        ? await pool.query(
            `select
               grades.id,
               coalesce(students.student_no, '')::text as student_no,
               trim(concat_ws(' ', coalesce(students.first_name, ''), coalesce(students.last_name, '')))::text as student_name,
               coalesce(classes.class_code, '')::text as class_code,
               coalesce(classes.title, '')::text as subject_title,
               ${semesterSelect}
               coalesce(grades.grade, '')::text as grade,
               coalesce(grades.remarks, '')::text as remarks,
               coalesce(grades.created_at::text, now()::text) as created_at
             from ${gradesTable} as grades
             left join ${studentsTable} as students on students.id = grades.student_id
             left join ${classesTable} as classes on classes.id = grades.class_id
             order by grades.created_at desc nulls last, grades.id desc
             limit 50`
          )
        : { rows: [] as Record<string, unknown>[] };

    const workflowKeys = Object.keys(workflowTemplates) as Array<keyof typeof workflowTemplates>;
    const workflowSnapshots = await Promise.all(
      workflowKeys.map(async (workflowKey) => {
        const exportData = await getExportRows(workflowKey);
        const rows = Array.isArray(exportData?.rows) ? exportData.rows : [];
        return {
          workflow_key: workflowKey,
          label: workflowTemplates[workflowKey].label,
          title: exportData.title,
          columns: exportData.columns,
          total_rows: rows.length,
          rows
        };
      })
    );

    return {
      rows: rows.rows,
      report_summary: {
        total_reports: Number(rows.rows.length),
        sent_department: "PMED",
        workflow_reports_total: workflowSnapshots.length,
        workflow_rows_total: workflowSnapshots.reduce((sum, item) => sum + Number(item.total_rows ?? 0), 0)
      },
      registrar_snapshot: {
        student_statuses: studentStatusRows.rows,
        grade_records: {
          total: Number(gradeSummaryRows.rows[0]?.total_grade_records ?? 0),
          distinct_students: Number(gradeSummaryRows.rows[0]?.distinct_students ?? 0),
          recent_rows: recentGradeRows.rows
        },
        workflow_reports: workflowSnapshots
      },
      generated_at: new Date().toISOString()
    };
  }

  const student = studentNo
    ? studentsTable ? await queryOne(`select * from ${studentsTable} where student_no = $1 limit 1`, [studentNo]) : null
    : studentId > 0
      ? studentsTable ? await queryOne(`select * from ${studentsTable} where id = $1 limit 1`, [studentId]) : null
      : null;

  if (!student) {
    throw new Error("Student not found.");
  }

  if (resource === "student-personal-info") {
    return { student };
  }
  if (resource === "enrollment-data") {
    if (!enrollmentsTable || !classesTable) {
      return { student, enrollments: [] };
    }
    const rows = await pool.query(
      `select enrollments.*, classes.class_code, classes.title
       from ${enrollmentsTable} as enrollments join ${classesTable} as classes on classes.id = enrollments.class_id
       where enrollments.student_id = $1
       order by enrollments.created_at desc`,
      [student.id]
    );
    return { student, enrollments: rows.rows };
  }
  if (resource === "student-academic-records") {
    if (!gradesTable || !classesTable) {
      return { student, grades: [] };
    }
    const grades = await pool.query(
      `select grades.*, classes.class_code, classes.title
       from ${gradesTable} as grades join ${classesTable} as classes on classes.id = grades.class_id
       where grades.student_id = $1
       order by grades.created_at desc`,
      [student.id]
    );
    return { student, grades: grades.rows };
  }

  throw new Error("Unsupported integration resource or method.");
}
