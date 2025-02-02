import { motion } from "framer-motion";
import { Calculator, FileText, PiggyBank } from "lucide-react";

const features = [
  {
    name: "Quick Calculation",
    description:
      "Get an estimate of your potential tax refund in just a few minutes.",
    icon: Calculator,
  },
  {
    name: "PDF Guide",
    description:
      "Receive a detailed, step-by-step guide for filing your taxes through ELSTER.",
    icon: FileText,
  },
  {
    name: "Maximum Refund",
    description:
      "We help you identify and claim all relevant deductions and expenses.",
    icon: PiggyBank,
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-white border-b">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-base font-semibold text-primary mb-3">
            Simple Process
          </h2>
          <p className="text-3xl font-bold text-primary md:text-4xl">
            Tax Returns Made Easy
          </p>
          <p className="mt-6 text-lg text-muted-foreground">
            Save time and maximize your refund with our tool. Perfectly tailored
            for students' needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="mb-6">
                <feature.icon
                  className="h-12 w-12 text-primary"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {feature.name}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};