import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConvertUser_Db_Vm, UserDb, UserVm } from './user';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  findUser(id: string): Observable<UserVm> {


    // https://www.webprofessional.jp/mock-rest-apis-using-json-server/
    // json-server --watch user.json

    const url = 'http://localhost:3000/users/' + id;

    return this.http.get<UserDb>(url)
        .map( (data: UserDb) => ConvertUser_Db_Vm(data) )
        .delay(2000);
  }

}
