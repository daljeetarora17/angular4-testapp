import { StudentModel } from '../student/student.model'

export class TeacherModel {
    id: number;
    name: string;
    school: string;

    students: StudentModel[];

    constructor() {
        this.students = [];
        this.id=0;
        this.name='';
    }
}