import { writable, type Writable } from "svelte/store";

type StorageType = 'localStorage' | 'sessionStorage'

const STORAGE_KEY_PREFIX = 'uninav:storage';

/**
 * Creates a writable storage that will automatically
 * write and read the value to and from local/session storage
 * @param type Type of storage to use: local or session storage
 * @param key The key to save the storred value to
 * @param initialValue An initial value in case the storage is empty
 * @returns
 */
export const useStorage = <T, >(type: StorageType, key: string, initialValue: T): Writable<T> => {
  const storageKey = `${STORAGE_KEY_PREFIX}[${key}]`;
  const storage: Storage = window[type];

  // reads the stored value from the storage
  const readStoredValue: () => T = () => {
    try {
      // Get from local storage by key
      const item: string | null = storage.getItem(storageKey)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return value
      return initialValue
    }
  }

  const store = writable(readStoredValue());

  // subscribe and write the value to the storage
  store.subscribe((value) => storage.setItem(storageKey, JSON.stringify(value)));

  return store;
}

export const useLocalStorage = <T, >(key: string, initialValue: T): Writable<T> => (
  useStorage('localStorage', key, initialValue)
)

export const useSessionStorage = <T, >(key: string, initialValue: T): Writable<T> => (
  useStorage('sessionStorage', key, initialValue)
)
