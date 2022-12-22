import { toolSelectorNavItems } from 'lib/config/nav-menu/tool-selector-nav-items';
import type { NavMenuItem } from './nav-menu-item.model';


const navMenu = toolSelectorNavItems as unknown as NavMenuItem

export function getToolSelectorItems(): NavMenuItem[] {
    return navMenu.children || []
}
