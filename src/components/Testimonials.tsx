
import { motion } from "framer-motion";
import { UserRound, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah M.",
    university: "TU Berlin",
    refundAmount: "€780",
    text: "The step-by-step guidance helped me understand which study-related expenses I could claim on my tax return.",
    verified: true,
  },
  {
    name: "Michael K.",
    university: "LMU Munich",
    refundAmount: "€950",
    text: "As an international student, having clear instructions in English made the German tax return process more approachable.",
    verified: true,
  },
  {
    name: "Lisa W.",
    university: "University of Hamburg",
    refundAmount: "€820",
    text: "The platform helped me organize my documents and understand which deductions I might be eligible for.",
    verified: true,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-[#F6F6F7]">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl lg:text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-primary mb-4 font-serif">
            What Students Say About Our Service
          </h2>
          <p className="text-lg text-muted-foreground">
            Learn from other students' experiences with our tax guidance platform
          </p>
        </motion.div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Mobile Carousel Layout */}
        <div className="lg:hidden">
          <Carousel className="w-full">
            <CarouselContent className="-ml-8">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-8">
                  <TestimonialCard testimonial={testimonial} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="relative bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {/* Quote Mark */}
      <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />

      {/* User Info */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-[#F1F1F1] rounded-full p-3">
          <UserRound className="h-6 w-6 text-[#8E9196]" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary">
            {testimonial.name}
          </h3>
          <p className="text-sm text-[#9F9EA1]">
            {testimonial.university}
          </p>
        </div>
      </div>

      {/* Refund Amount */}
      <p className="text-xl font-serif font-bold mb-4 text-primary">
        Received {testimonial.refundAmount}
      </p>

      {/* Testimonial Text */}
      <p className="text-base text-[#8E9196] leading-relaxed font-sans">
        "{testimonial.text}"
      </p>
    </motion.div>
  );
};
