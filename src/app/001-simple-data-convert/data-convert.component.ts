import { Component, OnInit } from '@angular/core';
import {RoleType, RoleFullName, get_full_rolename, RoleArray} from './role';
import {AaaVM, AaaDb, convert_Aaa_DB_Vm} from './aaa';
import {BbbVm, BbbDb, BbbAdapter } from './bbb';



@Component({
  selector: 'app-data-convert',
  templateUrl: './data-convert.component.html',
  styleUrls: ['./data-convert.component.css']
})
export class DataConvertComponent implements OnInit {

  aaa_vm: AaaVM;
  aaa_db: AaaDb = {
    time: 1485795600000,
    role: [RoleType.PM, RoleType.MG]
  };
  bbb_vm: BbbVm;
  bbb_db: BbbDb = {
    time: 1485795600000,
    role: [RoleType.PM, RoleType.MG]
  };


  constructor() {}

  ngOnInit() {

    console.log( get_full_rolename(RoleType.PM) );
    this.aaa_vm = convert_Aaa_DB_Vm(this.aaa_db);

    const bbb_obj = new BbbAdapter();
    this.bbb_vm = bbb_obj.adapt(this.bbb_db);

  }

}

