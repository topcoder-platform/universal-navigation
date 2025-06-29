import type { NavMenuItem } from './nav-menu-item.model';
export declare function getMainNavItems(isAuthenticated: boolean): NavMenuItem[];
export declare function getActiveRoute(navItems: NavMenuItem[], index?: number, deps?: any): NavMenuItem[];
export { marketingRightItems } from 'lib/config/nav-menu/marketing-nav-items';
