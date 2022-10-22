import { Employee } from '@prisma/client';
import { getPrismaClient } from '../db/prisma';
import { IEmployee } from '../interfaces/IEmployee';

export const getAllEmployeesInCompany = async (companyId: string): Promise<IEmployee[]> => {
  return await getPrismaClient().employee.findMany({
    where: { companyId },
    select: {
      id: true,
      email: true,
      companyId: true,
      firstname: true,
      lastname: true,
      phone: true,
    },
  });
};

export const getEmployeeFromCompany = async (companyId: string, employeeId: string): Promise<Employee> => {
  const { password, ...user } = (await getPrismaClient().employee.findFirst({
    where: { companyId, id: employeeId },
  })) as any;

  return user;
};
