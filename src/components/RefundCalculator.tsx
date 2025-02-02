import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Euro } from "lucide-react";

export const RefundCalculator = () => {
  const [semesterFees, setSemesterFees] = useState([300]);
  const [travelCosts, setTravelCosts] = useState([20]);
  const [studyMaterials, setStudyMaterials] = useState([200]);

  const calculateRefund = () => {
    const totalRefund = 
      (semesterFees[0] * 2) + // Two semesters
      (travelCosts[0] * 220 * 0.30) + // 220 days * €0.30/km
      studyMaterials[0];
    
    return totalRefund.toFixed(2);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-accent rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-secondary mb-6">Calculate Your Potential Refund</h2>
          
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium mb-2">Semester Fees (€ per semester)</label>
              <Slider
                defaultValue={[300]}
                max={1000}
                step={10}
                value={semesterFees}
                onValueChange={setSemesterFees}
                className="w-full"
              />
              <p className="mt-2 text-sm text-muted-foreground">€{semesterFees[0]}</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Daily Travel Distance (km)</label>
              <Slider
                defaultValue={[20]}
                max={100}
                step={1}
                value={travelCosts}
                onValueChange={setTravelCosts}
                className="w-full"
              />
              <p className="mt-2 text-sm text-muted-foreground">{travelCosts[0]}km</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Study Materials (€ per year)</label>
              <Slider
                defaultValue={[200]}
                max={1000}
                step={10}
                value={studyMaterials}
                onValueChange={setStudyMaterials}
                className="w-full"
              />
              <p className="mt-2 text-sm text-muted-foreground">€{studyMaterials[0]}</p>
            </div>

            <div className="mt-8 p-6 bg-primary rounded-xl text-white">
              <div className="flex items-center justify-between">
                <span className="text-lg">Estimated Refund:</span>
                <div className="flex items-center text-2xl font-bold">
                  <Euro className="w-6 h-6 mr-1" />
                  {calculateRefund()}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};