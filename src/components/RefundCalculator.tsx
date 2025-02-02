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
      (semesterFees[0] * 2) +
      (travelCosts[0] * 220 * 0.30) +
      studyMaterials[0];
    
    return totalRefund.toFixed(2);
  };

  return (
    <section className="py-24 bg-white border-b">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Calculate Your Potential Refund</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Use our calculator to estimate how much you could get back from your tax return
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-sm">
            <div className="space-y-12">
              <div>
                <label className="block text-lg font-medium text-primary mb-6">
                  Semester Fees (€ per semester)
                </label>
                <Slider
                  defaultValue={[300]}
                  max={1000}
                  step={10}
                  value={semesterFees}
                  onValueChange={setSemesterFees}
                  className="w-full"
                />
                <p className="mt-4 text-primary font-medium">€{semesterFees[0]}</p>
              </div>

              <div>
                <label className="block text-lg font-medium text-primary mb-6">
                  Daily Travel Distance (km)
                </label>
                <Slider
                  defaultValue={[20]}
                  max={100}
                  step={1}
                  value={travelCosts}
                  onValueChange={setTravelCosts}
                  className="w-full"
                />
                <p className="mt-4 text-primary font-medium">{travelCosts[0]}km</p>
              </div>

              <div>
                <label className="block text-lg font-medium text-primary mb-6">
                  Study Materials (€ per year)
                </label>
                <Slider
                  defaultValue={[200]}
                  max={1000}
                  step={10}
                  value={studyMaterials}
                  onValueChange={setStudyMaterials}
                  className="w-full"
                />
                <p className="mt-4 text-primary font-medium">€{studyMaterials[0]}</p>
              </div>

              <div className="p-8 bg-primary rounded-xl text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xl">Estimated Refund:</span>
                  <div className="flex items-center text-3xl font-bold">
                    <Euro className="w-6 h-6 mr-1" />
                    {calculateRefund()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};