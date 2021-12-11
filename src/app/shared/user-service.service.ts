import { Injectable } from '@angular/core';
import {LoggedInUserDto} from "../Auth/shared/loggedInUser.dto";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private _user: LoggedInUserDto | undefined;

  constructor() { }

  public getUser(): LoggedInUserDto {
    return <LoggedInUserDto>this._user;
  }

  public setUser(value: LoggedInUserDto) {
    this._user = value;
  }
}
