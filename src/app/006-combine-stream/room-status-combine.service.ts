import { Injectable } from '@angular/core';

import {UserAuthCombineService} from './user-auth-combine.service';

import { RoomStatusDb, RoomStatusVm, own_room_status_check } from './room-status-combine';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
// import {EffectService} from './effect.service';

import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/scan';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/scan';

@Injectable()
export class RoomStatusCombineService {

  private room_status_db_subject: Subject<RoomStatusDb>;
  room_status_vm$: Observable<RoomStatusVm>;
  // effect$: Observable<RoomStatusVm>;

  constructor(private userAuthService: UserAuthCombineService) {

    this.room_status_db_subject = new BehaviorSubject({name: 'initial' , users: ['111']});

    this.room_status_vm$ =
    Observable.combineLatest(this.room_status_db_subject, this.userAuthService.own_user$,
      (room_status, own_user) => {
        return own_room_status_check(room_status, own_user);
      });

  }


  // assume it is sent from the server
  set_room_user(room_status: RoomStatusDb) {
    this.room_status_db_subject.next(room_status);
  }


}
