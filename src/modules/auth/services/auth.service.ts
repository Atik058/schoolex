import "server-only";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/src/lib/prisma";

export async function getCurrentUser() {
  const { userId } = await auth();

  // Not signed in through Clerk
  if (!userId) {
    return null;
  }

  // Find the matching Schoolex user
  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
    include: {
      student: true,
      teacher: true,
      guardian: true,
    },
  });

  // Clerk account exists, but no Schoolex profile
  if (!user) {
    return null;
  }

  // Disabled Schoolex accounts must not access the app
  if (!user.isActive) {
    return null;
  }

  return user;
}