import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap , catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable <any[]>{
   return this.http.get<any[]>(this.url + '?userId=1').pipe( catchError(this.handleError));
  }

  createPost(post){
    return this.http.post(this.url, post).pipe( catchError(this.handleError));
  }

  editPost(post){
    return this.http.put(this.url + `/${post.id}`, post).pipe( catchError(this.handleError));
  }

  deletePost(id){
   return this.http.delete(this.url + `/${id}`).pipe(catchError(this.handleError));
  }



  private handleError(err: HttpErrorResponse){

    let errorMessaage = '';
    if (err.error instanceof ErrorEvent){

      // Error From Client-Side
      errorMessaage = `An Error occurred ${err.error.message}`;

    }else{

      // Error From Server-Side
      errorMessaage = `Server retern code ${err.status} , Error message is ${err.message}`;
    }

    console.log(errorMessaage);
    return throwError(errorMessaage);
  }


}
