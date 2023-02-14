import { WP_HOST_URL } from '../config/nav-menu'
import * as pkg from '../../../package.json'

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
export function getWordpressUrl(path: string): string {

    const locationPathname = typeof window === 'undefined' ? '' : window.location.pathname;
    // if the current host is a staging site, go to the staging site
    const pathPrefix: string = ['staging', 'universal-naviga']
        .find(prefix => locationPathname.match(new RegExp(`\/${prefix}(\/|\\?|$)`)))

    return `${WP_HOST_URL}${!!pathPrefix ? `/${pathPrefix}` : ''}${path}`
}
