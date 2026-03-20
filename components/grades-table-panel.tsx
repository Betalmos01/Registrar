"use client";

import { useMemo, useState } from "react";
import { ActionIconButton } from "@/components/action-icon-button";
import { DataTable } from "@/components/data-table";
import { createGradeAction, deleteGradeAction, updateGradeAction } from "@/lib/actions";

const SEMESTER_OPTIONS = ["1st Semester", "2nd Semester", "Summer"] as const;
const GRADE_OPTIONS = ["1.00", "1.25", "1.50", "1.75", "2.00", "2.25", "2.50", "2.75", "3.00", "4.00", "5.00"] as const;
const REMARK_OPTIONS = ["Passed", "Incomplete", "Conditional", "Failed", "Dropped"] as const;

type GradeRecord = {
  id: number;
  student_id: number;
  class_id: number;
  semester: string;
  grade: string;
  remarks?: string | null;
  student_no: string;
  first_name: string;
  last_name: string;
  class_code: string;
  title: string;
};

type StudentOption = {
  id: number;
  student_no: string;
  first_name: string;
  last_name: string;
};

type ClassOption = {
  id: number;
  class_code: string;
  title: string;
};

function getRemarkClassName(value: string) {
  const normalized = value.trim().toLowerCase();
  if (normalized === "passed") return "badge badge-success";
  if (normalized === "conditional" || normalized === "incomplete") return "badge badge-warning";
  if (normalized === "failed" || normalized === "dropped") return "badge badge-danger";
  return "badge badge-neutral";
}

export function GradesTablePanel({
  grades,
  students,
  classes
}: {
  grades: GradeRecord[];
  students: StudentOption[];
  classes: ClassOption[];
}) {
  const [activeModal, setActiveModal] = useState<"create" | "update" | null>(null);
  const [selectedGradeId, setSelectedGradeId] = useState<string>("");
  const [updateSemester, setUpdateSemester] = useState<string>("1st Semester");
  const [updateGrade, setUpdateGrade] = useState<string>("1.25");
  const [updateRemarks, setUpdateRemarks] = useState<string>("Passed");

  const selectedGrade = useMemo(
    () => grades.find((grade) => String(grade.id) === selectedGradeId) ?? null,
    [grades, selectedGradeId]
  );

  function syncSelectedGrade(nextId: string) {
    setSelectedGradeId(nextId);
    const nextGrade = grades.find((grade) => String(grade.id) === nextId) ?? null;
    setUpdateSemester(nextGrade?.semester ?? "1st Semester");
    setUpdateGrade(nextGrade?.grade ?? "1.25");
    setUpdateRemarks(nextGrade?.remarks ?? "Passed");
  }

  return (
    <>
      <div className="actions-row table-top-actions">
        <button className="secondary" type="button" onClick={() => setActiveModal("update")}>
          Update Grade
        </button>
        <button className="primary" type="button" onClick={() => setActiveModal("create")}>
          Record Grade
        </button>
      </div>

      <DataTable headers={["Student", "Class", "Semester", "Grade", "Remarks", "Actions"]}>
        {grades.map((grade) => (
          <tr key={grade.id}>
            <td>{`${String(grade.student_no)} - ${String(grade.last_name)}, ${String(grade.first_name)}`}</td>
            <td>{`${String(grade.class_code)} - ${String(grade.title)}`}</td>
            <td>{String(grade.semester)}</td>
            <td>{String(grade.grade)}</td>
            <td>
              <span className={getRemarkClassName(String(grade.remarks ?? "Pending"))}>
                {String(grade.remarks ?? "Pending")}
              </span>
            </td>
            <td>
              <div className="actions-row action-icon-row">
                <button
                  className="secondary compact-button"
                  type="button"
                  onClick={() => {
                    setSelectedGradeId(String(grade.id));
                    setActiveModal("update");
                  }}
                >
                  Edit
                </button>
                <form action={deleteGradeAction}>
                  <input type="hidden" name="id" value={String(grade.id)} />
                  <ActionIconButton kind="delete" label="Delete grade" type="submit" />
                </form>
              </div>
            </td>
          </tr>
        ))}
      </DataTable>

      {activeModal === "create" ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setActiveModal(null)}>
          <div className="modal-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="eyebrow">Grade Records</div>
                <h3>Record Grade</h3>
                <p>Add a new grade record with dropdown grading options.</p>
              </div>
              <button className="secondary compact-button" type="button" onClick={() => setActiveModal(null)}>
                Close
              </button>
            </div>
            <form className="form-grid top-gap" action={createGradeAction}>
              <label className="span-2">
                Student
                <select name="student_id" required defaultValue="">
                  <option value="" disabled>Select student</option>
                  {students.map((student) => (
                    <option key={student.id} value={String(student.id)}>
                      {String(student.student_no)} - {String(student.last_name)}, {String(student.first_name)}
                    </option>
                  ))}
                </select>
              </label>
              <label className="span-2">
                Class
                <select name="class_id" required defaultValue="">
                  <option value="" disabled>Select class</option>
                  {classes.map((course) => (
                    <option key={course.id} value={String(course.id)}>
                      {String(course.class_code)} - {String(course.title)}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Semester
                <select name="semester" required defaultValue="1st Semester">
                  {SEMESTER_OPTIONS.map((semester) => (
                    <option key={semester} value={semester}>{semester}</option>
                  ))}
                </select>
              </label>
              <label>
                Grade
                <select name="grade" required defaultValue="1.25">
                  {GRADE_OPTIONS.map((grade) => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </label>
              <label className="span-2">
                Remarks
                <select name="remarks" defaultValue="Passed">
                  {REMARK_OPTIONS.map((remark) => (
                    <option key={remark} value={remark}>{remark}</option>
                  ))}
                </select>
              </label>
              <div className="span-2 modal-actions">
                <button className="secondary inline-button" type="button" onClick={() => setActiveModal(null)}>
                  Cancel
                </button>
                <button className="primary inline-button" type="submit">
                  Save Grade
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {activeModal === "update" ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setActiveModal(null)}>
          <div className="modal-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="eyebrow">Grade Records</div>
                <h3>Update Grade</h3>
                <p>Revise an existing grade entry with semester, grade, and remarks dropdowns.</p>
              </div>
              <button className="secondary compact-button" type="button" onClick={() => setActiveModal(null)}>
                Close
              </button>
            </div>
            <form className="form-grid top-gap" action={updateGradeAction}>
              <label className="span-2">
                Grade Record
                <select
                  name="id"
                  required
                  value={selectedGradeId}
                  onChange={(event) => syncSelectedGrade(event.target.value)}
                >
                  <option value="" disabled>Select grade record</option>
                  {grades.map((grade) => (
                    <option key={grade.id} value={String(grade.id)}>
                      {String(grade.student_no)} - {String(grade.class_code)} - {String(grade.semester)}
                    </option>
                  ))}
                </select>
              </label>
              <label className="span-2">
                Student
                <input
                  readOnly
                  value={
                    selectedGrade
                      ? `${selectedGrade.student_no} - ${selectedGrade.last_name}, ${selectedGrade.first_name}`
                      : ""
                  }
                />
              </label>
              <label>
                Semester
                <select name="semester" required value={updateSemester} onChange={(event) => setUpdateSemester(event.target.value)}>
                  {SEMESTER_OPTIONS.map((semester) => (
                    <option key={semester} value={semester}>{semester}</option>
                  ))}
                </select>
              </label>
              <label>
                Grade
                <select name="grade" required value={updateGrade} onChange={(event) => setUpdateGrade(event.target.value)}>
                  {GRADE_OPTIONS.map((grade) => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </label>
              <label className="span-2">
                Remarks
                <select name="remarks" value={updateRemarks} onChange={(event) => setUpdateRemarks(event.target.value)}>
                  {REMARK_OPTIONS.map((remark) => (
                    <option key={remark} value={remark}>{remark}</option>
                  ))}
                </select>
              </label>
              <div className="span-2 modal-actions">
                <button className="secondary inline-button" type="button" onClick={() => setActiveModal(null)}>
                  Cancel
                </button>
                <button className="primary inline-button" type="submit" disabled={!selectedGrade}>
                  Update Grade
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
