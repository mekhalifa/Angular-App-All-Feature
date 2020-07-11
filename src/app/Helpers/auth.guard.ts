import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IdentityService } from '../Services/identity.service';

@Injectable( {providedIn: 'root'})
export class AuthGuard implements CanActivate {

constructor(private identity: IdentityService, private  router: Router){

}


    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot ): boolean {
            if (this.identity.isLogin()) { return true; }

            this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
            return false;
    }
}
