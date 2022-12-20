import { type Writable } from "svelte/store";
declare type StorageType = 'localStorage' | 'sessionStorage';
/**
 * Creates a writable storage that will automatically
 * write and read the value to and from local/session storage
 * @param type Type of storage to use: local or session storage
 * @param key The key to save the storred value to
 * @param initialValue An initial value in case the storage is empty
 * @returns
 */
export declare const useStorage: <T>(type: StorageType, key: string, initialValue: T) => Writable<T>;
export declare const useLocalStorage: <T>(key: string, initialValue: T) => Writable<T>;
export declare const useSessionStorage: <T>(key: string, initialValue: T) => Writable<T>;
export {};
