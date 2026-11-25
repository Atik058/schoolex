
import dotenv from "dotenv";
import { readFileSync } from "node:fs";
import {
  PrismaClient,
  UserRole,
} from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

dotenv.config({
  path: ".env.local",
});

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

async function main() {
  const clerkId = process.env.INITIAL_ADMIN_CLERK_ID;
  const email = process.env.INITIAL_ADMIN_EMAIL;

  if (!clerkId || !email) {
    throw new Error("Missing initial admin environment variables");
  }

  // Check whether an admin already exists
  const existingAdmin = await prisma.user.findFirst({
    where: {
      role: UserRole.ADMIN,
    },
  });

  if (existingAdmin) {
    throw new Error("An admin account already exists");
  }

  // Check whether this Clerk account is already linked
  const existingUser = await prisma.user.findUnique({
    where: {
      clerkId,
    },
  });

  if (existingUser) {
    throw new Error("This Clerk account is already linked to a user");
  }

  // Create initial admin profile
  await prisma.user.create({
    data: {
      clerkId,
      username: "admin",
      email,
      role: UserRole.ADMIN,
      isActive: true,
    },
  });

  console.log("Initial admin profile created successfully");
}

main()
  .catch((error) => {
    console.error("Admin creation failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
