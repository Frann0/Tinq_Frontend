
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";


@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
