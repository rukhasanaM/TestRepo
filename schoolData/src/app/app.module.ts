import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { StdComponent } from './components/std/std.component';
import { StudentListComponent } from './components/student-list/student-list.component';


import { DataService } from './services/data.service'

const appRoutes: Routes = [
  {path:'student', component:StudentListComponent},
  {path:'standard', component:StdComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StdComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
