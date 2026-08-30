export interface UtmParams {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_id?: string;
    utm_term?: string;
    utm_content?: string;
}
/**
 * Sanitizes a UTM token to alphanumerics, dot, underscore, tilde, and hyphen
 * @param input - The string to sanitize
 * @returns Sanitized string, bounded to the analytics attribute recommendation
 * @throws Does not throw
 */
export declare function sanitize(input: string): string;
/**
 * Initializes UTM cookie handling on page load
 * Extracts UTM parameters from URL, sanitizes them, and persists to cookie
 * Only sets the cookie if it doesn't already exist, preserving first-touch attribution
 * @returns void after persisting first-touch attribution or determining that no write is needed
 * @throws Does not throw; browser and cookie errors are logged and ignored
 */
export declare function initializeUtmCookieHandler(): void;
/**
 * Retrieves and parses the tc_utm cookie
 * @returns Parsed, allow-listed UTM parameters or null if the cookie is absent or invalid
 * @throws Does not throw
 */
export declare function getUtmCookie(): UtmParams | null;
/**
 * Appends UTM parameters from the tc_utm cookie to a given URL
 * Only appends parameters that exist in the cookie
 * @param url - The base URL to append parameters to
 * @returns URL with UTM parameters appended, or original URL if no cookie exists
 * @throws Does not throw; malformed URLs return the original value
 */
export declare function appendUtmParamsToUrl(url: string): string;
