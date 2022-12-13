import { marketingNavItems } from 'lib/config/nav-menu/marketing-nav-items';
import { getActiveRoute as getActiveRouteUtil, activateAuthenticatedRoutes } from 'lib/utils/routes'
import type { NavMenuItem } from './nav-menu-item.model';

const navMenu = marketingNavItems as unknown as NavMenuItem

export function getMainNavItems(isAuthenticated: boolean): NavMenuItem[] {
  const menu = JSON.parse(JSON.stringify(navMenu));
  return activateAuthenticatedRoutes(isAuthenticated, menu);
}

export function getActiveRoute(index?: number): NavMenuItem[] {
  return getActiveRouteUtil(navMenu, index);
}
