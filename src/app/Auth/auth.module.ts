
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import { LoginComponent } from './login/login.component';
import {AppModule} from "../app.module";
import {SharedModule} from "../shared/shared.module";
import { SignUpSuccessComponent } from './sign-up/sign-up-success/sign-up-success.component';


@NgModule({
  declarations: [SignUpComponent, LoginComponent, SignUpSuccessComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
