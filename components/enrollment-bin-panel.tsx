"use client";

import { ActionIconButton } from "@/components/action-icon-button";
import { DataTable } from "@/components/data-table";
import { purgeEnrollmentAction, restoreEnrollmentAction } from "@/lib/actions";

type BinEnrollment = {
  id: number;
  student_no: string;
  first_name: string;
  last_name: string;
  class_code: string;
  title: string;
  academic_year?: string;
  semester?: string;
  deleted_at?: string | null;
  created_at: string;
};

export function EnrollmentBinPanel({ enrollments }: { enrollments: BinEnrollment[] }) {
  return (
    <DataTable headers={["Student", "Class", "Academic Year", "Semester", "Deleted", "Actions"]} showSearch={false}>
      {enrollments.map((item) => (
        <tr key={item.id}>
          <td>{`${item.student_no} - ${item.last_name}, ${item.first_name}`}</td>
          <td>{`${item.class_code} - ${item.title}`}</td>
          <td>{item.academic_year || "2025-2026"}</td>
          <td>{item.semester || "-"}</td>
          <td>{item.deleted_at ?? item.created_at}</td>
          <td>
            <div className="actions-row action-icon-row">
              <form action={restoreEnrollmentAction}>
                <input type="hidden" name="id" value={String(item.id)} />
                <ActionIconButton kind="restore" label="Restore enrollment" type="submit" />
              </form>
              <form
                action={purgeEnrollmentAction}
                onSubmit={(event) => {
                  if (!window.confirm("Permanently delete this enrollment from the bin?")) {
                    event.preventDefault();
                  }
                }}
              >
                <input type="hidden" name="id" value={String(item.id)} />
                <ActionIconButton kind="delete" label="Delete permanently" type="submit" />
              </form>
            </div>
          </td>
        </tr>
      ))}
    </DataTable>
  );
}
