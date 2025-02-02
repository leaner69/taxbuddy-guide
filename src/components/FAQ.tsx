import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is ELSTER?",
    answer:
      "ELSTER (ELektronische STeuerERklärung) is Germany's official online tax filing platform. It's a free service provided by the German tax authorities that allows you to submit your tax returns electronically.",
  },
  {
    question: "How easy is it to file taxes through ELSTER?",
    answer:
      "While ELSTER itself is in German, our step-by-step guide makes it easy to navigate. We provide clear instructions with screenshots, translations of key terms, and explain exactly what information to enter in each field.",
  },
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
    question: "What's included in the Expert Service package?",
    answer:
      "Our Expert Service includes personal handling of your tax return by a qualified tax expert, full support via email and phone, document review, and maximum refund guarantee. We take care of everything while keeping you informed throughout the process.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Using our tool and guide, most students complete their tax returns in 30-60 minutes. With our Expert Service, you just need to provide the documents, and we handle everything else. Processing by the tax office typically takes 2-6 weeks.",
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