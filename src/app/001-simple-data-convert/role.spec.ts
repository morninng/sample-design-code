import { get_full_rolename, RoleType } from './role';

describe('role mapping test', () => {


  it('full name confirmation, role exist', () => {
    const full_name = get_full_rolename(RoleType.PM) ;
    expect(full_name).toBe('Prime Minister');
  });

  it('full name not exist', () => {
    const full_name = get_full_rolename(RoleType['PMa']);
    expect(full_name).toBe('');
  });



});
