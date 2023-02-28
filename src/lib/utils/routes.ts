import type { NavMenuItem } from '../functions/nav-menu-item.model';
import { escapeRegExp } from "./regex";

export const routeMatchesUrl = (url: string, route: NavMenuItem): boolean => {
  const urlObj = new URL(route.url);
  const routeUrl = `${urlObj.origin}${urlObj.pathname}`;

  return !!url.match(new RegExp(`^${escapeRegExp(routeUrl)}\/?(\\?|#|$)`, 'i'));
}

/**
 * Parses the passed nav menu items and
 * based on the `isAuthenticated` param
 * activates the `authenticatedPath` for a nav menu item
 * @param isAuthenticated
 * @param navigationItem
 * @param depth
 * @returns NavMenuItem.children
 */
export const activateAuthenticatedRoutes = (isAuthenticated: boolean, { children = [] }: NavMenuItem, depth?: number) => {
  // safe escape if things get out of control
  if (depth >= 9) {
    return
  }

  for (let child of children) {
    if (isAuthenticated && child.authenticatedUrl) {
      child.url = child.authenticatedUrl
    }

    activateAuthenticatedRoutes(isAuthenticated, child, depth + 1);
  }

  return children;
}

/**
 * Matches the current route to a navigation menu item
 *  and returns the full trail to the matched route (eg. [parent, matchedRoute])
 * @param navMenu The full navigation menu to be parsed and to search for a matched route
 * @param path Path to match agains
 * @returns
 */
export const matchRoutes = (navMenu: NavMenuItem, path: string): NavMenuItem[] => {

  return (function parseNavMenu(l, { children = [] }) {
    // safe escape if things get out of control
    if (l >= 9) {
      return
    }

    for (let child of children) {
      if (routeMatchesUrl(path, child)) {
        return child;
      }

      const trail = parseNavMenu(l + 1, child);
      if (trail) {
        return [].concat(child, trail);
      }
    }
  })(0, navMenu)
}

/**
 * Get the active route
 * @param navMenu The full navigation menu
 * @param trailLevel The trail level of the active route to return
 * @returns
 */
export function getActiveRoute(navMenuItems: NavMenuItem[], trailLevel?: number): NavMenuItem[] {
  const locationHref = `${location.origin}${location.pathname}`
  const activeRouteTrail = [].concat(matchRoutes({ children: navMenuItems } as NavMenuItem, locationHref))
  return typeof trailLevel === 'number' ? activeRouteTrail?.slice(trailLevel, 1) : activeRouteTrail
}
