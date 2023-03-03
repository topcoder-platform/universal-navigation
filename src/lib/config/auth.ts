export type AUTH_USER_ROLE =
  | 'Topcoder User'
  | 'Topcoder Member'
  | 'Topcoder Customer'

export const AUTH_MEMBER_ROLES: AUTH_USER_ROLE[] = ['Topcoder User', 'Topcoder Member'];
export const AUTH_CUSTOMER_ROLES: AUTH_USER_ROLE[] = ['Topcoder Customer'];

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
