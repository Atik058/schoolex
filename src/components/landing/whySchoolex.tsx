
import Link from "next/link";
import {
  Check,
  Users,
  BookOpen,
  ShieldCheck,
  MessageSquare,
  ArrowRight,
  LayoutDashboard,
} from "lucide-react";

const benefits = [
  "Less paperwork and administrative effort",
  "Better communication with parents",
  "Centralized student and academic records",
  "Clear insights into school performance",
  "Secure and organized school information",
];

const solutions = [
  {
    title: "Student records",
    description: "Organized student information",
    icon: Users,
  },
  {
    title: "Academic management",
    description: "Classes, subjects and results",
    icon: BookOpen,
  },
  {
    title: "School administration",
    description: "Simplified daily operations",
    icon: ShieldCheck,
  },
  {
    title: "Parent engagement",
    description: "Connected school community",
    icon: MessageSquare,
  },
];

export default function WhySchoolex() {
  return (
    <section
      id="solutions"
      className="bg-muted/60 px-5 py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Designed for education
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Give your school the{" "}
            <span className="text-primary">
              tools to grow.
            </span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-foreground/60">
            Schoolex brings your school&apos;s daily operations together,
            creating a connected experience for administrators,
            teachers, students and parents.
          </p>

          <div className="mt-8 space-y-5">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                  <Check size={14} />
                </div>

                <span className="text-sm font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-secondary"
          >
            Discover Schoolex
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="absolute -inset-5 rounded-3xl bg-primary/10 blur-2xl" />

          <div className="relative rounded-3xl border border-border bg-surface p-6 shadow-xl sm:p-9">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-foreground/50">
                  School overview
                </p>
                <h3 className="mt-2 text-xl font-bold">
                  Everything under control.
                </h3>
              </div>

              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                <LayoutDashboard size={25} />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {solutions.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-xl border border-border p-4"
                >
                  <div className="rounded-lg bg-primary/10 p-3 text-primary">
                    <item.icon size={20} />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs text-foreground/50">
                      {item.description}
                    </p>
                  </div>

                  <Check className="text-success" size={18} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
