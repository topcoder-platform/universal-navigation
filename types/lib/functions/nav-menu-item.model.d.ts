export interface NavMenuItem {
    children: NavMenuItem[];
    description: string;
    host: string;
    label: string;
    path: string;
    type?: 'cta';
    shortDesc: string;
    fullPath: string;
    absUrl: string;
}
