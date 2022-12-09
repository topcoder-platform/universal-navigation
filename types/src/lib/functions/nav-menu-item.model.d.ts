export interface NavMenuItem {
    children: NavMenuItem[];
    description: string;
    host: string;
    label: string;
    path: string;
    type?: 'cta';
    icon?: string;
    action?: string;
    url?: string;
}
