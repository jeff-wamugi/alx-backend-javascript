const { readFileSync } = require('fs');

function countStudents(file) {
  try {
    const data = readFileSync(file, { encoding: 'utf-8', flag: 'r' });
    const dList = data.split('\n');

    const cs = [];
    const swe = [];

    let kList = [];
    for (const key of dList) {
      kList = key.split(',');
      // eslint-disable-next-line no-continue
      if (kList[0] === 'firstname') { continue; }

      if (kList.slice(-1)[0] === 'CS') {
        cs.push(kList[0]);
      } else if (kList.slice(-1)[0] === 'SWE') {
        swe.push(kList[0]);
      }
    }

    console.log(`Number of students: ${cs.length + swe.length}`);
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
