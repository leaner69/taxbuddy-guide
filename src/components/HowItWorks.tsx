import { motion } from "framer-motion";
import { FileText, Calculator, Send } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Input Your Details",
    description: "Enter your student-specific expenses like semester fees, study materials, and travel costs.",
    color: "from-blue-500/10 to-blue-600/10"
  },
  {
    icon: Calculator,
    title: "AI Calculates Refund",
    description: "Our AI instantly estimates your refund based on German tax laws for students.",
    color: "from-purple-500/10 to-purple-600/10"
  },
  {
    icon: Send,
    title: "Get Your Guide",
    description: "Receive a personalized PDF guide with step-by-step ELSTER instructions in English.",
    color: "from-green-500/10 to-green-600/10"
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#2A3B56] mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get your German tax return done in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className={`h-full rounded-2xl bg-gradient-to-br ${step.color} p-6 backdrop-blur-sm border border-gray-200`}>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#2A3B56] to-[#4F46E5] rounded-xl flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="pt-4">
                  <step.icon className="w-10 h-10 text-[#4F46E5] mb-4" />
                  <h3 className="text-xl font-semibold text-[#2A3B56] mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};