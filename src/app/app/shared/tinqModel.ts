import {TinqDto} from "./tinqDto";

export class TinqModel implements TinqDto{
  public id: number;
  public body: string;
  public title: string;
  public userId: number;

  constructor(id: number, userId: number, title: string, body: string) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
  }





}
