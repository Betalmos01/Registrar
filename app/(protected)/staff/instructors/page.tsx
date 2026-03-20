import { AppShell } from "@/components/app-shell";
import { InstructorsTablePanel } from "@/components/instructors-table-panel";
import { SectionCard } from "@/components/section-card";
import { requireRole } from "@/lib/auth";
import { listClasses, listInstructors } from "@/lib/data";

export default async function InstructorsPage() {
  const user = await requireRole("Registrar Staff");
  const [instructors, classes] = await Promise.all([listInstructors(), listClasses()]);
  const isAdmin = user.role.trim().toLowerCase() === "admin";

  return (
    <AppShell user={user} title="Faculty / Instructor Management" description="Instructor records and maintenance now live fully in TypeScript.">
      <div className="content-grid">
        <SectionCard title="Instructor Directory" description="Live instructor rows synced from the HR instructor directory.">
          <InstructorsTablePanel
            instructors={instructors as Array<{ id: string | number; employee_no: string; first_name: string; last_name: string; department: string | null; assigned_classes?: Array<{ class_id: number; class_code: string; title: string }> }>}
            classes={classes as Array<{ id: number; class_code: string; title: string }>}
            canManage={isAdmin}
          />
        </SectionCard>
      </div>
    </AppShell>
  );
}
