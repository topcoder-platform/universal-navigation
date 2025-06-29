import { marketingNavItems } from 'lib/config/nav-menu/marketing-nav-items';
import { getActiveRoute as getActiveRouteUtil, activateAuthenticatedRoutes } from 'lib/utils/routes'
import type { NavMenuItem } from './nav-menu-item.model';
import { toMarketingHostUrls } from 'lib/utils/paths';

const navMenu = marketingNavItems as unknown as NavMenuItem

export function getMainNavItems(isAuthenticated: boolean): NavMenuItem[] {
  const menu = JSON.parse(JSON.stringify(navMenu));
  return toMarketingHostUrls({children: activateAuthenticatedRoutes(isAuthenticated, menu)});
}

export function getActiveRoute(navItems: NavMenuItem[], index?: number, deps?: any): NavMenuItem[] {
  return getActiveRouteUtil(navItems, index);
}

export { marketingRightItems } from 'lib/config/nav-menu/marketing-nav-items'
