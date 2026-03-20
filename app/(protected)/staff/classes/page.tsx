import { AppShell } from "@/components/app-shell";
import { ClassesTablePanel } from "@/components/classes-table-panel";
import { SectionCard } from "@/components/section-card";
import { requireRole } from "@/lib/auth";
import { getClassFilters, listClasses } from "@/lib/data";

export default async function ClassesPage({ searchParams }: { searchParams: Promise<{ course?: string }> }) {
  const user = await requireRole("Registrar Staff");
  const params = await searchParams;
  const [classes, filters] = await Promise.all([listClasses(params.course ?? ""), getClassFilters()]);

  return (
    <AppShell user={user} title="Manage Classes and Schedules" description="Class scheduling and maintenance now run fully inside the TypeScript app.">
      <div className="content-grid">
        <SectionCard title="Class Offerings" description="Each row mirrors the old class and schedule listing, with delete handled directly here.">
          <form className="filter-bar compact-form" method="get">
            <label className="field">
              <span className="field-label">Course Filter</span>
              <select name="course" defaultValue={params.course ?? ""}>
                <option value="">All Courses</option>
                {filters.courses.map((course) => <option key={course}>{course}</option>)}
              </select>
            </label>
            <div className="actions-row align-end"><button className="secondary" type="submit">Filter</button></div>
          </form>
          <ClassesTablePanel
            classes={classes as Array<{ id: number; class_code: string; title: string; course: string | null; units: number | null; day: string | null; time: string | null; room: string | null }>}
            filters={filters as { courses: string[]; days: string[]; times: string[]; rooms: string[] }}
          />
        </SectionCard>
      </div>
    </AppShell>
  );
}
