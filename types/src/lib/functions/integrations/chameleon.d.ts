/**
 * Lazy loads chameleon sdk
 * @returns `chmln` Chameleon queue calling function
 */
declare const load: () => any;
/**
 * Calls chameleon's identify method and automatically hashes userId and passes it as `uid_hash`
 * @param userId
 * @param data
 */
declare const identify: (userId: any, data: any) => Promise<void>;
/**
 * Subscribes to a writable auth context,
 * and watches for when the user data is ready.
 * Once user data is ready, calls chameleon's identify() method
 * @param ctx Svelte writable/readable context
 */
declare const subscribeToAuthContext: (ctx: any) => void;
export { subscribeToAuthContext, load, identify, };
