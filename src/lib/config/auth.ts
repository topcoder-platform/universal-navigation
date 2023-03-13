export enum AUTH_USER_ROLE {
  talent = 'Topcoder Talent',
  customer = 'Topcoder Customer',
}

export const AUTH_TALENT_ROLES: AUTH_USER_ROLE[] = [AUTH_USER_ROLE.talent];
export const AUTH_CUSTOMER_ROLES: AUTH_USER_ROLE[] = [AUTH_USER_ROLE.customer];

export const TALENT_ROUTE_GUARD = {
  auth: {
    requireRoles: AUTH_TALENT_ROLES,
  },
};

export const CUSTOMER_ROUTE_GUARD = {
  auth: {
    requireRoles: AUTH_CUSTOMER_ROLES,
  },
};
