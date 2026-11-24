
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { role } from "@/src/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
      {/* Background decorations */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary">
            <Sparkles size={14} />
            The smarter way to manage your school
          </div>

          <h1 className="max-w-xl text-4xl font-bold leading-[1.2] tracking-tight sm:text-5xl lg:text-[58px]">
            Simplify School Management.
            <span className="mt-2 block text-primary">
              Empower Education.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-foreground/60">
            Everything your school needs, all in one place.
            Manage students, teachers, attendance, examinations
            and finances with Schoolex.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href= {role}
              className="flex items-center gap-2 rounded-lg bg-primary px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-primary/20 transition hover:-translate-y-1 hover:bg-secondary"
            >
              Get Started
              <ArrowRight size={17} />
            </Link>

            <Link
              href="#features"
              className="flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-4 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              Explore Features
              <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* TRUST INDICATOR */}
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <div className="flex -space-x-3">
              {["A", "B", "C", "D"].map((letter) => (
                <div
                  key={letter}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-bold text-primary"
                >
                  {letter}
                </div>
              ))}
            </div>

            <div>
              <p className="text-sm font-bold">
                Built for modern schools
              </p>
              <p className="text-xs text-foreground/50">
                One platform. Every school operation.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative">
          <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-purple-200/40">

            {/* Dashboard header */}
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                  <GraduationCap size={20} />
                </div>
                <span className="font-bold">Schoolex</span>
              </div>

              <div className="h-8 w-8 rounded-full bg-purple-100" />
            </div>

            {/* Dashboard content */}
            <div className="bg-background p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs text-foreground/50">
                    Welcome back,
                  </p>
                  <h3 className="mt-1 text-lg font-bold">
                    Good morning, Admin!
                  </h3>
                </div>

                <span className="rounded-lg bg-surface px-3 py-2 text-[10px] text-foreground/50 shadow-sm">
                  School overview
                </span>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["2,450", "Students"],
                  ["128", "Teachers"],
                  ["48", "Classes"],
                  ["94.8%", "Attendance"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-border bg-surface p-3"
                  >
                    <p className="text-lg font-bold">{value}</p>
                    <p className="mt-1 text-[10px] text-foreground/50">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Attendance chart */}
              <div className="mt-4 rounded-xl border border-border bg-surface p-4">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-xs font-semibold">
                    Attendance overview
                  </p>
                  <span className="text-[10px] text-foreground/40">
                    This week
                  </span>
                </div>

                <div className="flex h-32 items-end justify-around gap-3">
                  {[60, 85, 70, 95, 80, 90, 75].map((height, i) => (
                    <div
                      key={i}
                      className="flex h-full flex-1 items-end"
                    >
                      <div
                        style={{ height: `${height}%` }}
                        className="w-full rounded-t-md bg-primary/70 transition hover:bg-primary"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-2 flex justify-around text-[10px] text-foreground/40">
                  {"MTWTFSS".split("").map((day, i) => (
                    <span key={i}>{day}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating notification */}
          <div className="absolute -bottom-6 -right-3 hidden items-center gap-3 rounded-xl border border-border bg-surface p-3 shadow-xl sm:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10 text-success">
              <Check size={21} />
            </div>

            <div>
              <p className="text-xs font-bold">
                Everything organized!
              </p>
              <p className="text-[10px] text-foreground/50">
                Your school, one platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
