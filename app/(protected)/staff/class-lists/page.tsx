import { AppShell } from "@/components/app-shell";
import { ClassListsTablePanel } from "@/components/class-lists-table-panel";
import { SectionCard } from "@/components/section-card";
import { requireRole } from "@/lib/auth";
import { listAvailableClassesForClassLists, listClassListSummary } from "@/lib/data";

export default async function ClassListsPage() {
  const user = await requireRole("Registrar Staff");
  const [classLists, availableClasses] = await Promise.all([
    listClassListSummary(),
    listAvailableClassesForClassLists()
  ]);

  return (
    <AppShell user={user} title="Class Lists" description="Detailed roster tracking translated from the PHP class list module.">
      <SectionCard title="Published Class Lists" description="Open any class to review its current roster, schedule block, and recorded grades.">
        <ClassListsTablePanel
          classLists={classLists as Array<{ id: number; class_code: string; title: string; course: string | null; day: string | null; time: string | null; room: string | null; enrolled_students?: number | string | null; total_students?: number | string | null }>}
          availableClasses={availableClasses as Array<{ id: number; class_code: string; title: string }>}
        />
      </SectionCard>
    </AppShell>
  );
}
