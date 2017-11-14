import { Component, OnInit } from '@angular/core';
import { ChatService, Chat } from './../chat.service';
import {Observable} from 'rxjs/Observable';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chat$: Observable<Chat[]>;

  constructor( private chatService: ChatService) { }

  ngOnInit() {
    this.chat$ = this.chatService.chat$;
  }

  add() {
    const chat: Chat = {
      id: Date.now(),
      content: 'aaa'
    };
    this.chatService.add(chat);
  }

  delete(id) {
    this.chatService.delete(id);
  }

}
