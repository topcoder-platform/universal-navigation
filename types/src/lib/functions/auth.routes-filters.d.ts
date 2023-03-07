import type { NavMenuItem } from './nav-menu-item.model';
/**
 * Filters the provided navigation menu items based on the user roles of the currently authenticated user
 *
 * @param {NavMenuItem} routes - The routes to filter
 * @return {NavMenuItem} The filtered menu items based on the user roles
 */
export declare const filterRoutesByUserRole: (routes: NavMenuItem) => any;
