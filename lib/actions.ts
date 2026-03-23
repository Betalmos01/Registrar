"use server";

import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getAuthUserByLogin } from "./data";
import { getSessionUser, clearSession, setSession, setSuccessFlash } from "./session";
import {
  createAcademicReport,
  createClassSchedule,
  createClassList,
  createDocumentRequest,
  createEnrollment,
  createGrade,
  createIntegrationRecord,
  createInstructor,
  assignInstructorClass,
  createReport,
  createStudent,
  createUserAccount,
  createWorkflowReport,
  deleteAcademicReport,
  deleteClassSchedule,
  deleteDocumentRequest,
  deleteEnrollment,
  deleteGrade,
  deleteInstructor,
  deleteReport,
  deleteStudent,
  deleteUserAccount,
  markAllNotificationsRead,
  markNotificationRead,
  resetUserPassword,
  toggleUserAccount,
  unassignInstructorClass,
  updateAcademicReport,
  updateClassSchedule,
  updateDocumentRequest,
  updateEnrollment,
  restoreEnrollment,
  purgeEnrollment,
  updateGrade,
  updateInstructor,
  updateReport,
  updateStudent,
  updateUserAccount
} from "./mutations";

function requireSessionUser() {
  return getSessionUser().then((user) => {
    if (!user) {
      redirect("/");
    }
    return user;
  });
}

function revalidateCorePaths() {
  [
    "/admin/dashboard",
    "/staff/dashboard",
    "/admin/activity",
    "/profile"
  ].forEach((path) => revalidatePath(path));
}

const TEMP_BYPASS_USERS = [
  {
    id: -1,
    username: "admin@gmail.com",
    password: "admin123",
    first_name: "Admin",
    last_name: "User",
    display_name: "Admin User",
    profile_photo: "",
    profile_title: "Admin",
    profile_bio: "Temporary registrar bypass account",
    profile_accent: "#8B1E3F",
    role: "admin" as const
  },
  {
    id: -2,
    username: "staff@gmail.com",
    aliases: ["staf@gmail.com"],
    password: "admin123",
    first_name: "Staff",
    last_name: "User",
    display_name: "Staff User",
    profile_photo: "",
    profile_title: "Staff",
    profile_bio: "Temporary registrar bypass account",
    profile_accent: "#2F6BD9",
    role: "staff" as const
  }
] as const;
const FIXED_TUITION_FEE = 6000;
const FIXED_DOWNPAYMENT_AMOUNT = 500;
const FIXED_MEDICAL_FEE = 250;
const FIXED_ID_FEE = 250;

function parseCurrencyInput(value: FormDataEntryValue | null, fallback: number) {
  const parsed = Number(value ?? fallback);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export async function loginAction(formData: FormData) {
  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!username) {
    redirect("/?error=username_required");
  }

  if (username.length < 3) {
    redirect("/?error=username_short");
  }

  if (!password) {
    redirect("/?error=password_required");
  }

  if (password.length < 6) {
    redirect("/?error=password_short");
  }

  const bypassUser = TEMP_BYPASS_USERS.find(
    (item) =>
      ([item.username, ...("aliases" in item ? (item.aliases ?? []) : [])] as string[]).some(
        (login) => login.toLowerCase() === username.toLowerCase()
      ) && item.password === password
  );

  if (bypassUser) {
    await setSession({
      id: bypassUser.id,
      username: bypassUser.username,
      first_name: bypassUser.first_name,
      last_name: bypassUser.last_name,
      display_name: bypassUser.display_name,
      profile_photo: bypassUser.profile_photo,
      profile_title: bypassUser.profile_title,
      profile_bio: bypassUser.profile_bio,
      profile_accent: bypassUser.profile_accent,
      role: bypassUser.role
    });

    redirect(bypassUser.role === "admin" ? "/admin/dashboard" : "/staff/dashboard");
  }

  const user = await getAuthUserByLogin(username);
  if (!user || !(await bcrypt.compare(password, user.password_hash))) {
    redirect("/?error=invalid_credentials");
  }

  await import("./db").then(({ pool }) =>
    pool.query("update admin_users set last_login_at = current_timestamp where id = $1", [user.id])
  );

  await setSession({
    id: user.id,
    username: user.username,
    first_name: user.first_name,
    last_name: user.last_name,
    display_name: user.display_name,
    profile_photo: user.profile_photo,
    profile_title: user.profile_title,
    profile_bio: user.profile_bio,
    profile_accent: user.profile_accent,
    role: user.role
  });

  redirect(user.role === "admin" ? "/admin/dashboard" : "/staff/dashboard");
}

export async function logoutAction() {
  await clearSession();
  redirect("/");
}

export async function createStudentAction(formData: FormData) {
  const user = await requireSessionUser();
  const { getNextStudentNumber } = await import("./data");
  await createStudent({
    studentNo: String(formData.get("student_no") ?? "").trim() || (await getNextStudentNumber()),
    firstName: String(formData.get("first_name") ?? "").trim(),
    lastName: String(formData.get("last_name") ?? "").trim(),
    middleName: String(formData.get("middle_name") ?? "").trim(),
    program: String(formData.get("program") ?? "").trim(),
    yearLevel: String(formData.get("year_level") ?? "").trim(),
    status: String(formData.get("status") ?? "Active").trim() || "Active",
    birthDate: String(formData.get("birth_date") ?? "").trim(),
    motherName: String(formData.get("mother_name") ?? "").trim(),
    fatherName: String(formData.get("father_name") ?? "").trim(),
    guardianName: String(formData.get("guardian_name") ?? "").trim(),
    address: String(formData.get("address") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    actorId: user.id
  });
  await setSuccessFlash("Student saved successfully.");
  revalidatePath("/staff/students");
  revalidateCorePaths();
}

export async function updateStudentAction(formData: FormData) {
  const user = await requireSessionUser();
  await updateStudent({
    id: Number(formData.get("id") ?? 0),
    studentNo: String(formData.get("student_no") ?? "").trim(),
    firstName: String(formData.get("first_name") ?? "").trim(),
    lastName: String(formData.get("last_name") ?? "").trim(),
    middleName: String(formData.get("middle_name") ?? "").trim(),
    program: String(formData.get("program") ?? "").trim(),
    yearLevel: String(formData.get("year_level") ?? "").trim(),
    status: String(formData.get("status") ?? "Active").trim() || "Active",
    birthDate: String(formData.get("birth_date") ?? "").trim(),
    motherName: String(formData.get("mother_name") ?? "").trim(),
    fatherName: String(formData.get("father_name") ?? "").trim(),
    guardianName: String(formData.get("guardian_name") ?? "").trim(),
    address: String(formData.get("address") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    actorId: user.id
  });
  await setSuccessFlash("Student updated successfully.");
  revalidatePath("/staff/students");
  revalidateCorePaths();
}

export async function deleteStudentAction(formData: FormData) {
  const user = await requireSessionUser();
  await deleteStudent({ id: Number(formData.get("id") ?? 0), actorId: user.id });
  await setSuccessFlash("Student deleted successfully.");
  revalidatePath("/staff/students");
  revalidateCorePaths();
}

export async function createInstructorAction(formData: FormData) {
  const user = await requireSessionUser();
  await createInstructor({
    employeeNo: String(formData.get("employee_no") ?? "").trim(),
    firstName: String(formData.get("first_name") ?? "").trim(),
    lastName: String(formData.get("last_name") ?? "").trim(),
    department: String(formData.get("department") ?? "").trim(),
    actorId: user.id
  });
  await setSuccessFlash("Instructor saved successfully.");
  revalidatePath("/staff/instructors");
  revalidateCorePaths();
}

export async function updateInstructorAction(formData: FormData) {
  const user = await requireSessionUser();
  await updateInstructor({
    id: String(formData.get("id") ?? "").trim(),
    employeeNo: String(formData.get("employee_no") ?? "").trim(),
    firstName: String(formData.get("first_name") ?? "").trim(),
    lastName: String(formData.get("last_name") ?? "").trim(),
    department: String(formData.get("department") ?? "").trim(),
    actorId: user.id
  });
  await setSuccessFlash("Instructor updated successfully.");
  revalidatePath("/staff/instructors");
  revalidateCorePaths();
}

export async function deleteInstructorAction(formData: FormData) {
  const user = await requireSessionUser();
  await deleteInstructor({ id: String(formData.get("id") ?? "").trim(), actorId: user.id });
  await setSuccessFlash("Instructor deleted successfully.");
  revalidatePath("/staff/instructors");
  revalidateCorePaths();
}

export async function assignInstructorClassAction(formData: FormData) {
  const user = await requireSessionUser();
  await assignInstructorClass({
    employeeNo: String(formData.get("employee_no") ?? "").trim(),
    classId: Number(formData.get("class_id") ?? 0),
    actorId: user.id
  });
  await setSuccessFlash("Instructor class assignment saved successfully.");
  revalidatePath("/staff/instructors");
  revalidatePath("/staff/classes");
  revalidatePath("/staff/schedules");
  revalidateCorePaths();
}

export async function unassignInstructorClassAction(formData: FormData) {
  const user = await requireSessionUser();
  await unassignInstructorClass({
    employeeNo: String(formData.get("employee_no") ?? "").trim(),
    classId: Number(formData.get("class_id") ?? 0),
    actorId: user.id
  });
  await setSuccessFlash("Assigned class removed successfully.");
  revalidatePath("/staff/instructors");
  revalidatePath("/staff/classes");
  revalidatePath("/staff/schedules");
  revalidateCorePaths();
}

export async function createClassAction(formData: FormData) {
  const user = await requireSessionUser();
  await createClassSchedule({
    classCode: String(formData.get("class_code") ?? "").trim(),
    title: String(formData.get("class_title") ?? "").trim(),
    course: String(formData.get("course") ?? "").trim(),
    units: Number(formData.get("units") ?? 0),
    day: String(formData.get("day") ?? "").trim(),
    time: String(formData.get("time") ?? "").trim(),
    room: String(formData.get("room") ?? "").trim(),
    actorId: user.id
  });
  await setSuccessFlash("Class saved successfully.");
  revalidatePath("/staff/classes");
  revalidatePath("/staff/class-lists");
  revalidatePath("/staff/schedules");
  revalidateCorePaths();
}

export async function updateClassAction(formData: FormData) {
  const user = await requireSessionUser();
  await updateClassSchedule({
    classId: Number(formData.get("class_id") ?? 0),
    classCode: String(formData.get("class_code") ?? "").trim(),
    title: String(formData.get("class_title") ?? "").trim(),
    course: String(formData.get("course") ?? "").trim(),
    units: Number(formData.get("units") ?? 0),
    day: String(formData.get("day") ?? "").trim(),
    time: String(formData.get("time") ?? "").trim(),
    room: String(formData.get("room") ?? "").trim(),
    actorId: user.id
  });
  await setSuccessFlash("Class updated successfully.");
  revalidatePath("/staff/classes");
  revalidatePath("/staff/class-lists");
  revalidatePath("/staff/schedules");
  revalidateCorePaths();
}

export async function deleteClassAction(formData: FormData) {
  const user = await requireSessionUser();
  await deleteClassSchedule({ classId: Number(formData.get("class_id") ?? 0), actorId: user.id });
  await setSuccessFlash("Class deleted successfully.");
  revalidatePath("/staff/classes");
  revalidatePath("/staff/class-lists");
  revalidatePath("/staff/schedules");
  revalidateCorePaths();
}

export async function createClassListAction(formData: FormData) {
  const user = await requireSessionUser();
  await createClassList({
    classId: Number(formData.get("class_id") ?? 0),
    actorId: user.id
  });
  await setSuccessFlash("Class list saved successfully.");
  revalidatePath("/staff/class-lists");
  revalidatePath("/staff/classes");
  revalidateCorePaths();
}

export async function createEnrollmentAction(formData: FormData) {
  const user = await requireSessionUser();
  let studentId = Number(formData.get("student_id") ?? 0);
  const tuitionFee = parseCurrencyInput(formData.get("tuition_fee"), FIXED_TUITION_FEE);
  const downpaymentAmount = parseCurrencyInput(formData.get("downpayment_amount"), FIXED_DOWNPAYMENT_AMOUNT);
  const medicalFee = parseCurrencyInput(formData.get("medical_fee"), FIXED_MEDICAL_FEE);
  const idFee = parseCurrencyInput(formData.get("id_fee"), FIXED_ID_FEE);

  if (!studentId) {
    const { getNextStudentNumber } = await import("./data");
    studentId = await createStudent({
      studentNo: String(formData.get("student_no") ?? "").trim() || (await getNextStudentNumber()),
      firstName: String(formData.get("first_name") ?? "").trim(),
      lastName: String(formData.get("last_name") ?? "").trim(),
      middleName: String(formData.get("middle_name") ?? "").trim(),
      program: String(formData.get("program") ?? "").trim(),
      yearLevel: String(formData.get("year_level") ?? "").trim(),
      status: String(formData.get("student_status") ?? "Active").trim() || "Active",
      birthDate: String(formData.get("birth_date") ?? "").trim(),
      motherName: String(formData.get("mother_name") ?? "").trim(),
      fatherName: String(formData.get("father_name") ?? "").trim(),
      guardianName: String(formData.get("guardian_name") ?? "").trim(),
      address: String(formData.get("address") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      actorId: user.id
    });
  }

  await createEnrollment({
    studentId,
    classId: Number(formData.get("class_id") ?? 0),
    status: String(formData.get("status") ?? "Enrolled").trim() || "Enrolled",
    academicYear: String(formData.get("academic_year") ?? "").trim(),
    semester: String(formData.get("semester") ?? "").trim(),
    tuitionFee,
    downpaymentAmount,
    medicalFee,
    idFee,
    actorId: user.id
  });
  try {
    await import("./student-data-dispatch").then(({ dispatchStudentData }) =>
      dispatchStudentData({
        targetKey: "cashier",
        studentId
      })
    );
  } catch {
    // Non-blocking if cashier shared feed table is unavailable temporarily.
  }
  try {
    const flowResult = await import("./department-integration").then(({ dispatchRegistrarDepartmentFlow }) =>
      dispatchRegistrarDepartmentFlow({
        targetDepartmentKey: "cashier",
        studentId
      })
    );

    if (!flowResult.ok) {
      await import("./integration-delivery").then(({ deliverIntegrationResource }) =>
        deliverIntegrationResource("enrollment-data", { studentId })
      );
    }
  } catch {
    try {
      await import("./integration-delivery").then(({ deliverIntegrationResource }) =>
        deliverIntegrationResource("enrollment-data", { studentId })
      );
    } catch {
      // Non-blocking if shared or legacy cashier delivery is not configured yet.
    }
  }
  await setSuccessFlash("Enrollment saved successfully.");
  revalidatePath("/staff/enrollments");
  revalidatePath("/staff/bin");
  revalidatePath("/staff/class-lists");
  revalidatePath("/admin/integrations");
  revalidateCorePaths();
}

export async function updateEnrollmentAction(formData: FormData) {
  const user = await requireSessionUser();
  const tuitionFee = parseCurrencyInput(formData.get("tuition_fee"), FIXED_TUITION_FEE);
  const downpaymentAmount = parseCurrencyInput(formData.get("downpayment_amount"), FIXED_DOWNPAYMENT_AMOUNT);
  const medicalFee = parseCurrencyInput(formData.get("medical_fee"), FIXED_MEDICAL_FEE);
  const idFee = parseCurrencyInput(formData.get("id_fee"), FIXED_ID_FEE);
  await updateEnrollment({
    id: Number(formData.get("id") ?? 0),
    status: String(formData.get("status") ?? "").trim(),
    academicYear: String(formData.get("academic_year") ?? "").trim(),
    semester: String(formData.get("semester") ?? "").trim(),
    tuitionFee,
    downpaymentAmount,
    medicalFee,
    idFee,
    actorId: user.id
  });
  await setSuccessFlash("Enrollment updated successfully.");
  revalidatePath("/staff/enrollments");
  revalidatePath("/staff/bin");
  revalidatePath("/staff/class-lists");
  revalidatePath("/staff/students");
  revalidateCorePaths();
}

export async function deleteEnrollmentAction(formData: FormData) {
  const user = await requireSessionUser();
  await deleteEnrollment({ id: Number(formData.get("id") ?? 0), actorId: user.id });
  await setSuccessFlash("Enrollment moved to bin successfully.");
  revalidatePath("/staff/enrollments");
  revalidatePath("/staff/bin");
  revalidatePath("/staff/class-lists");
  revalidateCorePaths();
}

export async function restoreEnrollmentAction(formData: FormData) {
  const user = await requireSessionUser();
  await restoreEnrollment({ id: Number(formData.get("id") ?? 0), actorId: user.id });
  await setSuccessFlash("Enrollment restored successfully.");
  revalidatePath("/staff/enrollments");
  revalidatePath("/staff/bin");
  revalidateCorePaths();
}

export async function purgeEnrollmentAction(formData: FormData) {
  const user = await requireSessionUser();
  await purgeEnrollment({ id: Number(formData.get("id") ?? 0), actorId: user.id });
  await setSuccessFlash("Enrollment deleted permanently.");
  revalidatePath("/staff/bin");
  revalidatePath("/staff/enrollments");
  revalidateCorePaths();
}

export async function createGradeAction(formData: FormData) {
  const user = await requireSessionUser();
  const studentId = Number(formData.get("student_id") ?? 0);
  await createGrade({
    studentId,
    classId: Number(formData.get("class_id") ?? 0),
    semester: String(formData.get("semester") ?? "").trim(),
    grade: String(formData.get("grade") ?? "").trim(),
    remarks: String(formData.get("remarks") ?? "").trim(),
    actorId: user.id
  });
  if (studentId > 0) {
    try {
      await import("./student-data-dispatch").then(({ dispatchStudentData }) =>
        dispatchStudentData({
          targetKey: "crad",
          studentId
        })
      );
    } catch {
      // Non-blocking if CRAD shared feed table is unavailable temporarily.
    }
  }
  await setSuccessFlash("Grade saved successfully.");
  revalidatePath("/staff/grades");
  revalidatePath("/staff/class-lists");
  revalidatePath("/admin/integrations");
  revalidateCorePaths();
}

export async function updateGradeAction(formData: FormData) {
  const user = await requireSessionUser();
  const studentId = Number(formData.get("student_id") ?? 0);
  await updateGrade({
    id: Number(formData.get("id") ?? 0),
    semester: String(formData.get("semester") ?? "").trim(),
    grade: String(formData.get("grade") ?? "").trim(),
    remarks: String(formData.get("remarks") ?? "").trim(),
    actorId: user.id
  });
  if (studentId > 0) {
    try {
      await import("./student-data-dispatch").then(({ dispatchStudentData }) =>
        dispatchStudentData({
          targetKey: "crad",
          studentId
        })
      );
    } catch {
      // Non-blocking if CRAD shared feed table is unavailable temporarily.
    }
  }
  await setSuccessFlash("Grade updated successfully.");
  revalidatePath("/staff/grades");
  revalidatePath("/staff/class-lists");
  revalidatePath("/admin/integrations");
  revalidateCorePaths();
}

export async function deleteGradeAction(formData: FormData) {
  const user = await requireSessionUser();
  await deleteGrade({ id: Number(formData.get("id") ?? 0), actorId: user.id });
  await setSuccessFlash("Grade deleted successfully.");
  revalidatePath("/staff/grades");
  revalidatePath("/staff/class-lists");
  revalidateCorePaths();
}

export async function createDocumentAction(formData: FormData) {
  const user = await requireSessionUser();
  await createDocumentRequest({
    studentId: Number(formData.get("student_id") ?? 0),
    docType: String(formData.get("doc_type") ?? "").trim(),
    actorId: user.id
  });
  await setSuccessFlash("Document request saved successfully.");
  revalidatePath("/staff/documents");
  revalidateCorePaths();
}

export async function updateDocumentAction(formData: FormData) {
  const user = await requireSessionUser();
  await updateDocumentRequest({
    id: Number(formData.get("doc_id") ?? 0),
    status: String(formData.get("status") ?? "").trim(),
    actorId: user.id
  });
  await setSuccessFlash("Document request updated successfully.");
  revalidatePath("/staff/documents");
  revalidateCorePaths();
}

export async function deleteDocumentAction(formData: FormData) {
  const user = await requireSessionUser();
  await deleteDocumentRequest({ id: Number(formData.get("doc_id") ?? 0), actorId: user.id });
  await setSuccessFlash("Document request deleted successfully.");
  revalidatePath("/staff/documents");
  revalidateCorePaths();
}

export async function createUserAction(formData: FormData) {
  const user = await requireSessionUser();
  await createUserAccount({
    roleId: Number(formData.get("role_id") ?? 0),
    username: String(formData.get("username") ?? "").trim(),
    password: String(formData.get("password") ?? ""),
    firstName: String(formData.get("first_name") ?? "").trim(),
    lastName: String(formData.get("last_name") ?? "").trim(),
    actorId: user.id
  });
  revalidatePath("/admin/users");
  revalidatePath("/staff/staff-directory");
  revalidateCorePaths();
}

export async function updateUserAction(formData: FormData) {
  const user = await requireSessionUser();
  await updateUserAccount({
    id: Number(formData.get("id") ?? 0),
    roleId: Number(formData.get("role_id") ?? 0),
    username: String(formData.get("username") ?? "").trim(),
    firstName: String(formData.get("first_name") ?? "").trim(),
    lastName: String(formData.get("last_name") ?? "").trim(),
    actorId: user.id
  });
  revalidatePath("/admin/users");
  revalidatePath("/staff/staff-directory");
  revalidateCorePaths();
}

export async function toggleUserAction(formData: FormData) {
  const user = await requireSessionUser();
  await toggleUserAccount({
    id: Number(formData.get("id") ?? 0),
    isActive: String(formData.get("is_active") ?? "0") === "1",
    actorId: user.id
  });
  revalidatePath("/admin/users");
  revalidatePath("/staff/staff-directory");
  revalidateCorePaths();
}

export async function resetUserPasswordAction(formData: FormData) {
  const user = await requireSessionUser();
  await resetUserPassword({
    id: Number(formData.get("id") ?? 0),
    password: String(formData.get("password") ?? ""),
    actorId: user.id
  });
  revalidatePath("/admin/users");
  revalidateCorePaths();
}

export async function deleteUserAction(formData: FormData) {
  const user = await requireSessionUser();
  await deleteUserAccount({ id: Number(formData.get("id") ?? 0), actorId: user.id });
  revalidatePath("/admin/users");
  revalidatePath("/staff/staff-directory");
  revalidateCorePaths();
}

export async function createReportAction(formData: FormData) {
  const user = await requireSessionUser();
  await createReport({
    title: String(formData.get("title") ?? "").trim(),
    department: String(formData.get("department") ?? "").trim(),
    status: String(formData.get("status") ?? "Pending").trim() || "Pending",
    dueDate: String(formData.get("due_date") ?? "").trim(),
    actorId: user.id
  });
  revalidatePath("/admin/reports");
  revalidateCorePaths();
}

export async function createWorkflowReportAction(formData: FormData) {
  const user = await requireSessionUser();
  await createWorkflowReport({
    workflowKey: String(formData.get("workflow_key") ?? "") as never,
    title: String(formData.get("title") ?? "").trim(),
    department: String(formData.get("department") ?? "").trim(),
    status: String(formData.get("status") ?? "Pending").trim() || "Pending",
    dueDate: String(formData.get("due_date") ?? "").trim(),
    actorId: user.id
  });
  revalidatePath("/admin/reports");
  revalidateCorePaths();
}

export async function updateReportAction(formData: FormData) {
  const user = await requireSessionUser();
  await updateReport({
    id: Number(formData.get("id") ?? 0),
    title: String(formData.get("title") ?? "").trim(),
    department: String(formData.get("department") ?? "").trim(),
    status: String(formData.get("status") ?? "Pending").trim() || "Pending",
    dueDate: String(formData.get("due_date") ?? "").trim(),
    actorId: user.id
  });
  revalidatePath("/admin/reports");
  revalidateCorePaths();
}

export async function deleteReportAction(formData: FormData) {
  const user = await requireSessionUser();
  await deleteReport({ id: Number(formData.get("id") ?? 0), actorId: user.id });
  revalidatePath("/admin/reports");
  revalidateCorePaths();
}

export async function createAcademicReportAction(formData: FormData) {
  const user = await requireSessionUser();
  await createAcademicReport({
    studentId: Number(formData.get("student_id") ?? 0),
    title: String(formData.get("title") ?? "").trim(),
    coverage: String(formData.get("coverage") ?? "").trim(),
    reportType: String(formData.get("report_type") ?? "Transcript").trim() || "Transcript",
    semester: String(formData.get("semester") ?? "").trim(),
    authorizationStatus: String(formData.get("authorization_status") ?? "Pending").trim() || "Pending",
    outputFormat: String(formData.get("output_format") ?? "Transcript / Grade Report").trim() || "Transcript / Grade Report",
    status: String(formData.get("status") ?? "Draft").trim() || "Draft",
    actorId: user.id
  });
  revalidatePath("/admin/academic-reports");
  revalidateCorePaths();
}

export async function updateAcademicReportAction(formData: FormData) {
  const user = await requireSessionUser();
  await updateAcademicReport({
    id: Number(formData.get("id") ?? 0),
    studentId: Number(formData.get("student_id") ?? 0),
    title: String(formData.get("title") ?? "").trim(),
    coverage: String(formData.get("coverage") ?? "").trim(),
    reportType: String(formData.get("report_type") ?? "Transcript").trim() || "Transcript",
    semester: String(formData.get("semester") ?? "").trim(),
    authorizationStatus: String(formData.get("authorization_status") ?? "Pending").trim() || "Pending",
    outputFormat: String(formData.get("output_format") ?? "Transcript / Grade Report").trim() || "Transcript / Grade Report",
    status: String(formData.get("status") ?? "Draft").trim() || "Draft",
    actorId: user.id
  });
  revalidatePath("/admin/academic-reports");
  revalidateCorePaths();
}

export async function deleteAcademicReportAction(formData: FormData) {
  const user = await requireSessionUser();
  await deleteAcademicReport({ id: Number(formData.get("id") ?? 0), actorId: user.id });
  revalidatePath("/admin/academic-reports");
  revalidateCorePaths();
}

export async function createIntegrationRecordAction(formData: FormData) {
  const user = await requireSessionUser();
  await createIntegrationRecord({
    studentNo: String(formData.get("student_no") ?? "").trim(),
    sourceOffice: String(formData.get("source_office") ?? "").trim(),
    recordType: String(formData.get("record_type") ?? "").trim(),
    referenceNo: String(formData.get("reference_no") ?? "").trim(),
    externalStatus: String(formData.get("external_status") ?? "Received").trim() || "Received",
    title: String(formData.get("title") ?? "").trim(),
    notes: String(formData.get("notes") ?? "").trim(),
    actorId: user.id
  });
  revalidatePath("/admin/integrations");
  revalidateCorePaths();
}

export async function updateProfileAction(formData: FormData) {
  const sessionUser = await requireSessionUser();

  const firstName = String(formData.get("first_name") ?? "").trim();
  const lastName = String(formData.get("last_name") ?? "").trim();
  const displayName = String(formData.get("display_name") ?? "").trim();
  const profileTitle = String(formData.get("profile_title") ?? "").trim();
  const profileBio = String(formData.get("profile_bio") ?? "").trim();
  const profileAccent = String(formData.get("profile_accent") ?? "#2F6BD9").trim() || "#2F6BD9";

  const fullName = `${firstName} ${lastName}`.trim();
  await import("./db").then(({ pool }) =>
    pool.query(
      `update admin_users
       set full_name = $1, last_login_at = coalesce(last_login_at, current_timestamp)
       where id = $2`,
      [fullName, sessionUser.id]
    )
  );

  await setSession({
    ...sessionUser,
    first_name: firstName,
    last_name: lastName,
    display_name: displayName,
    profile_title: profileTitle,
    profile_bio: profileBio,
    profile_accent: profileAccent
  });

  revalidatePath("/profile");
  revalidatePath("/admin/settings");
  revalidateCorePaths();
}

export async function markNotificationReadAction(formData: FormData) {
  await requireSessionUser();
  await markNotificationRead({ id: Number(formData.get("id") ?? 0) });
  revalidateCorePaths();
}

export async function markAllNotificationsReadAction() {
  await requireSessionUser();
  await markAllNotificationsRead();
  revalidateCorePaths();
}
