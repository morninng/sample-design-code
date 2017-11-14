
import {RoleType, RoleFullName, get_full_rolename} from './role';


export interface AaaDb {
    time: number;
    role: RoleType[];
}
export interface AaaVM {
    date_time: Date;
    full_role: RoleFullName[];
}

export function convert_Aaa_DB_Vm(in_data: AaaDb ): AaaVM {
    const date_time: Date = new Date(in_data.time);
    const full_role: RoleFullName[] = in_data.role.map(get_full_rolename);
    return {date_time, full_role};
}
