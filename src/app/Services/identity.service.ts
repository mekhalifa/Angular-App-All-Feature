import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUserLogin} from '../Models/user.login.model';
import {Observable} from 'rxjs';
import {IUser} from '../Models/user.model';
import {map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import { JwtHelperService  } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  // url="https://localhost:44395/users/auth";
  url = 'http://localhost:4200/users/authenticate';


  constructor(private http: HttpClient,
              private router: Router) {}

  login(userLogin: IUserLogin): Observable < IUser > {

    return this.http.post < IUser > (this.url, userLogin).pipe(
      tap({
        next: nextUser => {

          if (nextUser && nextUser.token) {
            localStorage.setItem('token', nextUser.token);
          }

        }
      }));
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLogin() {

    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');
    if (!token) { return false; }

    const expi = jwtHelper.isTokenExpired(token);
    if (expi) { return false; }


    return true;
    }

  get currentUser(){
    const token = localStorage.getItem('token');
    if (!token) { return null; }
    return new JwtHelperService().decodeToken(token);
  }



}
