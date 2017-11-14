import { Injectable } from '@angular/core';

@Injectable()
export class EffectService {

  constructor() { }


  login() {
    console.log('side effect, login');
  }

  logout() {
    console.log('side effect, login');
  }

}
