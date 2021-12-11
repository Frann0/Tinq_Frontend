import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {TinqModel} from "../../shared/tinqModel";
import {PostsService} from "../../shared/posts.service";
import {LoggedInUserDto} from "../../../Auth/shared/loggedInUser.dto";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  Username: string | undefined;
  posts$: Observable<TinqModel[]> | undefined;
  isAdmin: boolean = false;


  error: any;
  loggedInUser: LoggedInUserDto | undefined;

  constructor(private _postsService : PostsService) { }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(<string>localStorage.getItem("user"));
    this.Username = this.loggedInUser?.username;
    let userID = this.loggedInUser?.id;
    this.posts$=this._postsService.getPostsByUserID(userID);
  }



  debug(val: string) {
    console.log(val);
  }

  deletePost(id : number) {
    this._postsService.deletePostTest(id);
  }
}
