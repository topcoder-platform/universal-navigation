import { footerNavItems } from 'lib/config/nav-menu/footer-nav-items';
import type { NavMenuItem } from './nav-menu-item.model';

const navMenu = footerNavItems as unknown as NavMenuItem

export function getFooterNavItems(): NavMenuItem[] {
  const menu = JSON.parse(JSON.stringify(navMenu));
  return menu.children;
}
