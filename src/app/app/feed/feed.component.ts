
import {Component, OnInit} from '@angular/core';
import {TinqModel} from "../shared/tinqModel";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  username: string = "test";
  testTinqs: TinqModel[];
  filteredTinqs: TinqModel[] | undefined;

  content: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque diam tortor, varius ac tempor sed, viverra at orci. Ut in felis mauris. Phasellus ac ullamcorper lorem. Praesent consectetur lorem leo, eu aliquam lorem elementum sit amet. Morbi vitae ultricies massa, at pretium lacus. Donec vitae consectetur diam. Sed sed sodales sapien. Pellentesque pellentesque euismod risus, et egestas nibh euismod ac. Quisque pellentesque laoreet purus, et fermentum eros ornare eu. Nulla eu placerat enim. Integer malesuada velit sit amet dolor rutrum aliquam. Nullam sit amet placerat lectus. Morbi id rhoncus libero.\n" +
    "\n" +
    "Quisque efficitur nulla leo, sed pulvinar lacus sollicitudin ut. Proin dignissim luctus consectetur. Etiam commodo libero lacus, vitae tristique urna auctor a. Praesent ac urna elit. Aenean mattis sapien nec lorem dictum hendrerit. Mauris eu massa sed tellus venenatis sollicitudin eu ac velit. Donec maximus volutpat congue.";

  tags: string[] = ["#Lorem", "#ipsum","#Lorem", "#ipsum","#Lorem", "#ipsum","#Lorem", "#ipsum","#Lorem", "#ipsum","#Lorem", "#ipsum"]

  tinq: TinqModel | undefined;

  public isAdmin: boolean = true;

  public element: SafeHtml | undefined;

  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute) {
    this.testTinqs = [
    {username: "username", content: this.content, tags: this.tags},
    {username: "username", content: this.content, tags: this.tags},
    {username: "username", content: this.content, tags: ["test"]},
    {username: "username", content: this.content, tags: this.tags},
    {username: "username", content: this.content, tags: this.tags},
    {username: "username", content: this.content, tags: this.tags},
    {username: "username", content: this.content, tags: this.tags},
    {username: "username", content: this.content, tags: this.tags},

  ]}


  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if (params['searchTerm']){
        this.filteredTinqs = this.testTinqs.filter(tinq => tinq.tags.toString().toLowerCase().includes(params['searchTerm'].toLowerCase()))
      } else{
        this.filteredTinqs = this.testTinqs;
      }
    });
    document.body.style.backgroundColor = "white";

  }

}
