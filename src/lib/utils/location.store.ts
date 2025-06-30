import { derived, readable } from "svelte/store";

window.history.pushState = new Proxy(window.history.pushState, {
  apply: (target, thisArg, argArray) => {
    const r = target.apply(thisArg, argArray);
    window.dispatchEvent(new Event('pushstate'));
    return r;
  },
});

export const windowLocation = readable<Location>({} as Location, (set) => {
  const updateLocation = () => {
    set(window.location);
  };

  window.addEventListener('popstate', updateLocation);
  window.addEventListener('pushstate', updateLocation);
  updateLocation();
  return () => {
    window.removeEventListener('pushstate', updateLocation);
    window.removeEventListener('popstate', updateLocation);
  };
});

export const pathname = derived(windowLocation, ({pathname}) => pathname);
