import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Calculator, FileText } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2A3B56] to-[#4F46E5] pt-32 pb-16 sm:py-32">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-white"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-display">
              German Tax Returns Made Simple for Students
            </h1>
            
            <p className="text-lg text-gray-200">
              Get your tax refund in 3 easy steps. Perfect for international 
              and local students studying in Germany.
            </p>
            
            <div className="space-y-4">
              {[
                "Average refund of €1,000+ for students",
                "Step-by-step ELSTER guidance in English",
                "AI-powered deduction finder",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-white text-[#2A3B56] hover:bg-gray-100 group"
              >
                Start Your Tax Return
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Calculate Refund
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:ml-8"
          >
            <div className="relative rounded-2xl overflow-hidden bg-white/10 p-4 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/5" />
              <div className="relative space-y-6">
                <div className="flex items-center gap-4 text-white">
                  <Calculator className="h-8 w-8" />
                  <div>
                    <h3 className="font-semibold">Smart Deduction Finder</h3>
                    <p className="text-sm text-gray-200">Maximizes your refund automatically</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <FileText className="h-8 w-8" />
                  <div>
                    <h3 className="font-semibold">ELSTER Guide</h3>
                    <p className="text-sm text-gray-200">Step-by-step instructions in English</p>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                  alt="Student using laptop"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};