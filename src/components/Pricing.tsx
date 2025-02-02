import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const Pricing = () => {
  return (
    <section className="py-24 bg-white border-b">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that works best for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Self-Service Package */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-8 border-2 hover:border-primary transition-colors"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Self-Service</h3>
              <p className="text-3xl font-bold text-primary mb-4">€24.99</p>
              <Button className="w-full bg-primary hover:bg-primary-hover text-white">
                Get Started
              </Button>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-4">What's included:</h4>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-8 border-2 hover:border-primary transition-colors"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Expert Service</h3>
              <p className="text-3xl font-bold text-primary mb-4">€59.99</p>
              <Button className="w-full bg-primary hover:bg-primary-hover text-white">
                Get Expert Help
              </Button>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-4">What's included:</h4>
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