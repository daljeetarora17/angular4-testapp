import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../model/student.model'
import { TeacherModel } from '../model/teacher.model'

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {

  teacher: TeacherModel;
  isVisible:boolean=false;

  constructor() {
    this.teacher = new TeacherModel();
  }

  addStudent(student: StudentModel) {
    this.teacher.students.push(student);
  }

  addTeacher() {
    this.isVisible=true;
    //console.log(this.teacher);
  }

}
