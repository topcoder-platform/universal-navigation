import { toolSelectorNavItems } from 'lib/config/nav-menu/tool-selector-nav-items';
import { filterRoutes } from 'lib/utils/routes';
import type { NavMenuItem } from './nav-menu-item.model';

const navMenu = toolSelectorNavItems as unknown as NavMenuItem

export function getToolSelectorItems(userRoles: string[]): NavMenuItem[] {
  const menu = JSON.parse(JSON.stringify(navMenu));

  const filtered = filterRoutes(menu, (item: NavMenuItem) => !item.auth?.requireRoles || (
    item.auth.requireRoles.some(role => userRoles.indexOf(role) > -1)
  ));

  return filtered?.children
}
