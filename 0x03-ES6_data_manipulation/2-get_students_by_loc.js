export default function getStudentsByLocation(getListStudents, city) {
  if (!(Array.isArray(getListStudents))) { return []; }

  return getListStudents.filter((val) => val.location === city);
}
