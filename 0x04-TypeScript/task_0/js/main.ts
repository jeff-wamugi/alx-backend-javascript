interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const stud1: Student = {
  firstName: 'Tommy',
  lastName: 'Ade',
  age: 10,
  location: 'Lagos',
}

const stud2: Student = {
  firstName: 'Grace',
  lastName: 'Ini',
  age: 15,
  location: 'Abuja',
}

// use of generic type
const studentsList: Array<Student> = [stud1, stud2];
const keyArr = ['firstName', 'location']

function generateThead(table: HTMLTableElement): void {
  const thead = table.createTHead()

  const row = thead.insertRow()
  for (const key of keyArr) {
    const tableHead = document.createElement('th')
    const text = document.createTextNode(key)

    tableHead.appendChild(text)
    row.appendChild(tableHead)
  }
}

function generateTable(table: HTMLTableElement, data: Student[]): void {

  data.forEach((studs) => {
    const row = table.insertRow()
    for (const key of Object.keys(studs)) {
      if (key === 'firstName' || key === 'location') {
        const cell = row.insertCell()
        const text = document.createTextNode(studs[key])

        cell.appendChild(text)
      }

    }
  })
}

const table = document.createElement('table')
generateTable(table, studentsList)
generateThead(table)

document.body.appendChild(table)

