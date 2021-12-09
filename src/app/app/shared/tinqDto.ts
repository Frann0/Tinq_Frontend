import {TagDTO} from "./tagDTO";

export interface TinqDto {
  id: number;
  title: string;
  body: string;
  tags: TagDTO[];
  userId: number;
}
