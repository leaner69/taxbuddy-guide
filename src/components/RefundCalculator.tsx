import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Euro, HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const RefundCalculator = () => {
  const [taxYear, setTaxYear] = useState("2024");
  const [studyType, setStudyType] = useState("bachelor");
  const [incomeRange, setIncomeRange] = useState("less");
  const [semesterFees, setSemesterFees] = useState([300]);
  const [tuitionFees, setTuitionFees] = useState([0]);

  const calculateRefund = () => {
    let baseRefund = 200;
    
    // Add semester fees contribution (30% of fees)
    baseRefund += (semesterFees[0] * 0.3);
    
    // Add tuition fees contribution (20% of fees)
    baseRefund += (tuitionFees[0] * 0.2);
    
    // Adjust based on income range
    if (incomeRange === "less") {
      baseRefund *= 1.2; // 20% bonus for lower income
    }
    
    // Adjust based on study type
    if (studyType === "master") {
      baseRefund *= 1.15; // 15% bonus for master studies
    }
    
    // Ensure refund stays within bounds
    const finalRefund = Math.min(Math.max(baseRefund, 200), 1400);
    
    return finalRefund.toFixed(2);
  };

  return (
    <section id="refund-calculator" className="py-16 bg-white border-b scroll-mt-16">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Calculate Your Potential Refund</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Use our calculator to estimate how much you could get back from your tax return
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-sm">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-lg font-medium text-primary mb-3">
                    Tax Year
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="w-4 h-4 ml-2 inline-block text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Select the year you want to file your tax return for</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </label>
                  <Select defaultValue={taxYear} onValueChange={setTaxYear}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      {["2020", "2021", "2022", "2023", "2024"].map((year) => (
                        <SelectItem key={year} value={year}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-lg font-medium text-primary mb-3">
                    Study Type
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="w-4 h-4 ml-2 inline-block text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Master studies may qualify for additional deductions</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </label>
                  <Select defaultValue={studyType} onValueChange={setStudyType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select study type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelor">Bachelor</SelectItem>
                      <SelectItem value="master">Master</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-lg font-medium text-primary mb-3">
                    Income Range
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="w-4 h-4 ml-2 inline-block text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Lower income may qualify for additional benefits</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </label>
                  <Select defaultValue={incomeRange} onValueChange={setIncomeRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select income range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="less">Less than €10,000</SelectItem>
                      <SelectItem value="more">More than €10,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-lg font-medium text-primary mb-3">
                  Semester Fees (€ per semester)
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="w-4 h-4 ml-2 inline-block text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Regular semester contribution fees can be claimed</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </label>
                <Slider
                  defaultValue={[300]}
                  max={3000}
                  step={50}
                  value={semesterFees}
                  onValueChange={setSemesterFees}
                  className="w-full"
                />
                <p className="mt-2 text-primary font-medium">€{semesterFees[0]}</p>
              </div>

              <div>
                <label className="block text-lg font-medium text-primary mb-3">
                  Tuition Fees (€ per semester)
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="w-4 h-4 ml-2 inline-block text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Additional tuition fees if applicable</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </label>
                <Slider
                  defaultValue={[0]}
                  max={3000}
                  step={50}
                  value={tuitionFees}
                  onValueChange={setTuitionFees}
                  className="w-full"
                />
                <p className="mt-2 text-primary font-medium">€{tuitionFees[0]}</p>
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
