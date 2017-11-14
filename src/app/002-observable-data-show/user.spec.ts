
import { ConvertUser_Db_Vm, UserDb, UserVm, Gender } from './user';

describe('user mapping test', () => {


  it('MR is set to man', () => {

    const user: UserDb = {
        id: '1',
        name: 'ddd',
        gender: Gender.Men
    };

    const converted_user: UserVm = ConvertUser_Db_Vm(user) ;
    expect(converted_user.honorific_name).toBe('Mr.ddd');
  });


  it('Mrs is set to woman', () => {

        const user: UserDb = {
            id: '1',
            name: 'ddd',
            gender: Gender.Women
        };

        const converted_user: UserVm = ConvertUser_Db_Vm(user) ;
        expect(converted_user.honorific_name).toBe('Mrs.ddd');
      });

});
