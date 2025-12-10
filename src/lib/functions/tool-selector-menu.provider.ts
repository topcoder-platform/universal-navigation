import { toolSelectorNavItems } from 'lib/config/nav-menu/tool-selector-nav-items';
import { filterRoutesByUserRole } from './auth.routes-filters';
import type { NavMenuItem } from './nav-menu-item.model';

const navMenu = toolSelectorNavItems as unknown as NavMenuItem

export function getToolSelectorItems(): NavMenuItem[] {
  const menu = JSON.parse(JSON.stringify(navMenu));

  const filtered = filterRoutesByUserRole(menu);
  return filtered?.children ?? [];
}
