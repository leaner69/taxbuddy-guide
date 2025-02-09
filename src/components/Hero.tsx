
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
            Get Your German Tax Refund – Risk-Free & Hassle-Free!
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied students who got their tax refunds with confidence. Average refund: €500–€1,500
          </p>

          <div className="flex justify-center">
            <Badge variant="secondary" className="px-4 py-2 text-lg flex items-center gap-2 bg-accent text-white">
              <Shield className="h-5 w-5" />
              If Your Refund is Below €100, You Get a Full Refund!
            </Badge>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-6 text-lg"
            >
              Check Your Refund Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-12">
            {[
              "⭐ 4.8/5 Student Rating",
              "100% Money-Back Guarantee",
              "Trusted by 10,000+ Students",
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
