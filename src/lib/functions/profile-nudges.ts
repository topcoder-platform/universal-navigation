import { TC_API_HOST } from "lib/config";
import type { AuthUser } from "lib/app-context";
import { DISABLE_NUDGES, NUDGES_DISABLED_HOSTS } from "lib/config/profile-toasts.config";

import { getRequestAuthHeaders } from "./auth-jwt";

export function isOnHost(host: string): boolean {
  const locationHostname = window?.location.hostname ?? ''
  return !!host.match(new RegExp(`^https?:\/\/${locationHostname}`, 'i'));
}

/**
 * Check if we're on a domain that should not show the profile nudges
 * @returns Boolean
 */
export function dismissNudgesBasedOnHost(exceptHost?: string): boolean {
  // Ue the new flag to disable the profile nudges completely (PS-267)
  return DISABLE_NUDGES || NUDGES_DISABLED_HOSTS.filter(h => !exceptHost || h !== exceptHost).some(isOnHost);
}

// store fetched data in a local cache (de-duplicate immediate api calls)
const localCache: Record<string, Promise<ProfileCompletednessResponse> | undefined> = {};

export interface ProfileCompletednessResponse {
  handle: string
  showToast: string
  data: {
    percentComplete: number
  } & {[key: string]: any}
}

/**
 * Fetches the user profile completedness
 * @returns Promise<ProfileCompletednessResponse>
 */
export const fetchUserProfileCompletedness = async (user: AuthUser, force = false): Promise<ProfileCompletednessResponse | undefined> => {
  const userHandle = user?.handle;

  if (!userHandle) {
    return undefined;
  }

  const cacheKey = `${userHandle}-completedness`;
  if (!force && localCache[cacheKey]) {
    return await localCache[cacheKey];
  }


  let resolve!: (value: ProfileCompletednessResponse) => void;
  localCache[cacheKey] = new Promise<ProfileCompletednessResponse>((r) => { resolve = r });

  // for QA purpose only
  const toastOverrideFlagParam = (window?.location.search.match(/[?&]+toast=(\w+)/i) ?? [])[1];
  const toastOverrideFlag = toastOverrideFlagParam ? `?toast=${toastOverrideFlagParam}` : '';
  const requestUrl: string = `${TC_API_HOST}/members/${userHandle}/profileCompleteness${toastOverrideFlag}`;
  const request = fetch(requestUrl, {headers: {...getRequestAuthHeaders()}});

  const response = await (await request).json();

  const responseData = response.data ?? {};
  const dateFields = Object.keys(responseData)
    .filter(k => k.endsWith('LastUpdateDate') || k === 'lastProfileConfirmationDate')
    .map((key) => [key, new Date(responseData[key])]);

  resolve({
    ...response,
    data: {
      ...responseData,
      dateFields,
      percentComplete: (response?.data?.percentComplete ?? 0) * 100,
    },
  });

  return localCache[cacheKey];
}

export const confirmProfileData = async (userHandle: string) => {
  const requestUrl: string = `${TC_API_HOST}/members/${userHandle}/confirmProfile`;
  const request = fetch(requestUrl, {method: 'POST', headers: {...getRequestAuthHeaders()}});

  const response = await (await request).json();

  return response.data;
}
