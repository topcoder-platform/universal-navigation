export declare const CUSTOMER_HOSTS: string[];
export declare const NUDGES_DISABLED_HOSTS: string[];
export interface ToastType {
    theme: 'bio' | 'education' | 'gigAvailability' | 'profilePicture' | 'skills' | 'verified' | 'workHistory';
    icon: string;
    cover?: string;
    type: 'animated' | 'static';
    title: string;
    message: string;
    ctaText: string;
    ctaLink: (userhandle: string) => string;
}
export declare const toastsMeta: {
    [key: string]: ToastType;
};
