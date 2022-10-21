import type { GetServerSideProps, NextPage } from 'next';
import { withPageSessionMiddleware } from '../../middlewares/PageSessionMiddleware';
import { getAllEmployeesInCompany } from '../../services/employee.service';
import { useMemo } from 'react';
import { EmployeeTable } from '../../components/organisms/employeeTable/employeeTable.component';
import { IEmployee } from '../../interfaces/IEmployee';
import { Header } from '../../components/molecules/header';
import { BasicContentLayout, BasicHeaderLayout, BasicLayout } from '../../layouts/basic';
import { Text } from '../../components/atoms/text';

interface IPageProps {
  employees: IEmployee[];
}

const Home: NextPage<IPageProps> = ({ employees }) => {
  const memoedEmployees = useMemo(() => employees, [employees]);

  const onRowClick = async (data: IEmployee) => {
    console.log(data);
    return;
  };

  return (
    <BasicLayout>
      <BasicHeaderLayout>
        <Text size="xxLarge">Employees</Text>
      </BasicHeaderLayout>
      <BasicContentLayout>
        <EmployeeTable employees={memoedEmployees} onRowClick={onRowClick} />
      </BasicContentLayout>
    </BasicLayout>
  );
};

export default Home;

const serverSideProps: GetServerSideProps<IPageProps> = async ({ req }) => {
  const { user } = req.session;
  const employees = await getAllEmployeesInCompany(user.companyId);
  return {
    props: {
      employees: employees,
    },
  };
};
export const getServerSideProps = withPageSessionMiddleware(serverSideProps);
