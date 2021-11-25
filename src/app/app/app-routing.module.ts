import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../Auth/login/login.component";
import {AppComponent} from "./app.component";
import {FeedComponent} from "./feed/feed.component";

const routes: Routes = [
  {path:'', component: FeedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
