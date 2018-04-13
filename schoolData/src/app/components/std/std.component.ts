import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'


@Component({
  selector: 'app-std',
  templateUrl: './std.component.html',
  styleUrls: ['./std.component.css']
})
export class StdComponent implements OnInit {
  posts: Post[];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
   });
  }

}
interface Post {
  id: number,
  title: string
}