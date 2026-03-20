import { AppShell } from "@/components/app-shell";
import { GradesTablePanel } from "@/components/grades-table-panel";
import { SectionCard } from "@/components/section-card";
import { requireRole } from "@/lib/auth";
import { listClasses, listGrades, listStudents } from "@/lib/data";

export default async function GradesPage() {
  const user = await requireRole("Registrar Staff");
  const [grades, students, classes] = await Promise.all([listGrades(), listStudents(), listClasses()]);

  return (
    <AppShell user={user} title="Grade Records" description="Grade creation and maintenance now run fully in the TypeScript registrar module.">
      <div className="content-grid">
        <SectionCard title="Grade Ledger" description="Record and update grades from modal tools above the table.">
          <GradesTablePanel
            grades={grades as Array<any>}
            students={students as Array<any>}
            classes={classes as Array<any>}
          />
        </SectionCard>
      </div>
    </AppShell>
  );
}
