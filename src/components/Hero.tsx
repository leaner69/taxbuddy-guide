
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, FileText, Bot, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const benefits = [
  { icon: GraduationCap, text: "Enter Student Deductions" },
  { icon: Bot, text: "AI Calculates Your Refund" },
  { icon: FileText, text: "Download Your ELSTER Guide" },
];

const trustBadges = [
  "GDPR-Compliant",
  "Tax Advisor Verified",
  "4.9/5 Student Reviews",
];

export const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-r from-primary to-accent border-b">
      <div className="container px-4 py-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-4"
        >
          {/* Guarantee Badge */}
          <div className="flex justify-center mb-4">
            <Badge 
              variant="secondary" 
              className="px-3 py-1.5 text-sm md:text-base flex items-center gap-2 bg-white/10 text-white backdrop-blur-sm"
            >
              <Shield className="h-4 w-4" />
              Guaranteed Value: If your refund is under €100, we'll refund our fee
            </Badge>
          </div>

          <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-white font-heading">
            Maximize Your German Tax Refund: Students Get €500–€1,500 Back, Guaranteed
          </h1>
          
          <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto font-body">
            AI-Powered Accuracy + Expert-Approved Guides
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-10 pb-6">
            <Button 
              size="lg"
              className="bg-[#D4AF37] hover:bg-[#C19B25] text-primary px-8 py-6 text-base md:text-lg w-full sm:w-auto font-semibold transition-all duration-300 hover:scale-105"
            >
              Start Your Free Refund Estimate
            </Button>
          </div>

          {/* Workflow Steps */}
          <div className="hidden sm:grid grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-white/90 space-y-2"
              >
                <benefit.icon className="h-8 w-8 mb-2" />
                <span className="text-sm font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Mobile Workflow Carousel */}
          <div className="block sm:hidden mt-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {benefits.map((benefit, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <div className="flex flex-col items-center text-white/90 space-y-2">
                      <benefit.icon className="h-6 w-6 mb-2" />
                      <span className="text-sm font-medium">{benefit.text}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Trust Badges */}
          <div className="hidden sm:flex justify-center gap-8 mt-8">
            {trustBadges.map((badge, index) => (
              <span key={index} className="text-white/70 text-sm font-medium">
                {badge}
              </span>
            ))}
          </div>

          {/* Mobile Trust Badges Carousel */}
          <div className="block sm:hidden mt-6">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {trustBadges.map((badge, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <span className="text-white/70 text-sm font-medium block text-center">
                      {badge}
                    </span>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
