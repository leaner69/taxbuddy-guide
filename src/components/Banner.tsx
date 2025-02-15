
import { ArrowRight } from "lucide-react";

export const Banner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-primary to-primary-hover py-1.5 text-white text-center fixed top-0 z-50">
      <p className="text-sm md:text-base flex items-center justify-center gap-2">
        Average student misses €850 in tax refunds yearly
        <ArrowRight className="h-4 w-4" />
      </p>
    </div>
  );
};
