
import {Component, OnInit} from '@angular/core';
import {TinqModel} from "../shared/tinqModel";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {UserDto} from "../../Auth/shared/user.dto";
import {TinqDto} from "../shared/tinqDto";
import {PostsService} from "../shared/posts.service";
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment.prod';
import { catchError, map, Observable } from 'rxjs';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  filteredTinqs: Observable<TinqModel[]> | undefined;
  posts$: Observable<TinqModel[]> | undefined;
  error: any;

  public isAdmin: boolean = true;

  public element: SafeHtml | undefined;

  constructor(private _postsService : PostsService, private sanitizer: DomSanitizer, private route: ActivatedRoute, private _http: HttpClient) {

  }

  ngOnInit(): void {

    this.posts$ = this._postsService.getAll()
      .pipe(
        catchError(err => {
          this.error = err;
          throw err;
        })
      );

    this.route.params.subscribe(params =>{
      if (params['searchTerm']){
        this.filteredTinqs = this.posts$?.pipe(
            map( results => results.filter(r => r.title.toLowerCase().includes(params['searchTerm'].toLowerCase())) )
          );
      } else {
        this.filteredTinqs = this.posts$;
      }
    })

    document.body.style.backgroundColor = "white";

  }

  debug(string: string) {
    console.log(string);
  }
}
