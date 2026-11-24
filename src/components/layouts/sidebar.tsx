"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  CalendarCheck,
  Megaphone,
  UserRound,
  School,
  BookOpen,
  ClipboardList,
  Award,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import { useState } from "react";
import { role } from "@/src/lib/data";

const menuItems = [
  {
    title: "Dashboard",
    href: `/${role}`,
    icon: LayoutDashboard,
  },
  {
    title: "Students",
    href: "/management/students",
    icon: Users,
  },
  {
    title: "Teachers",
    href: "/management/teachers",
    icon: GraduationCap,
  },
  {
    title: "Attendance",
    href: "/management/attendance",
    icon: CalendarCheck,
  },
  {
    title: "Announcements",
    href: "/management/announcements",
    icon: Megaphone,
  },
  {
    title: "Guardians",
    href: "/management/guardians",
    icon: UserRound,
  },
  {
    title: "Classes",
    href: "/management/classes",
    icon: School,
  },
  {
    title: "Subjects",
    href: "/management/subjects",
    icon: BookOpen,
  },
  {
    title: "Examination",
    href: "/management/examination",
    icon: ClipboardList,
  },
  {
    title: "Results",
    href: "/management/results",
    icon: Award,
  },
];

type SidebarProps = {
  mobileOpen?: boolean;
  onClose?: () => void;
};

export default function Sidebar({
  mobileOpen = false,
  onClose,
}: SidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen flex-col
          border-r border-border bg-surface
          transition-all duration-300
          ${collapsed ? "w-[76px]" : "w-[260px]"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="flex h-[76px] items-center justify-between border-b border-border px-5">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 overflow-hidden"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
              <GraduationCap size={23} />
            </div>

            {!collapsed && (
              <span className="text-xl font-bold tracking-tight text-foreground">
                Schoolex
              </span>
            )}
          </Link>

          {/* Mobile close button */}
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-foreground/60 hover:bg-muted lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-3 py-6">
          {!collapsed && (
            <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-foreground/40">
              Main Menu
            </p>
          )}

          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;

              const isActive =
                pathname === item.href ||
                (item.href !== "/dashboard" &&
                  pathname.startsWith(`${item.href}/`));

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={onClose}
                  title={collapsed ? item.title : undefined}
                  className={`
                    group flex items-center gap-3 rounded-xl px-3 py-3
                    text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-primary text-white shadow-sm"
                        : "text-foreground/65 hover:bg-muted hover:text-primary"
                    }
                  `}
                >
                  <Icon
                    size={20}
                    className="shrink-0"
                    strokeWidth={1.8}
                  />

                  {!collapsed && (
                    <span className="truncate">{item.title}</span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Collapse button - Desktop */}
        <div className="hidden border-t border-border p-3 lg:block">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex w-full items-center justify-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-foreground/60 transition hover:bg-muted hover:text-primary"
          >
            {collapsed ? (
              <ChevronRight size={20} />
            ) : (
              <>
                <ChevronLeft size={20} />
                <span>Collapse Sidebar</span>
              </>
            )}
          </button>
        </div>
      </aside>
    </>
  );
}