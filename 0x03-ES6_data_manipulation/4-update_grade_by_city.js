export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!(Array.isArray(getListStudents)) && !(Array.isArray(newGrades))) { return []; }

  return getListStudents.filter((val) => val.location === city)
    .map((studObj) => {
      const gradeValArr = newGrades.filter((gradeObj) => gradeObj.studentId === studObj.id);

      return {
        ...studObj,
        grade: gradeValArr[0] ? gradeValArr[0].grade : 'N/A',
      };
    });
}
