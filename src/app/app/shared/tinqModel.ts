import {TinqDto} from "./tinqDto";

export class TinqModel implements TinqDto{
  public content: string;
  public tags: string[];
  public username: string;

  constructor(username: string, content: string, tags: string[]) {
    this.username = username;
    this.content = content;
    this.tags = tags;
  }
}
