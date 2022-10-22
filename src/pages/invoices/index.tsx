import type { GetServerSideProps, NextPage } from 'next';
import { Button } from '../../components/atoms/button';
import { InputGroup, InputField } from '../../components/atoms/input';
import { Text } from '../../components/atoms/text';
import { Sidebar } from '../../components/molecules/sidebar/Sidebar.component';
import { SidebarContent } from '../../components/molecules/sidebar/Sidebar.styled';
import { BasicContentLayout, BasicHeaderLayout, BasicLayout } from '../../layouts/basic/Basic.component';
import { withPageSessionMiddleware } from '../../middlewares/PageSessionMiddleware';
import { Table } from '../../styles/employees.styled';

const Home: NextPage = () => {
  return (
    <BasicLayout>
      <BasicHeaderLayout>
        <Text size="xxLarge" weight="bold">
          Invoices
        </Text>
      </BasicHeaderLayout>
      <BasicContentLayout>
        <Table
        // spacing={{
        //   email: '10%',
        //   firstname: '15%',
        //   lastname: '5%',
        //   phone: '20%',
        // }}
        // columns={['name', 'email', 'phone']}
        // data={employeeMemo}
        // onClick={onRowClick}
        />
      </BasicContentLayout>
    </BasicLayout>
  );
};

export default Home;

const serverSideProps: GetServerSideProps = async ({ req }) => {
  const { user } = req.session;

  return {
    props: {},
  };
};
export const getServerSideProps = withPageSessionMiddleware(serverSideProps);
