import type { AuthUser } from '../../main';
import { AUTH_USER_ROLE, AUTH_USER_ROLE_VALUES } from '../config/auth';
import { TC_API_V5_HOST } from '../config';
import { getAuthJwtDomainProp, getRequestAuthHeaders } from './auth-jwt';

export type fetchUserProfileFn = () => AuthUser | null;

// store fetched data in a local cache (de-duplicate immediate api calls)
const localCache = {};

// get the user's handle from the jwt data
export const getJwtUserhandle = (): AuthUser['handle'] | undefined => {
  return getAuthJwtDomainProp<AuthUser['handle'] | undefined>('handle')
}

// get the user's roles from the jwt data
export const getJwtUserRoles = (): AuthUser['roles'] | undefined => {
  return getAuthJwtDomainProp<AuthUser['roles'] | undefined>('roles')
}

// get the user roles that match the config/auth's user roles definitions
export const getUserAppRoles = (): AuthUser['roles'] | undefined => {
  return (getJwtUserRoles() ?? []).filter(d => AUTH_USER_ROLE_VALUES.includes(d as AUTH_USER_ROLE))
}

/**
 * Fetches the user profile based on the handle that's stored in the jwt cookie
 * @returns Promise<>
 */
export const fetchUserProfile = async (): Promise<AuthUser> => {
  const userHandle = getJwtUserhandle();

  if (!userHandle) {
    return
  }

  if (localCache[userHandle]) {
    return await localCache[userHandle];
  }


  let resolve: (value: AuthUser) => void;
  localCache[userHandle] = new Promise((r) => {resolve = r});

  const requestUrl: string = `${TC_API_V5_HOST}/members/${userHandle}`;
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
