import { getPrismaClient } from '../db/prisma';

export const getAllCustomersByCompany = async (companyId: string) => {
  return getPrismaClient().customer.findMany({
    where: {
      companyId,
    },
  });
};
