const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const ayse = await prisma.user.upsert({
    where: { email: "ayse@example.com" },
    update: {},
    create: { name: "Ayşe", email: "ayse@example.com" }
  });
  await prisma.event.createMany({
    data: [
      { title: "Coding Night", date: new Date("2026-12-04"), organizerId: ayse.id },
      { title: "Career Talk", date: new Date("2026-12-11"), organizerId: ayse.id }
    ]
  });
}

main().finally(() => prisma.$disconnect());
