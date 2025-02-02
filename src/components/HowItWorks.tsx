import { motion } from "framer-motion";
import { ClipboardCheck, FileText, Send } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Fill in your details",
    description: "Answer simple questions about your income and expenses",
  },
  {
    icon: FileText,
    title: "We prepare your return",
    description: "Our tax experts review and optimize your return",
  },
  {
    icon: Send,
    title: "We submit to Finanzamt",
    description: "Get your refund directly to your bank account",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Complete your tax return in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};