import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const Pricing = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold text-[#2A3B56] mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600">
            Choose the plan that works best for you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Self-Service Package */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
          >
            <div className="lg:w-1/2 p-8 bg-gradient-to-br from-[#2A3B56]/5 to-transparent">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#2A3B56] to-[#4F46E5] p-6 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                  alt="Self-service illustration"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-[#2A3B56] mb-2">Self-Service</h3>
                <p className="text-3xl font-bold text-[#4F46E5] mb-4">€24.99</p>
                <Button className="w-full lg:w-auto bg-gradient-to-r from-[#2A3B56] to-[#4F46E5] hover:from-[#2A3B56] hover:to-[#4F46E5]">
                  Get Started
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 p-8">
              <h4 className="font-semibold text-[#2A3B56] mb-4">What's included:</h4>
              <ul className="space-y-3">
                {[
                  "Tax refund calculator",
                  "Step-by-step ELSTER guide",
                  "PDF documentation",
                  "Email support",
                  "Secure data handling",
                ].map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check className="h-5 w-5 text-[#4F46E5] flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Expert Service Package */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
          >
            <div className="lg:w-1/2 p-8 bg-gradient-to-br from-[#4F46E5]/5 to-transparent">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#2A3B56] to-[#4F46E5] p-6 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                  alt="Expert service illustration"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-[#2A3B56] mb-2">Expert Service</h3>
                <p className="text-3xl font-bold text-[#4F46E5] mb-4">€59.99</p>
                <Button className="w-full lg:w-auto bg-gradient-to-r from-[#2A3B56] to-[#4F46E5] hover:from-[#2A3B56] hover:to-[#4F46E5]">
                  Get Expert Help
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 p-8">
              <h4 className="font-semibold text-[#2A3B56] mb-4">What's included:</h4>
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
                    <Check className="h-5 w-5 text-[#4F46E5] flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
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