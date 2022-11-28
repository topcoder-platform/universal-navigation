import { footerNavItems } from 'lib/config/nav-menu/footer-nav-items';
import type { NavMenuItem } from './nav-menu-item.model';

const navMenu = footerNavItems as unknown as NavMenuItem


export function getFooterNavItems(): NavMenuItem[] {
  return navMenu.children
}
