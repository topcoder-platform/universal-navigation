/**
 * Calls userflow's identify method and automatically hashes userId and passes it as `uid_hash`
 * @param user
 */
declare const initAndIdentifyUser: (user: any) => Promise<void>;
/**
 * Subscribes to a writable auth context,
 * and watches for when the user data is ready.
 * Once user data is ready, calls userflow's identify() method
 * @param appContext Svelte writable/readable context
 */
declare const subscribeToAuthContext: (appContext: any) => void;
/**
 * Triggers a Userflow content item
 * @param flowId Userflow content ID
 * @param options.once Boolean, optional - If set to true,
 *      the content will only start if the user has not seen it before.
 *      If the user has already seen it before, nothing happens.
 *      Defaults to true.
 */
declare const triggerFlow: (flowId: string, options?: {
    once?: boolean;
}) => void;
export { subscribeToAuthContext as initUserflow, initAndIdentifyUser as identify, triggerFlow, };
