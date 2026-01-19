import type { AuthUser } from "lib/app-context";
export declare function isOnHost(host: string): boolean;
/**
 * Check if we're on a domain that should not show the profile nudges
 * @returns Boolean
 */
export declare function dismissNudgesBasedOnHost(exceptHost?: string): boolean;
export interface ProfileCompletednessResponse {
    handle: string;
    showToast: string;
    data: {
        percentComplete: number;
    } & {
        [key: string]: any;
    };
}
/**
 * Fetches the user profile completedness
 * @returns Promise<ProfileCompletednessResponse>
 */
export declare const fetchUserProfileCompletedness: (user: AuthUser, force?: boolean) => Promise<ProfileCompletednessResponse | undefined>;
export declare const confirmProfileData: (userHandle: string) => Promise<any>;
