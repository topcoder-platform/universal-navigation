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
export function getWordpressUrl(path: string): string {

    // the domain is just the current window location
    const domain: string = `${window.location.protocol}//${window.location.host}`

    // if the current host is a staging site, go to the staging site
    const pathPrefix: string = ['staging', 'universal-naviga']
        .find(prefix => window.location.pathname.startsWith(`/${prefix}`))

    return `${domain}${!!pathPrefix ? `/${pathPrefix}` : ''}${path}`
}
