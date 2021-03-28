import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable()
export class UserService {

    constructor(private _httpClient: HttpClient) { }

    title: string = "User Management System";

    getMessage(): string {
        return "User List";
    }

    getAllUsers(): Observable<User[]> {
        return this._httpClient.get<User[]>("http://jsonplaceholder.typicode.com/users")
    }

}