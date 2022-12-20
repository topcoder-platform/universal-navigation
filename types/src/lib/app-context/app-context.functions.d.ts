import type { NavigationAppProps } from "main";
import type { Writable } from "svelte/store";
import type { AppContext } from "./app-context.model";
export declare const buildContext: (newConfig: Partial<NavigationAppProps>, prevContext: any) => {
    auth: {
        ready: any;
        user: any;
        signIn: any;
        signOut: any;
        signUp: any;
    };
    navigationHandler: any;
    toolConfig: {
        name: any;
        root: any;
        fullFooter: any;
    };
    supportMeta: any;
};
export declare const getAppContext: () => Writable<AppContext>;
