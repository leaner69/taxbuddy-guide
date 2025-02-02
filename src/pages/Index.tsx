import { Banner } from "@/components/Banner";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { RefundCalculator } from "@/components/RefundCalculator";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Banner />
      <Hero />
      <Features />
      <HowItWorks />
      <RefundCalculator />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Index;