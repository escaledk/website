import type { GetServerSideProps, NextPage } from 'next';

import { withPageSessionMiddleware } from '../../middlewares/PageSessionMiddleware';

const Departments: NextPage = () => {
  return <div>department</div>;
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
