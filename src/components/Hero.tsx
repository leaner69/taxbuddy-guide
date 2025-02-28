
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, FileText, Bot, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const benefits = [
  { icon: GraduationCap, text: "Enter Student Deductions" },
  { icon: Bot, text: "Calculate Your Refund" },
  { icon: FileText, text: "Download Your ELSTER Guide" },
];

const trustBadges = [
  "Tax Advisor Verified",
  "4.9/5 Student Reviews",
];

export const Hero = () => {
  const handleScrollToCalculator = () => {
    const calculatorSection = document.querySelector('#refund-calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center border-b bg-gradient-to-br from-[#F1F1F1] via-white to-[#D3E4FD]">
      <div className="container px-4 py-8 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          {/* Guarantee Badge */}
          <div className="flex justify-center">
            <Badge 
              variant="secondary" 
              className="px-4 py-2 text-base md:text-lg flex items-center gap-2 bg-white/80 text-[#333333] font-medium backdrop-blur-sm border border-[#C8C8C9]/20 shadow-sm"
            >
              <Shield className="h-5 w-5" />
              Guaranteed Value: If your refund is under €100, we'll refund our fee
            </Badge>
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-[#222222] font-heading">
              Students: Claim Your Tax Refund
            </h1>
            
            <p className="text-base md:text-xl text-[#555555] font-medium max-w-2xl mx-auto font-body">
              Most students get €500-€1,500 back. Don't leave your money on the table.
            </p>
          </div>
          
          <div className="mt-8">
            <Button 
              size="lg"
              onClick={handleScrollToCalculator}
              className="bg-[#1A1F2C] hover:bg-[#222222] text-white px-8 py-6 text-base md:text-lg w-full sm:w-auto font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Your Free Refund Estimate
            </Button>
          </div>

          {/* Workflow Steps - Desktop */}
          <div className="hidden sm:grid grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-[#555555] font-medium space-y-3"
              >
                <benefit.icon className="h-10 w-10 mb-2" />
                <span className="text-base font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Mobile Workflow Carousel */}
          <div className="block sm:hidden mt-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                })
              ]}
              className="w-full"
            >
              <CarouselContent>
                {benefits.map((benefit, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <div className="flex flex-col items-center text-[#555555] font-medium space-y-2">
                      <benefit.icon className="h-8 w-8 mb-2" />
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
              <span key={index} className="text-[#555555] font-medium text-sm">
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
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                })
              ]}
              className="w-full"
            >
              <CarouselContent>
                {trustBadges.map((badge, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <span className="text-[#555555] font-medium text-sm block text-center">
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
