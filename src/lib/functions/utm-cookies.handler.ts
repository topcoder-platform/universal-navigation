import { TC_DOMAIN } from '../config/hosts';
import { getEnvValue } from '../config/env-vars';

// UTM cookie configuration types
interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

// Cookie configuration constants
const TC_UTM_COOKIE_NAME = 'tc_utm';
const DEFAULT_COOKIE_LIFETIME_DAYS = 3;
const COOKIE_PATH = '/';
const COOKIE_SAMESITE = 'Lax';

/**
 * Sanitizes a string to remove all characters except A-Z, a-z, 0-9, hyphen (-), underscore (_)
 * @param input - The string to sanitize
 * @returns Sanitized string
 */
export function sanitize(input: string): string {
  if (!input || typeof input !== 'string') {
    return '';
  }
  // Remove all characters except A-Z, a-z, 0-9, hyphen (-), underscore (_)
  return input.replace(/[^A-Za-z0-9\-_]/g, '');
}

/**
 * Extracts and sanitizes UTM parameters from the URL
 * @returns Object containing sanitized utm_source, utm_medium, utm_campaign
 */
function extractUtmParams(): UtmParams {
  const params: UtmParams = {};

  try {
    const searchParams = new URLSearchParams(window.location.search);

    const utm_source = searchParams.get('utm_source');
    const utm_medium = searchParams.get('utm_medium');
    const utm_campaign = searchParams.get('utm_campaign');

    if (utm_source) {
      params.utm_source = sanitize(utm_source);
    }
    if (utm_medium) {
      params.utm_medium = sanitize(utm_medium);
    }
    if (utm_campaign) {
      params.utm_campaign = sanitize(utm_campaign);
    }
  } catch (error) {
    console.warn('Error extracting UTM parameters:', error);
  }

  return params;
}

/**
 * Gets the cookie lifetime from environment variable or uses default
 * @returns Lifetime in days
 */
function getCookieLifetimeDays(): number {
  try {
    const envValue = getEnvValue<string>('VITE_UTM_COOKIE_LIFETIME_DAYS', String(DEFAULT_COOKIE_LIFETIME_DAYS));
    const days = parseInt(envValue, 10);
    return isNaN(days) ? DEFAULT_COOKIE_LIFETIME_DAYS : days;
  } catch {
    return DEFAULT_COOKIE_LIFETIME_DAYS;
  }
}

/**
 * Gets the cookie domain with leading dot for broader subdomain coverage
 * @returns Cookie domain (e.g., .topcoder.com)
 */
function getCookieDomain(): string {
  return `.${TC_DOMAIN}`;
}

/**
 * Checks if a cookie with the given name exists
 * @param name - Cookie name
 * @returns true if cookie exists, false otherwise
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
 * Only sets the cookie if it doesn't already exist
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
 * @returns Parsed UTM parameters or null if cookie doesn't exist
 */
export function getUtmCookie(): UtmParams | null {
  try {
    const cookies = document.cookie.split(';');
    const cookieStr = cookies.find(cookie => cookie.trim().startsWith(`${TC_UTM_COOKIE_NAME}=`));

    if (!cookieStr) {
      return null;
    }

    const cookieValue = decodeURIComponent(cookieStr.split('=')[1]);
    return JSON.parse(cookieValue) as UtmParams;
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
    
    // Append only the UTM parameters that exist in the cookie
    if (utmParams.utm_source) {
      urlObj.searchParams.set('utm_source', utmParams.utm_source);
    }
    if (utmParams.utm_medium) {
      urlObj.searchParams.set('utm_medium', utmParams.utm_medium);
    }
    if (utmParams.utm_campaign) {
      urlObj.searchParams.set('utm_campaign', utmParams.utm_campaign);
    }
    
    return urlObj.toString();
  } catch (error) {
    console.warn('Error appending UTM parameters to URL:', error);
    return url;
  }
}
