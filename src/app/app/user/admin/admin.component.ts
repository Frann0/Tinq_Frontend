import {AfterViewInit, Component, OnInit, PipeTransform, ViewChild} from '@angular/core';
import {AuthService} from "../../../Auth/shared/auth.service";
import {Observable, pipe, startWith} from "rxjs";
import {TableUserDto} from "../../../Auth/shared/tableUser.dto";
import {FormControl} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {UserServiceService} from "../../../shared/user-service.service";
import {ConfirmationComponent} from "./confirmation/confirmation.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit{

  //@ts-ignore
  allUsers: Observable<TableUserDto[]>;
  searchTerm: string="";
  constructor(private _auth : AuthService, private dialog: MatDialog, private _user : UserServiceService) {

  }

  ngOnInit(): void {
    this.allUsers = this._auth.getAllUsersWithPermissions();
    document.body.style.backgroundColor = 'white';
  }

  openDialog(selectedUser: TableUserDto) {
    this.dialog.open(EditUserComponent).componentInstance.selectedUser = selectedUser;
  }

  isAdmin(user: TableUserDto): boolean{
    return this._user.isAdminByUserObject(user);
  }

  Ban(user : TableUserDto) {
    this.dialog.open(ConfirmationComponent).componentInstance.selectedUser = user;
  }
}
