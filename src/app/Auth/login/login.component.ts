import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";
import {RegisterUserDto} from "../shared/registerUser.dto";
import {LoginDto} from "../shared/login.dto";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm = this.fb.group({
    username: [''],
    password: ['']
  });
  unsub: Subscription | undefined;

  constructor(private fb : FormBuilder, private _auth: AuthService, private _router: Router) {

  }

  ngOnInit(): void {
    if (this._auth.isLoggedIn$){
      this._router.navigateByUrl('app');
    }
    this.unsub = this._auth.isLoggedIn$.subscribe(token => {
      console.log('token', token);
    })
  }

  ngOnDestroy(): void {
    if(this.unsub) {
      this.unsub.unsubscribe();
    }
  }

  login() {
    const loginDto = this.loginForm.value as LoginDto;
    this._auth.login(loginDto)
      .subscribe(token => {
        if(token && token.token) {
          this._router.navigateByUrl('app')
        }
      });
  }
}
