import { Invoice } from '@prisma/client';
import type { GetServerSideProps, NextPage } from 'next';
import { Text } from '../../components/atoms/text';
import { BasicContentLayout, BasicHeaderLayout, BasicLayout, BasicHeaderButtonLayout } from '../../layouts/basic/Basic.component';
import { withPageSessionMiddleware } from '../../middlewares/PageSessionMiddleware';
import { getAllCompanyInvoices } from '../../services/invoice.service';
import { Table } from '../../components/atoms/table';
import { useEffect, useMemo, useState } from 'react';
import { ReturnedPromiseResolvedType } from '../../interfaces/ReturnType';
import { dateLocalFormat } from '../../services/date.service';
import { Button } from '../../components/atoms/button';
import { Sidebar, SidebarContent } from '../../components/molecules/sidebar/Sidebar.component';

interface InvoiceTableData {
  id: number;
  car: string;
  customer: string;
  price: string;
  createdAt?: string;
  payedAt?: string | null;
}

interface IInvoicePageProps {
  invoices: Array<InvoiceTableData>;
}

const Home: NextPage<IInvoicePageProps> = ({ invoices }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [formattedInvoices, setFormattedInvoices] = useState<typeof invoices>([]);

  useEffect(() => {
    setFormattedInvoices(
      invoices.map((invoice) => ({
        ...invoice,
        createdAt: dateLocalFormat(invoice.createdAt!),
        payedAt: invoice.payedAt && dateLocalFormat(invoice.createdAt!),
      }))
    );
  }, [invoices]);

  return (
    <BasicLayout>
      <BasicHeaderLayout>
        <Text size="xxLarge" weight="bold">
          Invoices
        </Text>
        <BasicHeaderButtonLayout>
          <Button onClick={() => setIsCreating(true)}>Create</Button>
        </BasicHeaderButtonLayout>
      </BasicHeaderLayout>
      <BasicContentLayout>
        <Sidebar isOpen={isCreating} onClose={() => setIsCreating(false)} title="Welcome">
          <SidebarContent></SidebarContent>
        </Sidebar>

        <Table spacing={{}} columns={['id', 'car', 'price', 'createdAt', 'payedAt', 'customer']} data={formattedInvoices} onClick={() => {}} />
      </BasicContentLayout>
    </BasicLayout>
  );
};

export default Home;

const serverSideProps: GetServerSideProps<IInvoicePageProps> = async ({ req }) => {
  const { user } = req.session;

  const invoices = await getAllCompanyInvoices(user.companyId);

  const transformData = (invoices: ReturnedPromiseResolvedType<typeof getAllCompanyInvoices>): InvoiceTableData[] => {
    return invoices.map((invoice) => ({
      id: invoice.id,
      car: invoice.Vehicle.registrationNumber,
      customer: invoice.Customer.phone,
      price: `${invoice.totalPrice} kr`,
      createdAt: invoice.createdAt?.toString(),
      payedAt: invoice.payedAt?.toString() || null,
    }));
  };

  return {
    props: {
      invoices: transformData(invoices),
    },
  };
};
export const getServerSideProps = withPageSessionMiddleware(serverSideProps);
