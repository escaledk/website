import type { GetServerSideProps, NextPage } from 'next';
import { BasicLayout, BasicHeaderLayout, BasicContentLayout } from '../../layouts/basic';
import { Text } from '../../components/atoms/text';

import { withPageSessionMiddleware } from '../../middlewares/PageSessionMiddleware';
import { Table } from '../../components/atoms/table';
import { Customer } from '@prisma/client';
import { getAllCustomersByCompany } from '../../services/customer.service';

interface ICustomerProps {
  customers: Customer[];
}

const Customers: NextPage<ICustomerProps> = ({ customers }) => {
  return (
    <BasicLayout>
      <BasicHeaderLayout>
        <Text size="xxLarge" weight="bold">
          Customers
        </Text>
      </BasicHeaderLayout>
      <BasicContentLayout>
        <Table
          spacing={{
            email: '10%',
            firstname: '15%',
            lastname: '5%',
            phone: '20%',
          }}
          columns={['firstname', 'lastname', 'phone', 'email']}
          data={customers}
          onClick={(data, index) => {
            console.log({ data }, index);
          }}
        />
      </BasicContentLayout>
    </BasicLayout>
  );
};

export default Customers;

const serverSideProps: GetServerSideProps<ICustomerProps> = async ({ req }) => {
  const { user } = req.session;

  const customers = await getAllCustomersByCompany(user.companyId);

  return {
    props: { customers },
  };
};
export const getServerSideProps = withPageSessionMiddleware(serverSideProps);
