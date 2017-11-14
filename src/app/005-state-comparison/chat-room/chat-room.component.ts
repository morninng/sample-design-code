import { Component, OnInit } from '@angular/core';

import {RoomStatusService} from './../room-status.service';


import { RoomStatusVm, RoomStatusDb } from './../room-status';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  room_status_vm$: Observable<RoomStatusVm>;

  constructor(private roomStatusService: RoomStatusService) { }

  ngOnInit() {
    this.room_status_vm$ = this.roomStatusService.room_status_vm$;
    this.roomStatusService.effect$.subscribe();
  }

  set_room_user_a() {
    const room_status: RoomStatusDb = { name: 'aa', users: ['111', '222', '333']   };
    this.roomStatusService.set_room_user(room_status);
  }
  set_room_user_b() {
    const room_status: RoomStatusDb = { name: 'bb', users: [ '222', '333']   };
    this.roomStatusService.set_room_user(room_status);
  }


}
