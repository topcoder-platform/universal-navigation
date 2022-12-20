export declare const toolSelectorNavItems: {
    children: ({
        label: string;
        children: ({
            label: string;
            children: {
                label: string;
                url: string;
                icon: string;
                description: string;
            }[];
        } | {
            label: string;
            children: {
                label: string;
                url: string;
                type: string;
            }[];
        })[];
    } | {
        label: string;
        children: {
            label: string;
            groupOrder: number;
            children: {
                label: string;
                url: string;
                icon: string;
                description: string;
            }[];
        }[];
    })[];
};
