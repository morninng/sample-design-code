import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { UserVm } from './user';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observable-data-show',
  templateUrl: './observable-data-show.component.html',
  styleUrls: ['./observable-data-show.component.css'],
})
export class ObservableDataShowComponent implements OnInit {

  user$: Observable<UserVm>;

  constructor( private userService: UserService) { }

  ngOnInit() {
    this.user$ = this.userService.findUser('1');
  }

}
