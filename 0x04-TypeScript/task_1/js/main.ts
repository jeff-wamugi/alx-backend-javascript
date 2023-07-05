interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// constructor inferface for the studentclass class
interface classConstruct {
  new (firstName: string, lastName: string): ClassStudent;
}

// interface for the StudentClass class
interface ClassStudent {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

const StudentClass: classConstruct = class StudentClass implements ClassStudent{
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working'
  }

  displayName(): string {
    return this.firstName
  }
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

let printTeacher: printTeacherFunction;
printTeacher = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0).toUpperCase()}. ${lastName}`
}

const studentClass = new StudentClass('tom', 'bee')
console.log(studentClass.firstName)
console.log(printTeacher('john', 'Doe'))
console.log(director1);
