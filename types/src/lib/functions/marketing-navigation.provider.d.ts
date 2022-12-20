import type { NavMenuItem } from './nav-menu-item.model';
export declare function getMainNavItems(isAuthenticated: boolean): NavMenuItem[];
export declare function getActiveRoute(navItems: NavMenuItem[], index?: number): NavMenuItem[];
