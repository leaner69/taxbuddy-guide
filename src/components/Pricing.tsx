import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const Pricing = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that works best for you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Self-Service Package */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col lg:flex-row bg-accent rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="lg:w-1/2 p-8 bg-gradient-to-br from-primary/10 to-transparent">
              <div className="aspect-square rounded-2xl bg-white shadow-lg p-6 mb-6">
                <img
                  src="/placeholder.svg"
                  alt="Self-service illustration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-secondary mb-2">Self-Service</h3>
                <p className="text-3xl font-bold text-primary mb-4">€24.99</p>
                <Button className="w-full lg:w-auto">Get Started</Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 p-8">
              <h4 className="font-semibold text-secondary mb-4">What's included:</h4>
              <ul className="space-y-3">
                {[
                  "Tax refund calculator",
                  "Step-by-step ELSTER guide",
                  "PDF documentation",
                  "Email support",
                  "Secure data handling",
                ].map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Expert Service Package */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col lg:flex-row bg-accent rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="lg:w-1/2 p-8 bg-gradient-to-br from-secondary/10 to-transparent">
              <div className="aspect-square rounded-2xl bg-white shadow-lg p-6 mb-6">
                <img
                  src="/placeholder.svg"
                  alt="Expert service illustration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-secondary mb-2">Expert Service</h3>
                <p className="text-3xl font-bold text-primary mb-4">€59.99</p>
                <Button className="w-full lg:w-auto">Get Expert Help</Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 p-8">
              <h4 className="font-semibold text-secondary mb-4">What's included:</h4>
              <ul className="space-y-3">
                {[
                  "All Self-Service features",
                  "Personal tax expert",
                  "Full document review",
                  "Priority support",
                  "Maximum refund guarantee",
                  "Direct submission to Finanzamt",
                ].map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};