import { authenticate } from './auth.actions';
import { IAuthStore } from './auth.types';
import { createStore } from '../storeCreator';

export const useAuthStore = createStore<IAuthStore>({
  name: 'authStore',
  store: (set, get) => ({
    authenticate: authenticate(set, get),
    isAuthenticated: false,
    isAuthenticating: false,
    user: null,
  }),
});
