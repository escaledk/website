import { hash } from 'bcrypt';
import { faker } from '@faker-js/faker';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await Promise.all([prisma.company.deleteMany({}), prisma.user.deleteMany({})]);

  const companyId = faker.datatype.uuid();
  const company = await prisma.company.upsert({
    where: { id: companyId },
    update: {},
    create: {
      name: faker.company.name(),
      createdAt: new Date(),
      id: companyId,
    },
  });

  // the reason is to be able to login with these accounts
  const password = await hash('Test!123', 10);
  const users: User[] = [
    {
      email: 'test@test.test',
      password,
      firstname: faker.name.firstName('male'),
      lastname: faker.name.lastName('female'),
      id: faker.datatype.uuid(),
      phone: faker.phone.number('+45 ########'),
      isEmailVerified: true,
      companyId: company.id,
      createdAt: faker.date.past(),
    },
  ];
  for (let index = 0; index < 10; index++) {
    users.push({
      email: faker.internet.email(),
      password,
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      id: faker.datatype.uuid(),
      phone: faker.phone.number('+45 ########'),
      isEmailVerified: true,
      companyId: company.id,
      createdAt: faker.date.past(),
    });
  }

  await prisma.user.createMany({ data: users });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
