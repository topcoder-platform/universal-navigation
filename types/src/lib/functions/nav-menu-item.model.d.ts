export interface NavMenuItem {
    action?: string;
    authenticatedUrl?: string;
    children?: NavMenuItem[];
    description?: string;
    groupOrder?: number;
    icon?: string;
    label?: string;
    type?: 'cta';
    url?: string;
    target?: string;
    uiAttr?: string;
}
