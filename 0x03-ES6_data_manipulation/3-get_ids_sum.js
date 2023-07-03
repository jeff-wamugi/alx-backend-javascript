export default function getStudentIdsSum(getListStudents) {
  if (!(Array.isArray(getListStudents))) { return []; }

  return getListStudents.reduce((previous, current) => previous + current.id, 0);
}
