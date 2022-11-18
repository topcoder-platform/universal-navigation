import navMenuJson from 'assets/tool-navigation.json';
import { parseMenuItem } from 'lib/utils/navigation-menu';
import type { NavMenuItem } from './nav-menu-item.model';

const navMenu = parseMenuItem(navMenuJson.defaultHost, navMenuJson as unknown as NavMenuItem)

export function getMainNavItems(): NavMenuItem[] {
  return navMenu.children
}
