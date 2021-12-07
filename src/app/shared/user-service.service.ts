import { Injectable } from '@angular/core';
import {LoggedInUserDto} from "../Auth/shared/loggedInUser.dto";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public _user: LoggedInUserDto | undefined;

  constructor() { }

}
