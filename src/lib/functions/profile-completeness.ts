import { TC_API_V5_HOST } from "lib/config";
import { getRequestAuthHeaders } from "./auth-jwt";
import type { AuthUser } from "lib/app-context";

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

  const requestUrl: string = `${TC_API_V5_HOST}/members/${userHandle}/profileCompleteness`;
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
