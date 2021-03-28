import { UserService } from './../models/user.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title: string;
  message: string;

  userList: any;

  constructor(private _httpClient: HttpClient, private _userService: UserService) {
    this.title = this._userService.title;
    this.message = this._userService.getMessage();
  }

  ngOnInit(): void {
    // this._httpClient.get("http://jsonplaceholder.typicode.com/users").subscribe((result) => {
    //   this.userList = result;
    //   console.log(this.userList);
    // }, (errors => console.log('There are some errors : ' + errors)))

    this._userService.getAllUsers().subscribe((result) => {
      this.userList = result;
      console.log(this.userList);
    }, (errors => console.log('There are some errors : ' + errors)))
  }

}
