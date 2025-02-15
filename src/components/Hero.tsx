
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const stats = [
  "Average rating: 4.5/5",
  "Money-Back Guarantee",
  "Helped 1000+ Students",
];

export const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center border-b">
      <div className="container px-4 py-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-4"
        >
          {/* Guarantee Badge - Now above the hero title */}
          <div className="flex justify-center mb-6">
            <Badge 
              variant="secondary" 
              className="px-3 py-1.5 text-sm md:text-base flex items-center gap-2 bg-accent text-white"
            >
              <Shield className="h-4 w-4" />
              Guaranteed Value: If your refund is under €100, we'll refund our fee
            </Badge>
          </div>

          <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-primary">
            Get Your German Tax Refund
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple process to claim your tax refund. Average refund: €500–€1,500
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-hover text-white px-6 py-3 text-base md:text-lg w-full sm:w-auto"
            >
              Check Your Refund Now
            </Button>
          </div>

          {/* Mobile Stats Carousel */}
          <div className="block sm:hidden overflow-hidden mt-6">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {stats.map((stat, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <div className="text-center">
                      <p className="text-muted-foreground text-sm">
                        {stat}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Desktop Stats Grid */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={stat}
                className="flex items-center justify-center text-muted-foreground"
              >
                <span className="text-base">{stat}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
