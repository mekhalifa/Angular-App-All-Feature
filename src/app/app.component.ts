import { Component, ElementRef } from '@angular/core';
import { FavoriteView } from './Components/favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';
  inputText = '';

  post = {
    name: 'Post Name',
    isFavorite: true
  };


  onFavoriteChange(reqFavorite: FavoriteView){

    console.log('Favorite Change', reqFavorite.isCheck);
  }



  onKeyup($event: any){

    this.inputText = $event.target.value;
  }
}
