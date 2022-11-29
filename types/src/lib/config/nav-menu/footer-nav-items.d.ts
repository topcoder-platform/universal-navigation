export declare const footerNavItems: {
    children: ({
        children: ({
            label: string;
            description: string;
            path: string;
        } | {
            label: string;
            path: string;
            fullPath: string;
        })[];
        label: string;
        description: string;
        path: string;
    } | {
        label: string;
        children: ({
            label: string;
            path: string;
            host?: undefined;
        } | {
            label: string;
            path: string;
            host: string;
        })[];
    } | {
        children: ({
            label: string;
            description: string;
            path: string;
        } | {
            label: string;
            path: string;
        })[];
        label: string;
        description: string;
        path: string;
    } | {
        label: string;
        children: ({
            label: string;
            description: string;
            path: string;
        } | {
            label: string;
            absUrl: string;
        })[];
    })[];
};
