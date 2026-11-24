import Sidebar from "@/src/components/layouts/sidebar";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="min-h-screen pl-0 lg:pl-[260px]">
        {children}
      </main>
    </div>
  );
}