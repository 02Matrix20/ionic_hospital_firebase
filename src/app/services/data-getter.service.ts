import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface UserGroup {
  id: number;
  name: string;
  docName: string;
  year: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataGetterService {

  baseUrl = 'http://localhost/api/';
  userGroups = [];
  users = [];
  accounts = [];

  private userName = '';
  private token = '';

  constructor(private http: HttpClient) { }

  checkUser(user) {
    return this.http.post<any>(this.baseUrl + '?action=login', user);
  }

  getUser() {
    return this.userName;
  }

  editUserGroup(userGroup) {
    return this.http.post<any>(
      this.baseUrl + '?action=edit-usergroup&token=' + this.token, userGroup
    );
  }

  setUser(name: string) {
    this.userName = name;
  }

  setToken(token: string) {
    this.token = token;
  }

  getUserGroups() {
    return this.http.get<any>(this.baseUrl + '?action=get-usergroups&token=' + this.token);
  }

  userExists(name: string) {
    return of(this.users.filter(elem => {
      return elem.name === name;
    }));
  }

  addUserGroup(newUserGroup) {
    return this.http.post<any>(
      this.baseUrl + '?action=add-usergroup&token=' + this.token, newUserGroup
    );
  }

  deleteUserGroup(UserGroup) {
    return this.http.post<any>(
      this.baseUrl + '?action=delete-usergroup&token=' + this.token, UserGroup
    );
  }

  getUsers(id: number) {
    return this.http.get<any>(
      this.baseUrl + `?action=get-users&usergroup=${id}`+ `&token=${this.token}`
    );
  }



}
