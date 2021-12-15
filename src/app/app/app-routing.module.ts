import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../Auth/login/login.component";
import {AppComponent} from "./app.component";
import {FeedComponent} from "./feed/feed.component";
import {AuthGuard} from "../Auth/auth.guard";
import {UserComponent} from "./user/user.component";
import {AdminComponent} from "./user/admin/admin.component";
import {AdminGuard} from "../Auth/admin.guard";

const routes: Routes = [
  {path:'', component: FeedComponent, canActivate: [AuthGuard]},
  {path:'search/:searchTerm', component:FeedComponent, canActivate: [AuthGuard]},
  {path:'user/profile', component:UserComponent, canActivate: [AuthGuard]},
  {path:'user/admin', component:AdminComponent, canActivate: [AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
