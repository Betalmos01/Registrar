export function getSubjectsForStudent(program: string | null, yearLevel: string | null) {
  const normalizedProgram = String(program ?? "").toUpperCase();
  const normalizedYear = String(yearLevel ?? "").trim();

  const yearSubjects: Record<string, string[]> = {
    "1": ["Communication Skills", "Introduction to Computing", "Study and Thinking Skills"],
    "2": ["Professional Subjects", "Applied Elective", "Records and Documentation"],
    "3": ["Major Subjects", "Practicum Preparation", "Seminar"],
    "4": ["Research 101", "Practicum / Internship", "Comprehensive Review"]
  };

  const programSubjects: string[] = [];

  if (normalizedProgram.startsWith("BSIT")) {
    if (normalizedYear === "1") {
      programSubjects.push("Computer Programming 1", "Productivity Tools");
    }
    if (normalizedYear === "2") {
      programSubjects.push("Data Structures", "Database Systems");
    }
    if (normalizedYear === "3") {
      programSubjects.push("Networking Laboratory", "Systems Analysis and Design");
    }
    if (normalizedYear === "4") {
      programSubjects.push("Capstone");
    }
  }

  if (normalizedProgram === "BSIS") {
    if (normalizedYear === "2") {
      programSubjects.push("Information Management", "Business Process Analysis");
    }
    if (normalizedYear === "3") {
      programSubjects.push("Enterprise Systems", "Project Management");
    }
  }

  const allSubjects = [...(yearSubjects[normalizedYear] ?? ["General Subjects"]), ...programSubjects];
  return Array.from(new Set(allSubjects));
}
