import { Injectable } from '@angular/core';
import { ICourse } from '../Models/Course.model';

@Injectable({
  providedIn:  'root'
})
export class CoursesService {

  courses: ICourse[];
  constructor() {

    this.courses = [
      {Id: 1, Title: 'Course 1', Description: 'Any description Any description1', isFavorite : true},
      {Id: 2, Title: 'Course 2', Description: 'Any description Any description2', isFavorite: false},
      {Id: 3, Title: 'Course 3', Description: 'Any description Any description3', isFavorite: true},
      {Id: 4, Title: 'Course 4', Description: 'Any description Any description4', isFavorite: true},
      {Id: 5, Title: 'Course 5', Description: 'Any description Any description5', isFavorite: false},
      {Id: 6, Title: 'Course 6', Description: 'Any description Any description6', isFavorite: false},
      {Id: 7, Title: 'Course 7', Description: 'Any description Any description7', isFavorite: true}, ];
   }



  getAll(){
    return this.courses;
  }


}
