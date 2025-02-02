import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Search, BookOpen, Receipt } from "lucide-react";

const faqs = [
  {
    icon: Search,
    question: "What is ELSTER?",
    answer:
      "ELSTER (ELektronische STeuerERklärung) is Germany's official online tax filing platform. It's a free service provided by the German tax authorities that allows you to submit your tax returns electronically.",
  },
  {
    icon: BookOpen,
    question: "Can I claim study abroad expenses?",
    answer:
      "Yes! You can claim expenses related to studying abroad including language courses, travel costs for semester start/end, accommodation costs, and mandatory program fees. Keep all receipts and documentation of these expenses.",
  },
  {
    icon: Receipt,
    question: "What receipts do I need to keep?",
    answer:
      "Keep all receipts related to: semester fees, study materials, laptop/computer purchases, travel costs to university, rent for a second residence, mandatory internship expenses, and language course fees. Digital copies are accepted by the tax office.",
  },
  {
    icon: HelpCircle,
    question: "How easy is it to file taxes through ELSTER?",
    answer:
      "While ELSTER itself is in German, our step-by-step guide makes it easy to navigate. We provide clear instructions with screenshots, translations of key terms, and explain exactly what information to enter in each field.",
  },
  {
    icon: HelpCircle,
    question: "What tax deductions can students claim in Germany?",
    answer:
      "Students can claim various deductions including: semester fees, study materials, travel costs to university, rent for a second residence, work equipment, and mandatory internship expenses.",
  },
  {
    icon: HelpCircle,
    question: "How much refund can I expect?",
    answer:
      "Refund amounts vary based on individual circumstances, but students often receive between €500-€1,500. Our calculator will help estimate your potential refund based on your specific situation.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-[#D4AF37]">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#0A1F3E] sm:text-4xl">
            Common Questions
          </p>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="px-6 py-4 text-left flex gap-4 items-center">
                      <faq.icon className="h-6 w-6 text-[#D4AF37] flex-shrink-0" />
                      <span className="text-[#0A1F3E] font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-2">
                      <p className="text-gray-600 ml-10">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};