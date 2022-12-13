import { toolNavItems } from 'lib/config/nav-menu/tool-nav-items';
import { activateAuthenticatedRoutes } from 'lib/utils/routes';
import type { NavMenuItem } from './nav-menu-item.model';

const navMenu = toolNavItems as unknown as NavMenuItem

export function getMainNavItems(isAuthenticated: boolean): NavMenuItem[] {
  const menu = JSON.parse(JSON.stringify(navMenu));
  return activateAuthenticatedRoutes(isAuthenticated, menu);
}
