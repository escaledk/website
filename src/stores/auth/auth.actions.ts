import { auth } from '../../services/firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { IAuthStore, setAuthStore } from './auth.types';

export const authenticate = (set: setAuthStore, get: () => IAuthStore) => async (email: string, password: string) => {
  set({ isAuthenticating: true });

  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
    set({ isAuthenticated: true, user: user as any });
  } catch (error) {
    console.error(error);
  }
  set({ isAuthenticating: false });
};
