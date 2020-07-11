import { Component, OnInit } from '@angular/core';

import { ICourse } from 'src/app/Models/Course.model';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  coursesShow: ICourse[];
  log = `Course Select : -----   - Is favourt : -------  `;
  constructor( private _courses: CoursesService) {
      this.coursesShow = _courses.getAll();

  }

  ngOnInit(): void {
  }

  onChangeFavorite($event: any , arg: ICourse){
    this.log = `Course Select : ${arg.Title} - Is favourt :  ${$event.isCheck}`;
   // console.log(this.log);
  }

}
