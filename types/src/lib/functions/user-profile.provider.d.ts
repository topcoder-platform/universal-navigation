import type { AuthUser } from '../../main';
import { AUTH_USER_ROLE } from '../config/auth';
export declare type fetchUserProfileFn = () => AuthUser | null;
export declare const getJwtUserhandle: () => AuthUser['handle'] | undefined;
export declare const getJwtUserRoles: () => AuthUser['roles'] | undefined;
export declare const getUserAppRoles: () => AuthUser['roles'] | undefined;
export declare const checkUserAppRole: (role: AUTH_USER_ROLE) => boolean;
/**
 * Fetches the user profile based on the handle that's stored in the jwt cookie
 * @returns Promise<AuthUser>
 */
export declare const fetchUserProfile: () => Promise<AuthUser>;
