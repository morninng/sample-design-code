

export interface RoomStatusDb  {
    name: string;
    users: string[];
}

export interface RoomStatusVm  {
    name?: string;
    users?: string[];
    is_own_room?: boolean;
}

import { User } from './user-auth-combine.service';


export function own_room_status_check(in_room_status: RoomStatusDb, own_user: User ): RoomStatusVm {

    if ( own_user && own_user.id && in_room_status.users.indexOf(own_user.id) > -1 ) {
        return {
            name: in_room_status.name,
            users: in_room_status.users,
            is_own_room: true
        };
    }
    return {
        name: in_room_status.name,
        users: in_room_status.users,
        is_own_room: false
    };
}



