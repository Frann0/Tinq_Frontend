import { Component, OnInit } from '@angular/core';
import {TableUserDto} from "../../../../Auth/shared/tableUser.dto";
import {UserServiceService} from "../../../../shared/user-service.service";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  selectedUser: TableUserDto | undefined;

  constructor(private _user : UserServiceService) { }

  ngOnInit(): void {
  }

  ban(){
    if (this.selectedUser) {
      this._user.ban(this.selectedUser);
    }
  }

}
