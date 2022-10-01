import create from 'zustand';
import { persist } from 'zustand/middleware';
import { decode, encode } from 'js-base64';

type SetType = <T>(partial: T | Partial<T> | ((state: T) => T | Partial<T>), replace?: boolean | undefined) => void;
type GetType = <T>() => T;

interface CreateStore<T> {
  store: (set: SetType, get: GetType) => T;
  name: string;
}

export function createStore<T>({ store, name }: CreateStore<T>) {
  return create(
    persist<T>(store as any, {
      name,
      serialize: (state) => encode(JSON.stringify(state)),
      deserialize: (storedState) => JSON.parse(decode(storedState)),
      getStorage: () => ({
        // Returning a promise from getItem is necessary to avoid issues with hydration
        getItem: async (name: string) => localStorage.getItem(name),
        setItem: (name: string, value: string) => localStorage.setItem(name, value),
        removeItem: (name: string) => localStorage.removeItem(name),
      }),
    })
  );
}
