import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";
import {UserDto} from "../shared/user.dto";
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

  constructor(private fb : FormBuilder, private _auth: AuthService, private router: Router) {

  }

  ngOnInit(): void {
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
    console.log(loginDto);
    this._auth.login(loginDto).subscribe(token =>{
      if(token.message.toLowerCase() == "ok"){
        console.log("Yas");
        console.log(localStorage.getItem("jwtToken"));
      }
      console.log(token.jwt + " - " + token.message);
    });

  }


}
