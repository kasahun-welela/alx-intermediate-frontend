/// <reference path="./Teacher.ts" />

namespace Subjects {
    export class Subject {
        protected teacher: Subjects.Teacher;

        setTeacher(teacher: Subjects.Teacher): void {
            this.teacher = teacher;
        }
    }
}