import { ArrowRight } from "lucide-react";

export const Banner = () => {
  return (
    <div className="w-full bg-primary py-2 text-white text-center sticky top-0 z-50">
      <p className="text-sm md:text-base flex items-center justify-center gap-2">
        Get your taxes done in 48 hours
        <ArrowRight className="h-4 w-4" />
      </p>
    </div>
  );
};