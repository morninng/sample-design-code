
import {AaaVM, AaaDb, convert_Aaa_DB_Vm} from './aaa';
import {RoleType, RoleFullName, get_full_rolename} from './role';


describe('Aaa data test', () => {


  it('Aaa date is correct', () => {

    const aaa_data: AaaDb = {
        time: 1485795600000,
        role: [RoleType.PM, RoleType.MG]
      };
    const aaa_vm = convert_Aaa_DB_Vm(aaa_data);
    expect(aaa_vm.date_time.toISOString()).toBe( new Date(1485795600000).toISOString());

  });

  it('Aaa role is correct', () => {

    const aaa_data: AaaDb = {
        time: 1485795600000,
        role: [RoleType.PM, RoleType.MG]
      };
    const aaa_vm = convert_Aaa_DB_Vm(aaa_data);
    expect(aaa_vm.full_role[0]).toBe('Prime Minister');

  });



});
