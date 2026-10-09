import type { NavMenuItem } from "../../functions/nav-menu-item.model";
/**
 * App drawer (tool selector) menu.
 *
 * Structure: section (role guarded) -> columns -> groups -> nav items.
 * Each section renders its columns side by side on desktop and stacked on mobile,
 * so the groups listed in a column are displayed top to bottom in that column.
 */
export declare const toolSelectorNavItems: NavMenuItem;
