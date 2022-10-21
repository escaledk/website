import { ReactNode } from 'react';
import { IEmployee } from '../../../interfaces/IEmployee';
import { Table, TableCell, TableRow } from '../../atoms/table';
import { IEmployeeTableProps } from './employeeTable.types';

export const EmployeeTable = ({ employees, onRowClick }: IEmployeeTableProps) => {
  const onRenderer = (data: IEmployee, index: number): ReactNode => {
    const cells: JSX.Element[] = [];
    Object.entries(data).forEach(([key, value], index) => {
      if (['id', 'companyId'].includes(key)) return;
      cells.push(
        <TableCell title={value} key={`tableRow_${index}`}>
          {value}
        </TableCell>
      );
    });
    return (
      <TableRow onClick={(event) => onRowClick(data)} key={`tablerow_${index}`}>
        {cells}
      </TableRow>
    );
  };

  return (
    <Table
      spacing={{
        email: '10%',
        firstname: '15%',
        lastname: '5%',
        phone: '20%',
      }}
      columns={['email', 'firstname', 'lastname', 'phone']}
      data={employees}
      onRenderer={onRenderer}
    />
  );
};
