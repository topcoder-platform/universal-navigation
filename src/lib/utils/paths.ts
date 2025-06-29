import { MARKETING_HOST_URL } from '../config'
import * as pkg from '../../../package.json'
import { NavMenuItem } from 'lib/functions/nav-menu-item.model'

const isProdBuild: boolean = typeof BUILD_IS_PROD !== 'undefined' ? BUILD_IS_PROD : true

/**
 * Gets the absolute path hosted on the same domain as the main script is
 * @param assetPath The relative path of the asset
 * @returns string
 */
export function getPublicPath(assetPath: string): string {

    // for PRODuction inject the version number
    // for local development, keep assets at root
    const version = isProdBuild ? `/v${pkg.version.split('.')[0]}` : ''
    const versionPath: string = `${version}${assetPath}`
    return new URL(versionPath, import.meta.url).href
}

/**
 * Gets the absolute path hosted on the DEFAULT_HOST
 * @params path
 * @returns string
 */
export function getMarketingUrl(path: string): string {
    const locationPathname = typeof window === 'undefined' ? '' : window.location.pathname;
    // if the current host is a staging site, go to the staging site
    const pathPrefix: string = ['staging', 'universal-naviga']
        .find(prefix => locationPathname.match(new RegExp(`\/${prefix}(\/|\\?|$)`)))

    return `${MARKETING_HOST_URL}${!!pathPrefix ? `/${pathPrefix}` : ''}${path}`
}

/**
 * Parses the passed nav menu items and
 * based on the `isAuthenticated` param
 * activates the `authenticatedPath` for a nav menu item
 * @param isAuthenticated
 * @param navigationItem
 * @returns NavMenuItem.children
 */
export const toMarketingHostUrls = ({ children = [] }: NavMenuItem, depth?: number) => {
  // safe escape if things get out of control
  if (depth >= 9) {
    return
  }

  for (let child of children) {
    if (child.marketingPathname) {
      child.url = child.marketingPathname;
    }

    toMarketingHostUrls(child, depth + 1);
  }

  return children;
}
