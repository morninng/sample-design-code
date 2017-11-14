import { Injectable } from '@angular/core';

import {UserAuthService} from './user-auth.service';

import { RoomStatusDb, RoomStatusVm, own_room_status_check } from './room-status';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {EffectService} from './effect.service';

import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/scan';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/scan';

@Injectable()
export class RoomStatusService {

  private room_status_db_subject: Subject<RoomStatusDb>;
  room_status_vm$: Observable<RoomStatusVm>;
  effect$: Observable<RoomStatusVm>;

  constructor(private userAuthService: UserAuthService, private effect: EffectService) {

    this.room_status_db_subject = new BehaviorSubject({name: '' , users: []});

    this.room_status_vm$ =
    Observable.combineLatest(this.room_status_db_subject, this.userAuthService.own_user$,
      (room_status, own_user) => {
        return own_room_status_check(room_status, own_user);
      });


    this.effect$ =
    this.room_status_vm$.scan((current_status: RoomStatusVm , new_status: RoomStatusVm) => {
      if (current_status.is_own_room && !new_status.is_own_room ) {
        this.effect.logout();
      }
      if (!current_status.is_own_room && new_status.is_own_room ) {
        this.effect.login();
      }
      return new_status;
    }, {name: '' , users: [], is_own_room: false} );

  }


  // assume it is sent from the server
  set_room_user() {
    const room_status: RoomStatusDb = { name: 'aa', users: ['111', '222', '333']   };
    this.room_status_db_subject.next(room_status);
  }


}
