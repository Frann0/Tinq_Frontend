import { Component, OnInit } from '@angular/core';
import {AuthService} from "../Auth/shared/auth.service";

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }



}
