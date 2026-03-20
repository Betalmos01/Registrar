"use client";

import { useMemo, useState } from "react";
import { DataTable } from "@/components/data-table";

type StudentOption = {
  id: number | string;
  student_no: string;
  first_name: string;
  last_name: string;
};

type OutgoingEntry = {
  key: string;
  label: string;
  office: string;
  description: string;
  consumers: string[];
  path: string;
};

type PreviewState = {
  endpoint: string;
  columns: string[];
  rows: Array<Record<string, string>>;
  raw: string;
};

type DestinationOption = {
  value: string;
  label: string;
  entry: OutgoingEntry;
};

function normalizeConsumerLabel(value: string) {
  if (value === "PrefectManagementsSystem") {
    return "Prefect";
  }

  if (value === "CRADManagement") {
    return "CRAD";
  }

  return value;
}

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

function buildPreview(payload: any, endpoint: string): PreviewState {
  const data = payload?.data ?? {};
  const candidates = Object.entries(data).find(([, value]) => Array.isArray(value));

  if (candidates && Array.isArray(candidates[1])) {
    const rows = candidates[1] as Array<Record<string, unknown>>;
    const sample = rows[0] ?? {};
    const columns = Object.keys(sample).slice(0, 6);

    return {
      endpoint,
      columns: columns.length ? columns : ["result"],
      rows: rows.map((row) =>
        (columns.length ? columns : ["result"]).reduce<Record<string, string>>((accumulator, column) => {
          accumulator[column] = columns.length ? stringifyCell(row[column]) : stringifyCell(row);
          return accumulator;
        }, {})
      ),
      raw: JSON.stringify({ endpoint, ...payload }, null, 2)
    };
  }

  if (data.student && typeof data.student === "object") {
    const student = data.student as Record<string, unknown>;
    const columns = ["student_no", "first_name", "last_name", "program", "year_level", "status"];

    return {
      endpoint,
      columns,
      rows: [
        columns.reduce<Record<string, string>>((accumulator, column) => {
          accumulator[column] = stringifyCell(student[column]);
          return accumulator;
        }, {})
      ],
      raw: JSON.stringify({ endpoint, ...payload }, null, 2)
    };
  }

  const rows = Object.entries(data).map(([key, value]) => ({
    metric: titleCase(key),
    value: stringifyCell(value)
  }));

  return {
    endpoint,
    columns: ["metric", "value"],
    rows,
    raw: JSON.stringify({ endpoint, ...payload }, null, 2)
  };
}

export function IntegrationSendPanel({
  students,
  outgoing
}: {
  students: StudentOption[];
  outgoing: OutgoingEntry[];
}) {
  const [selectedStudentNo, setSelectedStudentNo] = useState(students[0]?.student_no ?? "");
  const [busyKey, setBusyKey] = useState("");
  const [responseText, setResponseText] = useState("Choose an outgoing feed and click Send to open a confirmation preview.");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewState, setPreviewState] = useState<PreviewState | null>(null);
  const [filterText, setFilterText] = useState("");
  const destinationOptions = useMemo<DestinationOption[]>(
    () =>
      outgoing.flatMap((entry) => {
        const seen = new Set<string>();

        return entry.consumers.flatMap((consumer) => {
          const normalizedConsumer = normalizeConsumerLabel(consumer);

          if (seen.has(normalizedConsumer)) {
            return [];
          }

          seen.add(normalizedConsumer);

          return {
            value: `${entry.key}:${normalizedConsumer}`,
            label: normalizedConsumer,
            entry
          };
        });
      }),
    [outgoing]
  );
  const [selectedDestination, setSelectedDestination] = useState(destinationOptions[0]?.value ?? "");

  const studentRequiredKeys = useMemo(
    () => new Set(["enrollment-data", "student-personal-info", "student-academic-records"]),
    []
  );
  const selectedDestinationOption = useMemo(
    () => destinationOptions.find((option) => option.value === selectedDestination) ?? destinationOptions[0] ?? null,
    [destinationOptions, selectedDestination]
  );
  const activeEntry = selectedDestinationOption?.entry ?? null;

  const studentListPreview = useMemo<PreviewState>(
    () => ({
      endpoint: "/api/integrations?resource=student-list",
      columns: ["student_no", "first_name", "last_name"],
      rows: students.map((student) => ({
        student_no: student.student_no,
        first_name: student.first_name,
        last_name: student.last_name
      })),
      raw: JSON.stringify(
        {
          endpoint: "/api/integrations?resource=student-list",
          ok: true,
          data: { students }
        },
        null,
        2
      )
    }),
    [students]
  );

  async function fetchPayload(entry: OutgoingEntry, studentNo = selectedStudentNo) {
    const requiresStudent = studentRequiredKeys.has(entry.key);
    const url = new URL(entry.path, window.location.origin);

    if (requiresStudent && studentNo) {
      url.searchParams.set("student_no", studentNo);
    }

    const response = await fetch(url.toString(), {
      credentials: "same-origin"
    });
    const payload = await response.json();
    return buildPreview(payload, url.toString());
  }

  async function refreshPreview(entry: OutgoingEntry, studentNo = selectedStudentNo) {
    setFilterText("");
    if (entry.key === "student-list") {
      setPreviewState(studentListPreview);
      return;
    }

    setBusyKey(entry.key);

    try {
      const preview = await fetchPayload(entry, studentNo);
      setPreviewState(preview);
    } catch (error) {
      setPreviewState({
        endpoint: entry.path,
        columns: ["error"],
        rows: [{ error: error instanceof Error ? error.message : "Request failed." }],
        raw: JSON.stringify(
          {
            ok: false,
            error: error instanceof Error ? error.message : "Request failed."
          },
          null,
          2
        )
      });
    } finally {
      setBusyKey("");
    }
  }

  async function openSendModal(entry: OutgoingEntry) {
    setIsModalOpen(true);
    await refreshPreview(entry);
  }

  async function confirmSend() {
    if (!activeEntry) return;

    setBusyKey(activeEntry.key);
    try {
      const response = await fetch("/api/integrations", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          action: "deliver",
          resource: activeEntry.key,
          student_no: selectedStudentNo,
          consumer: selectedDestinationOption?.label ?? activeEntry.office
        })
      });
      const payload = await response.json();
      const deliveryPreview = buildPreview(payload, `/api/integrations [deliver:${activeEntry.key}]`);
      setPreviewState(deliveryPreview);
      setResponseText(JSON.stringify(payload, null, 2));
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
        endpoint: activeEntry.path,
        columns: ["error"],
        rows: [{ error: error instanceof Error ? error.message : "Request failed." }],
        raw
      });
    } finally {
      setBusyKey("");
    }
  }

  const filteredRows = useMemo(() => {
    if (!previewState) return [];

    const needle = filterText.trim().toLowerCase();
    if (!needle) return previewState.rows;

    return previewState.rows.filter((row) =>
      Object.values(row).some((value) => value.toLowerCase().includes(needle))
    );
  }, [filterText, previewState]);

  const destinationGroupLabel = "Clinic / Guidance / Prefect / CRAD";
  const integrationModeLabel =
    activeEntry?.key === "student-list"
      ? "Student list will be prepared for CRAD and Computer Laboratory consumers."
      : "Student personal information will be prepared for Clinic, Guidance, and Prefect consumers.";

  return (
    <>
      <div className="content-grid two-col">
        <div className="panel-stack">
          <div className="form-cluster">
            <div className="field-hint">{integrationModeLabel}</div>
            {activeEntry ? (
              <div className="integration-card top-gap">
                <div className="eyebrow">{destinationGroupLabel}</div>
                <h3>Student List & Information</h3>
                <p className="stat-note">{integrationModeLabel}</p>
                <div className="status-meta">Destination: {selectedDestinationOption?.label ?? "-"}</div>
                <div className="status-meta">Endpoint: <code>{activeEntry.path}</code></div>
                <div className="top-gap">
                  <button className="primary" type="button" onClick={() => openSendModal(activeEntry)} disabled={busyKey !== ""}>
                    {busyKey === activeEntry.key ? "Loading..." : "Send Student List & Information"}
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="section-card soft-panel">
          <div className="section-head">
            <div>
              <h2>Last Sent Payload</h2>
              <p>The most recent confirmed outgoing response appears here.</p>
            </div>
          </div>
          <pre className="integration-preview">{responseText}</pre>
        </div>
      </div>

      {isModalOpen && activeEntry ? (
        <div className="modal-backdrop" role="presentation" onClick={() => busyKey === "" && setIsModalOpen(false)}>
          <div className="modal-card modal-card-wide" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="eyebrow">{selectedDestinationOption?.label ?? activeEntry.office}</div>
                <h3>Confirm {activeEntry.label}</h3>
                <p>Review the outgoing data below before sending it to the selected destination.</p>
              </div>
              <button className="secondary compact-button" type="button" onClick={() => setIsModalOpen(false)} disabled={busyKey !== ""}>
                Close
              </button>
            </div>

            {previewState ? (
              <>
                <div className="table-toolbar top-gap">
                  <label className="field">
                    <span className="field-label">Student</span>
                    <select
                      value={selectedStudentNo}
                      onChange={(event) => {
                        const nextStudentNo = event.target.value;
                        setSelectedStudentNo(nextStudentNo);
                        if (activeEntry && studentRequiredKeys.has(activeEntry.key)) {
                          void refreshPreview(activeEntry, nextStudentNo);
                        }
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
                    <span className="field-label">Destination</span>
                    <select
                      value={selectedDestination}
                      onChange={(event) => {
                        const nextValue = event.target.value;
                        setSelectedDestination(nextValue);
                        const nextEntry = destinationOptions.find((option) => option.value === nextValue)?.entry;
                        if (nextEntry) {
                          void refreshPreview(nextEntry);
                        }
                      }}
                    >
                      {destinationOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
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
                    <div className="status-meta"><code>{previewState.endpoint}</code></div>
                  </div>
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
              <button className="primary inline-button" type="button" onClick={confirmSend} disabled={busyKey !== ""}>
                {busyKey === activeEntry.key ? "Sending..." : `Confirm Send`}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
