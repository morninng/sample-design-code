import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataConvertComponent } from './001-simple-data-convert/data-convert.component';
import { ObservableDataShowComponent } from './002-observable-data-show/observable-data-show.component';

import {HttpClientModule} from '@angular/common/http';

import {UserService} from './002-observable-data-show/user.service';
import { UserShowComponent } from './003-store-userdata/user-show/user-show.component';
import { TestPlateComponent } from './003-store-userdata/test-plate/test-plate.component';

import {UserStoreService} from './003-store-userdata/user-store.service';
import { ChatComponent } from './004-store-behaviorsubject/chat/chat.component';
import {ChatService} from './004-store-behaviorsubject/chat.service';


import { ChatRoomComponent } from './005-state-comparison/chat-room/chat-room.component';

import {RoomStatusService} from './005-state-comparison/room-status.service';
import {UserAuthService} from './005-state-comparison/user-auth.service';

import {EffectService} from './005-state-comparison/effect.service';


import {ChatRoomCombineComponent} from './006-combine-stream/chat-room/chat-room-combine.component';
import {UserAuthCombineService} from './006-combine-stream/user-auth-combine.service';
import {RoomStatusCombineService} from './006-combine-stream/room-status-combine.service';

@NgModule({
  declarations: [
    AppComponent,
    DataConvertComponent,
    ObservableDataShowComponent,
    UserShowComponent,
    TestPlateComponent,
    ChatRoomComponent,
    ChatComponent,
    ChatRoomCombineComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    UserStoreService,
    RoomStatusService,
    UserAuthService,
    EffectService,
    ChatService,
    RoomStatusCombineService,
    UserAuthCombineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
