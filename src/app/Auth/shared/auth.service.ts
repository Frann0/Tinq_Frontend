import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginDto} from "./login.dto";
import {TokenDto} from "./token.dto";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {UserDto} from "./user.dto";
import {environment} from "../../../environments/environment";

const jwtToken = "jwtToken";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<string | null>(this.getToken());

  constructor(private _http: HttpClient) { }

  login(loginDto: LoginDto): Observable<TokenDto> {
    return this._http
      .post<TokenDto>(environment.api + '/api/Auth/Login', loginDto)
      .pipe(
        tap(token => {
          if(token && token.jwt) {
            localStorage.setItem(jwtToken, token.jwt);
            this.isLoggedIn$.next(token.jwt);
          } else {
            this.logout();
          }
        })
      )
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  register(userdto: UserDto): void {
    this._http.post(environment.api + '/api/auth/register', userdto).subscribe();
  }

  logout(){
    localStorage.removeItem('jwtToken');
    this.isLoggedIn$.next(null);
  }
}
