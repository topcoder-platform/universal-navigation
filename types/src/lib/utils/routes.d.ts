import type { NavMenuItem } from '../functions/nav-menu-item.model';
export declare const routeMatchesUrl: (url: string, route: NavMenuItem) => boolean;
/**
 * Parses the passed nav menu items and
 * based on the `filter` param
 * filters out or includes a route
 * @param navigationItem navigation menu
 * @param filter Filter function
 *
 * @returns NavMenuItem
 */
export declare const filterRoutes: (navMenuItem: NavMenuItem, filter: (n: NavMenuItem) => boolean, depth?: number) => NavMenuItem | undefined;
/**
 * Parses the passed nav menu items and
 * based on the `isAuthenticated` param
 * activates the `authenticatedPath` for a nav menu item
 * @param isAuthenticated
 * @param navigationItem
 * @returns NavMenuItem.children
 */
export declare const activateAuthenticatedRoutes: (isAuthenticated: boolean, { children }: NavMenuItem, depth?: number) => NavMenuItem[];
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
export declare function getActiveRoute(navMenuItems: NavMenuItem[], trailLevel?: number): NavMenuItem[];
