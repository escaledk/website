import { User } from '@prisma/client';
import { getPrismaClient } from '../db/prisma';
import { IEmployee } from '../interfaces/IEmployee';
import { IUser } from '../interfaces/IUser';

export const getAllEmployeesInCompany = async (companyId: string): Promise<IEmployee[]> => {
  return await getPrismaClient().user.findMany({
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

export const getEmployeeFromCompany = async (companyId: string, employeeId: string): Promise<User> => {
  const { password, ...user } = (await getPrismaClient().user.findFirst({
    where: { companyId, id: employeeId },
  })) as any;

  return user;
};
