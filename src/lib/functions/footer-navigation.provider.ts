import navMenuJson from 'assets/footer-navigation.json';
import { DEFAULT_HOST_URL } from 'lib/config';
import { parseMenuItem } from "lib/utils/navigation-menu"
import type { NavMenuItem } from './nav-menu-item.model';

const navMenu = parseMenuItem(
  DEFAULT_HOST_URL,
  navMenuJson as unknown as NavMenuItem
)

export function getFooterNavItems(): NavMenuItem[] {
  return navMenu.children
}
