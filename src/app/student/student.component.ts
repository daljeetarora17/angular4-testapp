import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { StudentModel } from '../model/student.model'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  students: StudentModel[] = [];
  name: string = '';
  numFriends: number = 0;
  @Output() onStudentAdd = new EventEmitter<StudentModel>();

  onClickAdd() {
    var student = new StudentModel();
    student.name = this.name;
    student.numFriends = this.numFriends;
    this.students.push(student);
    this.onStudentAdd.emit(student);
  }
}
