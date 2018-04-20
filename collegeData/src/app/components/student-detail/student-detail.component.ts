import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Rx';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { std, DataService }  from '../../services/data.service';

@Component({

  template: `
  <div class="row justify-content-around">
  <div class="col-6">
   <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">Roll No.</th>
        <th scope="col" width='210'>Name</th>
        <th scope="col">Save</th>
        <th scope="col">Edit</th>
        <th scope="col">Reset</th>
      </tr>
    </thead>
    <tbody *ngIf="stdDetail | async as std">
      <tr>
        <td>
            {{std.id}}
        </td>
        <td>
          <span *ngIf="!showInput"> {{std.name}}</span>
          <span *ngIf="showInput"><input (keyup)="onKey($event)"/></span>
        </td>
        <td><button (click)="save()">SAVE</button></td>
        <td><button (click)="edit()">EDIT</button></td>
        <td><button (click)="reset()">RESET</button></td>
    </tr>
    <tbody>
  </table>
  </div>
  </div>
  `,
 
})
export class StudentDetailComponent implements OnInit {
  stdDetail: Observable<std>;
  private classId: number;
  public showInput:boolean = false;
  public stdName: string;
  public inputValue: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DataService, 
  ) {
  }

  ngOnInit() {
    this.route.parent.params.subscribe(params => 
      this.classId = params.classid
    ); 

    this.stdDetail = this.route.paramMap
    .switchMap((params: ParamMap) =>{
        return this.service.getStudent(+this.classId , +params.get('id'));
    });  
         
  }

  edit() {
    this.showInput = true;
  }
  reset() {
    this.showInput = false;
  }
  onKey(event) { this.inputValue = event.target.value;}
  save(){
   
    if(this.showInput == true && this.inputValue != ''){
      
      this.stdName = this.inputValue;
      this.stdDetail.subscribe(params => {
        if (this.showInput == true && this.inputValue != '') {
          params.name = this.stdName
        }
       //  params.name = this.stdName
      })  ;
      this.inputValue = '';    
    }
    this.showInput = false;
  }
}




