import { AppShell } from "@/components/app-shell";
import { EnrollmentBinPanel } from "@/components/enrollment-bin-panel";
import { SectionCard } from "@/components/section-card";
import { requireRole } from "@/lib/auth";
import { listEnrollmentBin } from "@/lib/data";

export default async function BinPage() {
  const user = await requireRole("Registrar Staff");
  const enrollments = await listEnrollmentBin();

  return (
    <AppShell user={user} title="Recycle Bin" description="Review enrollment records moved out of the active workflow and restore them when needed.">
      <div className="content-grid">
        <SectionCard title="Enrollment Bin" description="Deleted enrollments are stored here until they are restored or removed permanently.">
          <EnrollmentBinPanel
            enrollments={enrollments as Array<{ id: number; student_no: string; first_name: string; last_name: string; class_code: string; title: string; academic_year?: string; semester?: string; deleted_at?: string | null; created_at: string }>}
          />
        </SectionCard>
      </div>
    </AppShell>
  );
}
