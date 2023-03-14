export declare enum AUTH_USER_ROLE {
    talent = "Topcoder Talent",
    customer = "Topcoder Customer"
}
export declare const AUTH_USER_ROLE_VALUES: AUTH_USER_ROLE[];
export declare const AUTH_TALENT_ROLES: AUTH_USER_ROLE[];
export declare const AUTH_CUSTOMER_ROLES: AUTH_USER_ROLE[];
export declare const TALENT_ROUTE_GUARD: {
    auth: {
        requireRoles: AUTH_USER_ROLE[];
    };
};
export declare const CUSTOMER_ROUTE_GUARD: {
    auth: {
        requireRoles: AUTH_USER_ROLE[];
    };
};
