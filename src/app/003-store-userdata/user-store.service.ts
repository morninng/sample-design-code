import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import 'rxjs/add/operator/publishLast';
// import 'rxjs/add/operator/refCount';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/retry';

export enum Gender {
  Men = 'Men',
  Women  = 'Women'
}

export interface User {
  name: string;
  gender: Gender;
}


@Injectable()
export class UserStoreService {

  user_data: {[key: string]: User} = {};

  constructor(private http: HttpClient) { }

  private set_user(user_id, user_data: User) {
    this.user_data[user_id] = user_data;
  }


  get_user(user_id: string): Observable<User> {

    if (this.user_data[user_id]) {
      return Observable.of( this.user_data[user_id] );
    }

    const url = 'http://localhost:3000/users/' + user_id;

    return this.http.get<User>(url)
        .do( (user_data: User) => this.set_user( user_id , user_data) )
        .catch((err: HttpErrorResponse) => {
          return Observable.throw('fail to get user data');
        });
  }

  // https://stackoverflow.com/questions/45426907/type-object-is-not-assignable-to-type-with-new-httpclient-httpgetmodule


}
