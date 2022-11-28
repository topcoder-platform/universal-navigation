import { DEFAULT_HOST_URL } from 'lib/config'
import type { NavMenuItem } from 'lib/functions/nav-menu-item.model'

/**
 * Gets the absolute path hosted on the same domain as the main script is
 * @param assetPath The relative path of the asset
 * @returns string
 */
export function getPublicPath(assetPath: string): string {
  return new URL(assetPath, import.meta.url).href
}

/**
 * Gets the absolute path hosted on the DEFAULT_HOST
 * @params path
 * @returns string
 */
export function getDefaultHostPath(path: string): string {
  return `${DEFAULT_HOST_URL}${path}`
}

/**
 * Gets the absolute path hosted on the DEFAULT_HOST
 * @params path
 * @returns string
 */
export function navUrl(item: NavMenuItem): string {
  return `${item.host ?? DEFAULT_HOST_URL}${item.path}`
}
