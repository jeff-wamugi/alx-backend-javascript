export default function getListStudents() {
  const studsArr = [];

  studsArr.push({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });
  studsArr.push({ id: 2, firstName: 'James', location: 'Columbia' });
  studsArr.push({ id: 5, firstName: 'Serena', location: 'San Francisco' });

  return studsArr;
}
