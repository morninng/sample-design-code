import { Injectable } from '@angular/core';

export interface User {
  id: string;
  name: string;
}
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';



@Injectable()
export class UserAuthService {

  own_user_subject: Subject<User | null>;
  own_user$: Observable<User>;

  constructor() {
    this.own_user_subject = new BehaviorSubject( {id: null, name: '' } );
    this.own_user$ = this.own_user_subject.asObservable();

    setTimeout(() => {
      this.own_user_subject.next({id: '111', name: 'yuta'});
    }, 2000);

   }

}
