import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IdentityService } from '../Services/identity.service';

@Injectable( {providedIn: 'root'} )
export class AdminGuard implements CanActivate {

constructor(private identity: IdentityService, private  router: Router){

}


    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot ): boolean {
            if (this.identity.currentUser.admin) { return true; }

            this.router.navigate(['/no-access'], {queryParams: {returnUrl: state.url}});
            return false;
    }
}
