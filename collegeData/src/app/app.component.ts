import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

import { std, DataService }  from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  
})
export class AppComponent {
  classRoom: Observable<std>;

  private selectedId: number;

  constructor(
    private service: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.classRoom = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.selectedId = +params.get('classid');
        return this.service.getStd();
      });
  }
}
