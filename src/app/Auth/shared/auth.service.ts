import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginDto} from "./login.dto";
import {TokenDto} from "./token.dto";
import {BehaviorSubject, Observable, of, Subscription, take, tap} from "rxjs";
import {RegisterUserDto} from "./registerUser.dto";
import {environment} from "../../../environments/environment";
import {LoggedInUserDto} from "./loggedInUser.dto";
import {TableUserDto} from "./tableUser.dto";

const jwtToken = "jwtToken";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<string | null>(this.getToken());
  LoggedInUser: LoggedInUserDto | undefined;
  constructor(private _http: HttpClient) { }

  login(loginDto: LoginDto): Observable<LoggedInUserDto> {
    return this._http
      .post<LoggedInUserDto>(environment.api + '/api/auth/login', loginDto)
      .pipe(
        tap(token => {
          if(token.token && token.token.token) {
            localStorage.setItem(jwtToken, token.token.token);
            localStorage.setItem("user", JSON.stringify(token));
            this.isLoggedIn$.next(token.token.token);
            this.LoggedInUser = token as LoggedInUserDto;
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
    localStorage.removeItem("user");
    this.isLoggedIn$.next(null);
    return of(true).pipe(take(1));
  }

  register(userdto: RegisterUserDto): Observable<boolean> {
    return this._http
      .post<boolean>(environment.api + '/api/auth/register', userdto);
  }

  getAllUsers() {
    return this._http.get<TableUserDto[]>(environment.api + '/api/Auth/allusers');
  }
}

