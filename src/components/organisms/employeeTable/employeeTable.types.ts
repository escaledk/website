import { IEmployee } from '../../../interfaces/IEmployee';

export interface IEmployeeTableProps {
  employees: IEmployee[];
  onRowClick: (data: IEmployee) => void;
}
