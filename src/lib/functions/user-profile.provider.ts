import type { AuthUser } from '../../main';
import { TC_API_V5_HOST } from '../config/nav-menu';

export type fetchUserProfileFn = () => AuthUser | null;

const localCache = {};

function parseJwt (token: string) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch {}
}
function getAuthJwt() {
  return (document.cookie.match(/tcjwt=([^;]+)/) ?? []) [1];
}

function getAuthData() {
  return parseJwt(getAuthJwt());
}

export const getJwtUserhandle = (): AuthUser['handle'] | undefined => {
  const handleEntry = Object.entries((getAuthData() ?? {})).find((entry) => (
    entry[0].match(/^https?:\/\/.*\/handle$/i)
  )) ?? [];

  return handleEntry[1] as AuthUser['handle'] | undefined;
}

export const fetchUserProfile = async () => {
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
  const requestAuth = {'Authorization': `Bearer ${getAuthJwt()}`};
  const request = fetch(requestUrl, {headers: {}});

  const response = await (await request).json();
  resolve({...response, photoURL: undefined, photoUrl: response.photoURL});

  return localCache[userHandle];
}
