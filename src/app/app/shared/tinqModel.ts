import {TinqDto} from "./tinqDto";

export class TinqModel implements TinqDto{
  public id: number | undefined;
  public content: string;
  public tags: string[];
  public username: string;

  constructor(id: number, username: string, content: string, tags: string[]) {
    this.id = id;
    this.username = username;
    this.content = content;
    this.tags = tags;
  }


}
