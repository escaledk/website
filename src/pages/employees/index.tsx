import type { GetServerSideProps, NextPage } from 'next';
import { withPageSessionMiddleware } from '../../middlewares/PageSessionMiddleware';
import { getAllEmployeesInCompany } from '../../services/employee.service';
import { useMemo, useState } from 'react';
import { IEmployee } from '../../interfaces/IEmployee';
import { BasicContentLayout, BasicHeaderLayout, BasicLayout } from '../../layouts/basic';
import { Text } from '../../components/atoms/text';
import * as Styled from '../../styles/employees.styled';
import { Button } from '../../components/atoms/button';
import { Sidebar, SidebarContent } from '../../components/molecules/sidebar/sidebar.component';
import { InputField, InputGroup, InputLabel } from '../../components/atoms/input';
import { Table } from '../../components/atoms/table';

interface IPageProps {
  employees: IEmployee[];
}

const EmployeePage: NextPage<IPageProps> = ({ employees }) => {
  const [isInvitingEmployee, setIsInvitingEmployee] = useState(false);
  const [email, setEmail] = useState('');
  const employeeMemo = useMemo(() => employees.map((employee) => ({ ...employee, name: `${employee.firstname} ${employee.lastname}` })), [employees]);

  const onRowClick = async (data: IEmployee, index: number) => {
    console.log(data, index);
    return;
  };

  return (
    <BasicLayout>
      <BasicHeaderLayout>
        <Text size="xxLarge" weight="bold">
          Employees
        </Text>
        <Styled.HeaderButtons>
          <Button onClick={() => setIsInvitingEmployee(true)}>Invite an employee</Button>
        </Styled.HeaderButtons>
      </BasicHeaderLayout>
      <BasicContentLayout>
        <Sidebar isOpen={isInvitingEmployee} onClose={() => setIsInvitingEmployee(false)} title="Invite employees">
          <SidebarContent flexDirection="column" justifyContent="flex-start" alignItems="flex-end" gap={4}>
            <Text width="full">Invite any user for this organization</Text>
            <InputGroup>
              <InputField placeholder="example@gmail.com" onChange={(event) => setEmail(event.target.value)} value={email} />
            </InputGroup>
            <Button>Invite</Button>
          </SidebarContent>
        </Sidebar>
        <Table
          spacing={{
            email: '10%',
            firstname: '15%',
            lastname: '5%',
            phone: '20%',
          }}
          columns={['name', 'email', 'phone']}
          data={employeeMemo}
          onClick={onRowClick}
        />
      </BasicContentLayout>
    </BasicLayout>
  );
};

export default EmployeePage;

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
