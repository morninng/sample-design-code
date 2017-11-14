
export enum RoleType {
    PM = 'PM',
    MG = 'MG'
}

export enum RoleFullName {
    PM = 'Prime Minister',
    MG = 'Member Government'
}

// データに燗するpure 関数は、外だし

export function get_full_rolename(role_type: RoleType): RoleFullName {
    return RoleFullName[role_type] || '';
}

