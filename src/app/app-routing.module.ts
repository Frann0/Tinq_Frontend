import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from "./index/body/body.component";

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: 'index', component: BodyComponent},
  { path: 'auth', loadChildren: ()=> import('./Auth/auth.module').then(f => f.AuthModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
