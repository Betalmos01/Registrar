-- Department integration merge script.
-- Run clinic first, then any department scripts you need.
-- Department: Registrar

CREATE SCHEMA IF NOT EXISTS registrar;
CREATE SCHEMA IF NOT EXISTS clinic;
SET search_path TO registrar, clinic, public;
DO $$
DECLARE
  rel record;
BEGIN
  FOR rel IN
    SELECT c.relname, c.relkind
    FROM pg_class c
    JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE n.nspname = 'registrar'
      AND c.relname = ANY (ARRAY[
        'department_flow_profiles',
        'department_clearance_records',
        'cashier_integration_events',
        'cashier_payment_links',
        'clinic_cashier_sync_logs',
        'clinic_cashier_audit_logs'
      ])
  LOOP
    IF rel.relkind = 'v' THEN
      EXECUTE format('DROP VIEW IF EXISTS registrar.%I CASCADE', rel.relname);
    ELSIF rel.relkind = 'm' THEN
      EXECUTE format('DROP MATERIALIZED VIEW IF EXISTS registrar.%I CASCADE', rel.relname);
    ELSE
      EXECUTE format('DROP TABLE IF EXISTS registrar.%I CASCADE', rel.relname);
    END IF;
  END LOOP;
END
$$;

CREATE OR REPLACE VIEW registrar.department_flow_profiles AS SELECT * FROM clinic.department_flow_profiles;
CREATE OR REPLACE VIEW registrar.department_clearance_records AS SELECT * FROM clinic.department_clearance_records;
CREATE OR REPLACE VIEW registrar.cashier_integration_events AS SELECT * FROM clinic.cashier_integration_events;
CREATE OR REPLACE VIEW registrar.cashier_payment_links AS SELECT * FROM clinic.cashier_payment_links;
CREATE OR REPLACE VIEW registrar.clinic_cashier_sync_logs AS SELECT * FROM clinic.clinic_cashier_sync_logs;
CREATE OR REPLACE VIEW registrar.clinic_cashier_audit_logs AS SELECT * FROM clinic.clinic_cashier_audit_logs;
INSERT INTO clinic.department_flow_profiles (
  department_key,
  department_name,
  flow_order,
  clearance_stage_order,
  receives,
  sends,
  notes
)
VALUES (
  'registrar',
  'Registrar',
  9,
  9,
  '["cashier"]'::jsonb,
  '[]'::jsonb,
  'Final approval and document release.'
)
ON CONFLICT (department_key) DO UPDATE
SET
  department_name = EXCLUDED.department_name,
  flow_order = EXCLUDED.flow_order,
  clearance_stage_order = EXCLUDED.clearance_stage_order,
  receives = EXCLUDED.receives,
  sends = EXCLUDED.sends,
  notes = EXCLUDED.notes,
  updated_at = NOW();
SET search_path TO public;

ALTER TABLE IF EXISTS registrar.students
  ADD COLUMN IF NOT EXISTS middle_name text,
  ADD COLUMN IF NOT EXISTS birth_date date,
  ADD COLUMN IF NOT EXISTS mother_name text,
  ADD COLUMN IF NOT EXISTS father_name text,
  ADD COLUMN IF NOT EXISTS guardian_name text,
  ADD COLUMN IF NOT EXISTS address text,
  ADD COLUMN IF NOT EXISTS email text,
  ADD COLUMN IF NOT EXISTS phone text;

ALTER TABLE IF EXISTS public.students
  ADD COLUMN IF NOT EXISTS middle_name text,
  ADD COLUMN IF NOT EXISTS birth_date date,
  ADD COLUMN IF NOT EXISTS mother_name text,
  ADD COLUMN IF NOT EXISTS father_name text,
  ADD COLUMN IF NOT EXISTS guardian_name text,
  ADD COLUMN IF NOT EXISTS address text,
  ADD COLUMN IF NOT EXISTS email text,
  ADD COLUMN IF NOT EXISTS phone text;

DROP VIEW IF EXISTS public.registrar_students;

CREATE VIEW public.registrar_students AS
SELECT
  id,
  student_no,
  first_name,
  last_name,
  middle_name,
  program,
  year_level,
  status,
  birth_date,
  mother_name,
  father_name,
  guardian_name,
  address,
  email,
  phone,
  created_at
FROM registrar.students;

ALTER TABLE IF EXISTS registrar.enrollments
  ADD COLUMN IF NOT EXISTS academic_year text,
  ADD COLUMN IF NOT EXISTS semester text,
  ADD COLUMN IF NOT EXISTS tuition_fee numeric(12,2) DEFAULT 5000,
  ADD COLUMN IF NOT EXISTS downpayment_amount numeric(12,2) DEFAULT 0,
  ADD COLUMN IF NOT EXISTS medical_fee numeric(12,2) DEFAULT 0,
  ADD COLUMN IF NOT EXISTS id_fee numeric(12,2) DEFAULT 0,
  ADD COLUMN IF NOT EXISTS deleted_at timestamptz,
  ADD COLUMN IF NOT EXISTS deleted_by bigint;

DROP VIEW IF EXISTS public.registrar_enrollments;

CREATE VIEW public.registrar_enrollments AS
SELECT
  id,
  student_id,
  class_id,
  status,
  academic_year,
  semester,
  tuition_fee,
  downpayment_amount,
  medical_fee,
  id_fee,
  deleted_at,
  deleted_by,
  created_at
FROM registrar.enrollments;

CREATE TABLE IF NOT EXISTS registrar.instructor_class_assignments (
  id bigserial PRIMARY KEY,
  instructor_employee_no text NOT NULL,
  class_id bigint NOT NULL,
  assigned_at timestamptz NOT NULL DEFAULT NOW(),
  assigned_by bigint,
  CONSTRAINT instructor_class_assignments_unique UNIQUE (instructor_employee_no, class_id)
);

CREATE INDEX IF NOT EXISTS instructor_class_assignments_employee_no_idx
  ON registrar.instructor_class_assignments (instructor_employee_no);

CREATE INDEX IF NOT EXISTS instructor_class_assignments_class_id_idx
  ON registrar.instructor_class_assignments (class_id);

DROP VIEW IF EXISTS public.registrar_instructor_class_assignments;

CREATE VIEW public.registrar_instructor_class_assignments AS
SELECT
  id,
  instructor_employee_no,
  class_id,
  assigned_at,
  assigned_by
FROM registrar.instructor_class_assignments;

CREATE TABLE IF NOT EXISTS registrar.class_lists (
  id bigserial PRIMARY KEY,
  class_id bigint NOT NULL UNIQUE,
  published_at timestamptz NOT NULL DEFAULT NOW(),
  published_by bigint
);

CREATE INDEX IF NOT EXISTS class_lists_class_id_idx
  ON registrar.class_lists (class_id);

DROP VIEW IF EXISTS public.registrar_class_lists;

CREATE VIEW public.registrar_class_lists AS
SELECT
  id,
  class_id,
  published_at,
  published_by
FROM registrar.class_lists;

DO $$
BEGIN
  IF to_regclass('public.hr_instructors') IS NOT NULL
     AND to_regclass('registrar.classes') IS NOT NULL THEN
    INSERT INTO registrar.instructor_class_assignments (
      instructor_employee_no,
      class_id,
      assigned_at
    )
    SELECT seeded.employee_no, seeded.class_id, NOW()
    FROM (
      SELECT instructors.employee_no, classes.id AS class_id
      FROM (
        SELECT employee_no, row_number() OVER (ORDER BY employee_no) AS row_no
        FROM public.hr_instructors
        WHERE coalesce(employee_no, '') <> ''
      ) AS instructors
      JOIN (
        SELECT id, row_number() OVER (ORDER BY class_code) AS row_no
        FROM registrar.classes
      ) AS classes
        ON classes.row_no = instructors.row_no
      LIMIT 5
    ) AS seeded
    ON CONFLICT (instructor_employee_no, class_id) DO NOTHING;
  END IF;
END
$$;

DO $$
BEGIN
  IF to_regclass('registrar.classes') IS NOT NULL THEN
    INSERT INTO registrar.class_lists (class_id, published_at)
    SELECT id, NOW()
    FROM registrar.classes
    ON CONFLICT (class_id) DO NOTHING;
  END IF;
END
$$;

DO $$
DECLARE
  intro_it_id bigint;
  data_structures_id bigint;
  accounting_id bigint;
  crim_procedure_id bigint;
  tourism_ops_id bigint;
BEGIN
  IF to_regclass('registrar.classes') IS NOT NULL
     AND to_regclass('registrar.schedules') IS NOT NULL
     AND (SELECT count(*) FROM registrar.classes) = 0 THEN

    INSERT INTO registrar.classes (class_code, title, course, units, created_at)
    VALUES ('BSIT-101', 'Introduction to Computing', 'BSIT - Information Management', 3, NOW())
    RETURNING id INTO intro_it_id;

    INSERT INTO registrar.classes (class_code, title, course, units, created_at)
    VALUES ('BSIT-202', 'Data Structures', 'BSIT - Information Security', 3, NOW())
    RETURNING id INTO data_structures_id;

    INSERT INTO registrar.classes (class_code, title, course, units, created_at)
    VALUES ('BSBA-110', 'Fundamentals of Accounting', 'BSBA - Financial Management', 3, NOW())
    RETURNING id INTO accounting_id;

    INSERT INTO registrar.classes (class_code, title, course, units, created_at)
    VALUES ('BSCrim-120', 'Criminal Procedure', 'BSCrim', 3, NOW())
    RETURNING id INTO crim_procedure_id;

    INSERT INTO registrar.classes (class_code, title, course, units, created_at)
    VALUES ('BSTM-105', 'Tour Operations Management', 'BSTM', 3, NOW())
    RETURNING id INTO tourism_ops_id;

    INSERT INTO registrar.schedules (class_id, day, time, room, created_at)
    VALUES
      (intro_it_id, 'Monday', '08:00 AM - 10:00 AM', 'Lab 1', NOW()),
      (data_structures_id, 'Tuesday', '01:00 PM - 03:00 PM', 'Lab 2', NOW()),
      (accounting_id, 'Wednesday', '09:00 AM - 11:00 AM', 'Room 204', NOW()),
      (crim_procedure_id, 'Thursday', '10:00 AM - 12:00 PM', 'Room 301', NOW()),
      (tourism_ops_id, 'Friday', '02:00 PM - 04:00 PM', 'Room 105', NOW());
  END IF;
END
$$;
