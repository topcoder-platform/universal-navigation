import { DEFAULT_HOST_URL } from 'lib/config/nav-menu'
import * as pkg from '../../../package.json'

/**
 * Gets the absolute path hosted on the same domain as the main script is
 * @param assetPath The relative path of the asset
 * @returns string
 */
export function getPublicPath(assetPath: string): string {

    // for PRODuction inject the version number
    // for local development, keep assets at root
    const version = BUILD_IS_PROD ? `/v${pkg.version.split('.')[0]}` : ''
    const versionPath: string = `${version}${assetPath}`
    return new URL(versionPath, import.meta.url).href
}

/**
 * Gets the absolute path hosted on the DEFAULT_HOST
 * @params path
 * @returns string
 */
export function getDefaultHostPath(path: string): string {
    return `${DEFAULT_HOST_URL}${path}`
}
