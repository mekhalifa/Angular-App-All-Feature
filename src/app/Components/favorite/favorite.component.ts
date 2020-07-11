import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from 'src/app/Models/Course.model';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

@Input() isCheck = false;
@Output() change = new EventEmitter();
NewFavorite?: FavoriteView;

  constructor() { }

  ngOnInit(): void {
  }

  onFavoriteClick(){

    this.isCheck = !this.isCheck;

    this.NewFavorite = {isCheck: this.isCheck};
    this.change.emit(this.NewFavorite);
  }

}

export interface FavoriteView{

  isCheck: boolean;
}
