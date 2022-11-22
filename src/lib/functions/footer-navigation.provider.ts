import navMenuJson from 'assets/footer-navigation.json';
import { parseMenuItem } from "lib/utils/navigation-menu"
import type { NavMenuItem } from './nav-menu-item.model';

const navMenu = parseMenuItem(navMenuJson.defaultHost, navMenuJson as unknown as NavMenuItem)

export function getFooterNavItems(): NavMenuItem[] {
  return navMenu.children
}
