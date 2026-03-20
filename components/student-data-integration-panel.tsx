"use client";

import { useMemo, useState } from "react";
import { DataTable } from "@/components/data-table";

type StudentDispatchTarget = {
  key: string;
  label: string;
};

function formatLabel(value: string) {
  return value
    .replace(/_/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}

function stringifyCell(value: unknown) {
  if (value === null || value === undefined || value === "") {
    return "-";
  }

  if (Array.isArray(value)) {
    return value.length ? JSON.stringify(value) : "[]";
  }

  if (typeof value === "object") {
    return JSON.stringify(value);
  }

  return String(value);
}

function buildPreviewTable(payload: Record<string, unknown>) {
  const sourceRows = Array.isArray(payload.rows) ? payload.rows : [];
  const previewRows = sourceRows as Array<Record<string, unknown>>;
  const previewColumns = Array.from(
    new Set(previewRows.flatMap((row) => Object.keys(row)))
  );

  return {
    summaryRows: Object.entries(payload)
      .filter(([key]) => key !== "rows")
      .map(([key, value]) => ({
        field: formatLabel(key),
        value: stringifyCell(value)
      })),
    previewColumns,
    previewRows
  };
}

async function parseResponse(response: Response) {
  const text = await response.text();
  return text ? JSON.parse(text) : {};
}

export function StudentDataIntegrationPanel({
  targets
}: {
  targets: StudentDispatchTarget[];
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTargetKey, setSelectedTargetKey] = useState(targets[0]?.key ?? "");
  const [summaryRows, setSummaryRows] = useState<Array<{ field: string; value: string }>>([]);
  const [previewColumns, setPreviewColumns] = useState<string[]>([]);
  const [previewRows, setPreviewRows] = useState<Array<Record<string, unknown>>>([]);
  const [filterText, setFilterText] = useState("");
  const [isLoadingPreview, setIsLoadingPreview] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isConfirmingSend, setIsConfirmingSend] = useState(false);
  const [resultState, setResultState] = useState<{ kind: "success" | "error"; message: string } | null>(null);
  const [successPopupMessage, setSuccessPopupMessage] = useState("");

  const selectedTarget = useMemo(
    () => targets.find((target) => target.key === selectedTargetKey) ?? targets[0] ?? null,
    [selectedTargetKey, targets]
  );

  const filteredPreviewRows = useMemo(() => {
    const needle = filterText.trim().toLowerCase();
    if (!needle) return previewRows;

    return previewRows.filter((row) =>
      previewColumns.some((column) => stringifyCell(row[column]).toLowerCase().includes(needle))
    );
  }, [filterText, previewColumns, previewRows]);

  async function refreshPreview(targetKey = selectedTarget?.key ?? "") {
    if (!targetKey) return;

    setIsLoadingPreview(true);
    setFilterText("");

    try {
      const url = new URL("/api/integrations", window.location.origin);
      url.searchParams.set("resource", "student-dispatch-preview");
      url.searchParams.set("target_key", targetKey);

      const response = await fetch(url.toString(), {
        credentials: "same-origin"
      });
      const payload = await parseResponse(response);

      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.error ?? payload?.message ?? "Failed to load student integration preview.");
      }

      const previewPayload = (payload?.data?.payload ?? {}) as Record<string, unknown>;
      const table = buildPreviewTable(previewPayload);
      setSummaryRows(table.summaryRows);
      setPreviewColumns(table.previewColumns);
      setPreviewRows(table.previewRows);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to load student integration preview.";
      setSummaryRows([{ field: "Error", value: message }]);
      setPreviewColumns([]);
      setPreviewRows([]);
    } finally {
      setIsLoadingPreview(false);
    }
  }

  async function openModal() {
    setResultState(null);
    setIsConfirmingSend(false);
    setIsModalOpen(true);
    await refreshPreview(selectedTarget?.key ?? "");
  }

  async function confirmSend() {
    if (!selectedTarget) return;

    setIsSending(true);
    setResultState(null);

    try {
      const response = await fetch("/api/integrations", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          action: "dispatch_student_data",
          target_key: selectedTarget.key
        })
      });
      const payload = await parseResponse(response);

      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.error ?? payload?.message ?? `Failed to send data to ${selectedTarget.label}.`);
      }

      setResultState({
        kind: "success",
        message: `Student data was sent to ${selectedTarget.label}.`
      });
      setSuccessPopupMessage(`Student data was sent to ${selectedTarget.label} successfully.`);
      setIsConfirmingSend(false);
      setIsModalOpen(false);
    } catch (error) {
      const message = error instanceof Error ? error.message : `Failed to send data to ${selectedTarget.label}.`;
      setResultState({
        kind: "error",
        message
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      <div className="panel-stack">
        <div className="field-hint">
          Open one modal, choose the destination system, and the preview will change based on the selected target.
        </div>
        <div className="top-gap">
          <button className="primary" type="button" onClick={() => void openModal()}>
            Open Student Data Sender
          </button>
        </div>

        {resultState ? (
          <div className={resultState.kind === "success" ? "success-banner" : "error-banner"} role="status">
            {resultState.message}
          </div>
        ) : null}
      </div>

      {successPopupMessage ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setSuccessPopupMessage("")}>
          <div className="modal-card" role="alertdialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="eyebrow">Send Complete</div>
                <h3>Success</h3>
                <p>{successPopupMessage}</p>
              </div>
            </div>

            <div className="section-card soft-panel top-gap">
              <div className="section-head">
                <div>
                  <h2>Database Update</h2>
                  <p>The selected student data batch was confirmed and processed.</p>
                </div>
              </div>
            </div>

            <div className="modal-actions top-gap">
              <button className="primary inline-button" type="button" onClick={() => setSuccessPopupMessage("")}>
                OK
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {isModalOpen && selectedTarget ? (
        <div className="modal-backdrop" role="presentation" onClick={() => !isSending && setIsModalOpen(false)}>
          <div className="modal-card modal-card-wide" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="eyebrow">Student Data Integrations</div>
                <h3>Send Student Data</h3>
                <p>Choose where to send the registrar data. The payload preview updates based on the selected destination.</p>
              </div>
              <button className="secondary compact-button" type="button" onClick={() => setIsModalOpen(false)} disabled={isSending}>
                Close
              </button>
            </div>

            <div className="table-toolbar top-gap">
              <label className="field">
                <span className="field-label">Send To</span>
                <select
                  value={selectedTargetKey}
                  onChange={(event) => {
                    const nextKey = event.target.value;
                    setSelectedTargetKey(nextKey);
                    void refreshPreview(nextKey);
                  }}
                >
                  {targets.map((target) => (
                    <option key={target.key} value={target.key}>
                      {target.label}
                    </option>
                  ))}
                </select>
              </label>

              <div className="field">
                <span className="field-label">Audience Rule</span>
                <div className="status-meta">
                  {selectedTarget.key === "crad"
                    ? "Only students with research or capstone subjects are included."
                    : selectedTarget.key === "computer-laboratory"
                      ? "Only students with computer-related laboratory subjects are included."
                      : "All matching student records for the selected destination are included."}
                </div>
              </div>

              <label className="field">
                <span className="field-label">Filter</span>
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
            </div>

            {isLoadingPreview ? (
              <div className="integration-preview top-gap">Loading preview table...</div>
            ) : (
              <>
                <DataTable headers={["Field", "Value"]} showSearch={false}>
                  {summaryRows.map((row, index) => (
                    <tr key={`${row.field}-${index}`}>
                      <td>{row.field}</td>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </DataTable>

                <div className="top-gap">
                  <DataTable headers={previewColumns.map((column) => formatLabel(column))} showSearch={false}>
                    {filteredPreviewRows.map((row, index) => (
                      <tr key={`preview-${index}`}>
                        {previewColumns.map((column) => (
                          <td key={column}>{stringifyCell(row[column])}</td>
                        ))}
                      </tr>
                    ))}
                  </DataTable>
                </div>
              </>
            )}

            {isConfirmingSend ? (
              <div className="section-card soft-panel top-gap">
                <div className="section-head">
                  <div>
                    <h2>Confirm Send</h2>
                    <p>
                      Send this student data batch to <strong>{selectedTarget.label}</strong>?
                    </p>
                  </div>
                </div>
                <div className="status-stack">
                  <div className="status-row">
                    <span>Destination</span>
                    <strong>{selectedTarget.label}</strong>
                  </div>
                  <div className="status-row">
                    <span>Rows Ready</span>
                    <strong>{filteredPreviewRows.length}</strong>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="modal-actions top-gap">
              {isConfirmingSend ? (
                <>
                  <button className="secondary inline-button" type="button" onClick={() => setIsConfirmingSend(false)} disabled={isSending}>
                    Back
                  </button>
                  <button className="primary inline-button" type="button" onClick={() => void confirmSend()} disabled={isLoadingPreview || isSending}>
                    {isSending ? "Sending..." : "Send Now"}
                  </button>
                </>
              ) : (
                <>
                  <button className="secondary inline-button" type="button" onClick={() => setIsModalOpen(false)} disabled={isSending}>
                    Cancel
                  </button>
                  <button
                    className="primary inline-button"
                    type="button"
                    onClick={() => setIsConfirmingSend(true)}
                    disabled={isLoadingPreview || isSending || filteredPreviewRows.length === 0}
                  >
                    Review Send
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
