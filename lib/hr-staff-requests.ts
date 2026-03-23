import { db } from "./db";
import {
  HR_STAFF_INTEGRATION_ROLE_CODES,
  type HrStaffIntegrationRoleCode,
} from "../../shared/hrStaffIntegrationRoles";

// ── Department constants ───────────────────────────────────────────────────────
const DEPT_NAME = "Registrar";
export type RegistrarRoleType = HrStaffIntegrationRoleCode;

// ── Types ──────────────────────────────────────────────────────────────────────

export type HrStaffRequestRow = {
  id: number;
  request_reference: string;
  staff_id: number;
  employee_no: string;
  staff_name: string;
  role_type: string;
  department_name: string;
  request_status: "pending" | "approved" | "rejected" | "queue" | "waiting_applicant" | "hiring" | "hired";
  request_notes: string | null;
  requested_by: string | null;
  decided_by: string | null;
  decided_at: string | null;
  created_at: string;
  updated_at: string;
};

export type HrStaffRequestStatus = {
  totals: { activeRoster: number; workingRoster: number; pendingRequests: number; approvedRequests: number };
  recentRequests: HrStaffRequestRow[];
};

export type PagedResult = { items: HrStaffRequestRow[]; total: number };

// ── Helpers ────────────────────────────────────────────────────────────────────

function roleList(): string {
  return HR_STAFF_INTEGRATION_ROLE_CODES.map((r) => `'${r}'`).join(", ");
}

// ── Public API (server-side) ───────────────────────────────────────────────────

export async function getHrStaffRequestStatus(): Promise<HrStaffRequestStatus> {
  const [
    { rows: [{ count: active }] },
    { rows: [{ count: working }] },
    { rows: [{ count: pending }] },
    { rows: [{ count: approved }] },
    { rows: recent },
  ] = await Promise.all([
    db.query<{ count: string }>(
      `SELECT COUNT(*) FROM public.hr_staff_directory WHERE role_type IN (${roleList()}) AND employment_status = 'active'`
    ),
    db.query<{ count: string }>(
      `SELECT COUNT(*) FROM public.hr_staff_directory WHERE role_type IN (${roleList()}) AND employment_status = 'working'`
    ),
    db.query<{ count: string }>(
      `SELECT COUNT(*) FROM public.hr_staff_requests WHERE request_status = 'pending'`
    ),
    db.query<{ count: string }>(
      `SELECT COUNT(*) FROM public.hr_staff_requests WHERE request_status = 'approved'`
    ),
    db.query<Record<string, unknown>>(
      `SELECT r.*, d.employee_no, d.full_name AS staff_name, d.role_type, d.department_name
       FROM public.hr_staff_requests r
       JOIN public.hr_staff_directory d ON d.id = r.staff_id
       ORDER BY r.created_at DESC LIMIT 5`
    ),
  ]);

  return {
    totals: {
      activeRoster: parseInt(active ?? "0"),
      workingRoster: parseInt(working ?? "0"),
      pendingRequests: parseInt(pending ?? "0"),
      approvedRequests: parseInt(approved ?? "0"),
    },
    recentRequests: recent.map(mapRaw),
  };
}

export async function getHrStaffRequests(params: {
  search?: string; status?: string; page?: number; perPage?: number;
} = {}): Promise<PagedResult> {
  const page = Math.max(1, params.page ?? 1);
  const perPage = Math.min(50, Math.max(1, params.perPage ?? 10));
  const offset = (page - 1) * perPage;
  const bindings: unknown[] = [perPage, offset];
  const filters: string[] = [];
  if (params.status && params.status !== "all") {
    bindings.push(params.status);
    filters.push(`r.request_status = $${bindings.length}`);
  }
  const where = filters.length ? `WHERE ${filters.join(" AND ")}` : "";

  const [{ rows: data }, { rows: [{ total }] }] = await Promise.all([
    db.query<Record<string, unknown>>(
      `SELECT r.*, d.employee_no, d.full_name AS staff_name, d.role_type, d.department_name
       FROM public.hr_staff_requests r
       JOIN public.hr_staff_directory d ON d.id = r.staff_id
       ${where} ORDER BY r.created_at DESC LIMIT $1 OFFSET $2`,
      bindings
    ),
    db.query<{ total: string }>(
      `SELECT COUNT(*) AS total FROM public.hr_staff_requests r ${where}`,
      filters.length ? bindings.slice(2) : []
    ),
  ]);

  let items = data.map(mapRaw);
  if (params.search) {
    const sq = params.search.toLowerCase();
    items = items.filter(r =>
      r.request_reference.toLowerCase().includes(sq) ||
      r.employee_no.toLowerCase().includes(sq) ||
      r.staff_name.toLowerCase().includes(sq)
    );
  }
  return { items, total: parseInt(total ?? "0") };
}

export async function createHrStaffRequest(payload: {
  roleType: HrStaffIntegrationRoleCode;
  requestedCount?: number;
  requestedBy?: string;
  requestNotes?: string;
}): Promise<void> {
  const { roleType, requestedCount = 1, requestedBy = `${DEPT_NAME} Admin`, requestNotes } = payload;
  const poolKey = `HR-REQ-POOL-${roleType.toUpperCase()}`;
  const poolName = roleType.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  await db.query(
    `INSERT INTO public.hr_staff_directory (employee_no, full_name, role_type, department_name, employment_status, contact_email, contact_phone, hired_at)
     VALUES ($1, $2, $3, $4, 'inactive', NULL, NULL, NULL)
     ON CONFLICT (employee_no) DO NOTHING`,
    [poolKey, `Open ${poolName} Hiring Request`, roleType, DEPT_NAME]
  );

  const { rows: staffRows } = await db.query<{ id: number }>(
    `SELECT id FROM public.hr_staff_directory WHERE employee_no = $1 LIMIT 1`, [poolKey]
  );
  if (!staffRows.length) throw new Error("Failed to resolve placeholder staff entry.");

  const ref = `HR-REQ-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 89999)}`;
  const notes = [requestNotes, `Requested count: ${Math.max(1, requestedCount)}`].filter(Boolean).join(" | ");

  await db.query(
    `INSERT INTO public.hr_staff_requests (request_reference, staff_id, request_status, request_notes, requested_by)
     VALUES ($1, $2, 'pending', $3, $4)`,
    [ref, staffRows[0].id, notes || null, requestedBy]
  );
}

// ── Internal mapper ────────────────────────────────────────────────────────────

function mapRaw(r: Record<string, unknown>): HrStaffRequestRow {
  return {
    id: r.id as number,
    request_reference: String(r.request_reference ?? ""),
    staff_id: r.staff_id as number,
    employee_no: String(r.employee_no ?? ""),
    staff_name: String(r.staff_name ?? "Unknown"),
    role_type: String(r.role_type ?? ""),
    department_name: String(r.department_name ?? ""),
    request_status: String(r.request_status ?? "pending") as HrStaffRequestRow["request_status"],
    request_notes: r.request_notes != null ? String(r.request_notes) : null,
    requested_by: r.requested_by != null ? String(r.requested_by) : null,
    decided_by: r.decided_by != null ? String(r.decided_by) : null,
    decided_at: r.decided_at != null ? String(r.decided_at) : null,
    created_at: String(r.created_at ?? ""),
    updated_at: String(r.updated_at ?? ""),
  };
}
