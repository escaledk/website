import create from 'zustand';
import { persist } from 'zustand/middleware';
import { authenticate } from './auth.actions';
import { IAuthStore } from './auth.types';
import { encode, decode } from 'js-base64';
import { createStore } from '..';

export const useAuthStore = createStore<IAuthStore>({
  name: 'authStore',
  store: (set, get) => ({
    isHydrated: false,
    authenticate: authenticate(set, get),
    isAuthenticated: false,
    isAuthenticating: false,
    user: null,
  }),
});
