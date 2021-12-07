import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginDto} from "./login.dto";
import {TokenDto} from "./token.dto";
import {BehaviorSubject, Observable, of, Subscription, take, tap} from "rxjs";
import {RegisterUserDto} from "./registerUser.dto";
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
      .post<TokenDto>(environment.api + '/api/auth/login', loginDto)
      .pipe(
        tap(token => {
          if(token && token.token) {
            localStorage.setItem(jwtToken, token.token);
            this.isLoggedIn$.next(token.token);
          } else {
            this.logout();
          }
        })
      )
  }

  getToken(): string | null {
    return localStorage.getItem(jwtToken);
  }

  logout(): Observable<boolean> {
    localStorage.removeItem(jwtToken);
    this.isLoggedIn$.next(null);
    return of(true).pipe(take(1));
  }

  register(userdto: RegisterUserDto): Observable<boolean> {
    return this._http
      .post<boolean>(environment.api + '/api/auth/register', userdto);
  }
}

