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
    console.log(this.userForm.get("permission")?.value)
    //this._userService.editUser();
  }
  ngOnInit(): void {
  }

}
