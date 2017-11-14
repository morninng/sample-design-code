import { TestBed, inject } from '@angular/core/testing';

import { UserStoreService, Gender, User } from './user-store.service';

import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { HttpClient } from '@angular/common/http';

describe('UserStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserStoreService],
      imports: [HttpClientModule, HttpClientTestingModule]
    });
  });

  it('user is set by set user and retrieved by get user', inject([UserStoreService], (service: UserStoreService) => {
    (service as any).set_user('111', {name: 'sss', gender: Gender.Men } );
    service.get_user('111').subscribe((data) => {
      expect(data.name).toBeTruthy('sss');
    });
  }));

  it('get user from http and  check the data existence', inject([UserStoreService, HttpClient, HttpTestingController],
                        (service: UserStoreService, http: HttpClient, httpMock: HttpTestingController) => {

    service.get_user('111').subscribe((data) => {
      service.get_user('111').subscribe((data2) => {
        expect(data2.name).toBeTruthy('sss');
      });
    });

    const req = httpMock.expectOne('http://localhost:3000/users/111');
    expect(req.request.method).toEqual('GET');
    req.flush({name: 'sss', gender: Gender.Men });

  }));

});


// https://stackoverflow.com/questions/35987055/how-to-write-unit-testing-for-angular-2-typescript-for-private-methods-with-ja


