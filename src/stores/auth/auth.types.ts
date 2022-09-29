import { IUser } from '../../interfaces/IUser';

export interface IAuthStore {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  authenticate: (email: string, password: string) => Promise<void>;

  user: IUser | null;
}

export type setAuthStore = (
  partial: IAuthStore | Partial<IAuthStore> | ((state: IAuthStore) => IAuthStore | Partial<IAuthStore>),
  replace?: boolean | undefined
) => void;
