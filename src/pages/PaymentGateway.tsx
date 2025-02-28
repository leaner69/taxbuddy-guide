
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CreditCard, Euro, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const PaymentGateway = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  // Get the plan details from location state or use defaults
  const planName = location.state?.planName || "Selected Plan";
  const planPrice = location.state?.planPrice || "€0.00";

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
        description: `You have successfully subscribed to the ${planName} plan.`,
        duration: 5000,
      });

      // Navigate back to homepage
      navigate("/");
    }, 2000);
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 py-16 mt-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div className="bg-primary p-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="text-white mb-4 hover:bg-primary-hover"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-2xl font-bold text-white">Complete Your Purchase</h1>
          <p className="text-white/80">Secure Payment Gateway</p>
        </div>

        <div className="p-6">
          <div className="mb-8 border-b pb-4">
            <h2 className="text-lg font-semibold text-gray-700">Order Summary</h2>
            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="font-medium">{planName}</p>
                <p className="text-sm text-gray-500">Annual subscription</p>
              </div>
              <p className="text-xl font-bold text-primary">{planPrice}</p>
            </div>
          </div>

          <form onSubmit={handlePaymentSubmit}>
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="cardName" className="text-sm font-medium block">Cardholder Name</label>
                <Input
                  id="cardName"
                  name="cardName"
                  placeholder="John Doe"
                  required
                  value={formData.cardName}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="cardNumber" className="text-sm font-medium block">Card Number</label>
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
                    className="pl-10 w-full"
                  />
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="expiryDate" className="text-sm font-medium block">Expiry Date</label>
                  <Input
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="MM/YY"
                    required
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    maxLength={5}
                    pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="cvv" className="text-sm font-medium block">CVV</label>
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
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-8">
              <div className="text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  <span>Secure payment processing</span>
                </div>
              </div>
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary-hover" 
                disabled={isProcessing}
              >
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
                    Pay {planPrice}
                  </span>
                )}
              </Button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentGateway;
