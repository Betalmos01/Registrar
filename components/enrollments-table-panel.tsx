"use client";

import { useMemo, useState } from "react";
import { ActionIconButton } from "@/components/action-icon-button";
import {
  createEnrollmentAction,
  deleteEnrollmentAction,
  updateEnrollmentAction
} from "@/lib/actions";
import { DataTable } from "@/components/data-table";
import { StatusBadge } from "@/components/status-badge";

type EnrollmentRecord = {
  id: number;
  student_id: number;
  class_id: number;
  status: string;
  created_at: string;
  student_no: string;
  first_name: string;
  last_name: string;
  class_code: string;
  title: string;
  academic_year?: string;
  semester?: string;
  tuition_fee?: number;
  downpayment_amount?: number;
  medical_fee?: number;
  id_fee?: number;
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

const COURSE_OPTIONS = [
  "BEED",
  "BSED - English",
  "BSED - Filipino",
  "BSED - Mathematics",
  "BSED - Science",
  "BSED - Social Studies",
  "BTLED",
  "BPED",
  "BSBA - HRM",
  "BSBA - Marketing Management",
  "BSBA - Financial Management",
  "BSEntrep",
  "BSOA",
  "BSIT - Network Administration",
  "BSIT - Information Security",
  "BSIT - Information Management",
  "BSCpE",
  "BSIS",
  "BSCrim",
  "BSHM",
  "BSTM",
  "BSP",
  "BLIS"
] as const;

const YEAR_OPTIONS = ["1", "2", "3", "4"] as const;
const TUITION_FEE = 6000;
const DOWNPAYMENT_FEE = 500;
const MEDICAL_FEE = 250;
const ID_FEE = 250;
const TOTAL_ASSESSMENT = TUITION_FEE + DOWNPAYMENT_FEE + MEDICAL_FEE + ID_FEE;

function peso(value: number | string | null | undefined) {
  const amount = Number(value ?? 0);
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2
  }).format(Number.isFinite(amount) ? amount : 0);
}

export function EnrollmentsTablePanel({
  enrollments,
  students,
  classes,
  nextStudentNumber
}: {
  enrollments: EnrollmentRecord[];
  students: StudentOption[];
  classes: ClassOption[];
  nextStudentNumber: string;
}) {
  const [activeModal, setActiveModal] = useState<"add" | "edit" | "view" | null>(null);
  const [selectedEnrollment, setSelectedEnrollment] = useState<EnrollmentRecord | null>(null);
  const [statusFilter, setStatusFilter] = useState("");
  const [semesterFilter, setSemesterFilter] = useState("");
  const [entryMode, setEntryMode] = useState<"existing" | "new">("existing");

  const filteredEnrollments = useMemo(
    () =>
      enrollments.filter((item) => {
        if (statusFilter && item.status !== statusFilter) return false;
        if (semesterFilter && (item.semester ?? "") !== semesterFilter) return false;
        return true;
      }),
    [enrollments, semesterFilter, statusFilter]
  );

  const semesters = Array.from(
    new Set(enrollments.map((item) => item.semester).filter((value): value is string => Boolean(value)))
  );

  return (
    <>
      <div className="filter-bar compact-form">
        <label className="field">
          <span className="field-label">Status Filter</span>
          <div className="filter-input-shell select-filter-shell">
            <span className="filter-icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none">
                <path d="M3 5h14l-5.4 6.3v3.9l-3.2 1.8v-5.7L3 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </span>
            <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
              <option value="">All Statuses</option>
              <option value="Enrolled">Enrolled</option>
              <option value="Pending">Pending</option>
              <option value="Waitlisted">Waitlisted</option>
            </select>
          </div>
        </label>
        <label className="field">
          <span className="field-label">Semester Filter</span>
          <div className="filter-input-shell select-filter-shell">
            <span className="filter-icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none">
                <path d="M3 5h14l-5.4 6.3v3.9l-3.2 1.8v-5.7L3 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </span>
            <select value={semesterFilter} onChange={(event) => setSemesterFilter(event.target.value)}>
              <option value="">All Semesters</option>
              {semesters.map((semester) => (
                <option key={semester} value={semester}>
                  {semester}
                </option>
              ))}
            </select>
          </div>
        </label>
        <div className="actions-row align-end">
          <button className="primary" type="button" onClick={() => setActiveModal("add")}>
            Enroll Student
          </button>
        </div>
      </div>

      <DataTable headers={["Student", "Class", "Academic Year", "Semester", "Status", "Downpayment", "Actions"]} showSearch={false}>
        {filteredEnrollments.map((item) => (
          <tr key={item.id}>
            <td>{`${item.student_no} - ${item.last_name}, ${item.first_name}`}</td>
            <td>{`${item.class_code} - ${item.title}`}</td>
            <td>{item.academic_year || "2025-2026"}</td>
            <td>{item.semester || "-"}</td>
            <td><StatusBadge value={item.status} /></td>
            <td>{peso(item.downpayment_amount)}</td>
            <td>
              <div className="actions-row action-icon-row">
                <ActionIconButton
                  kind="view"
                  label="View enrollment"
                  type="button"
                  onClick={() => {
                    setSelectedEnrollment(item);
                    setActiveModal("view");
                  }}
                />
                <ActionIconButton
                  kind="edit"
                  label="Edit enrollment"
                  type="button"
                  onClick={() => {
                    setSelectedEnrollment(item);
                    setActiveModal("edit");
                  }}
                />
                <form
                  action={deleteEnrollmentAction}
                  onSubmit={(event) => {
                    if (!window.confirm("Move this enrollment to the bin?")) {
                      event.preventDefault();
                    }
                  }}
                >
                  <input type="hidden" name="id" value={String(item.id)} />
                  <ActionIconButton kind="delete" label="Move enrollment to bin" type="submit" />
                </form>
              </div>
            </td>
          </tr>
        ))}
      </DataTable>

      {activeModal === "add" ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setActiveModal(null)}>
          <div className="modal-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="eyebrow">Enrollment Workflow</div>
                <h3>New Enrollment</h3>
                <p>Create a new enrollment record and send the payment assessment to cashier.</p>
              </div>
              <button className="secondary compact-button" type="button" onClick={() => setActiveModal(null)}>
                Close
              </button>
            </div>
            <form className="form-grid top-gap" action={createEnrollmentAction}>
              <div className="span-2 segmented-control" role="tablist" aria-label="Enrollment student source">
                <button
                  className={entryMode === "existing" ? "is-active" : ""}
                  type="button"
                  onClick={() => setEntryMode("existing")}
                >
                  Existing Student
                </button>
                <button
                  className={entryMode === "new" ? "is-active" : ""}
                  type="button"
                  onClick={() => setEntryMode("new")}
                >
                  New Student Sign-up
                </button>
              </div>

              {entryMode === "existing" ? (
                <label className="span-2">
                  Student
                  <select name="student_id" required defaultValue="">
                    <option value="" disabled>Select student</option>
                    {students.map((student) => (
                      <option key={student.id} value={String(student.id)}>
                        {student.student_no} - {student.last_name}, {student.first_name}
                      </option>
                    ))}
                  </select>
                </label>
              ) : (
                <>
                  <label>
                    Student No
                    <input name="student_no" readOnly value={nextStudentNumber} />
                  </label>
                  <label>
                    Student Status
                    <select name="student_status" defaultValue="Active">
                      <option>Active</option>
                      <option>Inactive</option>
                      <option>On Hold</option>
                    </select>
                  </label>
                  <label>
                    First Name
                    <input name="first_name" required={entryMode === "new"} />
                  </label>
                  <label>
                    Middle Name
                    <input name="middle_name" />
                  </label>
                  <label>
                    Last Name
                    <input name="last_name" required={entryMode === "new"} />
                  </label>
                  <label>
                    Birth Date
                    <input name="birth_date" type="date" />
                  </label>
                  <label>
                    Course
                    <select name="program" defaultValue="">
                      <option value="">Select course</option>
                      {COURSE_OPTIONS.map((program) => (
                        <option key={program}>{program}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Year Level
                    <select name="year_level" defaultValue="">
                      <option value="">Select year</option>
                      {YEAR_OPTIONS.map((year) => (
                        <option key={year} value={year}>{`Year ${year}`}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Mother's Name
                    <input name="mother_name" />
                  </label>
                  <label>
                    Father's Name
                    <input name="father_name" />
                  </label>
                  <label>
                    Guardian
                    <input name="guardian_name" />
                  </label>
                  <label>
                    Phone Number
                    <input name="phone" />
                  </label>
                  <label>
                    Email Address
                    <input name="email" type="email" />
                  </label>
                  <label className="span-2">
                    Address
                    <textarea name="address" rows={3} />
                  </label>
                </>
              )}
              <label>
                Academic Year
                <select name="academic_year" defaultValue="2025-2026">
                  <option>2024-2025</option>
                  <option>2025-2026</option>
                  <option>2026-2027</option>
                </select>
              </label>
              <label>
                Semester
                <select name="semester" defaultValue="1st Semester">
                  <option>1st Semester</option>
                  <option>2nd Semester</option>
                  <option>Summer</option>
                </select>
              </label>
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
              <label>
                Status
                <select name="status" defaultValue="Enrolled">
                  <option>Enrolled</option>
                  <option>Pending</option>
                  <option>Waitlisted</option>
                </select>
              </label>
              <label>
                Total Tuition Fee
                <input name="tuition_fee_display" readOnly value={peso(TUITION_FEE)} />
              </label>
              <label>
                Downpayment
                <input name="downpayment_amount_display" readOnly value={peso(DOWNPAYMENT_FEE)} />
              </label>
              <label>
                Medical Payment
                <input name="medical_fee_display" readOnly value={peso(MEDICAL_FEE)} />
              </label>
              <label>
                ID Payment
                <input name="id_fee_display" readOnly value={peso(ID_FEE)} />
              </label>
              <label>
                Total Assessment
                <input name="total_assessment_display" readOnly value={peso(TOTAL_ASSESSMENT)} />
              </label>
              <input type="hidden" name="tuition_fee" value={String(TUITION_FEE)} />
              <input type="hidden" name="downpayment_amount" value={String(DOWNPAYMENT_FEE)} />
              <input type="hidden" name="medical_fee" value={String(MEDICAL_FEE)} />
              <input type="hidden" name="id_fee" value={String(ID_FEE)} />
              <div className="span-2 modal-actions">
                <button className="secondary inline-button" type="button" onClick={() => setActiveModal(null)}>
                  Cancel
                </button>
                <button className="primary inline-button" type="submit">
                  Save Enrollment
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {activeModal === "edit" && selectedEnrollment ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setActiveModal(null)}>
          <div className="modal-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="eyebrow">Enrollment Workflow</div>
                <h3>Edit Enrollment</h3>
                <p>Update enrollment status and payment details.</p>
              </div>
              <button className="secondary compact-button" type="button" onClick={() => setActiveModal(null)}>
                Close
              </button>
            </div>
            <form className="form-grid top-gap" action={updateEnrollmentAction}>
              <input type="hidden" name="id" value={String(selectedEnrollment.id)} />
              <label className="span-2">
                Enrollment
                <input
                  readOnly
                  value={`${selectedEnrollment.student_no} - ${selectedEnrollment.last_name}, ${selectedEnrollment.first_name} / ${selectedEnrollment.class_code}`}
                />
              </label>
              <label>
                Academic Year
                <select name="academic_year" defaultValue={selectedEnrollment.academic_year || "2025-2026"}>
                  <option>2024-2025</option>
                  <option>2025-2026</option>
                  <option>2026-2027</option>
                </select>
              </label>
              <label>
                Semester
                <select name="semester" defaultValue={selectedEnrollment.semester || "1st Semester"}>
                  <option>1st Semester</option>
                  <option>2nd Semester</option>
                  <option>Summer</option>
                </select>
              </label>
              <label>
                Status
                <select name="status" defaultValue={selectedEnrollment.status}>
                  <option>Enrolled</option>
                  <option>Pending</option>
                  <option>Waitlisted</option>
                </select>
              </label>
              <label>
                Total Tuition Fee
                <input name="tuition_fee_display" readOnly value={peso(TUITION_FEE)} />
              </label>
              <label>
                Downpayment
                <input name="downpayment_amount_display" readOnly value={peso(DOWNPAYMENT_FEE)} />
              </label>
              <label>
                Medical Payment
                <input name="medical_fee_display" readOnly value={peso(MEDICAL_FEE)} />
              </label>
              <label>
                ID Payment
                <input name="id_fee_display" readOnly value={peso(ID_FEE)} />
              </label>
              <label>
                Total Assessment
                <input name="total_assessment_display" readOnly value={peso(TOTAL_ASSESSMENT)} />
              </label>
              <input type="hidden" name="tuition_fee" value={String(TUITION_FEE)} />
              <input type="hidden" name="downpayment_amount" value={String(DOWNPAYMENT_FEE)} />
              <input type="hidden" name="medical_fee" value={String(MEDICAL_FEE)} />
              <input type="hidden" name="id_fee" value={String(ID_FEE)} />
              <div className="span-2 modal-actions">
                <button className="secondary inline-button" type="button" onClick={() => setActiveModal(null)}>
                  Cancel
                </button>
                <button className="primary inline-button" type="submit">
                  Update Enrollment
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {activeModal === "view" && selectedEnrollment ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setActiveModal(null)}>
          <div className="modal-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="eyebrow">Enrollment Details</div>
                <h3>{`${selectedEnrollment.student_no} - ${selectedEnrollment.last_name}, ${selectedEnrollment.first_name}`}</h3>
                <p>Review the current enrollment assessment and cashier-linked payment breakdown.</p>
              </div>
              <button className="secondary compact-button" type="button" onClick={() => setActiveModal(null)}>
                Close
              </button>
            </div>
            <div className="report-grid top-gap">
              <div className="report-card">
                <div className="eyebrow">Enrollment</div>
                <h3>Record Summary</h3>
                <div className="status-stack top-gap">
                  <div className="status-row"><span>Class</span><strong>{`${selectedEnrollment.class_code} - ${selectedEnrollment.title}`}</strong></div>
                  <div className="status-row"><span>Academic Year</span><strong>{selectedEnrollment.academic_year || "2025-2026"}</strong></div>
                  <div className="status-row"><span>Semester</span><strong>{selectedEnrollment.semester || "-"}</strong></div>
                  <div className="status-row"><span>Status</span><StatusBadge value={selectedEnrollment.status} /></div>
                </div>
              </div>
              <div className="report-card">
                <div className="eyebrow">Cashier</div>
                <h3>Payment Assessment</h3>
                <div className="status-stack top-gap">
                  <div className="status-row"><span>Total Tuition Fee</span><strong>{peso(selectedEnrollment.tuition_fee ?? TUITION_FEE)}</strong></div>
                  <div className="status-row"><span>Downpayment</span><strong>{peso(selectedEnrollment.downpayment_amount ?? DOWNPAYMENT_FEE)}</strong></div>
                  <div className="status-row"><span>Medical Payment</span><strong>{peso(selectedEnrollment.medical_fee ?? MEDICAL_FEE)}</strong></div>
                  <div className="status-row"><span>ID Payment</span><strong>{peso(selectedEnrollment.id_fee ?? ID_FEE)}</strong></div>
                  <div className="status-row"><span>Total Assessment</span><strong>{peso((selectedEnrollment.tuition_fee ?? TUITION_FEE) + (selectedEnrollment.downpayment_amount ?? DOWNPAYMENT_FEE) + (selectedEnrollment.medical_fee ?? MEDICAL_FEE) + (selectedEnrollment.id_fee ?? ID_FEE))}</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
