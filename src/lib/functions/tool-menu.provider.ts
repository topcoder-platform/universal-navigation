import menuJson from 'assets/tool-selector.json';
import type { NavMenuItem } from './nav-menu-item.model';

export const getToolMenuItems = (): NavMenuItem[] => {
  return menuJson.children as NavMenuItem[]
}

