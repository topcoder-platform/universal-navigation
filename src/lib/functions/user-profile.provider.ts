import type { AuthUser } from '../../main';
import { AUTH_USER_ROLE, AUTH_USER_ROLE_VALUES } from '../config/auth';
import { TC_API_HOST } from '../config';
import { getAuthJwtDomainProp, getRequestAuthHeaders } from './auth-jwt';

export type fetchUserProfileFn = () => AuthUser | null;

// store fetched data in a local cache (de-duplicate immediate api calls)
const localCache: any = {};

// get the user's handle from the jwt data
export const getJwtUserhandle = (): AuthUser['handle'] | undefined => {
  return getAuthJwtDomainProp<AuthUser['handle'] | undefined>('handle')
}

// get the user's roles from the jwt data
export const getJwtUserRoles = (): AuthUser['roles'] | undefined => {
  return getAuthJwtDomainProp<AuthUser['roles'] | undefined>('roles')
}

/**
 * Reads the current tcjwt cookie and returns the roles recognized by navigation guards.
 * Administrator roles are matched case-insensitively and returned in their canonical form.
 * Takes no parameters; unrelated roles are omitted from the returned array.
 * @returns Recognized navigation roles, or an empty array when no roles are present.
 * @throws If the tcjwt cookie cannot be decoded or contains invalid JSON.
 */
export const getUserAppRoles = (): AuthUser['roles'] => {
  return (getJwtUserRoles() ?? [])
    .map(role => role.toLowerCase() === AUTH_USER_ROLE.administrator ? AUTH_USER_ROLE.administrator : role)
    .filter(role => AUTH_USER_ROLE_VALUES.includes(role as AUTH_USER_ROLE))
}

export const checkUserAppRole = (role: AUTH_USER_ROLE): boolean => (
  getUserAppRoles().indexOf(role) > -1
);

/**
 * Fetches the user profile based on the handle that's stored in the jwt cookie
 * @returns Promise<AuthUser>
 */
export const fetchUserProfile = async (): Promise<AuthUser | undefined> => {
  const userHandle = getJwtUserhandle();

  if (!userHandle) {
    return undefined
  }

  if (localCache[userHandle]) {
    return await localCache[userHandle];
  }


  let resolve: (value: AuthUser) => void = () => {};
  localCache[userHandle] = new Promise((r) => {resolve = r});

  const requestUrl: string = `${TC_API_HOST}/members/${userHandle}`;
  const request = fetch(requestUrl, {headers: {...getRequestAuthHeaders()}});

  const response = await (await request).json();
  resolve({
    ...response,
    photoURL: undefined,
    photoUrl: response.photoURL,
    roles: getJwtUserRoles(),
  });

  return localCache[userHandle];
}
