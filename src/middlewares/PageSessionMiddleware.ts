import { withIronSessionSsr } from 'iron-session/next';
import { GetServerSideProps } from 'next';
import { sessionConfig } from '../config/session';

export const withPageSessionMiddleware = (handler: GetServerSideProps) =>
  withIronSessionSsr((context) => {
    const { user } = context.req.session;

    if (!user) {
      context.req.session.destroy();
      return {
        redirect: {
          destination: '/login',
          permanent: true,
        },
      };
    }

    return handler(context);
  }, sessionConfig);
