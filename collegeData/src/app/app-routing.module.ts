import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import { StudentComponent } from './components/student/student.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';

const routes : Routes =[
  { path: 'classRooms',
    children: [
      {path: ':classid', component: StudentComponent,
        children: [
          { 
            path: 'student/:id', 
            component: StudentDetailComponent 
          }
        ]
      }
    ]
  }
]

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [StudentComponent,StudentDetailComponent]
