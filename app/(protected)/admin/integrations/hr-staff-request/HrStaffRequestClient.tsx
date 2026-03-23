"use client";

import { useRef, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { UserPlus, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { HrStaffRequestRow, HrStaffRequestStatus } from "@/lib/hr-staff-requests";
import { HR_STAFF_INTEGRATION_ROLES } from "../../../../../../shared/hrStaffIntegrationRoles";

interface Props {
  statusData: HrStaffRequestStatus | null;
  requests: HrStaffRequestRow[];
  total: number;
  currentPage: number;
  currentSearch: string;
  currentStatus: string;
  createAction: (formData: FormData) => Promise<void>;
}

function roleLabel(r: string) { return r.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase()); }
function formatDt(v: string | null) {
  if (!v) return "--";
  const d = new Date(v);
  return isNaN(d.getTime()) ? v : d.toLocaleString();
}

function StatusBadge({ status }: { status: string }) {
  const variant =
    status === "approved" || status === "hired" ? "default" :
    status === "rejected" ? "destructive" :
    "secondary";
  return <Badge variant={variant}>{status}</Badge>;
}

const STATUSES = ["all","pending","queue","waiting_applicant","hiring","approved","hired","rejected"];
const PER_PAGE = 10;

export default function HrStaffRequestClient({ statusData, requests, total, currentPage, currentSearch, currentStatus, createAction }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [pending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  function navigate(params: Record<string, string>) {
    const sp = new URLSearchParams(searchParams.toString());
    Object.entries(params).forEach(([k, v]) => v ? sp.set(k, v) : sp.delete(k));
    router.push(`?${sp.toString()}`);
  }

  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));

  const cards = statusData ? [
    { title: "Active Roster", value: statusData.totals.activeRoster, sub: "Currently active" },
    { title: "Working Roster", value: statusData.totals.workingRoster, sub: "On duty" },
    { title: "Pending Requests", value: statusData.totals.pendingRequests, sub: "Awaiting HR" },
    { title: "Approved", value: statusData.totals.approvedRequests, sub: "Approved by HR" },
  ] : [];

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">HR Integration</p>
          <h1 className="text-2xl font-black">Request Staff from HR</h1>
          <p className="text-muted-foreground">Submit staffing requests and monitor approval status for Registrar staff.</p>
        </div>
        <Button onClick={() => setDialogOpen(true)}>
          <UserPlus className="mr-2 h-4 w-4" /> Request Staff
        </Button>
      </div>

      {cards.length > 0 && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map(c => (
            <Card key={c.title}>
              <CardContent className="pt-6">
                <div className="text-2xl font-black">{c.value}</div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide">{c.title}</div>
                <div className="text-xs text-muted-foreground">{c.sub}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Card>
        <CardHeader><CardTitle>HR Staff Requests</CardTitle></CardHeader>
        <CardContent>
          <div className="flex gap-3 mb-4 flex-wrap">
            <Input
              placeholder="Search reference, employee, name…"
              defaultValue={currentSearch}
              className="max-w-sm"
              onChange={e => navigate({ search: e.target.value, page: "1" })}
            />
            <Select value={currentStatus} onValueChange={v => navigate({ status: v, page: "1" })}>
              <SelectTrigger className="w-44"><SelectValue /></SelectTrigger>
              <SelectContent>
                {STATUSES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" onClick={() => router.refresh()}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>REQUEST</TableHead><TableHead>STAFF</TableHead>
                <TableHead>ROLE</TableHead><TableHead>STATUS</TableHead>
                <TableHead>REQUESTED BY</TableHead><TableHead>CREATED</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map(r => (
                <TableRow key={r.id}>
                  <TableCell>
                    <div className="font-semibold">{r.request_reference}</div>
                    <div className="text-xs text-muted-foreground">{r.employee_no}</div>
                  </TableCell>
                  <TableCell>{r.staff_name}</TableCell>
                  <TableCell><Badge variant="outline">{roleLabel(r.role_type)}</Badge></TableCell>
                  <TableCell><StatusBadge status={r.request_status} /></TableCell>
                  <TableCell>{r.requested_by ?? "--"}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{formatDt(r.created_at)}</TableCell>
                </TableRow>
              ))}
              {requests.length === 0 && (
                <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">No requests found.</TableCell></TableRow>
              )}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
            <span>Showing {requests.length} of {total}</span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled={currentPage <= 1} onClick={() => navigate({ page: String(currentPage - 1) })}>Previous</Button>
              <span className="px-2 py-1">{currentPage} / {totalPages}</span>
              <Button variant="outline" size="sm" disabled={currentPage >= totalPages} onClick={() => navigate({ page: String(currentPage + 1) })}>Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader><DialogTitle>Request Staff from HR</DialogTitle></DialogHeader>
          <form ref={formRef} action={async (fd) => {
            startTransition(async () => {
              await createAction(fd);
              setDialogOpen(false);
              formRef.current?.reset();
            });
          }}>
            <div className="space-y-4 py-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="roleType">Role type</Label>
                  <select name="roleType" id="roleType" className="w-full rounded-md border px-3 py-2 text-sm bg-background" defaultValue="registrar_staff">
                    {HR_STAFF_INTEGRATION_ROLES.map((r) => (
                      <option key={r.value} value={r.value}>{r.title}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="requestedCount">Requested count</Label>
                  <Input id="requestedCount" name="requestedCount" type="number" min={1} defaultValue={1} />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="requestedBy">Requested by</Label>
                <Input id="requestedBy" name="requestedBy" defaultValue="Registrar Admin" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="requestNotes">Notes</Label>
                <Textarea id="requestNotes" name="requestNotes" rows={3} placeholder="Optional notes for HR…" />
              </div>
            </div>
            <DialogFooter className="pt-4">
              <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button type="submit" disabled={pending}>{pending ? "Sending…" : "Send Request"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
