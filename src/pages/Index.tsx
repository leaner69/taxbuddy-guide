import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Pricing } from "@/components/Pricing";

const Index = () => {
  return (
    <main className="min-h-screen bg-secondary">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Index;