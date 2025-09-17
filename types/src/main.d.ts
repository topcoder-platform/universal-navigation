import { type AuthUser, type NavigationHandler, type SupportMeta } from './lib/app-context';
import { PubSub } from './lib/utils/pubsub';
import 'lib/styles/main.scss';
export * from './lib/app-context';
export declare const appPubSub: PubSub;
export declare type NavigationType = ('footer' | 'marketing' | 'tool');
export declare type NavigationAppProps = {
    type?: NavigationType;
    toolName?: string;
    toolRoot?: string;
    fullFooter?: boolean;
    showSalesCta?: boolean;
    handleNavigation?: NavigationHandler;
    onReady?: () => void;
    user?: AuthUser | 'auto';
    signIn?: () => void;
    signUp?: () => void;
    signOut?: () => void;
    supportMeta?: SupportMeta;
    integrations?: {
        [key: string]: 'disable';
    };
};
export declare type TcUniNavMethods = 'init' | 'update' | 'destroy' | 'triggerFlow';
export declare type TcUniNavFn = (method: TcUniNavMethods, targetId: string, config: NavigationAppProps) => void;
