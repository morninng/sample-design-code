import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';

export interface ChatDb {
  id: number;
  content: string;
}

type ChatVm = ChatDb;

@Injectable()
export class ChatService {

  private chat_subject: BehaviorSubject<ChatDb[]>;
  public chat$: Observable<ChatVm[]>;

  constructor() {
    this.chat_subject = new BehaviorSubject([]);
    this.chat$ = this.chat_subject.asObservable();
   }

   get_chat$() {
     return this.chat$;
   }

   add(in_data: ChatDb) {
     const new_chat = _.cloneDeep(this.chat_subject.getValue());
     new_chat.push( _.cloneDeep(in_data));
     this.chat_subject.next(new_chat);
   }


   delete(chat_id: number) {
    const new_chat = _.cloneDeep(this.chat_subject.getValue());
    _.remove(new_chat, (el: ChatVm) =>  el.id === chat_id );
    this.chat_subject.next(new_chat);
   }

}
