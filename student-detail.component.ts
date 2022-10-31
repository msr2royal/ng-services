import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
public students=[];
  constructor(private stdService:StudentService) { }

  ngOnInit(){
    this.students = this.stdService.getStudents(); 
  }

}
