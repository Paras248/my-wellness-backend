const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.module = prisma;
