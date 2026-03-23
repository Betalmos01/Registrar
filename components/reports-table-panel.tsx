"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ActionIconButton } from "@/components/action-icon-button";
import { DataTable } from "@/components/data-table";
import { ReportingToPmedModal } from "@/components/reporting-to-pmed-modal";
import { StatusBadge } from "@/components/status-badge";
import { deleteReportAction } from "@/lib/actions";

type ReportRow = {
  id: number | string;
  title: string;
  department: string;
  status: string;
  due_date: string | null;
};

type PmedPreviewPayload = {
  report_summary?: {
    total_reports?: number;
    workflow_reports_total?: number;
    workflow_rows_total?: number;
  };
  registrar_snapshot?: {
    student_statuses?: Array<{ status: string; count: number }>;
    grade_records?: {
      total?: number;
      distinct_students?: number;
    };
  };
};

export function ReportsTablePanel({
  reports,
  reportsEnabled
}: {
  reports: ReportRow[];
  reportsEnabled: boolean;
}) {
  const router = useRouter();
  const [viewReport, setViewReport] = useState<ReportRow | null>(null);
  const [isLoadingPreview, setIsLoadingPreview] = useState(false);
  const [previewError, setPreviewError] = useState("");
  const [pmedPreview, setPmedPreview] = useState<PmedPreviewPayload | null>(null);
  const [sendingReportId, setSendingReportId] = useState<string>("");
  const [sendState, setSendState] = useState<{ kind: "success" | "error"; message: string } | null>(null);

  async function openViewReport(report: ReportRow) {
    setViewReport(report);
    setIsLoadingPreview(true);
    setPreviewError("");
    setPmedPreview(null);

    try {
      const response = await fetch("/api/integrations?resource=report-queue", {
        method: "GET",
        credentials: "same-origin",
        cache: "no-store"
      });
      const payload = (await response.json()) as {
        ok?: boolean;
        error?: string;
        data?: PmedPreviewPayload;
      };

      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.error || "Failed to fetch PMED report data.");
      }

      setPmedPreview(payload.data ?? null);
    } catch (error) {
      setPreviewError(error instanceof Error ? error.message : "Failed to fetch PMED report data.");
    } finally {
      setIsLoadingPreview(false);
    }
  }

  async function sendSingleReportToPmed(report: ReportRow) {
    const reportId = String(report.id);
    setSendingReportId(reportId);
    setSendState(null);
    try {
      const response = await fetch("/api/integrations", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "deliver",
          resource: "report-queue",
          report_id: report.id
        })
      });
      const payload = (await response.json()) as { ok?: boolean; message?: string; error?: string };
      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.error || payload?.message || "Failed to send report to PMED.");
      }
      setSendState({
        kind: "success",
        message: payload?.message || "Report sent to PMED."
      });
      router.refresh();
    } catch (error) {
      setSendState({
        kind: "error",
        message: error instanceof Error ? error.message : "Failed to send report to PMED."
      });
    } finally {
      setSendingReportId("");
    }
  }

  return (
    <>
      {sendState ? (
        <div className={sendState.kind === "success" ? "success-banner top-gap" : "error-banner top-gap"} role="status">
          {sendState.message}
        </div>
      ) : null}
      <DataTable
        headers={["Title", "Department", "Status", "Due Date", "Actions"]}
        toolbarActions={<ReportingToPmedModal disabled={!reportsEnabled} />}
      >
        {reports.map((report) => (
          <tr key={String(report.id)}>
            <td>{String(report.title)}</td>
            <td>{String(report.department)}</td>
            <td>
              <StatusBadge value={String(report.status)} />
            </td>
            <td>{String(report.due_date ?? "-")}</td>
            <td>
              <div className="actions-row action-icon-row">
                <ActionIconButton
                  kind="view"
                  label="View report"
                  type="button"
                  onClick={() => void openViewReport(report)}
                />
                <button
                  className="secondary compact-button"
                  type="button"
                  onClick={() => void sendSingleReportToPmed(report)}
                  disabled={sendingReportId === String(report.id)}
                >
                  {sendingReportId === String(report.id) ? "Sending..." : "Send PMED"}
                </button>
                <form action={deleteReportAction}>
                  <input type="hidden" name="id" value={String(report.id)} />
                  <ActionIconButton kind="delete" label="Delete report" type="submit" />
                </form>
              </div>
            </td>
          </tr>
        ))}
      </DataTable>

      {viewReport ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setViewReport(null)}>
          <div className="modal-card modal-card-compact" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="eyebrow">Report Queue</div>
                <h3>Report Details</h3>
                <p>Review this report record before editing or deleting it.</p>
              </div>
              <button className="secondary compact-button" type="button" onClick={() => setViewReport(null)}>
                Close
              </button>
            </div>

            <div className="status-stack top-gap">
              <div className="status-row">
                <span>Title</span>
                <strong>{viewReport.title}</strong>
              </div>
              <div className="status-row">
                <span>Department</span>
                <strong>{viewReport.department}</strong>
              </div>
              <div className="status-row">
                <span>Status</span>
                <StatusBadge value={viewReport.status} />
              </div>
              <div className="status-row">
                <span>Due Date</span>
                <strong>{viewReport.due_date ?? "-"}</strong>
              </div>
            </div>

            <div className="top-gap">
              <div className="eyebrow">PMED Send Data Preview</div>
              {isLoadingPreview ? (
                <div className="integration-preview top-gap">Fetching required PMED data...</div>
              ) : previewError ? (
                <div className="error-banner top-gap">{previewError}</div>
              ) : (
                <div className="status-stack top-gap">
                  <div className="status-row">
                    <span>Total PMED Reports</span>
                    <strong>{String(pmedPreview?.report_summary?.total_reports ?? 0)}</strong>
                  </div>
                  <div className="status-row">
                    <span>Workflow Reports Included</span>
                    <strong>{String(pmedPreview?.report_summary?.workflow_reports_total ?? 0)}</strong>
                  </div>
                  <div className="status-row">
                    <span>Workflow Data Rows</span>
                    <strong>{String(pmedPreview?.report_summary?.workflow_rows_total ?? 0)}</strong>
                  </div>
                  <div className="status-row">
                    <span>Grade Records</span>
                    <strong>{String(pmedPreview?.registrar_snapshot?.grade_records?.total ?? 0)}</strong>
                  </div>
                  <div className="status-row">
                    <span>Students With Grades</span>
                    <strong>{String(pmedPreview?.registrar_snapshot?.grade_records?.distinct_students ?? 0)}</strong>
                  </div>
                  <div className="status-row">
                    <span>Student Status Groups</span>
                    <strong>{String(pmedPreview?.registrar_snapshot?.student_statuses?.length ?? 0)}</strong>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
