import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginDto} from "./login.dto";
import {TokenDto} from "./token.dto";
import {Observable, tap} from "rxjs";
import {environment} from "../../../environments/environment";
import {UserDto} from "./user.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  login(loginDto: LoginDto): Observable<TokenDto> {
    return this._http
      .post<TokenDto>(environment.api + '/api/auth/login', loginDto)
      .pipe(
        tap(token => {
          if(token && token.jwt) {
            localStorage.setItem('jwtToken', token.jwt);
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
}
