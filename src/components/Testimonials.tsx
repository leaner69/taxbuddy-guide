
import { motion } from "framer-motion";
import { UserRound, Quote, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah M.",
    university: "TU Berlin",
    refundAmount: "€780",
    text: "The step-by-step guidance helped me understand which study-related expenses I could claim on my tax return.",
    verified: true,
    image: "/placeholder.svg",
    companyLogo: "/placeholder.svg",
    story: "Read Sarah's full journey"
  },
  {
    name: "Michael K.",
    university: "LMU Munich", 
    refundAmount: "€950",
    text: "As an international student, having clear instructions in English made the German tax return process more approachable.",
    verified: true,
    image: "/placeholder.svg",
    companyLogo: "/placeholder.svg",
    story: "See Michael's success story"
  },
  {
    name: "Lisa W.",
    university: "University of Hamburg",
    refundAmount: "€820", 
    text: "The platform helped me organize my documents and understand which deductions I might be eligible for.",
    verified: true,
    image: "/placeholder.svg",
    companyLogo: "/placeholder.svg",
    story: "Discover Lisa's experience"
  },
  {
    name: "David R.",
    university: "Heidelberg University",
    refundAmount: "€690",
    text: "I was surprised how much I could get back! The tax guide made everything so much clearer.",
    verified: true,
    image: "/placeholder.svg", 
    companyLogo: "/placeholder.svg",
    story: "Learn from David's story"
  },
  {
    name: "Anna S.",
    university: "RWTH Aachen",
    refundAmount: "€850",
    text: "Perfect for international students - finally someone explains German taxes in simple English!",
    verified: true,
    image: "/placeholder.svg",
    companyLogo: "/placeholder.svg", 
    story: "Read Anna's testimonial"
  },
  {
    name: "Thomas B.",
    university: "Technical University of Munich",
    refundAmount: "€720",
    text: "The automated document scanning saved me hours of manual work. Brilliant technology!",
    verified: true,
    image: "/placeholder.svg",
    companyLogo: "/placeholder.svg",
    story: "See Thomas's results"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-carousel for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextTestimonial();
    }
    if (isRightSwipe) {
      prevTestimonial();
    }
  };

  const backgroundSvg = `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: `url("${backgroundSvg}")` }}
      />
      
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

        {/* Desktop Masonry Grid */}
        <div className="hidden lg:block">
          <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="break-inside-avoid mb-6"
              >
                <TestimonialCard 
                  testimonial={testimonial} 
                  isMasonry={true}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Swipeable Carousel */}
        <div className="lg:hidden">
          <div 
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.name} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard 
                    testimonial={testimonial} 
                    isMobile={true}
                  />
                </div>
              ))}
            </div>
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
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white w-8' : 'bg-white/40 w-2'
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
  isMasonry = false,
  isMobile = false 
}: { 
  testimonial: any; 
  isMasonry?: boolean;
  isMobile?: boolean;
}) => {
  const getCardHeight = () => {
    if (isMasonry) {
      // Vary heights for masonry effect
      const heights = ['h-80', 'h-96', 'h-72', 'h-88'];
      return heights[Math.floor(Math.random() * heights.length)];
    }
    return 'h-auto';
  };

  return (
    <div className={`bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 relative overflow-hidden group hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 ${getCardHeight()}`}>
      {/* Company Logo */}
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-400 to-indigo-600" />
        </div>
        <Quote className="h-6 w-6 text-blue-200 opacity-60" />
      </div>
      
      {/* Profile Section */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center overflow-hidden">
            <UserRound className="h-6 w-6 text-white" />
          </div>
          {testimonial.verified && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        
        <div>
          <h3 className="font-bold text-gray-900 text-base">{testimonial.name}</h3>
          <p className="text-gray-600 text-sm">{testimonial.university}</p>
        </div>
      </div>

      {/* Refund Badge */}
      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-4">
        <span className="text-white font-bold text-sm">
          Received {testimonial.refundAmount}
        </span>
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-gray-700 text-sm leading-relaxed italic mb-4">
        "{testimonial.text}"
      </blockquote>

      {/* Call to Action */}
      <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200 group">
        <span>{testimonial.story}</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </button>

      {/* Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
};
