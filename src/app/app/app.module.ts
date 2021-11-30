import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import { DialogComponent } from './post/dialog/dialog.component';
import {PostComponent} from "./post/post.component";


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    PostComponent,
    DialogComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
  ]
})
export class AppModule { }
