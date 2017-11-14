
export enum RoleType {
    PM = 'PM',
    MG = 'MG'
}

type RoleFullNameType = {
    [key in RoleType]: string;
};


export const RoleFullName: RoleFullNameType = {
    PM: 'Prime Minister',
    MG: 'Member Government'
};

// データに燗するpure 関数は、外だし

export function get_full_rolename(role_type: RoleType): string {
    return RoleFullName[role_type] || '';
}

