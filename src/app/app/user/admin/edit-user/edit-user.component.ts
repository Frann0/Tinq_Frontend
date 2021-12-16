import { Component, OnInit } from '@angular/core';
import {TableUserDto} from "../../../../Auth/shared/tableUser.dto";
import {FormBuilder} from "@angular/forms";
import {UserServiceService} from "../../../../shared/user-service.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  selectedUser: TableUserDto | undefined;
  defaultValue = 'Registered User'
  userForm = this.fb.group({
    permission: ['']
  });
  constructor(private fb : FormBuilder, private _userService : UserServiceService) { }

  editUser() {
    if (this.userForm.get("permission")?.value == "Admin"){
      this._userService.assignAdmin(this.selectedUser);
    } else {
      this._userService.removeAdmin(this.selectedUser);
    }
    //this._userService.editUser();
  }
  ngOnInit(): void {
  }

}
