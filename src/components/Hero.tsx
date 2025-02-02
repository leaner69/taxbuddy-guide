import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 sm:py-32">
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
            <h1 className="text-4xl font-bold tracking-tight text-secondary-foreground sm:text-6xl">
              Maximize your <span className="text-primary">Tax Refund</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Simple tax returns for students. Calculate your potential refund and
              get a tailored guide for filing through ELSTER, Germany's online tax
              platform.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="animate-float hover:shadow-lg transition-all duration-300"
              >
                Calculate Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-secondary/80 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 opacity-10">
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