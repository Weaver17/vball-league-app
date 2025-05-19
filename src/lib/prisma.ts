import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// const connectionString = `${process.env.DATABASE_URL}`;

const globalForPrisma = global as unknown as { prisma: typeof prisma };

// export const prisma =
//   globalForPrisma.prisma ||
//   new PrismaClient({
//     datasources: {
//       db: {
//         url: connectionString,
//       },
//     },
//   });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
