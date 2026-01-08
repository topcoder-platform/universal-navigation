import type { AuthUser } from "lib/app-context";
/**
 * Check if we're on a domain that should not show the profile nudges
 * @returns Boolean
 */
export declare function dismissNudgesBasedOnHost(): boolean;
export interface ProfileCompletednessResponse {
    handle: string;
    showToast: string;
    data: {
        percentComplete: number;
    };
}
/**
 * Fetches the user profile completedness
 * @returns Promise<ProfileCompletednessResponse>
 */
export declare const fetchUserProfileCompletedness: (user: AuthUser, force?: boolean) => Promise<ProfileCompletednessResponse | undefined>;
