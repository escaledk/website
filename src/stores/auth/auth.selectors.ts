import { IAuthStore } from './auth.types';

export const selectIsAuthenticated = (store: IAuthStore) => store.isAuthenticated;
export const selectIsAuthenticating = (store: IAuthStore) => store.isAuthenticating;
export const selectAuthenticate = (store: IAuthStore) => store.authenticate;
