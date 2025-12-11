interface UtmParams {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
}
/**
 * Sanitizes a string to remove all characters except A-Z, a-z, 0-9, hyphen (-), underscore (_)
 * @param input - The string to sanitize
 * @returns Sanitized string
 */
export declare function sanitize(input: string): string;
/**
 * Initializes UTM cookie handling on page load
 * Extracts UTM parameters from URL, sanitizes them, and persists to cookie
 * Only sets the cookie if it doesn't already exist
 */
export declare function initializeUtmCookieHandler(): void;
/**
 * Retrieves and parses the tc_utm cookie
 * @returns Parsed UTM parameters or null if cookie doesn't exist
 */
export declare function getUtmCookie(): UtmParams | null;
/**
 * Appends UTM parameters from the tc_utm cookie to a given URL
 * Only appends parameters that exist in the cookie
 * @param url - The base URL to append parameters to
 * @returns URL with UTM parameters appended, or original URL if no cookie exists
 */
export declare function appendUtmParamsToUrl(url: string): string;
export {};
