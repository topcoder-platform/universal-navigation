import type { ProfileCompletednessResponse } from '../functions/user-profile.provider';
/**
 * Get the toast to show based on the completedness data
 * If the user has completed their profile, return undefined
 * If the user has already seen and dismissed the toast, return undefined
 * If the user has seen a toast type but did not dismiss it, return the same toast type
 * If the user has not seen the toast, return the toast to show
 * @param completednessData
 * @returns
 */
export declare const getToast: (completednessData: ProfileCompletednessResponse) => import("./config").ToastType;
export declare const hideToast: () => void;
