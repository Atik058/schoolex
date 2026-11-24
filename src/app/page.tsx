import CTA from "../components/landing/CTA";
import Features from "../components/landing/features";
import Hero from "../components/landing/hero";
import WhySchoolex from "../components/landing/whySchoolex";


export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Hero />
      <Features />
      <WhySchoolex />
      <CTA />
    </main>
  );
}
