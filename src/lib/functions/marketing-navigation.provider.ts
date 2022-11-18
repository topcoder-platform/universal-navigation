import navMenuJson from 'assets/main-navigation.json';
import { parseMenuItem } from 'lib/utils/navigation-menu';
import { getActiveRoute as getActiveRouteUtil } from 'lib/utils/routes'
import type { NavMenuItem } from './nav-menu-item.model';

const navMenu = parseMenuItem(navMenuJson.defaultHost, navMenuJson as unknown as NavMenuItem)

export function getMainNavItems(): NavMenuItem[] {
  return navMenu.children
}

export function getActiveRoute(index?: number): NavMenuItem[] {
  return getActiveRouteUtil(navMenu, index);
}
