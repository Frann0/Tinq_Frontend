import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoSignUp(){
    this.router.navigate(['/auth/sign-up']);
  }
}
