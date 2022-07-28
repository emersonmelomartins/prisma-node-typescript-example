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

  console.log(course);
}

async function findOne() {
  // SELECT  * FROM COURSES LIMIT 1
  const course = await prisma.courses.findFirst({
    take: -1, // retorna o inverso do "findFirst"
  });

  console.log(course);
}

async function update() {
  const course = await prisma.courses.update({
    where: {
      id: "175066cd-22dd-4286-aefe-6665a2a7f7f1",
    },
    data: {
      duration: 999,
      description: "editado",
    },
  });

  console.log(course);
}

async function main() {
  // create();
  // findOne();
  update();
}

main();
