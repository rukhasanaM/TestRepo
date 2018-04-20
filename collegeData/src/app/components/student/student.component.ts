import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { std, DataService }  from '../../services/data.service';

@Component({
 template: ` <div class="row justify-content-around">
 <div class="col-4">
  <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">Roll No.</th>
        <th scope="col">Name</th>
        <th scope="col">View</th>
      </tr>
    </thead>
    <tbody  *ngFor = "let student of students | async">
      <tr *ngFor="let route of student.studentList">
        <td>
            {{route.id}}
        </td>
        <td>
            {{route.name}}
        </td>
        <td><a [routerLink]="['./student', route.id]" > VIEW</a></td>
      </tr>
    <tbody>
  </table>
  </div>
 </div>
 <router-outlet></router-outlet>
  `
})

export class StudentComponent implements OnInit {
  students: Observable<std>;
  
  private selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DataService
  ) {}

  ngOnInit() {
    
    this.students = this.route.paramMap
      .switchMap((params: ParamMap) => {
       // this.selectedId = +params.get('id');
        return this.service.getStudentList(params.get('classid'));
      });
  };
  
}
