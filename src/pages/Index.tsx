import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Deductions } from "@/components/Deductions";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-secondary">
      <Hero />
      <Features />
      <Deductions />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Index;