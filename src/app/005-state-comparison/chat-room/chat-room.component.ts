import { Component, OnInit } from '@angular/core';

import {RoomStatusService} from './../room-status.service';


import { RoomStatusVm } from './../room-status';
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

  set_room_user() {
    this.roomStatusService.set_room_user();
  }

}
