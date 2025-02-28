
import { useState } from "react";
import { Check, CreditCard, Euro } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "./ui/dialog";
import { toast } from "@/hooks/use-toast";

export const Pricing = () => {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<null | {
    name: string;
    price: string;
  }>(null);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlanSelect = (planName: string, planPrice: string) => {
    setSelectedPlan({ name: planName, price: planPrice });
    setPaymentModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentModalOpen(false);
      
      // Reset form data
      setFormData({
        cardNumber: "",
        cardName: "",
        expiryDate: "",
        cvv: "",
      });

      // Show success toast
      toast({
        title: "Payment Successful!",
        description: `You have successfully subscribed to the ${selectedPlan?.name} plan.`,
        duration: 5000,
      });
    }, 2000);
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

      {/* Payment Modal */}
      <Dialog open={paymentModalOpen} onOpenChange={setPaymentModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Complete Your Purchase</DialogTitle>
            <DialogDescription>
              {selectedPlan && (
                <div className="mt-2">
                  <p>You've selected the <span className="font-semibold">{selectedPlan.name}</span> plan</p>
                  <p className="text-xl font-bold text-primary mt-1">{selectedPlan.price}</p>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handlePaymentSubmit}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label htmlFor="cardName" className="text-sm font-medium">Cardholder Name</label>
                <Input
                  id="cardName"
                  name="cardName"
                  placeholder="John Doe"
                  required
                  value={formData.cardName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="cardNumber" className="text-sm font-medium">Card Number</label>
                <div className="relative">
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    required
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    maxLength={19}
                    pattern="[0-9\s]{13,19}"
                    className="pl-10"
                  />
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="expiryDate" className="text-sm font-medium">Expiry Date</label>
                  <Input
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="MM/YY"
                    required
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    maxLength={5}
                    pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="cvv" className="text-sm font-medium">CVV</label>
                  <Input
                    id="cvv"
                    name="cvv"
                    placeholder="123"
                    required
                    value={formData.cvv}
                    onChange={handleInputChange}
                    maxLength={3}
                    pattern="[0-9]{3}"
                    type="password"
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setPaymentModalOpen(false)}
                disabled={isProcessing}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isProcessing}>
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Euro className="h-4 w-4" />
                    Pay {selectedPlan?.price}
                  </span>
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};
