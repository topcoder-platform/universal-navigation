import type { AuthUser } from '../../main';
import { TC_API_V5_HOST } from '../config/nav-menu';

export type fetchUserProfileFn = () => AuthUser | null;

// store fetched data in a local cache (de-duplicate immediate api calls)
const localCache = {};

// JWT to JS data object
function parseJwt (token: string) {
  const base64Url = token.split('.')[1];
  const base64fixed = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(window.atob(base64fixed).split('').map(c => (
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  )).join(''));

  return JSON.parse(jsonPayload);
}

// get the JWT authentication cookie value
function getAuthJwtCookie() {
  return (document.cookie.match(/tcjwt=([^;]+)/) ?? []) [1];
}

// Get the authentication data from the jwt auth cookie
function getAuthData() {
  return parseJwt(getAuthJwtCookie());
}

// get the user's handle from the jwt data
export const getJwtUserhandle = (): AuthUser['handle'] | undefined => {
  const handleEntry = Object.entries((getAuthData() ?? {})).find((entry) => (
    entry[0].match(/^https?:\/\/.*\/handle$/i)
  )) ?? [];

  return handleEntry[1] as AuthUser['handle'] | undefined;
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
  const requestAuth = {'Authorization': `Bearer ${getAuthJwtCookie()}`};
  const request = fetch(requestUrl, {headers: {...requestAuth}});

  const response = await (await request).json();
  resolve({...response, photoURL: undefined, photoUrl: response.photoURL});

  return localCache[userHandle];
}
