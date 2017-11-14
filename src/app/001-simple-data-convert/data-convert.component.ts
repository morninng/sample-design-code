import { Component, OnInit } from '@angular/core';
import {RoleType, RoleFullName, get_full_rolename} from './role';
import {AaaVM, AaaDb, convert_Aaa_DB_Vm} from './aaa';


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

  constructor() {}

  ngOnInit() {

    console.log( get_full_rolename(RoleType.PM) );

    const aaa_data: AaaDb = {
      time: 1485795600000,
      role: [RoleType.PM, RoleType.MG]
    };

    this.aaa_vm = convert_Aaa_DB_Vm(this.aaa_db);
  }

}

