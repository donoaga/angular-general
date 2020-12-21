import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthJwtService} from '../auth/auth-jwt.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(public authenticationService: AuthJwtService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;

    // return true for authorised user
    if (currentUser) {
      return true;
    }

    // else return false
    return false;
  }
}
