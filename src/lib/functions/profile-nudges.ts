import { TC_API_V5_HOST } from "lib/config";
import type { AuthUser } from "lib/app-context";
import { NUDGES_DISABLED_HOSTS } from "lib/config/profile-toasts.config";

import { getRequestAuthHeaders } from "./auth-jwt";

/**
 * Check if we're on a domain that should not show the profile nudges
 * @returns Boolean
 */
export function dismissNudgesBasedOnHost(): boolean {
  const locationHostname = window?.location.hostname ?? ''
  return !! NUDGES_DISABLED_HOSTS.find(host => (
    host.match(new RegExp(`^https?:\/\/${locationHostname}`, 'i'))
  ));
}

// store fetched data in a local cache (de-duplicate immediate api calls)
const localCache = {};

export interface ProfileCompletednessResponse {
  handle: string
  showToast: string
  data: {
    percentComplete: number
  }
}

/**
 * Fetches the user profile completedness
 * @returns Promise<ProfileCompletednessResponse>
 */
export const fetchUserProfileCompletedness = async (user: AuthUser, force = false): Promise<ProfileCompletednessResponse> => {
  const userHandle = user?.handle;

  if (!userHandle) {
    return;
  }

  const cacheKey = `${userHandle}-completedness`;
  if (!force && localCache[cacheKey]) {
    return await localCache[cacheKey];
  }


  let resolve: (value: ProfileCompletednessResponse) => void;
  localCache[cacheKey] = new Promise((r) => {resolve = r});

  // for QA purpose only
  const toastOverrideFlagParam = (window?.location.search.match(/[?&]+toast=(\w+)/i) ?? [])[1];
  const toastOverrideFlag = toastOverrideFlagParam ? `?toast=${toastOverrideFlagParam}` : '';
  const requestUrl: string = `${TC_API_V5_HOST}/members/${userHandle}/profileCompleteness${toastOverrideFlag}`;
  const request = fetch(requestUrl, {headers: {...getRequestAuthHeaders()}});

  const response = await (await request).json();
  resolve({
    ...response,
    data: {
      ...response.data,
      percentComplete: (response?.data?.percentComplete ?? 0) * 100,
    },
  });

  return localCache[cacheKey];
}
