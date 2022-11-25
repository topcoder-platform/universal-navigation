import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
/**
 * Matches the current route to a navigation menu item
 *  and returns the full trail to the matched route (eg. [parent, matchedRoute])
 * @param navMenu The full navigation menu to be parsed and to search for a matched route
 * @param path Path to match agains
 * @returns
 */
export declare const matchRoutes: (navMenu: NavMenuItem, path: string) => NavMenuItem[];
/**
 * Get the active route
 * @param navMenu The full navigation menu
 * @param trailLevel The trail level of the active route to return
 * @returns
 */
export declare function getActiveRoute(navMenu: NavMenuItem, trailLevel?: number): NavMenuItem[];
