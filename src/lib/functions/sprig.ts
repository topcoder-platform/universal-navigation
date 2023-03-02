import { SPRIG_ID } from "../config/nav-menu"
import { fetchUserProfile } from "./user-profile.provider";

export const lazyLoadAndInitSprig = () => {
  if (window['Sprig']) {
    return window['Sprig'];
  }

  if (!SPRIG_ID) {
    return (() => {}) as any
  }

  eval(
    `(function(l,e,a,p) {
      if (window.Sprig) return;
      window.Sprig = function(){S._queue.push(arguments)}
      var S = window.Sprig;S.appId = a;S._queue = [];window.UserLeap=S;
      a=l.createElement('script');
      a.async=1;a.src=e+'?id='+S.appId;
      p=l.getElementsByTagName('script')[0];
      p.parentNode.insertBefore(a, p);
    })(document, 'https://cdn.sprig.com/shim.js', '${SPRIG_ID}');`
  );

  return window['Sprig'];
}

export const triggerForNewUsers = async () => {
  const user = await fetchUserProfile();
  if (!user?.createdAt) {
    return
  }

  const userAge = Math.round(Date.now() - +new Date(user.createdAt)) / 86400000;
  const isNewUser = userAge <= 30;

  if (isNewUser) {
    const sprig = lazyLoadAndInitSprig();
    sprig('setUserId', user.email);
    sprig('track', 'onNewUserUseUniNav');
  }
}
