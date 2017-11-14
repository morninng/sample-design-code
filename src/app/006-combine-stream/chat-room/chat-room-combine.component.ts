import { Component, OnInit } from '@angular/core';

import {RoomStatusCombineService} from './../room-status-combine.service';


import { RoomStatusVm, RoomStatusDb } from './../room-status-combine';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-chat-room-combine',
  templateUrl: './chat-room-combine.component.html',
  styleUrls: ['./chat-room-combine.component.css']
})
export class ChatRoomCombineComponent implements OnInit {

  room_status_vm$: Observable<RoomStatusVm>;

  constructor(private roomStatusService: RoomStatusCombineService) { }

  ngOnInit() {
    this.room_status_vm$ = this.roomStatusService.room_status_vm$;
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
