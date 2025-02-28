
import { motion } from "framer-motion";
import { ClipboardCheck, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Check Refund",
    description: "Answer a few simple questions to see your potential refund amount.",
    color: "from-[#0A1F3E]/10 to-[#0A1F3E]/5"
  },
  {
    icon: FileText,
    title: "Follow Easy Guide",
    description: "Get your personalized step-by-step guide with clear instructions.",
    color: "from-[#D4AF37]/20 to-[#D4AF37]/10"
  },
  {
    icon: CheckCircle,
    title: "Submit with Confidence",
    description: "File your return easily with our support at every step.",
    color: "from-[#0A1F3E]/10 to-[#0A1F3E]/5"
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0A1F3E] mb-4">How It Works</h2>
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
              <div className={`h-full rounded-2xl bg-gradient-to-br ${step.color} p-6 backdrop-blur-sm border border-gray-200 shadow-sm`}>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#0A1F3E] to-[#1a3a5f] rounded-xl flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="pt-4">
                  <step.icon className="w-10 h-10 text-[#D4AF37] mb-4" />
                  <h3 className="text-xl font-semibold text-[#0A1F3E] mb-2">{step.title}</h3>
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
