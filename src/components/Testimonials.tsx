
import { motion } from "framer-motion";
import { UserRound, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah M.",
    university: "TU Berlin",
    refundAmount: "€780",
    text: "The step-by-step guidance helped me understand which study-related expenses I could claim on my tax return.",
    verified: true,
    image: "/placeholder.svg",
  },
  {
    name: "Michael K.",
    university: "LMU Munich",
    refundAmount: "€950",
    text: "As an international student, having clear instructions in English made the German tax return process more approachable.",
    verified: true,
    image: "/placeholder.svg",
  },
  {
    name: "Lisa W.",
    university: "University of Hamburg",
    refundAmount: "€820",
    text: "The platform helped me organize my documents and understand which deductions I might be eligible for.",
    verified: true,
    image: "/placeholder.svg",
  },
  {
    name: "David R.",
    university: "Heidelberg University",
    refundAmount: "€690",
    text: "I was surprised how much I could get back! The tax guide made everything so much clearer.",
    verified: true,
    image: "/placeholder.svg",
  },
  {
    name: "Anna S.",
    university: "RWTH Aachen",
    refundAmount: "€850",
    text: "Perfect for international students - finally someone explains German taxes in simple English!",
    verified: true,
    image: "/placeholder.svg",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length;
      result.push({ ...testimonials[index], position: i });
    }
    return result;
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            What Students Say
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Real stories from students who successfully claimed their tax refunds
          </p>
        </motion.div>

        {/* Desktop Carousel */}
        <div className="hidden lg:block relative">
          <div className="flex items-center justify-center min-h-[400px]">
            {getVisibleTestimonials().map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${currentIndex}-${index}`}
                testimonial={testimonial}
                position={testimonial.position}
                isCenter={testimonial.position === 0}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 text-white hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 text-white hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Stack */}
        <div className="lg:hidden">
          <div className="space-y-6">
            <TestimonialCard
              testimonial={testimonials[currentIndex]}
              position={0}
              isCenter={true}
              isMobile={true}
            />
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all duration-300 text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white w-6' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all duration-300 text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ 
  testimonial, 
  position = 0, 
  isCenter = false, 
  isMobile = false 
}: { 
  testimonial: any; 
  position?: number;
  isCenter?: boolean;
  isMobile?: boolean;
}) => {
  const getCardStyles = () => {
    if (isMobile) {
      return "w-full max-w-md mx-auto transform-none opacity-100 scale-100";
    }
    
    if (isCenter) {
      return "w-96 transform-none opacity-100 scale-100 z-20";
    }
    
    const isLeft = position < 0;
    return `w-80 ${isLeft ? '-translate-x-12' : 'translate-x-12'} opacity-60 scale-90 hover:opacity-80 transition-all duration-300 cursor-pointer`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: isCenter ? 0.2 : 0.4 }}
      className={`relative ${getCardStyles()}`}
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 relative overflow-hidden">
        {/* Decorative Quote */}
        <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-200 opacity-50" />
        
        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center overflow-hidden">
              <UserRound className="h-8 w-8 text-white" />
            </div>
            {testimonial.verified && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
            <p className="text-gray-600 text-sm">{testimonial.university}</p>
          </div>
        </div>

        {/* Refund Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-4">
          <span className="text-white font-bold text-sm">
            Received {testimonial.refundAmount}
          </span>
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-gray-700 text-base leading-relaxed italic">
          "{testimonial.text}"
        </blockquote>

        {/* Decorative Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600"></div>
      </div>
    </motion.div>
  );
};
