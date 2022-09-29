import create from 'zustand';
import { persist } from 'zustand/middleware';
import { authenticate } from './auth.actions';
import { IAuthStore } from './auth.types';
import { encode, decode } from 'js-base64';

export const useAuthStore = create(
  persist<IAuthStore>(
    (set, get) => ({
      authenticate: authenticate(set, get),
      isAuthenticated: false,
      isAuthenticating: false,
      user: null,
    }),
    {
      name: 'authStore',
      serialize: (state) => encode(JSON.stringify(state.state)),
      deserialize: (storage) => JSON.parse(decode(storage)),
    }
  )
);
