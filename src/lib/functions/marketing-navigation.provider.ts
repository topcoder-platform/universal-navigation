import { marketingNavItems } from 'lib/config/nav-menu/marketing-nav-items';
import { getActiveRoute as getActiveRouteUtil } from 'lib/utils/routes'
import type { NavMenuItem } from './nav-menu-item.model';

const navMenu = marketingNavItems as unknown as NavMenuItem

export function getMainNavItems(): NavMenuItem[] {
  return navMenu.children
}

export function getActiveRoute(index?: number): NavMenuItem[] {
  return getActiveRouteUtil(navMenu, index);
}
