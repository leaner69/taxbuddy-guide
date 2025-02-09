
import { Banner } from "@/components/Banner";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { RefundCalculator } from "@/components/RefundCalculator";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <main className="flex-grow">
        <Hero />
        <div className="space-y-12">
          <Features />
          <HowItWorks />
          <RefundCalculator />
          <Pricing />
          <Testimonials />
          <FAQ />
        </div>
      </main>
    </div>
  );
};

export default Index;
