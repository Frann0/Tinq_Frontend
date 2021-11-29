import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../Auth/shared/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    username: string = "User123";

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  logout(): void{
    this._auth.logout();
    this._router.navigate(["/index"]);
  }
}
