export enum Gender {
    Men = 'Men',
    Women  = 'Women'
}

export interface UserDb {
    id: string;
    name: string;
    gender: Gender;
}

export interface UserVm extends UserDb {
    honorific_name: string;
}

export function ConvertUser_Db_Vm(in_user_data: UserDb): UserVm {

    let honorific_name: string = in_user_data.name;

    switch (in_user_data.gender) {
        case Gender.Men:
        honorific_name = 'Mr.' + honorific_name;
        break;
        case Gender.Women :
        honorific_name = 'Mrs.' + honorific_name;
        break;
    }

    return {
        id: in_user_data.id,
        name: in_user_data.name,
        gender: in_user_data.gender,
        honorific_name
    };
}
