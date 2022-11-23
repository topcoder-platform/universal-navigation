import { DEFAULT_HOST_URL } from 'lib/config'

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
