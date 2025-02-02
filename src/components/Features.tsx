import { motion } from "framer-motion";
import { Calculator, FileText, PiggyBank } from "lucide-react";

const features = [
  {
    name: "Schnelle Berechnung",
    description:
      "Erhalte in wenigen Minuten eine Schätzung deiner möglichen Steuerrückerstattung.",
    icon: Calculator,
  },
  {
    name: "PDF-Anleitung",
    description:
      "Detaillierte, schrittweise Anleitung für die Steuererklärung über ELSTER.",
    icon: FileText,
  },
  {
    name: "Maximale Erstattung",
    description:
      "Wir helfen dir, alle relevanten Posten zu identifizieren und einzureichen.",
    icon: PiggyBank,
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-white sm:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Einfacher Prozess
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
            Deine Steuererklärung leicht gemacht
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Mit unserem Tool sparst du Zeit und maximierst deine Rückerstattung.
            Perfekt auf die Bedürfnisse von Studierenden abgestimmt.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-secondary-foreground">
                  <feature.icon
                    className="h-5 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
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