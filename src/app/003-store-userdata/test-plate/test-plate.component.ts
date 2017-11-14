import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

// import 'rxjs/add/operator/refCount';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-test-plate',
  templateUrl: './test-plate.component.html',
  styleUrls: ['./test-plate.component.css']
})
export class TestPlateComponent implements OnInit {

  delaied_subject: Subject<boolean>;
  delaied$: Observable<boolean>;

  constructor() {
    this.delaied_subject = new BehaviorSubject<boolean>(false);
    this.delaied$ = this.delaied_subject.asObservable();
   }

  ngOnInit() {
    Observable.of(true)
              .delay(3000)
              .subscribe( data => {
                this.delaied_subject.next( true );
                console.log('again');
            });
  }

}
