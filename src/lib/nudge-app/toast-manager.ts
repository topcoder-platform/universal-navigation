import type { ProfileCompletionData } from 'lib/app-context/profile-completion.model';
import { checkCookie, getCookieValue, setCookie } from '../utils/cookies';
import { toastsMeta } from "./config";

const TOAST_COOKIE = 'uninav-toast-shown';

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
export const getToast = (completednessData: ProfileCompletionData) => {
  if (!completednessData || completednessData.completed || isToastDismissed()) {
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
