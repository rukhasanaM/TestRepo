import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class std {
}

const stdList = [
{   
    "classid": 1,
    "classname":"ClassRoom A",
    "studentList": [
        {
            "id": 1,
            "name": "Rukhasana"
        },
        {
            "id": 2,
            "name": "Vrushali"
        },
        {
            "id": 3,
            "name": "Satyprakash"
        },
    ]
 },
 {   
    "classid": 2,
    "classname":"ClassRoom B",
    "studentList": [
        {
            "id": 1,
            "name": "Ruk"
        },
        {
            "id": 2,
            "name": "Vrus"
        },
        {
            "id": 3,
            "name": "Saty"
        },
    ]
 }
];

@Injectable()
export class DataService {
  getStd() { return Observable.of(stdList); }

 
  getStudentList(id: number | string) {
    return this.getStd().map(stds => stds.filter(std => std.classid == +id));
  }

  getStudent( classid: number | string, id: any) {
      return this.getStd().map(stds => stds.filter(std => std.classid == + classid)[0].studentList[id-1])
  }

}
