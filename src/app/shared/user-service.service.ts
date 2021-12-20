import {Injectable, OnInit} from '@angular/core';
import {LoggedInUserDto} from "../Auth/shared/loggedInUser.dto";
import {BehaviorSubject} from "rxjs";
import {PermissionDto} from "../Auth/shared/permission.dto";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TableUserDto} from "../Auth/shared/tableUser.dto";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService implements OnInit {
  public _user = new BehaviorSubject<LoggedInUserDto | null>(this.getLoggedInUser());
  private loggedInUser: LoggedInUserDto | undefined;
  isAdminVar: boolean = false;
  permissions: PermissionDto[] | undefined;

  constructor(private _http: HttpClient) {
  }

  public getUser(): LoggedInUserDto {
    return <LoggedInUserDto>this.loggedInUser;
  }

  public setUser(value: LoggedInUserDto) {
    this.loggedInUser = value;
  }

  getLoggedInUser(): LoggedInUserDto | null {
    return JSON.parse(<string>localStorage.getItem("user"));
  }

  public isAdmin() {
    this.permissions = JSON.parse(<string>localStorage.getItem("user")).permissions;
    // @ts-ignore
    for (let i = 0; i < this.permissions.length; i++) {
      // @ts-ignore
      if (this.permissions[i].name == "Admin") {
        return true;
      }
    }

    return false;
  }

  editUser() {

  }

  isAdminByUserObject(user: TableUserDto) {
    this.permissions = user.permissions;
    // @ts-ignore
    for (let i = 0; i < this.permissions.length; i++) {
      // @ts-ignore
      if (this.permissions[i].name == "Admin") {
        return true;
      }
    }

    return false;
  }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(<string>localStorage.getItem("user"));
  }

  ban(user: TableUserDto) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: user
    };
    this._http.delete(environment.api + "/api/Auth/deleteprofile/", options).subscribe(s => console.log(s));
  }

  assignAdmin(selectedUser: TableUserDto | undefined) {
    /**
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: selectedUser
    };
    this._http.post(environment.api + "/api/Auth/assignadmin", options).subscribe(s => console.log(s));
     */


    this._http.post(environment.api + "/api/Auth/assignadmin/" + selectedUser?.email, null).subscribe(s => console.log(s));
    window.location.reload();
  }

  removeAdmin(selectedUser: TableUserDto | undefined) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: selectedUser
    };
    this._http.delete(environment.api + "/api/Auth/removeadmin", options).subscribe(s => console.log(s));
    window.location.reload();
  }
}
