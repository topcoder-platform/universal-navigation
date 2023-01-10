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
}
