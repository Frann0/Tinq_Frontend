import {Injectable, OnInit} from '@angular/core';
import {LoggedInUserDto} from "../Auth/shared/loggedInUser.dto";
import {BehaviorSubject} from "rxjs";
import {PermissionDto} from "../Auth/shared/permission.dto";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService implements OnInit{
  public _user = new BehaviorSubject<LoggedInUserDto | null>(this.getLoggedInUser());
  private loggedInUser: LoggedInUserDto | undefined;
  isAdminVar: boolean = false;
  permissions: PermissionDto[] | undefined;
  constructor() { }

  public getUser(): LoggedInUserDto {
    return <LoggedInUserDto>this.loggedInUser;
  }

  public setUser(value: LoggedInUserDto) {
    this.loggedInUser = value;
  }

  getLoggedInUser(): LoggedInUserDto | null {
    return JSON.parse(<string>localStorage.getItem("user"));
  }
  public isAdmin(){
    this.permissions = JSON.parse(<string>localStorage.getItem("user")).permissions;
    // @ts-ignore
    for (let i = 0; i < this.permissions.length; i++){
      // @ts-ignore
      if (this.permissions[i].name == "Admin"){
        return true;
      }
    }

    return false;
  }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(<string>localStorage.getItem("user"));
  }
}
