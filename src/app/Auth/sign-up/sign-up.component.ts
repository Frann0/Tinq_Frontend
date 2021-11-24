import { Component, OnInit } from '@angular/core';
import {MdbModalService} from "mdb-angular-ui-kit/modal";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {UserDto} from "../shared/user.dto";
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
  RegForm: FormGroup;

  constructor(private fb : FormBuilder, private _auth: AuthService, private router: Router) {
    this.RegForm = this.fb.group({
      firstName:[ '',[Validators.minLength(1), Validators.required]],
      lastName: ['', [Validators.minLength(1), Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      tos: ['', [Validators.requiredTrue]]
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    const userdto = this.RegForm.value as UserDto;

    //this._auth.register(userdto);
    console.log(userdto);
    this.router.navigate(['/index']);
  }
}
