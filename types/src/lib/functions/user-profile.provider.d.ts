import type { AuthUser } from '../../main';
export declare type fetchUserProfileFn = () => AuthUser | null;
export declare const getJwtUserhandle: () => AuthUser['handle'] | undefined;
export declare const getJwtUserRoles: () => AuthUser['roles'] | undefined;
/**
 * Fetches the user profile based on the handle that's stored in the jwt cookie
 * @returns Promise<>
 */
export declare const fetchUserProfile: () => Promise<AuthUser>;
