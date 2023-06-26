export default function createIteratorObject(report) {
  const newArr = [];
  const allEmp = Object.values(report.allEmployees);

  allEmp.forEach((element) => {
    if (Array.isArray(element)) {
      newArr.push(...element);
    } else {
      newArr.push(element);
    }
  });
  return newArr;
}
