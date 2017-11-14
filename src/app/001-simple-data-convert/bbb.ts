
import {RoleType, RoleFullName, get_full_rolename} from './role';

// サーバでは、number型で登録

export interface BbbDb {
    time: number;
    role: RoleType[];
}

// 表示では、Dateに再変換して表示

export interface BbbVM {
    date_time: Date;
    full_role: string[];
}

abstract class InterfaceAcapter<T, U> {
    abstract adapt(data: T): U;
}

export class BbbAdapter implements InterfaceAcapter<BbbDb, BbbVM> {

    constructor() {}

    adapt(in_data: BbbDb) {
        const date_time: Date = new Date(in_data.time);
        const full_role: string[] = in_data.role.map(get_full_rolename);
        return {date_time, full_role};
    }

}

