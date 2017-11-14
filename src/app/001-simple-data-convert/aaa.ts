
import {RoleType, RoleFullName, get_full_rolename} from './role';

// サーバでは、number型で登録

export interface AaaDb {
    time: number;
    role: RoleType[];
}

// 表示では、Dateに再変換して表示

export interface AaaVM {
    date_time: Date;
    full_role: string[];
}

export function convert_Aaa_DB_Vm(in_data: AaaDb ): AaaVM {
    const date_time: Date = new Date(in_data.time);
    const full_role: string[] = in_data.role.map(get_full_rolename);
    return {date_time, full_role};
}
