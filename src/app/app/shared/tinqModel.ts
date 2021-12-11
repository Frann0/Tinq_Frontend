import {TinqDto} from "./tinqDto";
import {TagDTO} from "./tagDTO";

export class TinqModel implements TinqDto{
  public id: number = -1;
  public body: string = "";
  public title: string = "";
  public userId: number = -1;
  public tags!: TagDTO[];
}
