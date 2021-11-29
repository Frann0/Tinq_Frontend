import { Component, OnInit } from '@angular/core';
import {SignUpComponent} from "../Auth/sign-up/sign-up.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.style.backgroundColor = "black";
  }

}
