
import { auth } from "@clerk/nextjs/server";

import NavbarClient from "./NavbarClient";
import { getCurrentUser } from "@/src/modules/auth/services/auth.service";

export default async function Navbar() {
  const { userId } = await auth();

  const user = userId ? await getCurrentUser() : null;

  return (
    <NavbarClient
      isSignedIn={!!userId}
      profile={
        user
          ? {
              name: user.username,
              role: user.role,
            }
          : null
      }
    />
  );
}
