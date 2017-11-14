import { Component, OnInit } from '@angular/core';
import { ChatService, ChatDb } from './../chat.service';
import {Observable} from 'rxjs/Observable';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chat$: Observable<ChatDb[]>;

  constructor( private chatService: ChatService) { }

  ngOnInit() {
    this.chat$ = this.chatService.get_chat$();
  }

  add() {
    const chat: ChatDb = {
      id: Date.now(),
      content: 'aaa'
    };
    this.chatService.add(chat);
  }

  delete(id) {
    this.chatService.delete(id);
  }

}
