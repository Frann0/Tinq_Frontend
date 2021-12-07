import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {RegisterUserDto} from "../../Auth/shared/registerUser.dto";
import {TinqDto} from "../shared/tinqDto";
import {PostsService} from "../shared/posts.service";
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment.prod';
import { catchError, map, Observable } from 'rxjs';
import { TinqModel } from '../shared/tinqModel';
import {AuthService} from "../../Auth/shared/auth.service";
import {UserServiceService} from "../../shared/user-service.service";
import {LoggedInUserDto} from "../../Auth/shared/loggedInUser.dto";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnChanges {
  filteredTinqs: Observable<TinqModel[]> | undefined;
  posts$: Observable<TinqModel[]> | undefined;
  error: any;

  loggedInUser: LoggedInUserDto | undefined;
  public isAdmin: boolean = false;

  public element: SafeHtml | undefined;

  constructor(
    private _postsService: PostsService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private _http: HttpClient,
    private _user: UserServiceService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.posts$ = this._postsService.posts$;
  }

  ngOnInit(): void {
    this._postsService.getAll();

    this.route.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.filteredTinqs = this.posts$?.pipe(
          map((results) =>
            results.filter((r) =>
              r.title.toLowerCase().includes(params['searchTerm'].toLowerCase())
            )
          )
        );
      } else {
        this.filteredTinqs = this.posts$;
      }
    });
    this.loggedInUser = this._user._user;
    this.loggedInUser?.permissions.forEach((perm) =>{
      perm.id== 2 && perm.name == "Admin" ? this.isAdmin = true : this.isAdmin = false;
    });

    document.body.style.backgroundColor = 'white';
  }

  //TODO need some way to make it get id
  public deletePost() {
    var id = 2;
    var tinqDto: TinqDto = new TinqModel();
    tinqDto.id = id;
    this._postsService.deletePost(tinqDto);
  }

  debug(string: string) {
    console.log(string);
  }
}
