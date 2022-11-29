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
export declare function getDefaultHostPath(path: string): string;
/**
 * Gets the absolute path hosted on the DEFAULT_HOST
 * @params path
 * @returns string
 */
export declare function navUrl(item: NavMenuItem): string;
