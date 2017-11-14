import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User, UserStoreService} from './../user-store.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {

  @Input() user_id;
  user$: Observable<User>;

  constructor(private userStoreService: UserStoreService) { }

  ngOnInit() {

    this.user$ = this.userStoreService.get_user(this.user_id);

  }

}
