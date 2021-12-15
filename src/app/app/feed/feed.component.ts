import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RegisterUserDto } from '../../Auth/shared/registerUser.dto';
import { TinqDto } from '../shared/tinqDto';
import { PostsService } from '../shared/posts.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { TinqModel } from '../shared/tinqModel';
import { LoggedInUserDto } from '../../Auth/shared/loggedInUser.dto';
import { UserServiceService } from '../../shared/user-service.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  filteredTinqs: Observable<TinqModel[]> | undefined;
  posts$: Observable<TinqModel[]> | undefined;
  error: any;

  public str = '';

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

  ngOnInit(): void {
    this.posts$ = this._postsService.getAll();

    this.route.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.filteredTinqs = this._postsService.getPostsBySearchQuery(
          params['searchTerm']
        );
      } else {
        this.filteredTinqs = this.posts$;
      }
    });
    this.loggedInUser = JSON.parse(<string>localStorage.getItem('user'));
    this.isAdmin = this._user.isAdmin();

    console.log(this.loggedInUser);
    document.body.style.backgroundColor = 'white';
  }

  public deletePost(id: number) {
    var tinqDto: TinqDto = new TinqModel();
    tinqDto.id = id;
    this._postsService.deletePost(tinqDto);
    window.location.reload();
  }

  public getUserId(): number{
    return this.loggedInUser?.id??0
  }

  debug(string: string) {
    console.log(string);
  }
}
