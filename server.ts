import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function create() {
  const course = await prisma.courses.create({
    data: {
      duration: 200,
      name: `Curso de Node ${new Date().toLocaleTimeString()}`,
      description: "Curso completo de NodeJS",
    },
  });

  await prisma.courses.create({
    data: {
      duration: 123,
      name: `Curso de Algo ${new Date().toLocaleTimeString()}`,
      description: "Curso completo de Algo",
    },
  });

  console.log(course)
}

async function findOne() {
  // SELECT  * FROM COURSES LIMIT 1
  const course = await prisma.courses.findFirst({
    take: -1, // retorna o inverso do "findFirst"
  });

  console.log(course);
}

async function main() {
  create();
  findOne();
}

main();
