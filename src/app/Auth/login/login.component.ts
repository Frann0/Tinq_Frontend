import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";
import {RegisterUserDto} from "../shared/registerUser.dto";
import {LoginDto} from "../shared/login.dto";
import {Subscription} from "rxjs";
import {UserServiceService} from "../../shared/user-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm = this.fb.group({
    email: [''],
    password: ['']
  });
  unsub: Subscription | undefined;

  constructor(private fb : FormBuilder, private _auth: AuthService, private _router: Router, private _userService: UserServiceService) {

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    if(this.unsub) {
      this.unsub.unsubscribe();
    }
  }

  login() {
    const loginDto = this.loginForm.value as LoginDto;
    this._auth.login(loginDto)
      .subscribe(user => {
        if(user.token && user) {
          this._userService.setUser(user);
          this._router.navigateByUrl('app')
        }
      });
  }
}
