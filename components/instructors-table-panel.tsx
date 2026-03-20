"use client";

import { useState } from "react";
import { ActionIconButton } from "@/components/action-icon-button";
import { DataTable } from "@/components/data-table";
import {
  assignInstructorClassAction,
  createInstructorAction,
  deleteInstructorAction,
  unassignInstructorClassAction,
  updateInstructorAction
} from "@/lib/actions";

type InstructorRecord = {
  id: string | number;
  employee_no: string;
  first_name: string;
  last_name: string;
  department: string | null;
  assigned_classes?: Array<{
    class_id: number;
    class_code: string;
    title: string;
  }>;
};

type ClassOption = {
  id: number;
  class_code: string;
  title: string;
};

export function InstructorsTablePanel({
  instructors,
  classes,
  canManage
}: {
  instructors: InstructorRecord[];
  classes: ClassOption[];
  canManage: boolean;
}) {
  const [activeModal, setActiveModal] = useState<"add" | "view" | "edit" | "assign" | "delete" | null>(null);
  const [selectedInstructor, setSelectedInstructor] = useState<InstructorRecord | null>(null);

  function openModal(mode: "view" | "edit" | "assign" | "delete", instructor: InstructorRecord) {
    setSelectedInstructor(instructor);
    setActiveModal(mode);
  }

  return (
    <>
      {canManage ? (
        <div className="actions-row table-top-actions">
          <button className="primary" type="button" onClick={() => setActiveModal("add")}>
            Add Instructor
          </button>
        </div>
      ) : null}

      <DataTable headers={["Employee No", "Name", "Department", "Assigned Class", "Assign Class", ...(canManage ? ["Actions"] : [])]}>
        {instructors.map((instructor) => (
          <tr key={instructor.id}>
            <td>{String(instructor.employee_no)}</td>
            <td>{`${String(instructor.first_name)} ${String(instructor.last_name)}`}</td>
            <td>{String(instructor.department ?? "-")}</td>
            <td>
              {instructor.assigned_classes?.length ? (
                <div className="status-stack">
                  {instructor.assigned_classes.map((assignedClass) => (
                    <form
                      key={`${instructor.employee_no}-${assignedClass.class_id}`}
                      action={unassignInstructorClassAction}
                      className="assigned-class-chip"
                    >
                      <input type="hidden" name="employee_no" value={String(instructor.employee_no)} />
                      <input type="hidden" name="class_id" value={String(assignedClass.class_id)} />
                      <span className="soft-badge">
                        <span>{assignedClass.class_code} - {assignedClass.title}</span>
                        {canManage ? (
                          <button
                            className="assigned-class-remove"
                            type="submit"
                            aria-label={`Remove ${assignedClass.class_code} from ${instructor.first_name} ${instructor.last_name}`}
                          >
                            Remove
                          </button>
                        ) : null}
                      </span>
                    </form>
                  ))}
                </div>
              ) : (
                <span className="field-hint">No assigned class yet</span>
              )}
            </td>
            <td>
              <button
                className="secondary inline-button"
                type="button"
                onClick={() => openModal("assign", instructor)}
              >
                Assign Class
              </button>
            </td>
            {canManage ? (
              <td>
                <div className="actions-row action-icon-row">
                  <ActionIconButton
                    kind="view"
                    label="View instructor"
                    type="button"
                    onClick={() => openModal("view", instructor)}
                  />
                  <ActionIconButton
                    kind="edit"
                    label="Edit instructor"
                    type="button"
                    onClick={() => openModal("edit", instructor)}
                  />
                  <ActionIconButton
                    kind="delete"
                    label="Delete instructor"
                    type="button"
                    onClick={() => openModal("delete", instructor)}
                  />
                </div>
              </td>
            ) : null}
          </tr>
        ))}
      </DataTable>

      {canManage && activeModal === "add" ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setActiveModal(null)}>
          <div className="modal-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="eyebrow">Faculty Directory</div>
                <h3>Add Instructor</h3>
                <p>Create a new faculty record from the table workflow.</p>
              </div>
              <button className="secondary compact-button" type="button" onClick={() => setActiveModal(null)}>Close</button>
            </div>
            <form className="form-grid top-gap" action={createInstructorAction}>
              <label>Employee No<input name="employee_no" required /></label>
              <label>First Name<input name="first_name" required /></label>
              <label>Last Name<input name="last_name" required /></label>
              <label className="span-2">Department<input name="department" /></label>
              <div className="span-2 modal-actions">
                <button className="secondary inline-button" type="button" onClick={() => setActiveModal(null)}>Cancel</button>
                <button className="primary inline-button" type="submit">Save Instructor</button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {canManage && activeModal === "view" && selectedInstructor ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setActiveModal(null)}>
          <div className="modal-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="eyebrow">Faculty Directory</div>
                <h3>Instructor Details</h3>
                <p>Review the current faculty profile before making changes.</p>
              </div>
              <button className="secondary compact-button" type="button" onClick={() => setActiveModal(null)}>Close</button>
            </div>
            <div className="info-pairs top-gap">
              <p><strong>Employee No:</strong> {selectedInstructor.employee_no}</p>
              <p><strong>Name:</strong> {selectedInstructor.first_name} {selectedInstructor.last_name}</p>
              <p><strong>Department:</strong> {selectedInstructor.department ?? "-"}</p>
            </div>
            <div className="modal-actions top-gap">
              <button className="secondary inline-button" type="button" onClick={() => setActiveModal(null)}>Close</button>
              <button
                className="primary inline-button"
                type="button"
                onClick={() => setActiveModal("edit")}
              >
                Edit Instructor
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {canManage && activeModal === "edit" && selectedInstructor ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setActiveModal(null)}>
          <div className="modal-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="eyebrow">Faculty Directory</div>
                <h3>Edit Instructor</h3>
                <p>Update the selected instructor directly from the directory table.</p>
              </div>
              <button className="secondary compact-button" type="button" onClick={() => setActiveModal(null)}>Close</button>
            </div>
            <form className="form-grid top-gap" action={updateInstructorAction}>
              <input type="hidden" name="id" value={String(selectedInstructor.id)} />
              <label>Employee No<input name="employee_no" required defaultValue={selectedInstructor.employee_no} /></label>
              <label>First Name<input name="first_name" required defaultValue={selectedInstructor.first_name} /></label>
              <label>Last Name<input name="last_name" required defaultValue={selectedInstructor.last_name} /></label>
              <label className="span-2">Department<input name="department" defaultValue={selectedInstructor.department ?? ""} /></label>
              <div className="span-2 modal-actions">
                <button className="secondary inline-button" type="button" onClick={() => setActiveModal(null)}>Cancel</button>
                <button className="primary inline-button" type="submit">Update Instructor</button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {activeModal === "assign" && selectedInstructor ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setActiveModal(null)}>
          <div className="modal-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="eyebrow">Faculty Directory</div>
                <h3>Assign Professor to Class</h3>
                <p>{`${selectedInstructor.first_name} ${selectedInstructor.last_name} - ${selectedInstructor.employee_no}`}</p>
              </div>
              <button className="secondary compact-button" type="button" onClick={() => setActiveModal(null)}>Close</button>
            </div>
            <form className="form-grid top-gap" action={assignInstructorClassAction}>
              <input type="hidden" name="employee_no" value={selectedInstructor.employee_no} />
              <label className="span-2">
                Class
                <select name="class_id" required defaultValue="">
                  <option value="" disabled>Select class</option>
                  {classes.map((course) => (
                    <option key={course.id} value={String(course.id)}>
                      {course.class_code} - {course.title}
                    </option>
                  ))}
                </select>
              </label>
              <div className="span-2 modal-actions">
                <button className="secondary inline-button" type="button" onClick={() => setActiveModal(null)}>Cancel</button>
                <button className="primary inline-button" type="submit">Assign Class</button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {canManage && activeModal === "delete" && selectedInstructor ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setActiveModal(null)}>
          <div className="modal-card modal-card-compact" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="eyebrow">Faculty Directory</div>
                <h3>Delete Instructor</h3>
                <p>Remove this instructor record from the registrar directory.</p>
              </div>
              <button className="secondary compact-button" type="button" onClick={() => setActiveModal(null)}>Close</button>
            </div>
            <div className="top-gap confirm-panel">
              <div className="confirm-panel-copy">
                <strong>{selectedInstructor.first_name} {selectedInstructor.last_name}</strong>
                <span>Employee No: {selectedInstructor.employee_no}</span>
                <span>Department: {selectedInstructor.department ?? "-"}</span>
              </div>
              <p className="danger-copy">This will delete the instructor record. Assigned class links should be removed first if you still need them.</p>
            </div>
            <form className="modal-actions top-gap" action={deleteInstructorAction}>
              <input type="hidden" name="id" value={String(selectedInstructor.id)} />
              <button className="secondary inline-button" type="button" onClick={() => setActiveModal(null)}>Cancel</button>
              <button className="primary inline-button danger-fill" type="submit">Delete Instructor</button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
