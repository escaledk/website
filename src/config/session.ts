import { IUser } from '../interfaces/IUser';

declare module 'iron-session' {
  interface IronSessionData {
    user?: IUser;
  }
}

export const sessionConfig = {
  cookieName: 'escale_session',
  password: process.env.SESSION_SECRET_KEY!,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};
