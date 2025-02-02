import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ChartBarIcon, ShieldCheck } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary py-20 sm:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-2xl lg:max-w-4xl lg:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm mb-6">
              <ShieldCheck className="mr-2 h-4 w-4" />
              Trusted by thousands of students across Germany
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Smart Tax Returns for{" "}
              <span className="bg-gradient-to-r from-blue-200 to-blue-100 bg-clip-text text-transparent">
                German Students
              </span>
            </h1>
            
            <p className="text-lg leading-8 text-blue-100 mb-10">
              Navigate German taxes with confidence. Our intelligent platform simplifies
              the tax filing process, ensuring you claim every eligible deduction
              and maximize your returns.
            </p>
            
            <div className="flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="group bg-white text-primary hover:bg-blue-50 animate-float hover:shadow-lg transition-all duration-300"
              >
                Start Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:mt-16"
            >
              <div className="flex flex-col items-center space-y-2 text-center">
                <ChartBarIcon className="h-6 w-6 text-blue-200" />
                <p className="text-sm text-blue-100">95% Success Rate</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <ShieldCheck className="h-6 w-6 text-blue-200" />
                <p className="text-sm text-blue-100">100% Secure</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <ChartBarIcon className="h-6 w-6 text-blue-200" />
                <p className="text-sm text-blue-100">24/7 Support</p>
              </div>
            </motion.div>
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