/// <reference path="Teacher.ts" />

// use of declaration merging to extend namespace props
namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject{
    getRequirements(): string {
      return 'Here is the list of requirements for react'
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact === 0) {
        return 'No available teacher'
      }
      return `Available Teacher: ${this.teacher.firstName}`
    }
  }
}
