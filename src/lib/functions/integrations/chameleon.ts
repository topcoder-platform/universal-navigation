import { CHAMELEON_KEY_ID, TC_API_V5_HOST } from "../../config";
import { getRequestAuthHeaders } from "../auth-jwt";
import { getJwtUserRoles } from "../user-profile.provider";
import { integrationIsDisabled } from "./utils";

/**
 * Check if chameleon sdk is loaded
 * @returns boolean
 */
const isLoaded = () => {
  return !!window['chmln'];
};

/**
 * Lazy loads chameleon sdk
 * @returns `chmln` Chameleon queue calling function
 */
const load = () => {
  if (isLoaded()) {
    return window['chmln'];
  }

  /* Chameleon script. See trychameleon.com */
  eval(
    `!function(d,w){var t="${CHAMELEON_KEY_ID}",c="chmln",m="identify alias track clear set show on off custom help _data".split(" "),i=d.createElement("script");if(w[c]||(w[c]={}),!w[c].root){w[c].accountToken=t,w[c].location=w.location.href.toString(),w[c].now=new Date;for(var s=0;s<m.length;s++){!function(){var t=w[c][m[s]+"_a"]=[];w[c][m[s]]=function(){t.push(arguments);};}();}i.src="https://fast.trychameleon.com/messo/"+t+"/messo.min.js",i.async=!0,d.head.appendChild(i);}}(document,window);`
  );

  return window['chmln'];
};

/**
 * Calls api to hash user id
 * @param userId The user id to hash
 * @returns string
 */
const getUserIdHash = async (userId) => {
  const requestUrl: string = `${TC_API_V5_HOST}/learning-paths/chameleon/hash-uuid?uuId=${userId}`;
  const request = fetch(requestUrl, {headers: {...getRequestAuthHeaders()}});
  const response = await (await request).json();

  return response?.uid_hash;
}


/**
 * Calls chameleon's identify method and automatically hashes userId and passes it as `uid_hash`
 * @param userId
 * @param data
 */
const identify = async (userId, data) => {
  const chmln = load()

  const uid_hash = await getUserIdHash(userId);

  chmln.identify(userId, {
    ...data,
    uid_hash,
  });
}

/**
 * Subscribes to a writable auth context,
 * and watches for when the user data is ready.
 * Once user data is ready, calls chameleon's identify() method
 * @param appContext Svelte writable/readable context
 */
const subscribeToAuthContext = (appContext) => {
  if (!CHAMELEON_KEY_ID) {
    return
  }

  appContext.subscribe(({auth: { user }, integrations}) => {
    if (integrationIsDisabled(integrations, 'chameleon')) {
      return;
    }

    if (!user) {
      return;
    }

    identify(user.userId, {
      email: user.email,
      roles: getJwtUserRoles(),
      name: `${user.firstName} ${user.lastName}`,
    });
  });
}

export {
  subscribeToAuthContext as triggerChameleon,
  load,
  identify,
}
