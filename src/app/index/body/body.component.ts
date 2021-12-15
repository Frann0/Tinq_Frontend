import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {debounceTime, fromEvent, map, Observable, startWith, throttleTime} from "rxjs";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['body.component.scss']
})
export class BodyComponent implements OnInit {
  mobile : boolean = false;

  constructor(private router: Router) { }

  @HostListener("window:resize", [])
  onResize() {
    var width = window.innerWidth;
    this.mobile = width < 992;
  }

  ngOnInit(): void {
  }

  gotoSignUp(){
    this.router.navigate(['/auth/sign-up']);
  }
}
