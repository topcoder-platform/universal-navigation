export declare type AUTH_USER_ROLE = 'Topcoder User' | 'Topcoder Member' | 'Topcoder Customer';
export declare const AUTH_MEMBER_ROLES: AUTH_USER_ROLE[];
export declare const AUTH_CUSTOMER_ROLES: AUTH_USER_ROLE[];
export declare const MEMBER_ROUTE_GUARD: {
    auth: {
        requireRoles: AUTH_USER_ROLE[];
    };
};
export declare const CUSTOMER_ROUTE_GUARD: {
    auth: {
        requireRoles: AUTH_USER_ROLE[];
    };
};
