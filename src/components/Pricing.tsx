
import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Auth from "@/pages/Auth";

export const Pricing = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{name: string, price: string} | null>(null);

  const handlePlanSelect = (planName: string, planPrice: string) => {
    if (!user) {
      setSelectedPlan({ name: planName, price: planPrice });
      setAuthModalOpen(true);
      return;
    }
    // Navigate to payment page with plan details
    navigate("/payment", { 
      state: { 
        planName, 
        planPrice 
      } 
    });
  };

  const handleAuthSuccess = () => {
    setAuthModalOpen(false);
    if (selectedPlan) {
      navigate("/payment", { 
        state: { 
          planName: selectedPlan.name, 
          planPrice: selectedPlan.price 
        } 
      });
    }
  };

  return (
    <section id="pricing" className="py-4 bg-white border-b">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center mb-6">
          <h2 className="text-3xl font-bold text-primary mb-3">Simple, Transparent Pricing</h2>
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
            <Dialog open={authModalOpen && selectedPlan?.name === "Self-Service"} onOpenChange={(open) => {
              if (!open) setAuthModalOpen(false);
            }}>
              <DialogTrigger asChild>
                <Button 
                  className="w-full bg-primary hover:bg-primary-hover text-white mt-auto"
                  onClick={() => handlePlanSelect("Self-Service", "€29.99")}
                >
                  {user ? "Get Started" : "Sign Up & Get Started"}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Create Account to Continue</DialogTitle>
                </DialogHeader>
                <Auth onSuccess={handleAuthSuccess} />
              </DialogContent>
            </Dialog>
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
            <Dialog open={authModalOpen && selectedPlan?.name === "Expert Service"} onOpenChange={(open) => {
              if (!open) setAuthModalOpen(false);
            }}>
              <DialogTrigger asChild>
                <Button 
                  className="w-full bg-primary hover:bg-primary-hover text-white mt-auto"
                  onClick={() => handlePlanSelect("Expert Service", "€59.99")}
                >
                  {user ? "Get Expert Help" : "Sign Up & Get Expert Help"}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Create Account to Continue</DialogTitle>
                </DialogHeader>
                <Auth onSuccess={handleAuthSuccess} />
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
