import { IAuthStore, setAuthStore } from './auth.types';

export const authenticate = (set: setAuthStore, get: () => IAuthStore) => async (email: string, password: string) => {
  set({ isAuthenticating: true });

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    console.log(response.status);

    if (response.status === 200) {
      set({ isAuthenticated: true });
    }
  } catch (error) {
    console.error(error);
  }
  set({ isAuthenticating: false });
};
