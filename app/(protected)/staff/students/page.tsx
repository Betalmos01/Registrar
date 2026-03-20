import { AppShell } from "@/components/app-shell";
import { SectionCard } from "@/components/section-card";
import { StudentDataIntegrationPanel } from "@/components/student-data-integration-panel";
import { StudentsTablePanel } from "@/components/students-table-panel";
import { requireRole } from "@/lib/auth";
import { getNextStudentNumber, getStudentFilters, listStudents } from "@/lib/data";

export default async function StudentsPage({
  searchParams
}: {
  searchParams: Promise<{ q?: string; program?: string; year?: string }>;
}) {
  const user = await requireRole("Registrar Staff");
  const params = await searchParams;
  const [students, filters, nextStudentNumber] = await Promise.all([
    listStudents(params.q ?? "", params.program ?? "", params.year ?? ""),
    getStudentFilters(),
    getNextStudentNumber()
  ]);
  const isAdmin = user.role.trim().toLowerCase() === "admin";

  return (
    <AppShell user={user} title="Student Management" description="Student intake and maintenance fully handled in the translated TypeScript app.">
      <div className="stats-grid">
        <div className="stat-card"><div className="stat-label">Intake Queue</div><div className="stat-value">{students.length}</div><div className="stat-note">Current student records in view.</div></div>
        <div className="stat-card"><div className="stat-label">Enrollment Ready</div><div className="stat-value">{filters.activeStudents}</div><div className="stat-note">Students marked active.</div></div>
        <div className="stat-card"><div className="stat-label">Needs Review</div><div className="stat-value">{filters.onHoldStudents}</div><div className="stat-note">Records on hold for validation.</div></div>
        <div className="stat-card"><div className="stat-label">Programs</div><div className="stat-value">{filters.programs.length}</div><div className="stat-note">Program filters available.</div></div>
      </div>

      <div className="content-grid">
        <SectionCard title="Student Master List" description="This list remains the intake endpoint for the rest of the registrar workflow.">
          <StudentsTablePanel
            students={students as Array<{ id: number; student_no: string; first_name: string; last_name: string; program: string | null; year_level: string | null; status: string; payment_status?: string | null; medical_clearance_status?: string | null; counseling_report_status?: string | null; discipline_record_status?: string | null; activity_participation_status?: string | null }>}
            filters={filters}
            params={params}
            nextStudentNumber={nextStudentNumber}
            canManage={isAdmin}
          />
        </SectionCard>

        {isAdmin ? (
          <SectionCard title="Student Data Integrations" description="Send registrar student datasets to Cashier, Clinic, Guidance, Prefect, Computer Laboratory, and CRAD from this page.">
            <StudentDataIntegrationPanel
              targets={[
                {
                  key: "cashier",
                  label: "Cashier",
                },
                {
                  key: "clinic",
                  label: "Clinic",
                },
                {
                  key: "guidance",
                  label: "Guidance",
                },
                {
                  key: "prefect",
                  label: "Prefect",
                },
                {
                  key: "computer-laboratory",
                  label: "Computer Laboratory",
                },
                {
                  key: "crad",
                  label: "CRAD",
                }
              ]}
            />
          </SectionCard>
        ) : null}
      </div>
    </AppShell>
  );
}
