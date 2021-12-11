import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../Auth/shared/auth.service";
import {Router} from "@angular/router";
import {UserServiceService} from "../../../shared/user-service.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    username: string | undefined = "User123";

  constructor(private _auth: AuthService, private _router: Router, private _user: UserServiceService) { }

  ngOnInit(): void {
    this.username = JSON.parse(<string>localStorage.getItem("user")).username;
  }
  logout(): void{
    this._auth.logout();
    this._router.navigate(["/index"]);
  }
}
