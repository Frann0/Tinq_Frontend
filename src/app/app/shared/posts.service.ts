import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {TinqDto} from "./tinqDto";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _http: HttpClient) {}

  getAll(): Observable<TinqDto[]> {
    return this._http
      .get<TinqDto[]>(environment.api + '/Post');
  }
}
