import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {LoginComponent} from "./login/login.component";
import {SignUpSuccessComponent} from "./sign-up/sign-up-success/sign-up-success.component";

const routes: Routes = [
  {path:'sign-up', component: SignUpComponent},
  {path:'sign-up/success', component: SignUpSuccessComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
