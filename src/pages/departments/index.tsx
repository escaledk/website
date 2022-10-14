import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { withPageSessionMiddleware } from '../../middlewares/PageSessionMiddleware';

const Departments: NextPage = () => {
  return <div>dashboard</div>;
};

export default Departments;

const serverSideProps: GetServerSideProps = async ({ req }) => {
  const { user } = req.session;
  console.log(user);

  return {
    props: {},
  };
};
export const getServerSideProps = withPageSessionMiddleware(serverSideProps);
