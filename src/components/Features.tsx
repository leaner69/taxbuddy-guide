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
    <section className="py-12 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Simple Process
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Tax Returns Made Easy
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Save time and maximize your refund with our tool. Perfectly tailored
            for students' needs.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl sm:mt-12 lg:mt-16 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-secondary">
                  <div className="icon-container">
                    <feature.icon
                      className="h-5 w-5 flex-none text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};