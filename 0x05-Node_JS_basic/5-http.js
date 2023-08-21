/* eslint-disable jest/require-hook */
const http = require('http');
const { readFile } = require('fs');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    const text = 'This is the list of our students\n';
    const prom = new Promise((resolve, reject) => {
      readFile('database.csv', { encoding: 'utf-8', flag: 'r' }, (err, data) => {
        if (err) {
          reject(Error('Cannot load the database'));
        } else {
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

          const endStr = `Number of students: ${cs.length + swe.length}`;
          const endSt1 = `Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`;
          const endSt2 = `Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`;
          console.log([endStr, endSt1, endSt2].join('\n'));
          resolve(`${endStr}\n${endSt1}\n${endSt2}`);
        }
      });
    });

    prom.then((val) => {
      console.log(text);
      res.end(text + val);
    }).catch(() => res.statusCode(500));
  }
});

app.listen(1245);

module.exports = app;
