
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  GraduationCap,
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "About us", href: "/#about-us" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
            <GraduationCap size={24} strokeWidth={2.2} />
          </div>

          <span className="text-xl font-bold tracking-tight">
            school<span className="text-primary">ex</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-8 md:flex">
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

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-5 md:flex">
          <Link
            href="/login"
            className="text-sm font-semibold transition hover:text-primary"
          >
            Login
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-secondary"
          >
            Get Started
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="rounded-lg p-2 transition hover:bg-muted md:hidden"
          aria-label={mobileMenu ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenu}
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {mobileMenu && (
        <div className="border-t border-border bg-surface px-5 py-5 md:hidden">
          <nav className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground/70 transition hover:bg-muted hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenu(false)}
              className="rounded-lg border border-border px-4 py-3 text-center text-sm font-semibold"
            >
              Login
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenu(false)}
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white"
            >
              Get Started
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
