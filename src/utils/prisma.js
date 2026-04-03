import { PrismaClient } from "@prisma/client";

// Create Prisma instance
const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"], // optional (for debugging)
});

// Export as default
export default prisma;