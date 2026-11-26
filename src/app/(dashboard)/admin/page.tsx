import { requireAdmin } from "@/src/modules/auth/services/authorization.service";

export default async function Page() {
    const user = await requireAdmin();
  return (
    <main>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user.username}</p>
    </main>
  );
}
