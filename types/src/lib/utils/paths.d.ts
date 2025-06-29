import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
/**
 * Gets the absolute path hosted on the same domain as the main script is
 * @param assetPath The relative path of the asset
 * @returns string
 */
export declare function getPublicPath(assetPath: string): string;
/**
 * Gets the absolute path hosted on the DEFAULT_HOST
 * @params path
 * @returns string
 */
export declare function getMarketingUrl(path: string): string;
/**
 * Parses the passed nav menu items and
 * based on the `isAuthenticated` param
 * activates the `authenticatedPath` for a nav menu item
 * @param isAuthenticated
 * @param navigationItem
 * @returns NavMenuItem.children
 */
export declare const toMarketingHostUrls: ({ children }: NavMenuItem, depth?: number) => NavMenuItem[];
