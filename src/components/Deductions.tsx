import { motion } from "framer-motion";
import { Euro, GraduationCap, Train, Home, Laptop } from "lucide-react";

const deductions = [
  {
    name: "Semester Fees",
    description: "Claim back your full semester contribution fees.",
    icon: GraduationCap,
    amount: "Up to €300-€500 per semester",
  },
  {
    name: "Travel Costs",
    description: "Commuting expenses to and from university.",
    icon: Train,
    amount: "€0.30 per kilometer",
  },
  {
    name: "Housing Costs",
    description: "Second residence tax and rent if applicable.",
    icon: Home,
    amount: "Varies by situation",
  },
  {
    name: "Study Materials",
    description: "Books, laptop, software, and other study equipment.",
    icon: Laptop,
    amount: "Full cost deductible",
  },
];

export const Deductions = () => {
  return (
    <section className="py-24 bg-accent">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Maximize Your Return
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
            Common Student Tax Deductions
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Many students miss out on these valuable deductions. Our tool helps you
            identify and claim all eligible expenses.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {deductions.map((deduction, index) => (
            <motion.div
              key={deduction.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <deduction.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-secondary-foreground">
                {deduction.name}
              </h3>
              <p className="mt-2 text-base text-muted-foreground">
                {deduction.description}
              </p>
              <div className="mt-4 flex items-center gap-x-2">
                <Euro className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {deduction.amount}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};