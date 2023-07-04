import type { AuthUser } from "lib/app-context";
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
export declare const fetchUserProfileCompletedness: (user: AuthUser, force?: boolean) => Promise<ProfileCompletednessResponse>;
