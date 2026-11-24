
import Link from "next/link";
import { GraduationCap, ArrowUpRight } from "lucide-react";

import { FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn } from "react-icons/fa";

const footerLinks = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Solutions", href: "/#solutions" },
    { label: "Pricing", href: "/pricing" },
    { label: "Request a Demo", href: "/contact" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Login", href: "/login" },
  ],
  Resources: [
    { label: "Help Center", href: "/help" },
    { label: "Documentation", href: "/documentation" },
    { label: "FAQs", href: "/faq" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                <GraduationCap size={24} strokeWidth={2.2} />
              </div>

              <span className="text-xl font-bold tracking-tight text-foreground">
                school<span className="text-primary">ex</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-foreground/55">
              Making school management simpler, smarter and more connected.
              Empowering schools with the tools they need to focus on what
              matters most: education.
            </p>

            {/* SOCIAL LINKS */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: FaFacebookF, href: "https://facebook.com" },
                { icon: FaInstagram, href: "https://instagram.com" },
                { icon: FaLinkedin, href: "https://linkedin.com" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Social media link ${index + 1}`}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground/60 transition hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* FOOTER LINKS */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="mb-5 text-sm font-bold text-foreground">
                {heading}
              </h3>

              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/55 transition hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* NEWSLETTER CTA */}
        <div className="mt-14 flex flex-col justify-between gap-6 rounded-2xl bg-muted/70 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h3 className="text-lg font-bold">
              Ready to simplify your school management?
            </h3>
            <p className="mt-2 text-sm text-foreground/55">
              Discover how Schoolex can help your institution grow.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-secondary"
          >
            Get Started
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 py-6 text-xs text-foreground/45 sm:flex-row sm:items-center lg:px-8">
          <p>
            © Schoolex. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link
              href="/privacy"
              className="transition hover:text-primary"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-primary"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
