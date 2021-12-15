import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../Auth/shared/auth.service";
import {Router} from "@angular/router";
import {UserServiceService} from "../../../shared/user-service.service";
import {PermissionDto} from "../../../Auth/shared/permission.dto";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    username: string | undefined = "User123";
  permissions: PermissionDto[] | undefined;

  constructor(private _auth: AuthService, private _router: Router, private _user: UserServiceService) { }

  ngOnInit(): void {
    this.username = JSON.parse(<string>localStorage.getItem("user")).username;
  }

  isAdmin(): boolean{
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

  logout(): void{
    this._auth.logout();
    this._router.navigate(["/index"]);
  }
}
