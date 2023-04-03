import { SPRIG_ID } from "../../config"
import { integrationIsDisabled } from "./utils";

const lazyLoadAndInitSprig = () => {
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

const triggerForNewUsers = async (appContext) => {
  if (!SPRIG_ID) {
    // do not initialize if SPRIG_ID config was not set
    return;
  }

  appContext.subscribe(({auth: { user }, integrations}) => {
    if (integrationIsDisabled(integrations, 'sprig')) {
      return;
    }

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
  });
}

export {
  lazyLoadAndInitSprig,
  triggerForNewUsers as triggerSprig,
}
