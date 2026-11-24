
import Link from "next/link";
import {
  Users,
  CalendarCheck,
  ClipboardList,
  Wallet,
  MessageSquare,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Student Management",
    description:
      "Manage student profiles, admissions, records and academic history from one centralized platform.",
  },
  {
    icon: CalendarCheck,
    title: "Smart Attendance",
    description:
      "Track daily attendance, monitor absences and keep parents informed about student attendance.",
  },
  {
    icon: ClipboardList,
    title: "Examination & Results",
    description:
      "Manage examinations, grading, report cards and academic performance effortlessly.",
  },
  {
    icon: Wallet,
    title: "Fee Management",
    description:
      "Simplify fee collection, payment tracking, invoices and financial reporting.",
  },
  {
    icon: MessageSquare,
    title: "Parent Communication",
    description:
      "Keep teachers, parents and administrators connected through timely updates.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description:
      "Make informed decisions with meaningful academic and administrative insights.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="px-5 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Everything in one place
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Powerful tools for a{" "}
            <span className="text-primary">
              smarter school
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-foreground/60">
            Spend less time managing paperwork and more time
            focusing on what matters most: education.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                <feature.icon size={23} strokeWidth={1.8} />
              </div>

              <h3 className="text-lg font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-foreground/55">
                {feature.description}
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Learn more
                <ArrowUpRight size={15} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
