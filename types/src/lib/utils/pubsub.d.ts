export declare type EventHandler<T = any> = (data: T) => void;
export declare class PubSub {
    private events;
    publish<T = any>(name: string, data: T): void;
    subscribe<T = any>(name: string, handler: EventHandler<T>): void;
    unsubscribe<T = any>(name: string, handler: EventHandler<T>): void;
}
