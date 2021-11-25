import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from "./index/body/body.component";
import {IndexComponent} from "./index/index.component";

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: 'index', component: IndexComponent},
  { path: 'auth', loadChildren: ()=> import('./Auth/auth.module').then(f => f.AuthModule)},
  { path: 'app', loadChildren: ()=> import('./app/app.module').then(f => f.AppModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
