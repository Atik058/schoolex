
"use client";

import Link from "next/link";
import { useState } from "react";
import { useClerk, useUser } from "@clerk/nextjs";
import {
  Search,
  Bell,
  ChevronDown,
  Menu,
  X,
  LogOut,
  Home,
  Info,
} from "lucide-react";

type NavbarClientProps = {
  isSignedIn: boolean;
  profile: {
    name: string;
    role: string;
  } | null;
};

const navigation = [
  { label: "Home", href: "/", icon: Home },
  { label: "About us", href: "/#about-us", icon: Info },
];

export default function NavbarClient({
  isSignedIn,
  profile,
}: NavbarClientProps) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { signOut } = useClerk();
  const { user } = useUser();

  const displayName =
    user?.fullName || profile?.name || "User";

  const displayRole = profile?.role
    ? profile.role.charAt(0) +
      profile.role.slice(1).toLowerCase()
    : "Account unavailable";

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5 lg:px-8">

        {/* LEFT: NAVIGATION */}
        <nav className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/70 transition hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CENTER: SEARCH */}
        <div className="hidden max-w-md flex-1 md:block">
          <div className="relative">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />

            <input
              type="search"
              placeholder="Search anything..."
              aria-label="Search"
              className="h-11 w-full rounded-xl border border-border bg-muted/50 pl-11 pr-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/10"
            />

            <kbd className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded border border-border bg-background px-2 py-1 text-[10px] text-muted-foreground lg:block">
              /
            </kbd>
          </div>
        </div>

        {/* RIGHT: USER ACTIONS */}
        <div className="flex items-center gap-3">

          {isSignedIn ? (
            <>
              {/* NOTIFICATIONS */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setNotificationsOpen(!notificationsOpen)
                  }
                  aria-label="Notifications"
                  aria-expanded={notificationsOpen}
                  className="relative flex h-10 w-10 items-center justify-center rounded-xl text-foreground/70 transition hover:bg-muted hover:text-primary"
                >
                  <Bell size={21} />

                  <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-danger ring-2 ring-background" />
                </button>

                {notificationsOpen && (
                  <div className="absolute right-0 top-14 z-50 w-72 rounded-xl border border-border bg-surface p-4 shadow-xl">
                    <h3 className="font-semibold">
                      Notifications
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      No new notifications.
                    </p>
                  </div>
                )}
              </div>

              {/* USER PROFILE */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setProfileOpen(!profileOpen)
                  }
                  aria-expanded={profileOpen}
                  className="flex items-center gap-2.5 rounded-xl p-1.5 transition hover:bg-muted"
                >
                  {user?.imageUrl ? (
                    <img
                      src={user.imageUrl}
                      alt={displayName}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                      {displayName.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <div className="hidden text-left sm:block">
                    <p className="max-w-32 truncate text-sm font-semibold">
                      {displayName}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {displayRole}
                    </p>
                  </div>

                  <ChevronDown
                    size={16}
                    className="hidden text-muted-foreground sm:block"
                  />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 top-14 z-50 w-56 rounded-xl border border-border bg-surface p-2 shadow-xl">
                    <div className="border-b border-border px-3 py-3">
                      <p className="truncate text-sm font-semibold">
                        {displayName}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {displayRole}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        signOut({ redirectUrl: "/" })
                      }
                      className="mt-2 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-danger transition hover:bg-danger/10"
                    >
                      <LogOut size={17} />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link
              href="/sign-in"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary"
            >
              Sign in
            </Link>
          )}

          {/* MOBILE MENU */}
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenu}
            className="rounded-lg p-2 transition hover:bg-muted md:hidden"
          >
            {mobileMenu ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="border-t border-border bg-surface px-5 py-5 md:hidden">
          <div className="relative mb-4">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="search"
              placeholder="Search anything..."
              aria-label="Search"
              className="h-11 w-full rounded-xl border border-border bg-muted/50 pl-10 pr-4 text-sm outline-none focus:border-primary"
            />
          </div>

          <nav className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-foreground/70 hover:bg-muted hover:text-primary"
              >
                <item.icon size={18} />
                {item.label}
              </Link>
            ))}
          </nav>

          {isSignedIn && (
            <button
              type="button"
              onClick={() => signOut({ redirectUrl: "/" })}
              className="mt-4 flex w-full items-center gap-3 rounded-lg border-t border-border px-3 py-4 text-sm font-semibold text-danger"
            >
              <LogOut size={18} />
              Sign out
            </button>
          )}
        </div>
      )}
    </header>
  );
}
