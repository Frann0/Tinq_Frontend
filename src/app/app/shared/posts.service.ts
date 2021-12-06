import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TinqDto } from './tinqDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts$: any;
  constructor(private _http: HttpClient) {}

  getAll(): Observable<TinqDto[]> {
    this.posts$ = this._http.get<TinqDto[]>(environment.api + '/posts');
    return this.posts$;
  }

  createPost(tinqDto: TinqDto) {
    this._http
      .post<TinqDto>(
        environment.api +
          `/Post?titleText=${encodeURI(tinqDto.title)}&bodyText=${encodeURI(tinqDto.body)}&userId=${tinqDto.userId}`,
        null
      )
      .subscribe(
        (response) => console.log(response),
        (err) => console.log(err)
      );
      this.getAll();
  }

//TODO need to find some way to update posts
  updatePost(tinqDto: TinqDto) {
    this._http
      .patch<TinqDto>(
        environment.api +
          `/Post?
          titleText=${encodeURI(tinqDto.title)}
          &
          bodyText=${encodeURI(tinqDto.body)}
          &
          Id=${tinqDto.id}`,
        null
      )
      .subscribe(
        (response) => console.log(response),
        (err) => console.log(err)
      );
      this.getAll();
  }

  deletePost(tinqDto: TinqDto) {
    this._http
      .delete<TinqDto>(
        environment.api +
          `/del/${tinqDto.id}`
      )
      .subscribe(
        (response) => console.log(response),
        (err) => console.log(err)
      );
      this.getAll();
  }
}
