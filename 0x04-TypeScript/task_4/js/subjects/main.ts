/// <reference path="Teacher.ts" />
/// <reference path="React.ts" />
/// <reference path="Java.ts" />
/// <reference path="Cpp.ts" />
/// <reference path="Subject.ts" />

export const cpp = new Subjects.Cpp()
export const java = new Subjects.Java()
export const react = new Subjects.React()

export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10
}

// for C++ subject
console.log('C++')
cpp.teacher = cTeacher
console.log(cpp.getRequirements())
console.log(cpp.getAvailableTeacher())

// for Java subject
console.log('Java')
java.teacher = cTeacher
console.log(java.getRequirements())
console.log(java.getAvailableTeacher())

// for React subject
console.log('React')
react.teacher = cTeacher
console.log(react.getRequirements())
console.log(react.getAvailableTeacher())
