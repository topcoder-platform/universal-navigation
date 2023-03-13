export enum AUTH_USER_ROLE {
  member = 'Topcoder Member',
  customer = 'Topcoder Customer',
}

export const AUTH_MEMBER_ROLES: AUTH_USER_ROLE[] = [AUTH_USER_ROLE.member];
export const AUTH_CUSTOMER_ROLES: AUTH_USER_ROLE[] = [AUTH_USER_ROLE.customer];

export const MEMBER_ROUTE_GUARD = {
  auth: {
    requireRoles: AUTH_MEMBER_ROLES,
  },
};

export const CUSTOMER_ROUTE_GUARD = {
  auth: {
    requireRoles: AUTH_CUSTOMER_ROLES,
  },
};
