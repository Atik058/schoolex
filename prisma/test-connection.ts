
import dotenv from "dotenv";
import { readFileSync } from "node:fs";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

dotenv.config({ path: ".env.local" });

async function main() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured");
  }

  const ca = readFileSync(
    "prisma/certs/supabase-ca.crt",
    "utf8"
  );

  const adapter = new PrismaPg({
    connectionString,
    ssl: {
      ca,
    },
  });

  const prisma = new PrismaClient({ adapter });

  try {
    console.log("Testing database connection...");

    const result = await prisma.$queryRaw<
      { connection_test: number }[]
    >`SELECT 1 AS connection_test`;

    console.log("Database connection successful!");
    console.log("Test result:", result);
  } catch (error) {
    console.error("Database connection failed:");
    console.error(error);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
