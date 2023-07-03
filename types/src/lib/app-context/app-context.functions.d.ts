import type { NavigationAppProps } from "main";
import type { Writable } from "svelte/store";
import type { AppContext } from "./app-context.model";
export declare const buildContext: (newConfig: Partial<NavigationAppProps>, prevContext: any) => {
    auth: {
        ready: any;
        user: any;
        autoFetchUser: boolean;
        signIn: any;
        signOut: any;
        signUp: any;
        profileCompletionData: any;
    };
    navigationHandler: any;
    toolConfig: {
        name: any;
        root: any;
        fullFooter: any;
    };
    supportMeta: any;
    integrations: any;
};
export declare const getAppContext: () => Writable<AppContext>;
