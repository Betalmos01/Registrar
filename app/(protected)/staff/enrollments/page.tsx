import { AppShell } from "@/components/app-shell";
import { EnrollmentsTablePanel } from "@/components/enrollments-table-panel";
import { SectionCard } from "@/components/section-card";
import { requireRole } from "@/lib/auth";
import { getNextStudentNumber, listClasses, listEnrollments, listStudents } from "@/lib/data";

export default async function EnrollmentsPage() {
  const user = await requireRole("Registrar Staff");
  const [enrollments, students, classes, nextStudentNumber] = await Promise.all([
    listEnrollments(),
    listStudents(),
    listClasses(),
    getNextStudentNumber()
  ]);

  return (
    <AppShell user={user} title="Enrollment Monitoring" description="Enrollment creation, updates, and cleanup now run fully in TypeScript.">
      <div className="content-grid">
        <SectionCard title="Enrollment Records" description="Current enrollment data from Supabase Postgres.">
          <EnrollmentsTablePanel
            enrollments={enrollments as Array<{ id: number; student_id: number; class_id: number; status: string; created_at: string; student_no: string; first_name: string; last_name: string; class_code: string; title: string; academic_year?: string; semester?: string; tuition_fee?: number; downpayment_amount?: number; medical_fee?: number; id_fee?: number }>}
            students={students as Array<{ id: number; student_no: string; first_name: string; last_name: string }>}
            classes={classes as Array<{ id: number; class_code: string; title: string }>}
            nextStudentNumber={nextStudentNumber}
          />
        </SectionCard>
      </div>
    </AppShell>
  );
}
