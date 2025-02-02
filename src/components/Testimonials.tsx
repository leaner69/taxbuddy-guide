import { motion } from "framer-motion";
import { UserRound, Quote, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
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
    text: "TaxBuddy helped me claim back study deductions I didn't even know about!",
    verified: true,
  },
  {
    name: "Michael K.",
    university: "LMU Munich",
    refundAmount: "€1,200",
    text: "As an international student, I was lost with German taxes until I found TaxBuddy.",
    verified: true,
  },
  {
    name: "Lisa W.",
    university: "University of Hamburg",
    refundAmount: "€950",
    text: "The step-by-step guide made filing through ELSTER so much easier!",
    verified: true,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl lg:text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-primary mb-4 font-serif">
            10,000+ Students Trust TaxBuddy – Here's Why
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from students who maximized their tax returns
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
      className="relative bg-white rounded-2xl p-8 shadow-lg hover:translate-y-[-3%] transition-all duration-300 group"
      style={{ boxShadow: '0 4px 24px rgba(10, 31, 62, 0.1)' }}
    >
      {/* Quote Mark */}
      <Quote className="absolute top-4 right-4 h-12 w-12 text-primary opacity-10" />

      {/* User Info */}
      <div className="flex items-center gap-4 mb-6">
        <UserRound className="h-12 w-12 text-primary" />
        <div>
          <h3 className="text-lg font-semibold text-primary">
            {testimonial.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {testimonial.university}
          </p>
        </div>
      </div>

      {/* Refund Amount */}
      <p className="text-2xl font-serif font-bold mb-4 text-primary">
        {testimonial.refundAmount} Refunded
      </p>

      {/* Testimonial Text */}
      <p className="text-base text-muted-foreground mb-6 font-sans">
        "{testimonial.text}"
      </p>

      {/* Verification Badge */}
      <div className="flex items-center gap-2 text-sm text-primary">
        <CheckCircle2 className="h-4 w-4" />
        <span>Refund Verified</span>
      </div>

      {/* Hover Effect Underline */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
    </motion.div>
  );
};