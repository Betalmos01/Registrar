"use client";

import { useState } from "react";
import { DataTable } from "@/components/data-table";

type ReportPreviewRow = {
  id: number | string;
  title: string;
  department: string;
  status: string;
  due_date: string;
};

async function parseResponse(response: Response) {
  const text = await response.text();
  return text ? JSON.parse(text) : {};
}

export function ReportingToPmedModal({ disabled }: { disabled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [rows, setRows] = useState<ReportPreviewRow[]>([]);
  const [state, setState] = useState<{ kind: "success" | "error"; message: string } | null>(null);

  async function openModal() {
    setIsOpen(true);
    setIsLoading(true);
    setState(null);

    try {
      const response = await fetch("/api/integrations?resource=report-queue", {
        credentials: "same-origin"
      });
      const payload = await parseResponse(response);
      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.error ?? payload?.message ?? "Failed to load report preview.");
      }

      setRows(Array.isArray(payload?.data?.rows) ? payload.data.rows : []);
    } catch (error) {
      setRows([]);
      setState({
        kind: "error",
        message: error instanceof Error ? error.message : "Failed to load report preview."
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function confirmSend() {
    setIsSending(true);
    setState(null);
    try {
      const response = await fetch("/api/integrations", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "deliver",
          resource: "report-queue"
        })
      });
      const payload = await parseResponse(response);
      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.error ?? payload?.message ?? "Failed to send reports to PMED.");
      }

      setState({
        kind: "success",
        message: payload?.message ?? "Reports sent to PMED."
      });
      setIsOpen(false);
    } catch (error) {
      setState({
        kind: "error",
        message: error instanceof Error ? error.message : "Failed to send reports to PMED."
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      <button className="secondary" type="button" onClick={() => void openModal()} disabled={disabled}>
        Report to PMED
      </button>

      {state ? (
        <div className={state.kind === "success" ? "success-banner top-gap" : "error-banner top-gap"} role="status">
          {state.message}
        </div>
      ) : null}

      {isOpen ? (
        <div className="modal-backdrop" role="presentation" onClick={() => !isSending && setIsOpen(false)}>
          <div className="modal-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="eyebrow">PMED Integration</div>
                <h3>Send Reports to PMED</h3>
                <p>Preview current registrar reports before sending the queue to PMED.</p>
              </div>
              <button className="secondary compact-button" type="button" onClick={() => setIsOpen(false)} disabled={isSending}>
                Close
              </button>
            </div>

            {isLoading ? (
              <div className="integration-preview top-gap">Loading report preview...</div>
            ) : (
              <div className="top-gap">
                <DataTable headers={["Title", "Department", "Status", "Due Date"]} showSearch={false}>
                  {rows.map((row) => (
                    <tr key={String(row.id)}>
                      <td>{row.title}</td>
                      <td>{row.department}</td>
                      <td>{row.status}</td>
                      <td>{row.due_date || "-"}</td>
                    </tr>
                  ))}
                </DataTable>
                {rows.length === 0 ? <p className="field-hint">No report records are currently available for PMED.</p> : null}
              </div>
            )}

            <div className="modal-actions top-gap">
              <button className="secondary inline-button" type="button" onClick={() => setIsOpen(false)} disabled={isSending}>
                Cancel
              </button>
              <button className="primary inline-button" type="button" onClick={() => void confirmSend()} disabled={isLoading || isSending}>
                {isSending ? "Sending..." : "Confirm Send"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
