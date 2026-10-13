import type { AuthUser } from '../../main';
import { AUTH_USER_ROLE } from '../config/auth';
export type fetchUserProfileFn = () => AuthUser | null;
export declare const getJwtUserhandle: () => AuthUser["handle"] | undefined;
export declare const getJwtUserRoles: () => AuthUser["roles"] | undefined;
/**
 * Reads the current tcjwt cookie and returns the roles recognized by navigation guards.
 * Administrator roles are matched case-insensitively and returned in their canonical form.
 * Takes no parameters; unrelated roles are omitted from the returned array.
 * @returns Recognized navigation roles, or an empty array when no roles are present.
 * @throws If the tcjwt cookie cannot be decoded or contains invalid JSON.
 */
export declare const getUserAppRoles: () => AuthUser["roles"];
export declare const checkUserAppRole: (role: AUTH_USER_ROLE) => boolean;
/**
 * Fetches the user profile based on the handle that's stored in the jwt cookie
 * @returns Promise<AuthUser>
 */
export declare const fetchUserProfile: () => Promise<AuthUser | undefined>;
