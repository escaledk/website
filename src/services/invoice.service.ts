import { getPrismaClient } from '../db/prisma';

export const getAllCompanyInvoices = async (companyId: string) => {
  return getPrismaClient().invoice.findMany({
    where: {
      companyId,
    },
    select: {
      id: true,
      totalPrice: true,
      createdAt: true,
      payedAt: true,

      Department: {
        select: {
          name: true,
        },
      },
      Customer: {
        select: {
          phone: true,
        },
      },
      Vehicle: {
        select: {
          registrationNumber: true,
        },
      },
    },
  });
};
