import { hasTable, query, queryOne, queryValue, resolveTableName } from "@/lib/db";

export type DepartmentRouteSummary = {
  route_key: string;
  flow_name: string;
  event_code: string;
  endpoint_path: string;
  priority: number;
  is_required: boolean;
};

export type DepartmentConnection = {
  department_key: string;
  department_name: string;
  system_code: string;
  module_directory: string;
  purpose: string;
  default_action_label: string;
  dispatch_rpc_name: string;
  status_rpc_name: string;
  ack_rpc_name: string;
  dispatch_endpoint: string;
  pending_count: number;
  in_progress_count: number;
  failed_count: number;
  completed_count: number;
  route_count: number;
  latest_status: string | null;
  latest_event_code: string | null;
  latest_correlation_id: string | null;
  latest_created_at: string | null;
  routes: DepartmentRouteSummary[];
};

export type DepartmentFlowDispatchResult = {
  ok: boolean;
  event_id?: string;
  correlation_id?: string;
  route_key?: string;
  source_department_key?: string;
  target_department_key?: string;
  event_code?: string;
  status?: string;
  dispatch_endpoint?: string;
  message?: string;
};

export type DepartmentFlowStatusResult = {
  ok: boolean;
  event_id?: string;
  correlation_id?: string;
  route_key?: string;
  flow_name?: string;
  source_department_key?: string;
  target_department_key?: string;
  event_code?: string;
  status?: string;
  dispatch_endpoint?: string;
  source_record_id?: string | null;
  request_payload?: Record<string, unknown>;
  response_payload?: Record<string, unknown>;
  initiated_by?: string | null;
  dispatched_at?: string | null;
  acknowledged_at?: string | null;
  last_error?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  message?: string;
};

export type DepartmentFlowEvent = {
  id: string;
  correlation_id: string;
  route_key: string;
  flow_name: string;
  source_department_key: string;
  source_department_name: string;
  target_department_key: string;
  target_department_name: string;
  event_code: string;
  status: string;
  dispatch_endpoint: string;
  source_record_id: string | null;
  request_payload: Record<string, unknown>;
  response_payload: Record<string, unknown>;
  initiated_by: string | null;
  dispatched_at: string | null;
  acknowledged_at: string | null;
  last_error: string | null;
  created_at: string | null;
  updated_at: string | null;
};

export type RegistrarDepartmentPreview = {
  source_department_key: "registrar";
  target_department_key: string;
  target_department_name: string;
  endpoint: string;
  route: DepartmentRouteSummary | null;
  source_record_id: string;
  student: {
    student_id: number;
    student_no: string;
    student_name: string;
  };
  payload: Record<string, unknown>;
};

export type RegistrarDepartmentFlowSummary = {
  enabled: boolean;
  outgoing_departments: number;
  outgoing_routes: number;
  incoming_departments: number;
  incoming_routes: number;
  queued_events: number;
  completed_events: number;
  failed_events: number;
};

type RegistrarStudentDirectoryRecord = {
  student_id: number;
  student_no: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  student_name: string;
  program: string;
  year_level: string;
  section_name: string;
  registrar_status: string;
  enrollment_status: string;
  course_year_section: string;
  email: string;
  phone: string;
  subject_count: number;
  subject_codes: string;
  subject_load: unknown;
};

function asString(value: unknown) {
  return value === null || value === undefined ? "" : String(value);
}

function asNullableString(value: unknown) {
  const normalized = asString(value).trim();
  return normalized ? normalized : null;
}

function asNumber(value: unknown) {
  const normalized = Number(value ?? 0);
  return Number.isFinite(normalized) ? normalized : 0;
}

function asRouteSummary(value: unknown): DepartmentRouteSummary {
  const record = (value ?? {}) as Record<string, unknown>;
  return {
    route_key: asString(record.route_key),
    flow_name: asString(record.flow_name),
    event_code: asString(record.event_code),
    endpoint_path: asString(record.endpoint_path),
    priority: asNumber(record.priority),
    is_required: Boolean(record.is_required)
  };
}

function asRouteSummaryList(value: unknown) {
  if (!Array.isArray(value)) {
    return [] as DepartmentRouteSummary[];
  }

  return value
    .map((item) => asRouteSummary(item))
    .filter((item) => item.route_key)
    .sort((left, right) => left.priority - right.priority);
}

function asConnection(value: unknown): DepartmentConnection {
  const record = (value ?? {}) as Record<string, unknown>;
  return {
    department_key: asString(record.department_key),
    department_name: asString(record.department_name),
    system_code: asString(record.system_code),
    module_directory: asString(record.module_directory),
    purpose: asString(record.purpose),
    default_action_label: asString(record.default_action_label) || "Dispatch",
    dispatch_rpc_name: asString(record.dispatch_rpc_name) || "dispatch_department_flow",
    status_rpc_name: asString(record.status_rpc_name) || "get_department_flow_status",
    ack_rpc_name: asString(record.ack_rpc_name) || "acknowledge_department_flow",
    dispatch_endpoint: asString(record.dispatch_endpoint) || "/rest/v1/rpc/dispatch_department_flow",
    pending_count: asNumber(record.pending_count),
    in_progress_count: asNumber(record.in_progress_count),
    failed_count: asNumber(record.failed_count),
    completed_count: asNumber(record.completed_count),
    route_count: asNumber(record.route_count),
    latest_status: asNullableString(record.latest_status),
    latest_event_code: asNullableString(record.latest_event_code),
    latest_correlation_id: asNullableString(record.latest_correlation_id),
    latest_created_at: asNullableString(record.latest_created_at),
    routes: asRouteSummaryList(record.routes)
  };
}

function asConnectionList(value: unknown) {
  if (!Array.isArray(value)) {
    return [] as DepartmentConnection[];
  }

  return value
    .map((item) => asConnection(item))
    .filter((item) => item.department_key);
}

function asDispatchResult(value: unknown): DepartmentFlowDispatchResult {
  const record = (value ?? {}) as Record<string, unknown>;
  return {
    ok: Boolean(record.ok),
    event_id: asNullableString(record.event_id) ?? undefined,
    correlation_id: asNullableString(record.correlation_id) ?? undefined,
    route_key: asNullableString(record.route_key) ?? undefined,
    source_department_key: asNullableString(record.source_department_key) ?? undefined,
    target_department_key: asNullableString(record.target_department_key) ?? undefined,
    event_code: asNullableString(record.event_code) ?? undefined,
    status: asNullableString(record.status) ?? undefined,
    dispatch_endpoint: asNullableString(record.dispatch_endpoint) ?? undefined,
    message: asNullableString(record.message) ?? undefined
  };
}

function asStatusResult(value: unknown): DepartmentFlowStatusResult {
  const record = (value ?? {}) as Record<string, unknown>;
  return {
    ok: Boolean(record.ok),
    event_id: asNullableString(record.event_id) ?? undefined,
    correlation_id: asNullableString(record.correlation_id) ?? undefined,
    route_key: asNullableString(record.route_key) ?? undefined,
    flow_name: asNullableString(record.flow_name) ?? undefined,
    source_department_key: asNullableString(record.source_department_key) ?? undefined,
    target_department_key: asNullableString(record.target_department_key) ?? undefined,
    event_code: asNullableString(record.event_code) ?? undefined,
    status: asNullableString(record.status) ?? undefined,
    dispatch_endpoint: asNullableString(record.dispatch_endpoint) ?? undefined,
    source_record_id: asNullableString(record.source_record_id),
    request_payload: (record.request_payload as Record<string, unknown> | undefined) ?? {},
    response_payload: (record.response_payload as Record<string, unknown> | undefined) ?? {},
    initiated_by: asNullableString(record.initiated_by),
    dispatched_at: asNullableString(record.dispatched_at),
    acknowledged_at: asNullableString(record.acknowledged_at),
    last_error: asNullableString(record.last_error),
    created_at: asNullableString(record.created_at),
    updated_at: asNullableString(record.updated_at),
    message: asNullableString(record.message) ?? undefined
  };
}

function normalizeStudentDirectoryRecord(
  value: Record<string, unknown> | null
): RegistrarStudentDirectoryRecord | null {
  if (!value) {
    return null;
  }

  return {
    student_id: asNumber(value.student_id),
    student_no: asString(value.student_no),
    first_name: asString(value.first_name),
    middle_name: asString(value.middle_name),
    last_name: asString(value.last_name),
    student_name: asString(value.student_name),
    program: asString(value.program),
    year_level: asString(value.year_level),
    section_name: asString(value.section_name),
    registrar_status: asString(value.registrar_status),
    enrollment_status: asString(value.enrollment_status),
    course_year_section: asString(value.course_year_section),
    email: asString(value.email),
    phone: asString(value.phone),
    subject_count: asNumber(value.subject_count),
    subject_codes: asString(value.subject_codes),
    subject_load: value.subject_load ?? []
  };
}

function buildSourceRecordId(
  targetDepartmentKey: string,
  eventCode: string,
  studentNo: string
) {
  const sanitize = (value: string) =>
    value
      .trim()
      .toUpperCase()
      .replace(/[^A-Z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "REGISTRAR";

  return [
    "REG",
    sanitize(targetDepartmentKey),
    sanitize(eventCode),
    sanitize(studentNo),
    Date.now().toString()
  ].join("-");
}

function buildPreviewPayload(
  student: RegistrarStudentDirectoryRecord,
  connection: DepartmentConnection,
  route: DepartmentRouteSummary | null
) {
  return {
    student_id: student.student_id,
    student_no: student.student_no,
    first_name: student.first_name,
    middle_name: student.middle_name,
    last_name: student.last_name,
    student_name: student.student_name,
    program: student.program,
    year_level: student.year_level,
    section_name: student.section_name,
    registrar_status: student.registrar_status,
    enrollment_status: student.enrollment_status,
    course_year_section: student.course_year_section,
    email: student.email,
    phone: student.phone,
    subject_count: student.subject_count,
    subject_codes: student.subject_codes,
    subject_load: Array.isArray(student.subject_load) ? student.subject_load : [],
    source_department_key: "registrar",
    source_department_name: "Registrar",
    target_department_key: connection.department_key,
    target_department_name: connection.department_name,
    route_key: route?.route_key ?? null,
    flow_name: route?.flow_name ?? null,
    event_code: route?.event_code ?? null
  } satisfies Record<string, unknown>;
}

function selectRoute(connection: DepartmentConnection, eventCode?: string | null) {
  if (eventCode) {
    return connection.routes.find((route) => route.event_code === eventCode) ?? null;
  }

  return connection.routes[0] ?? null;
}

export async function hasDepartmentFlowIntegration() {
  const [departments, routes, events] = await Promise.all([
    hasTable("public.integration_departments"),
    hasTable("public.integration_flow_routes"),
    hasTable("public.integration_flow_events")
  ]);

  return departments && routes && events;
}

export async function listRegistrarOutgoingDepartments() {
  if (!(await hasDepartmentFlowIntegration())) {
    return [] as DepartmentConnection[];
  }

  const payload = await queryValue<unknown>(
    "select public.get_department_integration_registry($1) as payload",
    ["registrar"]
  );

  return asConnectionList(payload);
}

export async function listRegistrarIncomingDepartments() {
  if (!(await hasDepartmentFlowIntegration())) {
    return [] as DepartmentConnection[];
  }

  const rows = await query<{
    department_key: string;
    department_name: string;
    system_code: string;
    module_directory: string;
    purpose: string;
    default_action_label: string;
    pending_count: number;
    in_progress_count: number;
    failed_count: number;
    completed_count: number;
    route_count: number;
    latest_status: string | null;
    latest_event_code: string | null;
    latest_correlation_id: string | null;
    latest_created_at: string | null;
    routes: unknown;
  }>(
    `select
        source.department_key,
        source.department_name,
        source.system_code,
        source.module_directory,
        source.purpose,
        source.default_action_label,
        count(distinct route.id)::int as route_count,
        count(event.id) filter (where event.status in ('queued', 'pending'))::int as pending_count,
        count(event.id) filter (where event.status in ('dispatched', 'in_progress', 'awaiting_acknowledgement'))::int as in_progress_count,
        count(event.id) filter (where event.status in ('failed', 'blocked'))::int as failed_count,
        count(event.id) filter (where event.status in ('acknowledged', 'completed'))::int as completed_count,
        latest_event.status as latest_status,
        latest_event.event_code as latest_event_code,
        latest_event.correlation_id as latest_correlation_id,
        latest_event.created_at::text as latest_created_at,
        coalesce(
          jsonb_agg(
            distinct jsonb_build_object(
              'route_key', route.route_key,
              'flow_name', route.flow_name,
              'event_code', route.event_code,
              'endpoint_path', route.endpoint_path,
              'priority', route.priority,
              'is_required', route.is_required
            )
          ) filter (where route.route_key is not null),
          '[]'::jsonb
        ) as routes
      from public.integration_departments source
      join public.integration_flow_routes route
        on route.source_department_key = source.department_key
       and route.target_department_key = 'registrar'
       and route.is_active = true
      left join public.integration_flow_events event
        on event.route_key = route.route_key
      left join lateral (
        select e.status, e.event_code, e.correlation_id, e.created_at
        from public.integration_flow_events e
        where e.source_department_key = source.department_key
          and e.target_department_key = 'registrar'
        order by e.created_at desc
        limit 1
      ) latest_event on true
      where source.is_active = true
      group by
        source.department_key,
        source.department_name,
        source.system_code,
        source.module_directory,
        source.purpose,
        source.default_action_label,
        latest_event.status,
        latest_event.event_code,
        latest_event.correlation_id,
        latest_event.created_at
      order by source.department_name`
  );

  return rows.map((row) =>
    asConnection({
      ...row,
      dispatch_rpc_name: "dispatch_department_flow",
      status_rpc_name: "get_department_flow_status",
      ack_rpc_name: "acknowledge_department_flow",
      dispatch_endpoint: "/rest/v1/rpc/dispatch_department_flow"
    })
  );
}

export async function listRegistrarDepartmentFlowEvents(limit = 20) {
  if (!(await hasDepartmentFlowIntegration())) {
    return [] as DepartmentFlowEvent[];
  }

  const rows = await query<{
    id: string;
    correlation_id: string;
    route_key: string;
    flow_name: string;
    source_department_key: string;
    source_department_name: string;
    target_department_key: string;
    target_department_name: string;
    event_code: string;
    status: string;
    dispatch_endpoint: string;
    source_record_id: string | null;
    request_payload: Record<string, unknown> | null;
    response_payload: Record<string, unknown> | null;
    initiated_by: string | null;
    dispatched_at: string | null;
    acknowledged_at: string | null;
    last_error: string | null;
    created_at: string | null;
    updated_at: string | null;
  }>(
    `select
        event.id::text as id,
        event.correlation_id,
        event.route_key,
        route.flow_name,
        event.source_department_key,
        source.department_name as source_department_name,
        event.target_department_key,
        target.department_name as target_department_name,
        event.event_code,
        event.status,
        event.dispatch_endpoint,
        event.source_record_id,
        event.request_payload,
        event.response_payload,
        event.initiated_by::text as initiated_by,
        event.dispatched_at::text as dispatched_at,
        event.acknowledged_at::text as acknowledged_at,
        event.last_error,
        event.created_at::text as created_at,
        event.updated_at::text as updated_at
      from public.integration_flow_events event
      join public.integration_flow_routes route
        on route.route_key = event.route_key
      join public.integration_departments source
        on source.department_key = event.source_department_key
      join public.integration_departments target
        on target.department_key = event.target_department_key
      where event.source_department_key = 'registrar'
         or event.target_department_key = 'registrar'
      order by coalesce(event.updated_at, event.created_at) desc
      limit $1`,
    [limit]
  );

  return rows.map((row) => ({
    id: asString(row.id),
    correlation_id: asString(row.correlation_id),
    route_key: asString(row.route_key),
    flow_name: asString(row.flow_name),
    source_department_key: asString(row.source_department_key),
    source_department_name: asString(row.source_department_name),
    target_department_key: asString(row.target_department_key),
    target_department_name: asString(row.target_department_name),
    event_code: asString(row.event_code),
    status: asString(row.status),
    dispatch_endpoint: asString(row.dispatch_endpoint),
    source_record_id: asNullableString(row.source_record_id),
    request_payload: row.request_payload ?? {},
    response_payload: row.response_payload ?? {},
    initiated_by: asNullableString(row.initiated_by),
    dispatched_at: asNullableString(row.dispatched_at),
    acknowledged_at: asNullableString(row.acknowledged_at),
    last_error: asNullableString(row.last_error),
    created_at: asNullableString(row.created_at),
    updated_at: asNullableString(row.updated_at)
  }));
}

export async function getRegistrarDepartmentFlowSummary() {
  if (!(await hasDepartmentFlowIntegration())) {
    return {
      enabled: false,
      outgoing_departments: 0,
      outgoing_routes: 0,
      incoming_departments: 0,
      incoming_routes: 0,
      queued_events: 0,
      completed_events: 0,
      failed_events: 0
    } satisfies RegistrarDepartmentFlowSummary;
  }

  const [outgoing, incoming, queuedEvents, completedEvents, failedEvents] = await Promise.all([
    listRegistrarOutgoingDepartments(),
    listRegistrarIncomingDepartments(),
    queryValue<number>(
      `select count(*)
       from public.integration_flow_events
       where (source_department_key = 'registrar' or target_department_key = 'registrar')
         and status in ('queued', 'pending', 'dispatched', 'in_progress', 'awaiting_acknowledgement')`
    ),
    queryValue<number>(
      `select count(*)
       from public.integration_flow_events
       where (source_department_key = 'registrar' or target_department_key = 'registrar')
         and status in ('acknowledged', 'completed')`
    ),
    queryValue<number>(
      `select count(*)
       from public.integration_flow_events
       where (source_department_key = 'registrar' or target_department_key = 'registrar')
         and status in ('failed', 'blocked')`
    )
  ]);

  return {
    enabled: true,
    outgoing_departments: outgoing.length,
    outgoing_routes: outgoing.reduce((total, connection) => total + connection.route_count, 0),
    incoming_departments: incoming.length,
    incoming_routes: incoming.reduce((total, connection) => total + connection.route_count, 0),
    queued_events: asNumber(queuedEvents),
    completed_events: asNumber(completedEvents),
    failed_events: asNumber(failedEvents)
  } satisfies RegistrarDepartmentFlowSummary;
}

export async function getRegistrarDepartmentFlowStatus({
  eventId,
  correlationId
}: {
  eventId?: string;
  correlationId?: string;
}) {
  if (!(await hasDepartmentFlowIntegration())) {
    return {
      ok: false,
      status: "not_configured",
      message: "Shared department integration tables are not available."
    } satisfies DepartmentFlowStatusResult;
  }

  const payload = await queryValue<unknown>(
    "select public.get_department_flow_status($1::uuid, $2) as payload",
    [eventId?.trim() || null, correlationId?.trim() || null]
  );

  return asStatusResult(payload);
}

async function getRegistrarStudentDirectoryRecord(options: {
  studentNo?: string;
  studentId?: number;
}) {
  const directoryTable = await resolveTableName(
    "registrar.student_directory",
    "public.registrar_student_directory",
    "registrar_student_directory"
  );

  if (!directoryTable) {
    throw new Error("The registrar student directory view is not available in this database yet.");
  }

  if (options.studentNo?.trim()) {
    return normalizeStudentDirectoryRecord(
      await queryOne<Record<string, unknown>>(
        `select
            student_id,
            student_no,
            first_name,
            middle_name,
            last_name,
            student_name,
            program,
            year_level,
            section_name,
            registrar_status,
            enrollment_status,
            course_year_section,
            email,
            phone,
            subject_count,
            subject_codes,
            subject_load
         from ${directoryTable}
         where student_no = $1
         limit 1`,
        [options.studentNo.trim()]
      )
    );
  }

  if (options.studentId && options.studentId > 0) {
    return normalizeStudentDirectoryRecord(
      await queryOne<Record<string, unknown>>(
        `select
            student_id,
            student_no,
            first_name,
            middle_name,
            last_name,
            student_name,
            program,
            year_level,
            section_name,
            registrar_status,
            enrollment_status,
            course_year_section,
            email,
            phone,
            subject_count,
            subject_codes,
            subject_load
         from ${directoryTable}
         where student_id = $1
         limit 1`,
        [options.studentId]
      )
    );
  }

  return null;
}

export async function getRegistrarDepartmentPreview(options: {
  targetDepartmentKey: string;
  eventCode?: string;
  studentNo?: string;
  studentId?: number;
}) {
  const connections = await listRegistrarOutgoingDepartments();
  const connection = connections.find(
    (item) => item.department_key === options.targetDepartmentKey.trim().toLowerCase()
  );

  if (!connection) {
    throw new Error(`No connected department route is configured for ${options.targetDepartmentKey}.`);
  }

  const route = selectRoute(connection, options.eventCode);
  const student = await getRegistrarStudentDirectoryRecord({
    studentNo: options.studentNo,
    studentId: options.studentId
  });

  if (!student) {
    throw new Error("Student not found in the registrar directory.");
  }

  return {
    source_department_key: "registrar",
    target_department_key: connection.department_key,
    target_department_name: connection.department_name,
    endpoint: connection.dispatch_endpoint,
    route,
    source_record_id: buildSourceRecordId(
      connection.department_key,
      route?.event_code ?? options.eventCode?.trim() ?? "department_flow",
      student.student_no
    ),
    student: {
      student_id: student.student_id,
      student_no: student.student_no,
      student_name: student.student_name
    },
    payload: buildPreviewPayload(student, connection, route)
  } satisfies RegistrarDepartmentPreview;
}

export async function dispatchRegistrarDepartmentFlow(options: {
  targetDepartmentKey: string;
  eventCode?: string;
  studentNo?: string;
  studentId?: number;
  sourceRecordId?: string;
}) {
  if (!(await hasDepartmentFlowIntegration())) {
    return {
      ok: false,
      status: "not_configured",
      message: "Shared department integration tables are not available."
    } satisfies DepartmentFlowDispatchResult;
  }

  const preview = await getRegistrarDepartmentPreview(options);
  const payload = await queryValue<unknown>(
    "select public.dispatch_department_flow($1, $2, $3, $4, $5::jsonb, $6::uuid) as payload",
    [
      "registrar",
      preview.target_department_key,
      preview.route?.event_code ?? options.eventCode?.trim() ?? null,
      options.sourceRecordId?.trim() || preview.source_record_id,
      JSON.stringify(preview.payload),
      null
    ]
  );

  return asDispatchResult(payload);
}
