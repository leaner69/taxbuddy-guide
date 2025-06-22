
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
  {
    name: "David R.",
    university: "Heidelberg University",
    refundAmount: "€690",
    text: "I was surprised how much I could get back! The tax guide made everything so much clearer.",
    verified: true,
  },
  {
    name: "Anna S.",
    university: "RWTH Aachen",
    refundAmount: "€850",
    text: "Perfect for international students - finally someone explains German taxes in simple English!",
    verified: true,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl lg:text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight text-primary mb-3 font-serif">
            What Students Say About Our Service
          </h2>
          <p className="text-lg text-muted-foreground">
            Real conversations with students who got their refunds
          </p>
        </motion.div>

        {/* Desktop: Alternating Chat Bubbles */}
        <div className="hidden lg:block space-y-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ChatBubble 
              key={index} 
              testimonial={testimonial} 
              index={index} 
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="lg:hidden">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent className="-ml-2">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2">
                  <div className="flex justify-center">
                    <ChatBubble testimonial={testimonial} index={index} isLeft={true} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative static translate-y-0 h-8 w-8" />
              <CarouselNext className="relative static translate-y-0 h-8 w-8" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const ChatBubble = ({ 
  testimonial, 
  index, 
  isLeft = true 
}: { 
  testimonial: any; 
  index: number; 
  isLeft?: boolean;
}) => {
  const bubbleColors = [
    'bg-gradient-to-br from-blue-100 to-blue-200',
    'bg-gradient-to-br from-purple-100 to-purple-200',
    'bg-gradient-to-br from-pink-100 to-pink-200',
    'bg-gradient-to-br from-green-100 to-green-200',
    'bg-gradient-to-br from-yellow-100 to-yellow-200',
  ];

  const bubbleColor = bubbleColors[index % bubbleColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`flex ${isLeft ? 'justify-start' : 'justify-end'} mb-6`}
    >
      <div className={`flex items-start gap-3 max-w-md ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="bg-white rounded-full p-3 shadow-md border-2 border-white">
            <UserRound className="h-6 w-6 text-gray-600" />
          </div>
        </div>

        {/* Chat Bubble */}
        <div className="relative">
          {/* Speech Bubble Tail */}
          <div 
            className={`absolute top-4 w-0 h-0 ${
              isLeft 
                ? '-left-2 border-l-0 border-r-8 border-r-current' 
                : '-right-2 border-r-0 border-l-8 border-l-current'
            } border-t-4 border-b-4 border-t-transparent border-b-transparent text-current`}
            style={{ color: bubbleColor.includes('blue') ? '#dbeafe' : bubbleColor.includes('purple') ? '#e9d5ff' : bubbleColor.includes('pink') ? '#fce7f3' : bubbleColor.includes('green') ? '#dcfce7' : '#fef3c7' }}
          />
          
          {/* Bubble Content */}
          <div className={`${bubbleColor} rounded-2xl p-6 shadow-lg border border-white/50 relative`}>
            <Quote className={`absolute top-3 ${isLeft ? 'right-3' : 'left-3'} h-4 w-4 text-gray-400`} />
            
            {/* User Info */}
            <div className="mb-3">
              <h3 className="font-semibold text-gray-800 text-sm">
                {testimonial.name}
              </h3>
              <p className="text-xs text-gray-600">
                {testimonial.university}
              </p>
            </div>

            {/* Refund Amount - highlighted */}
            <div className="bg-white/70 rounded-lg px-3 py-1 mb-3 inline-block">
              <p className="text-sm font-bold text-primary">
                Received {testimonial.refundAmount}
              </p>
            </div>

            {/* Message */}
            <p className="text-sm text-gray-700 leading-relaxed">
              "{testimonial.text}"
            </p>

            {/* Timestamp-like element */}
            <div className={`flex ${isLeft ? 'justify-end' : 'justify-start'} mt-2`}>
              <span className="text-xs text-gray-500">✓✓</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
