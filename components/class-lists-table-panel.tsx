"use client";

import Link from "next/link";
import { useState } from "react";
import { DataTable } from "@/components/data-table";
import { createClassListAction } from "@/lib/actions";

type ClassListRecord = {
  id: number;
  class_code: string;
  title: string;
  course: string | null;
  day: string | null;
  time: string | null;
  room: string | null;
  enrolled_students?: number | string | null;
  total_students?: number | string | null;
};

type ClassOption = {
  id: number;
  class_code: string;
  title: string;
};

export function ClassListsTablePanel({
  classLists,
  availableClasses
}: {
  classLists: ClassListRecord[];
  availableClasses: ClassOption[];
}) {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <>
      <div className="actions-row table-top-actions">
        <button className="primary" type="button" onClick={() => setShowAddModal(true)}>
          Add Class List
        </button>
      </div>

      <DataTable headers={["Code", "Title", "Course", "Schedule", "Roster"]}>
        {classLists.map((item) => (
          <tr key={`${item.id}-${String(item.day)}`}>
            <td>{String(item.class_code)}</td>
            <td>
              <div>{String(item.title)}</div>
              <Link href={`/staff/class-lists/${String(item.id)}`} className="inline-link">
                View roster
              </Link>
            </td>
            <td>{String(item.course ?? "-")}</td>
            <td>{`${String(item.day ?? "-")} ${String(item.time ?? "")} ${String(item.room ?? "")}`}</td>
            <td>
              <div className="status-stack">
                <span className="field-hint">{`${Number(item.enrolled_students ?? 0)} enrolled / ${Number(item.total_students ?? 0)} total`}</span>
                <Link href={`/staff/class-lists/${String(item.id)}`} className="secondary inline-button">
                  Open Class List
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </DataTable>

      {showAddModal ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setShowAddModal(false)}>
          <div className="modal-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="eyebrow">Class Lists</div>
                <h3>Add Class List</h3>
                <p>Publish a class from the live class schedule table into the class list directory.</p>
              </div>
              <button className="secondary compact-button" type="button" onClick={() => setShowAddModal(false)}>
                Close
              </button>
            </div>

            <form className="form-grid top-gap" action={createClassListAction}>
              <label className="span-2">
                Available Class
                <select name="class_id" required defaultValue="">
                  <option value="" disabled>Select class</option>
                  {availableClasses.map((item) => (
                    <option key={item.id} value={String(item.id)}>
                      {item.class_code} - {item.title}
                    </option>
                  ))}
                </select>
              </label>
              <div className="span-2 modal-actions">
                <button className="secondary inline-button" type="button" onClick={() => setShowAddModal(false)}>
                  Cancel
                </button>
                <button className="primary inline-button" type="submit">
                  Save Class List
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
