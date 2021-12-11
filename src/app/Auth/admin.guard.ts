import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {AuthService} from "./shared/auth.service";
import {UserServiceService} from "../shared/user-service.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private _user: UserServiceService, private _router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this._user._user
      .pipe(
        map(user => {
          if(user && this._user.isAdmin()) {
            return true;
          }
          return this._router.parseUrl('/app');
        })
      );
  }
}
