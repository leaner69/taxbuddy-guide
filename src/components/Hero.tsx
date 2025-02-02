import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center border-b">
      <div className="container px-4 py-24 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
            Maximize Your German Tax Refund with Confidence
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Students get €500–€1,500 back in 3 simple steps. Let us guide you through the process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-6 text-lg"
            >
              Start Your Tax Return
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg"
            >
              Calculate Refund
            </Button>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-12">
            {[
              "Average refund of €1,000+",
              "Step-by-step guidance",
              "AI-powered accuracy",
            ].map((feature, index) => (
              <div 
                key={feature}
                className="flex items-center justify-center text-muted-foreground"
              >
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};