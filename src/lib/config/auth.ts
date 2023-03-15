export enum AUTH_USER_ROLE {
  talent = 'Topcoder Talent',
  customer = 'Topcoder Customer',
  staff = 'Topcoder Staff',
  noRole = 'no-role',
}

export const AUTH_USER_ROLE_VALUES = Object.values(AUTH_USER_ROLE);

export const AUTH_TALENT_ROLES: AUTH_USER_ROLE[] = [AUTH_USER_ROLE.talent, AUTH_USER_ROLE.staff, AUTH_USER_ROLE.noRole];
export const AUTH_CUSTOMER_ROLES: AUTH_USER_ROLE[] = [AUTH_USER_ROLE.customer, AUTH_USER_ROLE.staff, AUTH_USER_ROLE.noRole];
export const AUTH_STAFF_ROLES: AUTH_USER_ROLE[] = [AUTH_USER_ROLE.staff];

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

export const STAFF_ROUTE_GUARD = {
  auth: {
    requireRoles: AUTH_STAFF_ROLES,
  },
};
