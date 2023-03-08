import { filterRoutes } from 'lib/utils/routes';
import type { NavMenuItem } from './nav-menu-item.model';
import { getJwtUserRoles } from './user-profile.provider';

/**
 * Filters the provided navigation menu items based on the user roles of the currently authenticated user
 *
 * @param {NavMenuItem} routes - The routes to filter
 * @return {NavMenuItem} The filtered menu items based on the user roles
 */
export const filterRoutesByUserRole = (routes: NavMenuItem) => {
  const userRoles = getJwtUserRoles();

  return filterRoutes(routes, (item: NavMenuItem) => !item.auth?.requireRoles || (
    item.auth.requireRoles.some(role => userRoles.indexOf(role) > -1)
  ));
}
