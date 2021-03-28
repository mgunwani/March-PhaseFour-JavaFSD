import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id: any;
  user: User = new User();

  constructor(private _route: ActivatedRoute, private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params.id;
    this._httpClient.get<User>("http://jsonplaceholder.typicode.com/users/" + this.id).subscribe((result) => {
      this.user = result;
      console.log(this.user);
    }, (errors) => { console.log(errors); })
    console.log(this.id);
  }

}
