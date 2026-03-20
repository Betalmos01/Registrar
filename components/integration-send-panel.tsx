"use client";

import { useMemo, useState } from "react";
import { DataTable } from "@/components/data-table";
import { StatusBadge } from "@/components/status-badge";

type StudentOption = {
  id: number | string;
  student_no: string;
  first_name: string;
  last_name: string;
};

type DepartmentRouteSummary = {
  route_key: string;
  flow_name: string;
  event_code: string;
  endpoint_path: string;
  priority: number;
  is_required: boolean;
};

type OutgoingDepartment = {
  department_key: string;
  department_name: string;
  purpose: string;
  default_action_label: string;
  dispatch_endpoint: string;
  route_count: number;
  pending_count: number;
  in_progress_count: number;
  failed_count: number;
  completed_count: number;
  latest_status: string | null;
  latest_event_code: string | null;
  latest_correlation_id: string | null;
  latest_created_at: string | null;
  routes: DepartmentRouteSummary[];
};

type PreviewState = {
  endpoint: string;
  routeLabel: string;
  targetLabel: string;
  columns: string[];
  rows: Array<Record<string, string>>;
  raw: string;
  notes: string[];
};

function titleCase(value: string) {
  return value
    .replace(/_/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}

function stringifyCell(value: unknown) {
  if (value === null || value === undefined || value === "") {
    return "-";
  }

  if (typeof value === "object") {
    return JSON.stringify(value);
  }

  return String(value);
}

function buildPreview(payload: any): PreviewState {
  const preview = payload?.data?.preview ?? {};
  const dispatch = payload?.data?.dispatch ?? null;
  const route = preview?.route ?? null;
  const requestPayload = (preview?.payload ?? {}) as Record<string, unknown>;
  const endpoint =
    dispatch?.dispatch_endpoint ??
    preview?.endpoint ??
    route?.endpoint_path ??
    "/rest/v1/rpc/dispatch_department_flow";

  const preferredKeys = [
    "student_no",
    "student_name",
    "program",
    "year_level",
    "section_name",
    "enrollment_status",
    "course_year_section",
    "subject_count",
    "subject_codes",
    "email",
    "phone",
    "event_code"
  ];
  const orderedKeys = [
    ...preferredKeys.filter((key) => key in requestPayload),
    ...Object.keys(requestPayload).filter((key) => !preferredKeys.includes(key))
  ];
  const rows = orderedKeys.map((key) => ({
    field: titleCase(key),
    value: stringifyCell(requestPayload[key])
  }));

  return {
    endpoint,
    routeLabel: route?.flow_name ?? route?.event_code ?? "Department Flow",
    targetLabel: preview?.target_department_name ?? preview?.target_department_key ?? "Connected Department",
    columns: ["field", "value"],
    rows,
    raw: JSON.stringify(payload, null, 2),
    notes: [
      `Route Key: ${route?.route_key ?? "-"}`,
      `Event Code: ${dispatch?.event_code ?? route?.event_code ?? "-"}`,
      `Source Record: ${preview?.source_record_id ?? "-"}`,
      `Status: ${dispatch?.status ?? "Preview Prepared"}`,
      `Correlation: ${dispatch?.correlation_id ?? "-"}`,
      `Event Id: ${dispatch?.event_id ?? "-"}`
    ]
  };
}

async function parseResponse(response: Response) {
  const text = await response.text();
  return text ? JSON.parse(text) : {};
}

export function IntegrationSendPanel({
  students,
  outgoing
}: {
  students: StudentOption[];
  outgoing: OutgoingDepartment[];
}) {
  const [selectedStudentNo, setSelectedStudentNo] = useState(students[0]?.student_no ?? "");
  const [selectedDepartmentKey, setSelectedDepartmentKey] = useState(outgoing[0]?.department_key ?? "");
  const [busyKey, setBusyKey] = useState("");
  const [responseText, setResponseText] = useState(
    outgoing.length
      ? "Choose a connected department and open the preview to inspect the registrar payload before dispatch."
      : "No outgoing registrar department routes are configured yet."
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewState, setPreviewState] = useState<PreviewState | null>(null);
  const [filterText, setFilterText] = useState("");

  const selectedDepartment = useMemo(
    () => outgoing.find((item) => item.department_key === selectedDepartmentKey) ?? outgoing[0] ?? null,
    [outgoing, selectedDepartmentKey]
  );
  const selectedRoute = selectedDepartment?.routes[0] ?? null;

  const filteredRows = useMemo(() => {
    if (!previewState) return [];

    const needle = filterText.trim().toLowerCase();
    if (!needle) return previewState.rows;

    return previewState.rows.filter((row) =>
      Object.values(row).some((value) => value.toLowerCase().includes(needle))
    );
  }, [filterText, previewState]);

  async function refreshPreview(nextDepartment = selectedDepartment, nextStudentNo = selectedStudentNo) {
    if (!nextDepartment) {
      setPreviewState(null);
      return;
    }

    const nextRoute = nextDepartment.routes[0] ?? null;

    if (!nextStudentNo) {
      setPreviewState({
        endpoint: nextDepartment.dispatch_endpoint,
        routeLabel: nextDepartment.department_name,
        targetLabel: nextDepartment.department_name,
        columns: ["field", "value"],
        rows: [{ field: "Error", value: "A student record is required before building the preview." }],
        raw: JSON.stringify({ ok: false, error: "Student selection is required." }, null, 2),
        notes: [`Route Key: ${nextRoute?.route_key ?? "-"}`]
      });
      return;
    }

    setBusyKey(nextDepartment.department_key);
    setFilterText("");

    try {
      const url = new URL("/api/integrations", window.location.origin);
      url.searchParams.set("resource", "department-preview");
      url.searchParams.set("target_department_key", nextDepartment.department_key);
      url.searchParams.set("student_no", nextStudentNo);
      if (nextRoute?.event_code) {
        url.searchParams.set("event_code", nextRoute.event_code);
      }

      const response = await fetch(url.toString(), {
        credentials: "same-origin"
      });
      const payload = await parseResponse(response);

      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.error ?? payload?.message ?? "Failed to build department flow preview.");
      }

      setPreviewState(buildPreview(payload));
    } catch (error) {
      const raw = JSON.stringify(
        {
          ok: false,
          error: error instanceof Error ? error.message : "Request failed."
        },
        null,
        2
      );

      setPreviewState({
        endpoint: nextDepartment.dispatch_endpoint,
        routeLabel: nextRoute?.flow_name ?? "Department Flow",
        targetLabel: nextDepartment.department_name,
        columns: ["field", "value"],
        rows: [{ field: "Error", value: error instanceof Error ? error.message : "Request failed." }],
        raw,
        notes: [`Route Key: ${nextRoute?.route_key ?? "-"}`]
      });
    } finally {
      setBusyKey("");
    }
  }

  async function openSendModal() {
    if (!selectedDepartment) return;

    setIsModalOpen(true);
    await refreshPreview(selectedDepartment);
  }

  async function confirmSend() {
    if (!selectedDepartment) return;

    setBusyKey(selectedDepartment.department_key);

    try {
      const response = await fetch("/api/integrations", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          action: "dispatch_department_flow",
          target_department_key: selectedDepartment.department_key,
          student_no: selectedStudentNo,
          event_code: selectedRoute?.event_code
        })
      });
      const payload = await parseResponse(response);

      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.error ?? payload?.message ?? "Failed to queue department flow.");
      }

      const preview = buildPreview(payload);
      setPreviewState(preview);
      setResponseText(preview.raw);
      setIsModalOpen(false);
    } catch (error) {
      const raw = JSON.stringify(
        {
          ok: false,
          error: error instanceof Error ? error.message : "Request failed."
        },
        null,
        2
      );

      setResponseText(raw);
      setPreviewState({
        endpoint: selectedDepartment.dispatch_endpoint,
        routeLabel: selectedRoute?.flow_name ?? "Department Flow",
        targetLabel: selectedDepartment.department_name,
        columns: ["field", "value"],
        rows: [{ field: "Error", value: error instanceof Error ? error.message : "Request failed." }],
        raw,
        notes: [`Route Key: ${selectedRoute?.route_key ?? "-"}`]
      });
    } finally {
      setBusyKey("");
    }
  }

  if (!outgoing.length) {
    return <div className="error-banner">Registrar does not have any active connected department routes in the shared integration registry yet.</div>;
  }

  return (
    <>
      <div className="content-grid two-col">
        <div className="panel-stack">
          <div className="field-hint">
            Queue shared department-flow events from Registrar to the connected department selected below.
          </div>
          {selectedDepartment ? (
            <div className="integration-card top-gap">
              <div className="eyebrow">Connected Department</div>
              <h3>{selectedDepartment.department_name}</h3>
              <p className="stat-note">{selectedDepartment.purpose}</p>
              <div className="status-stack top-gap">
                <div className="status-row">
                  <div>
                    <strong>Primary Route</strong>
                    <div className="status-meta">{selectedRoute?.flow_name ?? "No route configured"}</div>
                  </div>
                  <StatusBadge value={selectedDepartment.latest_status ?? "Ready"} />
                </div>
                <div className="status-row">
                  <div>
                    <strong>Dispatch Endpoint</strong>
                    <div className="status-meta">
                      <code>{selectedDepartment.dispatch_endpoint}</code>
                    </div>
                  </div>
                  <span className="status-meta">{selectedDepartment.route_count} route(s)</span>
                </div>
                <div className="status-row">
                  <div>
                    <strong>Recent Queue</strong>
                    <div className="status-meta">
                      Pending {selectedDepartment.pending_count} | In Progress {selectedDepartment.in_progress_count}
                    </div>
                  </div>
                  <span className="status-meta">Completed {selectedDepartment.completed_count}</span>
                </div>
              </div>
              <div className="top-gap">
                <button
                  className="primary"
                  type="button"
                  onClick={() => openSendModal()}
                  disabled={busyKey !== "" || !selectedStudentNo}
                >
                  {busyKey === selectedDepartment.department_key
                    ? "Loading..."
                    : selectedDepartment.default_action_label || `Send to ${selectedDepartment.department_name}`}
                </button>
              </div>
            </div>
          ) : null}
        </div>

        <div className="section-card soft-panel">
          <div className="section-head">
            <div>
              <h2>Last Flow Response</h2>
              <p>The latest preview or dispatch response appears here.</p>
            </div>
          </div>
          <pre className="integration-preview">{responseText}</pre>
        </div>
      </div>

      {isModalOpen && selectedDepartment ? (
        <div className="modal-backdrop" role="presentation" onClick={() => busyKey === "" && setIsModalOpen(false)}>
          <div className="modal-card modal-card-wide" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="eyebrow">{selectedDepartment.department_name}</div>
                <h3>Confirm Registrar Department Flow</h3>
                <p>Review the generated registrar payload before queueing it for the selected connected department.</p>
              </div>
              <button className="secondary compact-button" type="button" onClick={() => setIsModalOpen(false)} disabled={busyKey !== ""}>
                Close
              </button>
            </div>

            <div className="table-toolbar top-gap">
              <label className="field">
                <span className="field-label">Student</span>
                <select
                  value={selectedStudentNo}
                  onChange={(event) => {
                    const nextStudentNo = event.target.value;
                    setSelectedStudentNo(nextStudentNo);
                    void refreshPreview(selectedDepartment, nextStudentNo);
                  }}
                >
                  {students.map((student) => (
                    <option key={student.id} value={student.student_no}>
                      {student.student_no} - {student.last_name}, {student.first_name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="field">
                <span className="field-label">Department</span>
                <select
                  value={selectedDepartmentKey}
                  onChange={(event) => {
                    const nextDepartmentKey = event.target.value;
                    setSelectedDepartmentKey(nextDepartmentKey);
                    const nextDepartment = outgoing.find((item) => item.department_key === nextDepartmentKey) ?? null;
                    if (nextDepartment) {
                      void refreshPreview(nextDepartment, selectedStudentNo);
                    }
                  }}
                >
                  {outgoing.map((department) => (
                    <option key={department.department_key} value={department.department_key}>
                      {department.department_name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="field">
                <span className="field-label">Preview Filter</span>
                <div className="filter-input-shell">
                  <span className="filter-icon" aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="none">
                      <path d="M3 5h14l-5.4 6.3v3.9l-3.2 1.8v-5.7L3 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <input
                    value={filterText}
                    onChange={(event) => setFilterText(event.target.value)}
                    placeholder="Filter preview rows"
                  />
                </div>
              </label>

              <div className="field">
                <span className="field-label">Endpoint</span>
                <div className="status-meta">
                  <code>{previewState?.endpoint ?? selectedDepartment.dispatch_endpoint}</code>
                </div>
              </div>
            </div>

            {previewState ? (
              <>
                <div className="panel-stack top-gap">
                  <div className="status-meta">
                    <strong>{previewState.targetLabel}</strong> via {previewState.routeLabel}
                  </div>
                  {previewState.notes.map((note) => (
                    <div key={note} className="status-meta">{note}</div>
                  ))}
                </div>

                <DataTable headers={previewState.columns.map((column) => titleCase(column))}>
                  {filteredRows.map((row, index) => (
                    <tr key={`${index}-${Object.values(row).join("-")}`}>
                      {previewState.columns.map((column) => (
                        <td key={column}>{row[column] ?? "-"}</td>
                      ))}
                    </tr>
                  ))}
                </DataTable>
              </>
            ) : (
              <div className="integration-preview top-gap">Loading preview table...</div>
            )}

            <div className="modal-actions top-gap">
              <button className="secondary inline-button" type="button" onClick={() => setIsModalOpen(false)} disabled={busyKey !== ""}>
                Cancel
              </button>
              <button className="primary inline-button" type="button" onClick={confirmSend} disabled={busyKey !== "" || !selectedStudentNo}>
                {busyKey === selectedDepartment.department_key ? "Queueing..." : "Confirm Queue"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
