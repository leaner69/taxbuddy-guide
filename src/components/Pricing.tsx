import { Check } from "lucide-react";
import { Button } from "./ui/button";

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Pricing
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose Your Plan
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Self-Service Plan */}
          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900">Self-Service</h3>
            <p className="mt-4 text-sm text-gray-600">
              Perfect for students who want to file their own taxes with guidance
            </p>
            <p className="mt-6">
              <span className="text-4xl font-bold text-gray-900">€24.99</span>
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "Tax refund calculator",
                "Step-by-step ELSTER guide",
                "PDF documentation",
                "Email support",
              ].map((feature) => (
                <li key={feature} className="flex gap-3">
                  <Check className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>

          {/* Expert Service Plan */}
          <div className="rounded-2xl border border-blue-200 p-8 shadow-sm hover:shadow-md transition-shadow bg-blue-50">
            <h3 className="text-lg font-semibold text-gray-900">Expert Service</h3>
            <p className="mt-4 text-sm text-gray-600">
              Let our tax experts handle everything for you
            </p>
            <p className="mt-6">
              <span className="text-4xl font-bold text-gray-900">€59.99</span>
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "All Self-Service features",
                "Tax expert files for you",
                "Full support & consultation",
                "Document review",
                "Maximum refund guarantee",
              ].map((feature) => (
                <li key={feature} className="flex gap-3">
                  <Check className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full bg-blue-600 hover:bg-blue-700">
              Get Expert Help
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};