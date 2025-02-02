import { motion } from "framer-motion";
import { UserRound, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    university: "TU Berlin",
    text: "I got back €780 that I didn't even know I could claim! The step-by-step guide made filing through ELSTER so much easier.",
  },
  {
    name: "Michael K.",
    university: "LMU Munich",
    text: "As an international student, I was lost with German taxes. This tool helped me understand exactly what I could claim and how to do it.",
  },
  {
    name: "Lisa W.",
    university: "University of Hamburg",
    text: "The PDF guide was incredibly detailed and easy to follow. I saved both time and money using this service!",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Student Success Stories
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
            Hear from Our Users
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col bg-white rounded-2xl p-6 shadow-sm"
            >
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="flex-1 text-base leading-7 text-muted-foreground">
                "{testimonial.text}"
              </p>
              <div className="mt-6 flex items-center gap-x-4">
                <UserRound className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="text-sm font-semibold text-secondary-foreground">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.university}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};