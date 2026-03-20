import { env } from "@/lib/env";
import { pool } from "@/lib/db";
import { getIntegrationPayload } from "@/lib/integration-payload";

type DeliveryTarget = {
  consumer: string;
  url: string;
};

function readTargets(resource: string): DeliveryTarget[] {
  const targetMap: Record<string, DeliveryTarget[]> = {
    "student-list": [
      env.CRAD_STUDENT_LIST_ENDPOINT ? { consumer: "CRADManagement", url: env.CRAD_STUDENT_LIST_ENDPOINT } : null,
      env.COMLAB_STUDENT_LIST_ENDPOINT ? { consumer: "Computer Laboratory", url: env.COMLAB_STUDENT_LIST_ENDPOINT } : null
    ].filter(Boolean) as DeliveryTarget[],
    "student-personal-info": [
      env.PREFECT_STUDENT_PERSONAL_INFO_ENDPOINT ? { consumer: "PrefectManagementsSystem", url: env.PREFECT_STUDENT_PERSONAL_INFO_ENDPOINT } : null,
      env.CLINIC_STUDENT_PERSONAL_INFO_ENDPOINT ? { consumer: "Clinic", url: env.CLINIC_STUDENT_PERSONAL_INFO_ENDPOINT } : null,
      env.GUIDANCE_STUDENT_PERSONAL_INFO_ENDPOINT ? { consumer: "Guidance", url: env.GUIDANCE_STUDENT_PERSONAL_INFO_ENDPOINT } : null
    ].filter(Boolean) as DeliveryTarget[],
    "enrollment-data": [
      env.CASHIER_ENROLLMENT_DATA_ENDPOINT ? { consumer: "Cashier", url: env.CASHIER_ENROLLMENT_DATA_ENDPOINT } : null
    ].filter(Boolean) as DeliveryTarget[],
    "student-academic-records": [
      env.GUIDANCE_STUDENT_ACADEMIC_RECORDS_ENDPOINT ? { consumer: "Guidance", url: env.GUIDANCE_STUDENT_ACADEMIC_RECORDS_ENDPOINT } : null
    ].filter(Boolean) as DeliveryTarget[],
    "enrollment-statistics": [
      env.PMED_ENROLLMENT_STATISTICS_ENDPOINT ? { consumer: "PMED", url: env.PMED_ENROLLMENT_STATISTICS_ENDPOINT } : null
    ].filter(Boolean) as DeliveryTarget[]
  };

  return targetMap[resource] ?? [];
}

async function parseResponse(response: Response) {
  const text = await response.text();
  try {
    return text ? JSON.parse(text) : null;
  } catch {
    return text;
  }
}

async function persistPmedEnrollmentStatistics(payload: any) {
  const metrics = [
    { metric: "Students", current_value: Number(payload?.students ?? 0) },
    { metric: "Enrollments", current_value: Number(payload?.enrollments ?? 0) },
    { metric: "Classes", current_value: Number(payload?.classes ?? 0) }
  ];
  const batchId = crypto.randomUUID();
  const sentAt = new Date().toISOString();
  const client = await pool.connect();

  try {
    await client.query("begin");
    await client.query(`
      create table if not exists public.pmed_enrollment_statistics_feed (
        id bigserial primary key,
        batch_id text not null,
        source text not null default 'Registrar',
        office text not null default 'PMED',
        metric text not null,
        current_value integer not null default 0,
        report_type text not null default 'Enrollment Statistics',
        payload jsonb not null default '{}'::jsonb,
        sent_at timestamptz not null default current_timestamp,
        created_at timestamptz not null default current_timestamp
      )
    `);
    await client.query(`
      create index if not exists pmed_enrollment_statistics_feed_batch_idx
      on public.pmed_enrollment_statistics_feed (batch_id, sent_at desc, metric asc)
    `);

    for (const item of metrics) {
      await client.query(
        `insert into public.pmed_enrollment_statistics_feed
          (batch_id, source, office, metric, current_value, report_type, payload, sent_at, created_at)
         values ($1, $2, $3, $4, $5, $6, $7::jsonb, $8::timestamptz, current_timestamp)`,
        [
          batchId,
          "Registrar",
          "PMED",
          item.metric,
          item.current_value,
          "Enrollment Statistics",
          JSON.stringify(payload ?? {}),
          sentAt
        ]
      );
    }

    await client.query("commit");
  } catch (error) {
    await client.query("rollback");
    throw error;
  } finally {
    client.release();
  }

  return {
    batch_id: batchId,
    sent_at: sentAt,
    row_count: metrics.length,
    table: "public.pmed_enrollment_statistics_feed"
  };
}

export async function deliverIntegrationResource(resource: string, options: { studentNo?: string; studentId?: number }) {
  const payload = await getIntegrationPayload(resource, options);
  const persisted =
    resource === "enrollment-statistics"
      ? await persistPmedEnrollmentStatistics(payload)
      : null;
  const targets = readTargets(resource);

  if (targets.length === 0) {
    return {
      ok: Boolean(persisted),
      message: persisted
        ? "Integration data stored successfully."
        : "No delivery endpoint is configured for this integration resource yet.",
      payload,
      storage: persisted,
      deliveries: []
    };
  }

  const deliveries = await Promise.all(
    targets.map(async (target) => {
      try {
        const response = await fetch(target.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(env.INTEGRATION_API_KEY ? { "x-integration-key": env.INTEGRATION_API_KEY } : {})
          },
          body: JSON.stringify({
            resource,
            source: "Registrar",
            sent_at: new Date().toISOString(),
            data: payload
          }),
          cache: "no-store"
        });

        return {
          consumer: target.consumer,
          url: target.url,
          ok: response.ok,
          status: response.status,
          response: await parseResponse(response)
        };
      } catch (error) {
        return {
          consumer: target.consumer,
          url: target.url,
          ok: false,
          status: 0,
          response: {
            error: error instanceof Error ? error.message : "Request failed."
          }
        };
      }
    })
  );

  return {
    ok: Boolean(persisted) || deliveries.every((delivery) => delivery.ok),
    message: deliveries.every((delivery) => delivery.ok)
      ? persisted
        ? "Integration delivery completed and stored."
        : "Integration delivery completed."
      : persisted
        ? "Integration data stored, but one or more endpoint deliveries failed."
        : "One or more integration deliveries failed.",
    payload,
    storage: persisted,
    deliveries
  };
}
