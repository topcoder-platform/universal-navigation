import type { AUTH_USER_ROLE } from "lib/config/auth";
export interface RouteAuthGuard {
    requireRoles: AUTH_USER_ROLE[];
}
export interface NavMenuItem {
    action?: string;
    authenticatedUrl?: string;
    children?: NavMenuItem[];
    description?: string;
    groupOrder?: number;
    icon?: string;
    label?: string;
    type?: 'cta';
    pathname?: string;
    url?: string;
    target?: string;
    uiAttr?: string;
    auth?: RouteAuthGuard;
}
