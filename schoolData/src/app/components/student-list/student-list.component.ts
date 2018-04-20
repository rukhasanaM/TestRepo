import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'StudentList-Component',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  posts: Post[];
  constructor(private dataService:DataService) { }

  ngOnInit() {
  //   this.dataService.getPosts()
  //   .subscribe((posts) => {
  //     this.posts = posts;
  //  });
  }

  @Input('user') userId : string;
  @Input('title') title : string;
  @Output() sendRecord: EventEmitter <any> = new EventEmitter();
  public emitRecord () {
    this.sendRecord.emit();
  }
}
interface Post {
  userId: number,
  body: string
}