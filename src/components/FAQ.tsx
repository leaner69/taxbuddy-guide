import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What tax deductions can students claim in Germany?",
    answer:
      "Students can claim various deductions including: semester fees, study materials, travel costs to university, rent for a second residence, work equipment, and mandatory internship expenses.",
  },
  {
    question: "How much refund can I expect?",
    answer:
      "Refund amounts vary based on individual circumstances, but students often receive between €400-€1000. Our calculator will help estimate your potential refund based on your specific situation.",
  },
  {
    question: "Do I need to speak German to use ELSTER?",
    answer:
      "While ELSTER is in German, our English guide walks you through each step with screenshots and clear instructions, making it accessible for non-German speakers.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Using our tool and guide, most students complete their tax returns in 30-60 minutes. Processing by the tax office typically takes 2-6 weeks.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
            Common Questions
          </p>
          <div className="mt-4 flex justify-center">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};