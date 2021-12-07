import { Component, OnInit } from '@angular/core';
import {MdbModalService} from "mdb-angular-ui-kit/modal";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {RegisterUserDto} from "../shared/registerUser.dto";
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
  RegForm: FormGroup;
  Failed: boolean = false;

  constructor(private fb : FormBuilder, private _auth: AuthService, private router: Router) {
    this.RegForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
      password2: ['', [Validators.minLength(8), Validators.required]],
      tos: ['', [Validators.requiredTrue]]
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if(this.RegForm.get('password')?.value == this.RegForm.get('password2')?.value) {
      const userdto = {email: this.RegForm.get('email')?.value,
                       password: this.RegForm.get('password')?.value} as RegisterUserDto;
      this._auth.register(userdto).subscribe(data => data ? this.router.navigate(['/auth/sign-up/success']) : this.Failed = true);
    }
  }
}
