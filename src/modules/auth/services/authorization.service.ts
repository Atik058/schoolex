import "server-only";

import { redirect } from "next/navigation";
import { UserRole } from "@/generated/prisma/client";
import { getCurrentUser } from "./auth.service";

export async function requireRole(
  allowedRoles: UserRole[]
) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/sign-in");
  }

  if (!allowedRoles.includes(user.role)) {
    redirect("/unauthorized");
  }

  return user;
}

export async function requireAdmin() {
  return requireRole([UserRole.ADMIN]);
}