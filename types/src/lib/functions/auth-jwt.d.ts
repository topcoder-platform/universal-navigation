export declare function getAuthJwtCookie(): string;
export declare function getAuthJwtData(): any;
/**
 * Gets the value of a property stored as `https://topcoder.com/<property name>`
 * @param prop Property name
 * @returns Value of property or undefined
 */
export declare function getAuthJwtDomainProp<T = string | undefined>(prop: string): T;
/**
 * Gets the authorization headers for a request if user is logged in
 *
 * @returns {Authorization: 'Bearer'} or {}
 */
export declare function getRequestAuthHeaders(): {
    Authorization: string;
} | {
    Authorization?: undefined;
};
