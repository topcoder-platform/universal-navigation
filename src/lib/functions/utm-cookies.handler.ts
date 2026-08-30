import { TC_DOMAIN } from '../config/hosts';
import { getEnvValue } from '../config/env-vars';

// UTM cookie configuration types
export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_id?: string;
  utm_term?: string;
  utm_content?: string;
}

// Cookie configuration constants
const TC_UTM_COOKIE_NAME = 'tc_utm';
const DEFAULT_COOKIE_LIFETIME_DAYS = 30;
const MAX_UTM_VALUE_LENGTH = 100;
const COOKIE_PATH = '/';
const COOKIE_SAMESITE = 'Lax';
const UTM_PARAM_NAMES: Array<keyof UtmParams> = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_id',
  'utm_term',
  'utm_content',
];

/**
 * Sanitizes a UTM token to alphanumerics, dot, underscore, tilde, and hyphen
 * @param input - The string to sanitize
 * @returns Sanitized string, bounded to the analytics attribute recommendation
 * @throws Does not throw
 */
export function sanitize(input: string): string {
  if (!input || typeof input !== 'string') {
    return '';
  }
  return input.replace(/[^A-Za-z0-9._~-]/g, '').slice(0, MAX_UTM_VALUE_LENGTH);
}

/**
 * Extracts and sanitizes UTM parameters from the URL
 * @returns Object containing the present, sanitized standard UTM parameters
 * @throws Does not throw; browser parsing failures produce an empty object
 */
function extractUtmParams(): UtmParams {
  const params: UtmParams = {};

  try {
    const searchParams = new URLSearchParams(window.location.search);

    for (const name of UTM_PARAM_NAMES) {
      const value = searchParams.get(name);
      if (value) params[name] = sanitize(value);
    }
  } catch (error) {
    console.warn('Error extracting UTM parameters:', error);
  }

  return params;
}

/**
 * Gets the cookie lifetime from environment variable or uses default
 * @returns Lifetime in days
 * @throws Does not throw; invalid environment values use the 30-day default
 */
function getCookieLifetimeDays(): number {
  try {
    const envValue = getEnvValue<string>('VITE_UTM_COOKIE_LIFETIME_DAYS', String(DEFAULT_COOKIE_LIFETIME_DAYS));
    const days = parseInt(envValue, 10);
    return Number.isInteger(days) && days > 0 ? days : DEFAULT_COOKIE_LIFETIME_DAYS;
  } catch {
    return DEFAULT_COOKIE_LIFETIME_DAYS;
  }
}

/**
 * Gets the cookie domain with leading dot for broader subdomain coverage
 * @returns Cookie domain (e.g., .topcoder.com)
 * @throws Does not throw
 */
function getCookieDomain(): string {
  return `.${TC_DOMAIN}`;
}

/**
 * Checks if a cookie with the given name exists
 * @param name - Cookie name
 * @returns true if cookie exists, false otherwise
 * @throws Does not throw
 */
function cookieExists(name: string): boolean {
  const cookies = document.cookie.split(';');
  return cookies.some(cookie => cookie.trim().startsWith(`${name}=`));
}

/**
 * Sets a cookie with the specified attributes
 * @param name - Cookie name
 * @param value - Cookie value
 * @param options - Cookie options (domain, path, sameSite, secure, maxAge)
 * @returns void after assigning document.cookie
 * @throws Does not throw
 */
function setCookie(
  name: string,
  value: string,
  options: {
    domain?: string;
    path?: string;
    sameSite?: string;
    secure?: boolean;
    maxAge?: number;
  } = {}
): void {
  const {
    domain = getCookieDomain(),
    path = COOKIE_PATH,
    sameSite = COOKIE_SAMESITE,
    secure = true,
    maxAge = DEFAULT_COOKIE_LIFETIME_DAYS * 24 * 60 * 60, // Convert days to seconds
  } = options;

  let cookieString = `${name}=${encodeURIComponent(value)}`;

  if (domain) {
    cookieString += `; domain=${domain}`;
  }
  if (path) {
    cookieString += `; path=${path}`;
  }
  if (maxAge) {
    cookieString += `; max-age=${maxAge}`;
  }
  if (sameSite) {
    cookieString += `; SameSite=${sameSite}`;
  }
  if (secure) {
    cookieString += '; Secure';
  }

  document.cookie = cookieString;
}

/**
 * Initializes UTM cookie handling on page load
 * Extracts UTM parameters from URL, sanitizes them, and persists to cookie
 * Only sets the cookie if it doesn't already exist, preserving first-touch attribution
 * @returns void after persisting first-touch attribution or determining that no write is needed
 * @throws Does not throw; browser and cookie errors are logged and ignored
 */
export function initializeUtmCookieHandler(): void {
  try {
    // Check if cookie already exists
    if (cookieExists(TC_UTM_COOKIE_NAME)) {
      console.debug('UTM cookie already exists, skipping initialization');
      return;
    }

    // Extract and sanitize UTM parameters
    const utmParams = extractUtmParams();

    // Only set cookie if we have at least one UTM parameter
    if (Object.keys(utmParams).length === 0) {
      console.debug('No UTM parameters found in URL');
      return;
    }

    // Create JSON value with all UTM parameters
    const cookieValue = JSON.stringify(utmParams);

    // Get cookie lifetime in seconds
    const lifetimeDays = getCookieLifetimeDays();
    const maxAgeSecs = lifetimeDays * 24 * 60 * 60;

    // Set the cookie with proper attributes
    setCookie(TC_UTM_COOKIE_NAME, cookieValue, {
      domain: getCookieDomain(),
      path: COOKIE_PATH,
      sameSite: COOKIE_SAMESITE,
      secure: true,
      maxAge: maxAgeSecs,
    });

    console.debug(`UTM cookie set successfully:`, utmParams);
  } catch (error) {
    console.error('Error initializing UTM cookie handler:', error);
  }
}

/**
 * Retrieves and parses the tc_utm cookie
 * @returns Parsed, allow-listed UTM parameters or null if the cookie is absent or invalid
 * @throws Does not throw
 */
export function getUtmCookie(): UtmParams | null {
  try {
    const cookies = document.cookie.split(';');
    const cookieStr = cookies.find(cookie => cookie.trim().startsWith(`${TC_UTM_COOKIE_NAME}=`));

    if (!cookieStr) {
      return null;
    }

    const cookieValue = decodeURIComponent(cookieStr.split('=')[1]);
    const parsed = JSON.parse(cookieValue) as unknown;
    if (!isRecord(parsed)) return null;
    const values = Object.fromEntries(UTM_PARAM_NAMES.flatMap(name => (
      typeof parsed[name] === 'string'
        ? [[name, sanitize(parsed[name] as string)]]
        : []
    ))) as UtmParams;
    return Object.keys(values).length > 0 ? values : null;
  } catch (error) {
    console.warn('Error retrieving UTM cookie:', error);
    return null;
  }
}

/**
 * Appends UTM parameters from the tc_utm cookie to a given URL
 * Only appends parameters that exist in the cookie
 * @param url - The base URL to append parameters to
 * @returns URL with UTM parameters appended, or original URL if no cookie exists
 * @throws Does not throw; malformed URLs return the original value
 */
export function appendUtmParamsToUrl(url: string): string {
  if (!url) {
    return url;
  }

  const utmParams = getUtmCookie();
  if (!utmParams || Object.keys(utmParams).length === 0) {
    return url;
  }

  try {
    const urlObj = new URL(url, window.location.origin);
    
    // Append only the UTM parameters that exist in the cookie.
    for (const name of UTM_PARAM_NAMES) {
      const value = utmParams[name];
      if (value) urlObj.searchParams.set(name, value);
    }
    
    return urlObj.toString();
  } catch (error) {
    console.warn('Error appending UTM parameters to URL:', error);
    return url;
  }
}

/**
 * Narrows decoded cookie JSON to an indexable non-array object.
 * @param value - Decoded JSON value
 * @returns true when value can safely be inspected by property name
 * @throws Does not throw
 */
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
