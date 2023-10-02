import { TC_API_V5_HOST, USERFLOW_ENVIRONMENT_TOKEN, USERFLOW_TC_SIGNATURE } from "../../config";
import { getRequestAuthHeaders } from "../auth-jwt";
import { getJwtUserRoles } from "../user-profile.provider";
import { loadUserflowScripts } from "./userflow-loader";
import { integrationIsDisabled } from "./utils";

// Userflow expects dates in the format returned in this function
const toIsoString = (createdAt: Date | number | string) => {
  const date = new Date(createdAt);
  return date.toISOString();
}

/**
 * Calls api to get the current user's hashed userId
 * @returns string
 */
const getUserIdHash = (() => {
  const fetchFn = async () => {
    // const requestUrl: string = `${TC_API_V5_HOST}/members/uid-signature?type=userflow`;
    const requestUrl: string = `${TC_API_V5_HOST}/members/uid-signature?type=userflow`;
    const request = fetch(requestUrl, {headers: {...getRequestAuthHeaders()}});
    const response = await (await request).json();

    return response?.uid_signature;
  };

  let currentRequest;
  return async () => {
    if (currentRequest) {
      return currentRequest;
    }

    return currentRequest = await fetchFn();
  }
})()


/**
 * Calls userflow's identify method and automatically hashes userId and passes it as `uid_hash`
 * @param user
 */
const initAndIdentifyUser = async (user) => {
  const userflow = loadUserflowScripts()

  userflow.init(USERFLOW_ENVIRONMENT_TOKEN);

  const uid_hash = await getUserIdHash();

  userflow.identify(
    user.userId, JSON.parse(JSON.stringify({
      email: user.email,
      roles: getJwtUserRoles(),
      userId: user.userId,
      handle: user.handle,
      first_name: user.firstName,
      last_name: user.lastName,
      name: `${user.firstName} ${user.lastName}`,
      signed_up_at: user.createdAt ? toIsoString(user.createdAt) : undefined,
    })), {
      signature: uid_hash,
    },
  );

  userflow.group(
    'Topcoder',
    {
      name: 'Topcoder',
    },
    {
      signature: USERFLOW_TC_SIGNATURE,
    },
  );

}

/**
 * Subscribes to a writable auth context,
 * and watches for when the user data is ready.
 * Once user data is ready, calls userflow's identify() method
 * @param appContext Svelte writable/readable context
 */
const subscribeToAuthContext = (appContext) => {
  if (!USERFLOW_ENVIRONMENT_TOKEN) {
    return
  }

  appContext.subscribe(({auth: { user }, integrations}) => {
    if (integrationIsDisabled(integrations, 'userflow')) {
      return;
    }

    if (!user) {
      return;
    }

    initAndIdentifyUser(user);
  });
}

let debounce = {};
/**
 * Triggers a Userflow content item
 * @param flowId Userflow content ID
 * @param options.once Boolean, optional - If set to true,
 *      the content will only start if the user has not seen it before.
 *      If the user has already seen it before, nothing happens.
 *      Defaults to true.
 */
const triggerFlow = (flowId: string, options: {once?: boolean, delay?: number} = {}) => {
  const userflow = loadUserflowScripts();

  const { delay = 3000 } = options

  if (debounce[flowId]) {
    clearTimeout(debounce[flowId])
  }
  debounce[flowId] = setTimeout(userflow.start, delay, flowId, { once: options?.once ?? true });
}

export {
  subscribeToAuthContext as initUserflow,
  initAndIdentifyUser as identify,
  triggerFlow,
}
