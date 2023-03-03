import type { AUTH_USER_ROLE } from "lib/config/auth"

export interface RouteAuthGuard {
  requireRoles: AUTH_USER_ROLE[]
}

export interface NavMenuItem {
    action?: string
    authenticatedUrl?: string    // URL used when user is authenticated
    children?: NavMenuItem[]
    description?: string
    groupOrder?: number    // for tools groups ordering
    icon?: string
    label?: string
    type?: 'cta'
    url?: string
    target?: string
    uiAttr?: string // allow to pass class names for ui alterations
    auth?: RouteAuthGuard
}
