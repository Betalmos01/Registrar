"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ActionIconButton } from "@/components/action-icon-button";
import { DataTable } from "@/components/data-table";
import { createClassAction, deleteClassAction, updateClassAction } from "@/lib/actions";

type ClassRecord = {
  id: number;
  class_code: string;
  title: string;
  course: string | null;
  units: number | null;
  day: string | null;
  time: string | null;
  room: string | null;
};

type ClassFilters = {
  courses: string[];
  days: string[];
  times: string[];
  rooms: string[];
};

const CLASS_TEMPLATES = [
  { code: "BSIT-101", title: "Introduction to Computing", course: "BSIT - Information Management", units: 3 },
  { code: "BSIT-202", title: "Data Structures", course: "BSIT - Information Security", units: 3 },
  { code: "BSBA-110", title: "Fundamentals of Accounting", course: "BSBA - Financial Management", units: 3 },
  { code: "BSCrim-120", title: "Criminal Procedure", course: "BSCrim", units: 3 },
  { code: "BSTM-105", title: "Tour Operations Management", course: "BSTM", units: 3 }
] as const;

export function ClassesTablePanel({
  classes,
  filters
}: {
  classes: ClassRecord[];
  filters: ClassFilters;
}) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedClassId, setSelectedClassId] = useState("");
  const [selectedAddCode, setSelectedAddCode] = useState("");
  const [selectedEditCode, setSelectedEditCode] = useState("");

  const selectedClass = classes.find((item) => String(item.id) === selectedClassId) ?? null;
  const classTemplates = useMemo(() => {
    const map = new Map<string, { code: string; title: string; course: string; units: number }>();
    CLASS_TEMPLATES.forEach((template) => map.set(template.code, { ...template }));
    classes.forEach((item) => {
      if (!map.has(item.class_code)) {
        map.set(item.class_code, {
          code: item.class_code,
          title: item.title,
          course: item.course ?? "",
          units: item.units ?? 3
        });
      }
    });
    return Array.from(map.values()).sort((left, right) => left.code.localeCompare(right.code));
  }, [classes]);
  const addTemplate = classTemplates.find((item) => item.code === selectedAddCode) ?? null;
  const editTemplate = classTemplates.find((item) => item.code === selectedEditCode) ?? null;

  useEffect(() => {
    if (showAddModal) {
      setSelectedAddCode("");
    }
  }, [showAddModal]);

  useEffect(() => {
    if (selectedClass) {
      setSelectedEditCode(selectedClass.class_code);
    } else if (!showEditModal) {
      setSelectedEditCode("");
    }
  }, [selectedClass, showEditModal]);

  return (
    <>
      <div className="actions-row table-top-actions">
        <button className="primary" type="button" onClick={() => setShowAddModal(true)}>
          Add Class
        </button>
        <button className="secondary" type="button" onClick={() => setShowEditModal(true)}>
          Update Class
        </button>
        <Link href="/staff/schedules" className="secondary inline-button">
          View Schedules
        </Link>
      </div>

      <DataTable headers={["Code", "Title", "Course", "Units", "Day", "Time", "Room", "Actions"]}>
        {classes.map((item) => (
          <tr key={`${item.id}-${String(item.day)}`}>
            <td>{String(item.class_code)}</td>
            <td>{String(item.title)}</td>
            <td>{String(item.course ?? "-")}</td>
            <td>{String(item.units ?? "-")}</td>
            <td>{String(item.day ?? "-")}</td>
            <td>{String(item.time ?? "-")}</td>
            <td>{String(item.room ?? "-")}</td>
            <td>
              <form action={deleteClassAction}>
                <input type="hidden" name="class_id" value={String(item.id)} />
                <ActionIconButton kind="delete" label="Delete class" type="submit" />
              </form>
            </td>
          </tr>
        ))}
      </DataTable>

      {showAddModal ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setShowAddModal(false)}>
          <div className="modal-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="eyebrow">Class Offerings</div>
                <h3>Add Class</h3>
                <p>Create a class and its schedule in one step without leaving the table view.</p>
              </div>
              <button className="secondary compact-button" type="button" onClick={() => setShowAddModal(false)}>
                Close
              </button>
            </div>

            <form className="form-grid top-gap" action={createClassAction}>
              <div className="form-cluster span-2">
                <div className="cluster-title">Class & Schedule Setup</div>
                <label>
                  Class Code
                  <select
                    name="class_code"
                    required
                    value={selectedAddCode}
                    onChange={(event) => setSelectedAddCode(event.target.value)}
                  >
                    <option value="" disabled>Select class code</option>
                    {classTemplates.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.code}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Class Title
                  <input name="class_title" required readOnly value={addTemplate?.title ?? ""} />
                </label>
                <label>
                  Subject / Course
                  <select name="course" value={addTemplate?.course ?? ""} onChange={() => undefined}>
                    <option value="">Select course</option>
                    {filters.courses.map((course) => (
                      <option key={course}>{course}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Units
                  <input name="units" type="number" min="1" max="6" readOnly value={String(addTemplate?.units ?? 3)} />
                </label>
                <label>
                  Day
                  <select name="day" defaultValue="">
                    <option value="">Select day</option>
                    {filters.days.map((day) => (
                      <option key={day}>{day}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Time
                  <select name="time" defaultValue="">
                    <option value="">Select time</option>
                    {filters.times.map((time) => (
                      <option key={time}>{time}</option>
                    ))}
                  </select>
                </label>
                <label className="span-2">
                  Room
                  <select name="room" defaultValue="">
                    <option value="">Select room</option>
                    {filters.rooms.map((room) => (
                      <option key={room}>{room}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="span-2 modal-actions">
                <button className="secondary inline-button" type="button" onClick={() => setShowAddModal(false)}>
                  Cancel
                </button>
                <button className="primary inline-button" type="submit">
                  Save Class
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {showEditModal ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setShowEditModal(false)}>
          <div className="modal-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="eyebrow">Class Offerings</div>
                <h3>Update Class</h3>
                <p>Edit an existing class schedule from the table workflow.</p>
              </div>
              <button className="secondary compact-button" type="button" onClick={() => setShowEditModal(false)}>
                Close
              </button>
            </div>

            <form className="form-grid top-gap" action={updateClassAction}>
              <div className="form-cluster span-2">
                <div className="cluster-title">Edit Schedule</div>
                <label className="span-2">
                  Class
                  <select
                    name="class_id"
                    required
                    value={selectedClassId}
                    onChange={(event) => setSelectedClassId(event.target.value)}
                  >
                    <option value="" disabled>Select class</option>
                    {classes.map((item) => (
                      <option key={item.id} value={String(item.id)}>
                        {String(item.class_code)} - {String(item.title)}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Class Code
                  <select
                    name="class_code"
                    required
                    value={selectedEditCode}
                    onChange={(event) => setSelectedEditCode(event.target.value)}
                    key={`code-${selectedClassId || "empty"}`}
                  >
                    <option value="" disabled>Select class code</option>
                    {classTemplates.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.code}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Class Title
                  <input
                    name="class_title"
                    required
                    readOnly
                    value={editTemplate?.title ?? selectedClass?.title ?? ""}
                    key={`title-${selectedClassId || "empty"}`}
                  />
                </label>
                <label>
                  Subject / Course
                  <select
                    name="course"
                    value={editTemplate?.course ?? selectedClass?.course ?? ""}
                    onChange={() => undefined}
                    key={`course-${selectedClassId || "empty"}`}
                  >
                    <option value="">Select course</option>
                    {filters.courses.map((course) => (
                      <option key={course}>{course}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Units
                  <input
                    name="units"
                    type="number"
                    min="1"
                    max="6"
                    readOnly
                    value={String(editTemplate?.units ?? selectedClass?.units ?? 3)}
                    key={`units-${selectedClassId || "empty"}`}
                  />
                </label>
                <label>
                  Day
                  <select name="day" defaultValue={selectedClass?.day ?? ""} key={`day-${selectedClassId || "empty"}`}>
                    <option value="">Select day</option>
                    {filters.days.map((day) => (
                      <option key={day}>{day}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Time
                  <select name="time" defaultValue={selectedClass?.time ?? ""} key={`time-${selectedClassId || "empty"}`}>
                    <option value="">Select time</option>
                    {filters.times.map((time) => (
                      <option key={time}>{time}</option>
                    ))}
                  </select>
                </label>
                <label className="span-2">
                  Room
                  <select name="room" defaultValue={selectedClass?.room ?? ""} key={`room-${selectedClassId || "empty"}`}>
                    <option value="">Select room</option>
                    {filters.rooms.map((room) => (
                      <option key={room}>{room}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="span-2 modal-actions">
                <button className="secondary inline-button" type="button" onClick={() => setShowEditModal(false)}>
                  Cancel
                </button>
                <button className="primary inline-button" type="submit">
                  Update Class
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
