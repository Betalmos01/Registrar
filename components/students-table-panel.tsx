"use client";

import { useEffect, useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ActionIconButton } from "@/components/action-icon-button";
import { createStudentAction, deleteStudentAction, updateStudentAction } from "@/lib/actions";
import { DataTable } from "@/components/data-table";
import { StatusBadge } from "@/components/status-badge";
import { getSubjectsForStudent } from "@/lib/student-subjects";

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
];

const YEAR_OPTIONS = ["1", "2", "3", "4"];

function FileStatusIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M6 2.5h5l3.5 3.5V16a1.5 1.5 0 0 1-1.5 1.5H6A2.5 2.5 0 0 1 3.5 15V5A2.5 2.5 0 0 1 6 2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M11 2.5V6h3.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

type StudentRecord = {
  id: number;
  student_no: string;
  first_name: string;
  last_name: string;
  middle_name?: string | null;
  program: string | null;
  year_level: string | null;
  status: string;
  birth_date?: string | null;
  mother_name?: string | null;
  father_name?: string | null;
  guardian_name?: string | null;
  address?: string | null;
  email?: string | null;
  phone?: string | null;
  payment_status?: string | null;
  medical_clearance_status?: string | null;
  counseling_report_status?: string | null;
  discipline_record_status?: string | null;
  activity_participation_status?: string | null;
  medical_clearance_record?: IntegrationRecordDetail;
  counseling_report_record?: IntegrationRecordDetail;
  discipline_record_record?: IntegrationRecordDetail;
  activity_participation_record_record?: IntegrationRecordDetail;
};

type StudentFilters = {
  programs: string[];
  years: string[];
};

type IntegrationRecordDetail = {
  source_office: string;
  reference_no: string;
  external_status: string;
  title: string;
  notes: string;
  received_at: string | null;
};

type IntegrationModalState = {
  label: string;
  status: string;
  detail?: IntegrationRecordDetail;
};

export function StudentsTablePanel({
  students,
  filters,
  params,
  nextStudentNumber,
  canManage,
}: {
  students: StudentRecord[];
  filters: StudentFilters;
  params: { q?: string; program?: string; year?: string };
  nextStudentNumber: string;
  canManage: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [activeModal, setActiveModal] = useState<"add" | "edit" | "view" | "integration" | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<StudentRecord | null>(null);
  const [selectedIntegration, setSelectedIntegration] = useState<IntegrationModalState | null>(null);
  const [searchValue, setSearchValue] = useState(params.q ?? "");
  const [programValue, setProgramValue] = useState(params.program ?? "");
  const [yearValue, setYearValue] = useState(params.year ?? "");

  function formatDate(value?: string | null) {
    if (!value) return "-";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  }

  function openIntegrationModal(student: StudentRecord, integration: IntegrationModalState) {
    setSelectedStudent(student);
    setSelectedIntegration(integration);
    setActiveModal("integration");
  }

  useEffect(() => {
    setSearchValue(params.q ?? "");
    setProgramValue(params.program ?? "");
    setYearValue(params.year ?? "");
  }, [params.q, params.program, params.year]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const query = new URLSearchParams();
      if (searchValue.trim()) query.set("q", searchValue.trim());
      if (programValue.trim()) query.set("program", programValue.trim());
      if (yearValue.trim()) query.set("year", yearValue.trim());

      startTransition(() => {
        router.replace(query.toString() ? `${pathname}?${query.toString()}` : pathname, { scroll: false });
      });
    }, 250);

    return () => window.clearTimeout(timeout);
  }, [pathname, programValue, router, searchValue, yearValue]);

  const availablePrograms = Array.from(new Set([...COURSE_OPTIONS, ...filters.programs])).sort((left, right) =>
    left.localeCompare(right)
  );
  const availableYears = Array.from(new Set([...YEAR_OPTIONS, ...filters.years])).sort((left, right) =>
    Number(left) - Number(right)
  );

  return (
    <>
      <div className="filter-bar compact-form">
        <label className="field">
          <span className="field-label">Realtime Search</span>
          <input
            name="q"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Search student no or name"
          />
        </label>
        <label className="field">
          <span className="field-label">Course</span>
          <div className="filter-input-shell select-filter-shell">
            <span className="filter-icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none">
                <path d="M3 5h14l-5.4 6.3v3.9l-3.2 1.8v-5.7L3 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </span>
            <select name="program" value={programValue} onChange={(event) => setProgramValue(event.target.value)}>
              <option value="">All Courses</option>
              {availablePrograms.map((program) => (
                <option key={program}>{program}</option>
              ))}
            </select>
          </div>
        </label>
        <label className="field">
          <span className="field-label">Year Level</span>
          <div className="filter-input-shell select-filter-shell">
            <span className="filter-icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none">
                <path d="M3 5h14l-5.4 6.3v3.9l-3.2 1.8v-5.7L3 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </span>
            <select name="year" value={yearValue} onChange={(event) => setYearValue(event.target.value)}>
              <option value="">All Years</option>
              {availableYears.map((year) => (
                <option key={year} value={year}>{`Year ${year}`}</option>
              ))}
            </select>
          </div>
        </label>
        <div className="actions-row align-end">
          {isPending ? <span className="field-hint">Updating filters...</span> : null}
          {canManage ? <button className="primary" type="button" onClick={() => setActiveModal("add")}>Add Student</button> : null}
        </div>
      </div>

      <DataTable
        headers={[
          "Student No",
          "Name",
          "Full Info",
          "Program",
          "Year",
          "All Subjects",
          "Status",
          "Payment",
          "Medical",
          "Counseling",
          "Discipline",
          "Activity",
          ...(canManage ? ["Actions"] : [])
        ]}
        showSearch={false}
      >
        {students.map((student) => (
          <tr key={student.id}>
            <td>{String(student.student_no)}</td>
            <td>{`${String(student.first_name)} ${String(student.last_name)}`}</td>
            <td>
              <button
                className="action-icon-button action-icon-neutral"
                type="button"
                title="View full student information"
                aria-label="View full student information"
                onClick={() => {
                  setSelectedStudent(student);
                  setActiveModal("view");
                }}
              >
                <FileStatusIcon />
                <span className="sr-only">View full student information</span>
              </button>
            </td>
            <td>{String(student.program ?? "-")}</td>
            <td>{String(student.year_level ?? "-")}</td>
            <td>
              <div className="actions-row">
                {getSubjectsForStudent(student.program, student.year_level).map((subject) => (
                  <span key={`${student.id}-${subject}`} className="soft-badge">
                    {subject}
                  </span>
                ))}
              </div>
            </td>
            <td><StatusBadge value={String(student.status)} /></td>
            <td><StatusBadge value={String(student.payment_status ?? "Pending")} /></td>
            <td>
              <div className="integration-file-cell">
                <button
                  className="integration-file-trigger"
                  type="button"
                  onClick={() =>
                    openIntegrationModal(student, {
                      label: "Medical Clearance",
                      status: String(student.medical_clearance_status ?? "Pending"),
                      detail: student.medical_clearance_record
                    })
                  }
                >
                  <span className="integration-file-icon"><FileStatusIcon /></span>
                  <span className="sr-only">View medical clearance file</span>
                </button>
                <StatusBadge value={String(student.medical_clearance_status ?? "Pending")} />
              </div>
            </td>
            <td>
              <div className="integration-file-cell">
                <button
                  className="integration-file-trigger"
                  type="button"
                  onClick={() =>
                    openIntegrationModal(student, {
                      label: "Counseling Report",
                      status: String(student.counseling_report_status ?? "Pending"),
                      detail: student.counseling_report_record
                    })
                  }
                >
                  <span className="integration-file-icon"><FileStatusIcon /></span>
                  <span className="sr-only">View counseling report file</span>
                </button>
                <StatusBadge value={String(student.counseling_report_status ?? "Pending")} />
              </div>
            </td>
            <td>
              <div className="integration-file-cell">
                <button
                  className="integration-file-trigger"
                  type="button"
                  onClick={() =>
                    openIntegrationModal(student, {
                      label: "Discipline Record",
                      status: String(student.discipline_record_status ?? "Pending"),
                      detail: student.discipline_record_record
                    })
                  }
                >
                  <span className="integration-file-icon"><FileStatusIcon /></span>
                  <span className="sr-only">View discipline record file</span>
                </button>
                <StatusBadge value={String(student.discipline_record_status ?? "Pending")} />
              </div>
            </td>
            <td>
              <div className="integration-file-cell">
                <button
                  className="integration-file-trigger"
                  type="button"
                  onClick={() =>
                    openIntegrationModal(student, {
                      label: "Activity Participation",
                      status: String(student.activity_participation_status ?? "Pending"),
                      detail: student.activity_participation_record_record
                    })
                  }
                >
                  <span className="integration-file-icon"><FileStatusIcon /></span>
                  <span className="sr-only">View activity participation file</span>
                </button>
                <StatusBadge value={String(student.activity_participation_status ?? "Pending")} />
              </div>
            </td>
            {canManage ? (
              <td>
                <div className="actions-row action-icon-row">
                  <ActionIconButton
                    kind="view"
                    label="View student"
                    type="button"
                    onClick={() => {
                      setSelectedStudent(student);
                      setActiveModal("view");
                    }}
                  />
                  <ActionIconButton
                    kind="edit"
                    label="Edit student"
                    type="button"
                    onClick={() => {
                      setSelectedStudent(student);
                      setActiveModal("edit");
                    }}
                  />
                  <form action={deleteStudentAction}>
                    <input type="hidden" name="id" value={String(student.id)} />
                    <ActionIconButton kind="delete" label="Delete student" type="submit" />
                  </form>
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
                <div className="eyebrow">Student Records</div>
                <h3>Add Student</h3>
                <p>Create a new student record without leaving the table view.</p>
              </div>
              <button className="secondary compact-button" type="button" onClick={() => setActiveModal(null)}>Close</button>
            </div>
            <form className="form-grid top-gap" action={createStudentAction}>
              <label>
                Student No
                <input name="student_no" required readOnly value={nextStudentNumber} />
              </label>
              <label>First Name<input name="first_name" required /></label>
              <label>Middle Name<input name="middle_name" /></label>
              <label>Last Name<input name="last_name" required /></label>
              <label>
                Birth Date
                <input name="birth_date" type="date" />
              </label>
              <label>
                Course
                <select name="program" defaultValue="">
                  <option value="">Select course</option>
                  {availablePrograms.map((program) => <option key={program}>{program}</option>)}
                </select>
              </label>
              <label>
                Year Level
                <select name="year_level" defaultValue="">
                  <option value="">Select year</option>
                  {availableYears.map((year) => <option key={year} value={year}>{`Year ${year}`}</option>)}
                </select>
              </label>
              <label>
                Status
                <select name="status" defaultValue="Active">
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>On Hold</option>
                </select>
              </label>
              <label>Mother's Name<input name="mother_name" /></label>
              <label>Father's Name<input name="father_name" /></label>
              <label>Guardian<input name="guardian_name" /></label>
              <label>Phone Number<input name="phone" /></label>
              <label>Email Address<input name="email" type="email" /></label>
              <label className="span-2">
                Address
                <textarea name="address" rows={3} />
              </label>
              <div className="span-2 modal-actions">
                <button className="secondary inline-button" type="button" onClick={() => setActiveModal(null)}>Cancel</button>
                <button className="primary inline-button" type="submit">Save Student</button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {canManage && activeModal === "edit" && selectedStudent ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setActiveModal(null)}>
          <div className="modal-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="eyebrow">Student Records</div>
                <h3>Edit Student</h3>
                <p>Update the selected student directly from the master list.</p>
              </div>
              <button className="secondary compact-button" type="button" onClick={() => setActiveModal(null)}>Close</button>
            </div>
            <form className="form-grid top-gap" action={updateStudentAction}>
              <input type="hidden" name="id" value={String(selectedStudent.id)} />
              <label>Student No<input name="student_no" required defaultValue={selectedStudent.student_no} /></label>
              <label>First Name<input name="first_name" required defaultValue={selectedStudent.first_name} /></label>
              <label>Middle Name<input name="middle_name" defaultValue={selectedStudent.middle_name ?? ""} /></label>
              <label>Last Name<input name="last_name" required defaultValue={selectedStudent.last_name} /></label>
              <label>
                Birth Date
                <input name="birth_date" type="date" defaultValue={selectedStudent.birth_date ? String(selectedStudent.birth_date).slice(0, 10) : ""} />
              </label>
              <label>
                Course
                <select name="program" defaultValue={selectedStudent.program ?? ""}>
                  <option value="">Select course</option>
                  {availablePrograms.map((program) => <option key={program}>{program}</option>)}
                </select>
              </label>
              <label>
                Year Level
                <select name="year_level" defaultValue={selectedStudent.year_level ?? ""}>
                  <option value="">Select year</option>
                  {availableYears.map((year) => <option key={year} value={year}>{`Year ${year}`}</option>)}
                </select>
              </label>
              <label>
                Status
                <select name="status" defaultValue={selectedStudent.status}>
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>On Hold</option>
                </select>
              </label>
              <label>Mother's Name<input name="mother_name" defaultValue={selectedStudent.mother_name ?? ""} /></label>
              <label>Father's Name<input name="father_name" defaultValue={selectedStudent.father_name ?? ""} /></label>
              <label>Guardian<input name="guardian_name" defaultValue={selectedStudent.guardian_name ?? ""} /></label>
              <label>Phone Number<input name="phone" defaultValue={selectedStudent.phone ?? ""} /></label>
              <label>Email Address<input name="email" type="email" defaultValue={selectedStudent.email ?? ""} /></label>
              <label className="span-2">
                Address
                <textarea name="address" rows={3} defaultValue={selectedStudent.address ?? ""} />
              </label>
              <div className="span-2 modal-actions">
                <button className="secondary inline-button" type="button" onClick={() => setActiveModal(null)}>Cancel</button>
                <button className="primary inline-button" type="submit">Update Student</button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {activeModal === "view" && selectedStudent ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setActiveModal(null)}>
          <div className="modal-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="eyebrow">Student Profile</div>
                <h3>{`${selectedStudent.first_name} ${selectedStudent.last_name}`}</h3>
                <p>Review the complete student information and current integration statuses from one place.</p>
              </div>
              <button className="secondary compact-button" type="button" onClick={() => setActiveModal(null)}>Close</button>
            </div>

            <div className="report-grid top-gap">
              <div className="report-card">
                <div className="eyebrow">Personal</div>
                <h3>Core Information</h3>
                <div className="status-stack top-gap">
                  <div className="status-row"><span>Student No</span><strong>{selectedStudent.student_no}</strong></div>
                  <div className="status-row"><span>First Name</span><strong>{selectedStudent.first_name || "-"}</strong></div>
                  <div className="status-row"><span>Middle Name</span><strong>{selectedStudent.middle_name || "-"}</strong></div>
                  <div className="status-row"><span>Last Name</span><strong>{selectedStudent.last_name || "-"}</strong></div>
                  <div className="status-row"><span>Birth Date</span><strong>{formatDate(selectedStudent.birth_date)}</strong></div>
                  <div className="status-row"><span>Program</span><strong>{selectedStudent.program || "-"}</strong></div>
                  <div className="status-row"><span>Year Level</span><strong>{selectedStudent.year_level ? `Year ${selectedStudent.year_level}` : "-"}</strong></div>
                  <div className="status-row"><span>Status</span><StatusBadge value={selectedStudent.status} /></div>
                </div>
              </div>

              <div className="report-card">
                <div className="eyebrow">Family & Contact</div>
                <h3>Profile Details</h3>
                <div className="status-stack top-gap">
                  <div className="status-row"><span>Mother's Name</span><strong>{selectedStudent.mother_name || "-"}</strong></div>
                  <div className="status-row"><span>Father's Name</span><strong>{selectedStudent.father_name || "-"}</strong></div>
                  <div className="status-row"><span>Guardian</span><strong>{selectedStudent.guardian_name || "-"}</strong></div>
                  <div className="status-row"><span>Phone</span><strong>{selectedStudent.phone || "-"}</strong></div>
                  <div className="status-row"><span>Email</span><strong>{selectedStudent.email || "-"}</strong></div>
                  <div className="status-row full-info-row"><span>Address</span><strong>{selectedStudent.address || "-"}</strong></div>
                </div>
              </div>

              <div className="report-card span-2">
                <div className="eyebrow">Integrations</div>
                <h3>Current Received Status</h3>
                <div className="status-stack top-gap">
                  <div className="status-row"><span>Payment</span><StatusBadge value={String(selectedStudent.payment_status ?? "Pending")} /></div>
                  <div className="status-row"><span>Medical Clearance</span><StatusBadge value={String(selectedStudent.medical_clearance_status ?? "Pending")} /></div>
                  <div className="status-row"><span>Counseling Report</span><StatusBadge value={String(selectedStudent.counseling_report_status ?? "Pending")} /></div>
                  <div className="status-row"><span>Discipline Record</span><StatusBadge value={String(selectedStudent.discipline_record_status ?? "Pending")} /></div>
                  <div className="status-row"><span>Activity Participation</span><StatusBadge value={String(selectedStudent.activity_participation_status ?? "Pending")} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {activeModal === "integration" && selectedStudent && selectedIntegration ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setActiveModal(null)}>
          <div className="modal-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="eyebrow">Student Integration File</div>
                <h3>{selectedIntegration.label}</h3>
                <p>{`${selectedStudent.first_name} ${selectedStudent.last_name} - ${selectedStudent.student_no}`}</p>
              </div>
              <button className="secondary compact-button" type="button" onClick={() => setActiveModal(null)}>Close</button>
            </div>

            <div className="report-grid top-gap">
              <div className="report-card">
                <div className="eyebrow">Record Status</div>
                <h3>{selectedIntegration.label}</h3>
                <div className="status-stack top-gap">
                  <div className="status-row"><span>Status</span><StatusBadge value={selectedIntegration.status} /></div>
                  <div className="status-row"><span>Source Office</span><strong>{selectedIntegration.detail?.source_office || "-"}</strong></div>
                  <div className="status-row"><span>Reference No</span><strong>{selectedIntegration.detail?.reference_no || "-"}</strong></div>
                  <div className="status-row"><span>Received At</span><strong>{formatDate(selectedIntegration.detail?.received_at)}</strong></div>
                </div>
              </div>

              <div className="report-card">
                <div className="eyebrow">Attached File</div>
                <h3>Latest Received Record</h3>
                <div className="status-stack top-gap">
                  <div className="status-row"><span>Title</span><strong>{selectedIntegration.detail?.title || `${selectedIntegration.label} file not yet received.`}</strong></div>
                  <div className="status-row full-info-row"><span>Notes</span><strong>{selectedIntegration.detail?.notes || "No uploaded notes or record details available yet."}</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

    </>
  );
}
