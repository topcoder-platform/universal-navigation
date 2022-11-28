import { toolNavItems } from 'lib/config/nav-menu/tool-nav-items';
import type { NavMenuItem } from './nav-menu-item.model';

const navMenu = toolNavItems as unknown as NavMenuItem

export function getMainNavItems(): NavMenuItem[] {
  return navMenu.children
}
