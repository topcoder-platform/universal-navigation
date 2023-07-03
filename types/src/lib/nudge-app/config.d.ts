export interface ToastType {
    theme: 'bio' | 'education' | 'gigAvailability' | 'profilePicture' | 'skills' | 'verified' | 'workHistory';
    icon: string;
    cover?: string;
    type: 'animated' | 'static';
    title: string;
    message: string;
    ctaText: string;
    ctaLink: string;
}
export declare const toastsMeta: {
    [key: string]: ToastType;
};
