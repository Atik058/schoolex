
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="px-5 py-24 lg:px-8 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-7 py-16 text-center text-white sm:px-16 sm:py-20">

        {/* Background decoration */}
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[50px] border-white/5" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full border-[50px] border-white/5" />

        <div className="relative mx-auto max-w-2xl">
          <Sparkles
            size={28}
            className="mx-auto mb-6 text-white/80"
          />

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Ready to transform the way your school works?
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/75">
            Discover a simpler, smarter way to manage your school.
            Get started with Schoolex today.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 text-sm font-bold text-primary transition hover:-translate-y-1 hover:bg-purple-50"
          >
            Request a Demo
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
