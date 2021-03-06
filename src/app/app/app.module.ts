import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SearchComponent } from './search/search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import { DialogComponent } from './post/dialog/dialog.component';
import {PostComponent} from "./post/post.component";
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AdminComponent } from './user/admin/admin.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { EditUserComponent } from './user/admin/edit-user/edit-user.component';
import { ConfirmationComponent } from './user/admin/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    PostComponent,
    DialogComponent,
    UserComponent,
    ProfileComponent,
    AdminComponent,
    EditUserComponent,
    ConfirmationComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgbModule,
  ]
})
export class AppModule { }
