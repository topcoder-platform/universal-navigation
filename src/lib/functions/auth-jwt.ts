// JWT to JS data object
function parseJwt (token: string) {
  const base64Url = token.split('.')[1];
  const base64fixed = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(window.atob(base64fixed).split('').map(c => (
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  )).join(''));

  return JSON.parse(jsonPayload);
}

// get the JWT authentication cookie value
export function getAuthJwtCookie() {
  return (document.cookie.match(/tcjwt=([^;]+)/) ?? []) [1];
}

// Get the authentication data from the jwt auth cookie
export function getAuthJwtData() {
  const authJwtCookie = getAuthJwtCookie();

  if (!authJwtCookie) {
    return {};
  }

  return parseJwt(authJwtCookie);
}

/**
 * Gets the value of a property stored as `https://topcoder.com/<property name>`
 * @param prop Property name
 * @returns Value of property or undefined
 */
export function getAuthJwtDomainProp<T = string|undefined>(prop: string): T {
  const propRegex = new RegExp(`^https?:\/\/.*\/${prop}$`, 'i');
  const valueEntry = Object.entries((getAuthJwtData() ?? {})).find((entry) => (
    entry[0].match(propRegex)
  ));

  return valueEntry?.[1] as T
}

/**
 * Gets the authorization headers for a request if user is logged in
 *
 * @returns {Authorization: 'Bearer'} or {}
 */
export function getRequestAuthHeaders(): Partial<{ Authorization : string }> {
  const jwtCookie = getAuthJwtCookie();
  return jwtCookie ? {'Authorization': `Bearer ${jwtCookie}`} : {};
}
