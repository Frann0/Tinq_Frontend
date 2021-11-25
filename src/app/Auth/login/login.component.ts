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
  loginForm: FormGroup;
  unsub: Subscription | undefined;


  constructor(private fb : FormBuilder, private _auth: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]]
    });
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
    this._auth.login(loginDto).subscribe();
    this.router.navigate(['/app']);
    console.log(loginDto);
  }


}
