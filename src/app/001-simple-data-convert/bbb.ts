
import {RoleType, RoleFullName, get_full_rolename, RoleArray} from './role';


/*　ここは、別ファイル */
interface InterfaceAcapter<T, U> {
    adapt(data: T): U;
}



// サーバからふってくるデータ構造
export interface BbbDb {
    time: number;
    role: RoleType[];
}

// Viewで用いるデータ構造
export interface BbbVm {
    date_time: Date;
    full_role: string[];
}


export class BbbAdapter implements InterfaceAcapter<BbbDb, BbbVm> {

    constructor() {}

    adapt(in_data: BbbDb): BbbVm {
        const date_time: Date = new Date(in_data.time);
        const full_role: string[] = in_data.role.map(get_full_rolename);
        return {date_time, full_role};
    }
}

