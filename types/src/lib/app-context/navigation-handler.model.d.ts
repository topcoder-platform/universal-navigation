export type NavigationHandler = (route: {
    label: string;
    path: string;
    isMarketingUrl?: boolean;
}) => void;
