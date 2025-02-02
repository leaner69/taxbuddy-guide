import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Euro } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-0 left-0 right-0 bg-primary py-2 text-white text-center"
      >
        <p className="text-sm md:text-base">
          Average students miss out on <span className="font-bold">€850</span> in tax refunds every year!
        </p>
      </motion.div>

      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-2xl lg:max-w-4xl lg:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-sm font-medium text-primary mb-6">
              For Students in Germany
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-6xl mb-6">
              Maximize your <span className="text-primary">Tax Refund</span>
            </h1>
            <p className="text-lg leading-8 text-muted-foreground mb-10">
              Simple tax returns for students. Calculate your potential refund and
              get a tailored guide for filing through ELSTER, Germany's online tax
              platform.
            </p>
            <div className="flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="group animate-float hover:shadow-lg transition-all duration-300"
              >
                Calculate Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-accent/80 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 opacity-5">
        <svg
          className="h-full w-full"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 32V.5H32"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
};