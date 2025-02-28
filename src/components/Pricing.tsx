
import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "./ui/dialog";

export const Pricing = () => {
  const navigate = useNavigate();

  const handlePlanSelect = (planName: string, planPrice: string) => {
    // Navigate to payment page with plan details
    navigate("/payment", { 
      state: { 
        planName, 
        planPrice 
      } 
    });
  };

  return (
    <section id="pricing" className="py-12 bg-white border-b">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
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
            className="bg-white rounded-xl p-8 border-2 hover:border-primary transition-colors flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">Self-Service</h3>
              <p className="text-3xl font-bold text-primary mb-8">€29.99</p>
              <div>
                <h4 className="font-semibold text-primary mb-4">Key Features:</h4>
                <ul className="space-y-3 mb-8">
                  {[
                    "Step-by-step ELSTER guide with translations",
                    "Tax refund calculator",
                    "Email support within 24 hours",
                  ].map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Button 
              className="w-full bg-primary hover:bg-primary-hover text-white mt-auto"
              onClick={() => handlePlanSelect("Self-Service", "€29.99")}
            >
              Get Started
            </Button>
          </motion.div>

          {/* Expert Service Package */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-8 border-2 hover:border-primary transition-colors flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">Expert Service</h3>
              <p className="text-3xl font-bold text-primary mb-8">€59.99</p>
              <div>
                <h4 className="font-semibold text-primary mb-4">Key Features:</h4>
                <ul className="space-y-3 mb-8">
                  {[
                    "Personal tax expert consultation",
                    "Document review & optimization",
                    "Direct submission to Finanzamt",
                  ].map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Button 
              className="w-full bg-primary hover:bg-primary-hover text-white mt-auto"
              onClick={() => handlePlanSelect("Expert Service", "€59.99")}
            >
              Get Expert Help
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
