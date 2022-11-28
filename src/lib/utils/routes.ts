import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
import { escapeRegExp } from "./regex";

const routeMatchesPath = (path: string, route: NavMenuItem): boolean => (
  !!path.match(new RegExp(`^${escapeRegExp(route.path)}(\\?|#|$)`, 'i'))
)

/**
 * Matches the current route to a navigation menu item 
 *  and returns the full trail to the matched route (eg. [parent, matchedRoute])
 * @param navMenu The full navigation menu to be parsed and to search for a matched route
 * @param path Path to match agains
 * @returns 
 */
export const matchRoutes = (navMenu: NavMenuItem, path: string): NavMenuItem[] => {

  return (function parseNavMenu(l, {children = []}) {
    // safe escape if things get out of control
    if (l >= 9) {
      return
    }

    for(let child of children) {
      if (routeMatchesPath(path, child)) {
        return child;
      }

      const trail =  parseNavMenu(l + 1, child);
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
export function getActiveRoute(navMenu: NavMenuItem, trailLevel?: number): NavMenuItem[] {
  const locationHref = `${location.pathname}`
  const activeRouteTrail = [].concat(matchRoutes(navMenu, locationHref))
  return typeof trailLevel === 'number' ? activeRouteTrail?.slice(trailLevel, 1) : activeRouteTrail
}
