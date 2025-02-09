
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
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center border-b">
      <div className="container px-4 py-12 md:py-24 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8"
        >
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-primary">
            Get Your German Tax Refund
          </h1>
          
          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Simple process to claim your tax refund. Average refund: €500–€1,500
          </p>

          <div className="flex justify-center">
            <Badge variant="secondary" className="px-3 py-1.5 md:px-4 md:py-2 text-base md:text-lg flex items-center gap-2 bg-accent text-white">
              <Shield className="h-4 w-4 md:h-5 md:w-5" />
              No Risk Guarantee: Money Back if Under €100
            </Badge>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 md:pt-8">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-hover text-white px-6 py-5 text-base md:text-lg w-full sm:w-auto"
            >
              Check Your Refund Now
            </Button>
          </div>

          {/* Mobile Stats Carousel */}
          <div className="block sm:hidden overflow-hidden mt-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
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
          <div className="hidden sm:grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={stat}
                className="flex items-center justify-center text-muted-foreground"
              >
                <span className="text-lg">{stat}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
