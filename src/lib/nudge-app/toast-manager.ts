import type { ProfileCompletednessResponse } from '../functions/user-profile.provider';
import { checkCookie, getCookieValue, setCookie } from '../utils/cookies';
import { toastsMeta } from "./config";

const TOAST_COOKIE = 'uninav-toast-shown';

function isProfileCompleted(completednessData: ProfileCompletednessResponse) {
  const {percentComplete} = completednessData.data;
  return percentComplete >= 100;
}

function isToastDismissed() {
  return checkCookie(TOAST_COOKIE, 'hidden');
}

function getLastSeenToast() {
  return getCookieValue(TOAST_COOKIE);
}

/**
 * Get the toast to show based on the completedness data
 * If the user has completed their profile, return undefined
 * If the user has already seen and dismissed the toast, return undefined
 * If the user has seen a toast type but did not dismiss it, return the same toast type
 * If the user has not seen the toast, return the toast to show
 * @param completednessData
 * @returns
 */
export const getToast = (completednessData: ProfileCompletednessResponse) => {
  if (!completednessData || isProfileCompleted(completednessData) || isToastDismissed()) {
    return;
  }

  const lastToastSeen = getLastSeenToast();
  if (!lastToastSeen) {
    setCookie(TOAST_COOKIE, completednessData.showToast, 7);
  }

  const toastToShow = lastToastSeen || completednessData.showToast;
  return toastsMeta[toastToShow];
}

export const hideToast = () => {
  setCookie(TOAST_COOKIE, 'hidden', 7);
}
