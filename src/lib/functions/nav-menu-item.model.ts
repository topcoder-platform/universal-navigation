export interface NavMenuItem {
    children: NavMenuItem[]
    description: string
    host: string
    label: string
    path: string
    type?: 'cta'
    icon?: string

    action?: string

    // tool selector only has urls, no path
    url?: string

    // path used when user is authenticated
    authenticatedPath?: string

    // for tools groups ordering
    groupOrder?: number
}
