import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomCombineComponent } from './chat-room-combine.component';

describe('ChatRoomComponent', () => {
  let component: ChatRoomCombineComponent;
  let fixture: ComponentFixture<ChatRoomCombineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRoomCombineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomCombineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
