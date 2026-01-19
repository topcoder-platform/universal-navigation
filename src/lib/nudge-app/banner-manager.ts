import type { ProfileCompletionData } from 'lib/app-context/profile-completion.model';
import { checkCookie, getCookieValue, setCookie } from '../utils/cookies';
import { dismissNudgesBasedOnHost } from '../functions/profile-nudges';
import { PROFILE_HOST } from 'lib/config';

const COOKIE_NAME = 'uni-profilereminder-banner-shown';
const COOKIE_ACTIVE_PERIOD_DAYS = 3;
const PROFILE_UPDATE_REMINDER_PERIOD_DAYS = 30;

const DAY = 24 * 3600 * 1000;
const _30DAYS = 30 * DAY;

function isDismissed() {
  return checkCookie(COOKIE_NAME, 'hidden');
}

function getLastSeen() {
  return getCookieValue(COOKIE_NAME);
}

const isOlderThanTreshold = (date: Date | number, treshold: number): boolean => {
  const diffInDays = Math.floor((Date.now() - +date) / DAY);
  return diffInDays >= treshold;
}

/**
 * @param completednessData
 * @returns
 */
export const getBanner = (completednessData: ProfileCompletionData) => {
  if (dismissNudgesBasedOnHost(PROFILE_HOST) || !completednessData || isDismissed()) {
    return;
  }

  const fields = completednessData.dateFields ?? [];
  const updatableProfileFields: [string, Date][] = fields
    .filter(([k]) => k.endsWith('LastUpdateDate'))
    .map(([k, d]) => [k.replace(/LastUpdateDate$/, ''), d]);
  const lastProfileConfirmationDate = fields.find(([k]) => k === 'lastProfileConfirmationDate')?.[1];

  const sorted = updatableProfileFields
    .sort((a, b) => +a[1] - +b[1]);


  const lastUpdate = +sorted[0]?.[1];
  if (!lastUpdate) {
    return;
  }

  // Correct:
  // const lastUpdate = +sorted[sorted.length - 1][1];
  const lastUpdateOrCofirmDate = lastProfileConfirmationDate ? Math.max(lastUpdate, +lastProfileConfirmationDate) : lastUpdate;
  if (!lastUpdateOrCofirmDate || !isOlderThanTreshold(lastUpdateOrCofirmDate, PROFILE_UPDATE_REMINDER_PERIOD_DAYS)) {
    setCookie(COOKIE_NAME, '', 0);
    return;
  }

  let lastSeen = getLastSeen();
  if (!lastSeen) {
    const oldFields = updatableProfileFields.filter(([,d]) => isOlderThanTreshold(d, PROFILE_UPDATE_REMINDER_PERIOD_DAYS)).map(([k]) => k);
    const fieldKey = oldFields.length ? oldFields[0] : undefined;
    const field = updatableProfileFields.find(f => f[0] === fieldKey) ?? [];
    lastSeen = JSON.stringify({key: field[0], date: field[1]});
    if(lastSeen) {
      setCookie(COOKIE_NAME, lastSeen, COOKIE_ACTIVE_PERIOD_DAYS);
    }
  }

  return JSON.parse(lastSeen);
}

export const hide = () => {
  setCookie(COOKIE_NAME, 'hidden', COOKIE_ACTIVE_PERIOD_DAYS);
}
