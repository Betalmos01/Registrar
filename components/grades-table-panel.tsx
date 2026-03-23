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
  student_average?: string | number | null;
};

type StudentOption = {
  id: number;
  student_no: string;
  first_name: string;
  last_name: string;
  program?: string | null;
  year_level?: string | null;
};

type ClassOption = {
  id: number;
  class_code: string;
  title: string;
  course?: string | null;
};

type EnrollmentRecord = {
  id: number;
  student_id: number;
  class_id: number;
  student_no: string;
  first_name: string;
  last_name: string;
  program?: string | null;
  year_level?: string | null;
  class_code: string;
  title: string;
  course?: string | null;
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
  classes,
  enrollments
}: {
  grades: GradeRecord[];
  students: StudentOption[];
  classes: ClassOption[];
  enrollments: EnrollmentRecord[];
}) {
  const [activeModal, setActiveModal] = useState<"create" | "update" | null>(null);
  const [selectedGradeId, setSelectedGradeId] = useState<string>("");
  const [createStudentId, setCreateStudentId] = useState<string>("");
  const [createClassId, setCreateClassId] = useState<string>("");
  const [updateSemester, setUpdateSemester] = useState<string>("1st Semester");
  const [updateGrade, setUpdateGrade] = useState<string>("1.25");
  const [updateRemarks, setUpdateRemarks] = useState<string>("Passed");

  const gradeByEnrollment = useMemo(() => {
    const map = new Map<string, GradeRecord>();
    grades.forEach((grade) => {
      const key = `${grade.student_id}-${grade.class_id}`;
      if (!map.has(key)) {
        map.set(key, grade);
      }
    });
    return map;
  }, [grades]);

  const enrollmentRows = useMemo(
    () =>
      enrollments.map((enrollment) => {
        const key = `${enrollment.student_id}-${enrollment.class_id}`;
        return {
          enrollment,
          grade: gradeByEnrollment.get(key) ?? null
        };
      }),
    [enrollments, gradeByEnrollment]
  );

  const selectedGrade = useMemo(
    () => grades.find((grade) => String(grade.id) === selectedGradeId) ?? null,
    [grades, selectedGradeId]
  );

  const selectedCreateStudent = useMemo(
    () => students.find((student) => String(student.id) === createStudentId) ?? null,
    [students, createStudentId]
  );

  const selectedCreateClass = useMemo(
    () => classes.find((course) => String(course.id) === createClassId) ?? null,
    [classes, createClassId]
  );

  const enrolledClassOptions = useMemo(() => {
    const seen = new Set<string>();
    return enrollments
      .filter((enrollment) => {
        if (!createStudentId) return true;
        return String(enrollment.student_id) === createStudentId;
      })
      .filter((enrollment) => {
        const key = String(enrollment.class_id);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .map((enrollment) => ({
        id: enrollment.class_id,
        class_code: enrollment.class_code,
        title: enrollment.title,
        course: enrollment.course ?? enrollment.program ?? ""
      }));
  }, [createStudentId, enrollments]);

  const selectedStudentEnrollments = useMemo(
    () =>
      enrollments.filter((enrollment) => {
        if (!createStudentId) return false;
        return String(enrollment.student_id) === createStudentId;
      }),
    [createStudentId, enrollments]
  );

  function syncSelectedGrade(nextId: string) {
    setSelectedGradeId(nextId);
    const nextGrade = grades.find((grade) => String(grade.id) === nextId) ?? null;
    setUpdateSemester(nextGrade?.semester ?? "1st Semester");
    setUpdateGrade(nextGrade?.grade ?? "1.25");
    setUpdateRemarks(nextGrade?.remarks ?? "Passed");
  }

  function openCreateModal(studentId = "", classId = "") {
    setCreateStudentId(studentId);
    setCreateClassId(classId);
    setActiveModal("create");
  }

  function openUpdateModal(gradeId: string) {
    syncSelectedGrade(gradeId);
    setActiveModal("update");
  }

  return (
    <>
      <div className="actions-row table-top-actions">
        <button className="secondary" type="button" onClick={() => setActiveModal("update")}>
          Update Grade
        </button>
        <button className="primary" type="button" onClick={() => openCreateModal()}>
          Record Grade
        </button>
      </div>

      <DataTable headers={["Student ID", "Name", "Section", "Subject / Curriculum", "Course", "Year", "Grade Status", "Actions"]}>
        {enrollmentRows.map(({ enrollment, grade }) => (
          <tr key={`${enrollment.id}-${grade?.id ?? "pending"}`}>
            <td>{String(enrollment.student_no)}</td>
            <td>
              {`${String(enrollment.last_name)}, ${String(enrollment.first_name)}`}
              <div className="table-subtext">
                Ave:{" "}
                {grade?.student_average !== undefined && grade?.student_average !== null && String(grade.student_average).trim() !== ""
                  ? Number(grade.student_average).toFixed(2)
                  : "N/A"}
              </div>
            </td>
            <td>{String(enrollment.class_code || "-")}</td>
            <td>{String(enrollment.title || "-")}</td>
            <td>{String(enrollment.course ?? enrollment.program ?? "-")}</td>
            <td>{String(enrollment.year_level ? `Year ${enrollment.year_level}` : "-")}</td>
            <td>
              <span className={getRemarkClassName(String(grade?.remarks ?? "Pending"))}>
                {grade ? `${String(grade.grade)} (${String(grade.remarks ?? "Pending")})` : "No grade yet"}
              </span>
            </td>
            <td>
              <div className="actions-row action-icon-row">
                {grade ? (
                  <>
                    <button className="secondary compact-button" type="button" onClick={() => openUpdateModal(String(grade.id))}>
                      Edit Grade
                    </button>
                    <form action={deleteGradeAction}>
                      <input type="hidden" name="id" value={String(grade.id)} />
                      <ActionIconButton kind="delete" label="Delete grade" type="submit" />
                    </form>
                  </>
                ) : (
                  <button
                    className="primary compact-button"
                    type="button"
                    onClick={() => openCreateModal(String(enrollment.student_id), String(enrollment.class_id))}
                  >
                    Make Grade
                  </button>
                )}
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
                <select
                  name="student_id"
                  required
                  value={createStudentId}
                  onChange={(event) => setCreateStudentId(event.target.value)}
                >
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
                <select
                  name="class_id"
                  required
                  value={createClassId}
                  onChange={(event) => setCreateClassId(event.target.value)}
                >
                  <option value="" disabled>Select class</option>
                  {(createStudentId ? enrolledClassOptions : classes).map((course) => (
                    <option key={course.id} value={String(course.id)}>
                      {String(course.class_code)} - {String(course.title)}
                    </option>
                  ))}
                </select>
              </label>
              {selectedCreateStudent ? (
                <label className="span-2">
                  Student Details
                  <input
                    readOnly
                    value={`${selectedCreateStudent.student_no} • ${selectedCreateStudent.last_name}, ${selectedCreateStudent.first_name} • ${selectedCreateStudent.program ?? "No course"} • ${
                      selectedCreateStudent.year_level ? `Year ${selectedCreateStudent.year_level}` : "No year level"
                    }`}
                  />
                </label>
              ) : null}
              {selectedCreateClass ? (
                <label className="span-2">
                  Subject / Curriculum
                  <input
                    readOnly
                    value={`${selectedCreateClass.class_code} • ${selectedCreateClass.title}${selectedCreateClass.course ? ` • ${selectedCreateClass.course}` : ""}`}
                  />
                </label>
              ) : null}
              {selectedCreateStudent && selectedStudentEnrollments.length > 0 ? (
                <label className="span-2">
                  Enrolled Curriculum
                  <textarea
                    readOnly
                    rows={Math.min(6, selectedStudentEnrollments.length + 1)}
                    value={selectedStudentEnrollments
                      .map(
                        (item, index) =>
                          `${index + 1}. ${item.class_code} - ${item.title}${item.course ? ` (${item.course})` : ""}`
                      )
                      .join("\n")}
                  />
                </label>
              ) : null}
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
              <input type="hidden" name="student_id" value={selectedGrade ? String(selectedGrade.student_id) : ""} />
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
