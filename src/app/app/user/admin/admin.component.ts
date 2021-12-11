import {AfterViewInit, Component, OnInit, PipeTransform, ViewChild} from '@angular/core';
import {AuthService} from "../../../Auth/shared/auth.service";
import {Observable, pipe, startWith} from "rxjs";
import {TableUserDto} from "../../../Auth/shared/tableUser.dto";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit{

  //@ts-ignore
  allUsers: TableUserDto[];
  filter = new FormControl('');
  constructor(private _auth : AuthService) {

  }

  ngOnInit(): void {
    this._auth.getAllUsers().subscribe(users => {
     console.log(users as TableUserDto[])
      this.allUsers = users as TableUserDto[]
    });
    document.body.style.backgroundColor = 'white';
  }

  search(text: string): TableUserDto[] {
    return this.allUsers.filter(user => {
      const term = text.toLowerCase();
      return user.id.toString().toLowerCase().includes(term)
        || user.username.toLowerCase().includes(term)
        || user.email.toLowerCase().includes(term);
    });
  }

}
