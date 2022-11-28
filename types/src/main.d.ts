import { type AuthUser, type NavigationHandler } from './lib/app-context';
export * from './lib/app-context';
export declare type NavigationType = ('footer' | 'marketing' | 'tool');
export declare type NavigationAppProps = {
    type?: NavigationType;
    toolName?: string;
    toolRoot?: string;
    handleNavigation?: NavigationHandler;
    onReady?: () => void;
    user?: AuthUser;
    signIn?: () => void;
    signUp?: () => void;
    signOut?: () => void;
};
export declare type TcUniNavMethods = 'init' | 'update';
export declare type TcUniNavFn = (method: TcUniNavMethods, targetId: string, config: NavigationAppProps) => void;
