const PASSING_GRADE = 7;
const MAX_ABSENCES = 100;

const studentGrade = 10;
const studentAbsences = 109;

function evaluateStudentPerformance() {
  if (studentGrade < PASSING_GRADE) {
    return {
      error: true,
      message:
        "Student was not approved because their grade was below the required.",
    };
  }

  if (studentAbsences > MAX_ABSENCES) {
    return {
      error: true,
      message: "Student was not approved due to excessive absences.",
    };
  }

  return { error: false, message: "Student was approved :)" };
}

console.log(evaluateStudentPerformance());
