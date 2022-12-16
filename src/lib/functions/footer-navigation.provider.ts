import { footerNavItems } from 'lib/config/nav-menu/footer-nav-items';
import { activateAuthenticatedRoutes } from 'lib/utils/routes';
import type { NavMenuItem } from './nav-menu-item.model';

const navMenu = footerNavItems as unknown as NavMenuItem


export function getFooterNavItems(isAuthenticated: boolean): NavMenuItem[] {
  const menu = JSON.parse(JSON.stringify(navMenu));
  return activateAuthenticatedRoutes(isAuthenticated, menu);
}
