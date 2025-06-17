
import { useState } from "react";
import { motion } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Euro, ArrowRight } from "lucide-react";

export const RefundCalculator = () => {
  const [year, setYear] = useState("2024");
  const [income, setIncome] = useState<string>("");
  const [taxPaid, setTaxPaid] = useState<string>("");
  const [studyExpenses, setStudyExpenses] = useState<string>("");
  const [healthInsurance, setHealthInsurance] = useState<string>("");
  const [status, setStatus] = useState("bachelor");
  const [refundEstimate, setRefundEstimate] = useState<number | null>(null);

  const taxFreeLimits: Record<number, number> = {
    2020: 9408,
    2021: 9744,
    2022: 9984,
    2023: 10347,
    2024: 11004,
  };

  const calculateRefund = () => {
    const incomeNum = Number(income) || 0;
    const taxPaidNum = Number(taxPaid) || 0;
    const studyExpensesNum = Number(studyExpenses) || 0;
    const healthInsuranceNum = Number(healthInsurance) || 0;
    
    let refund = 0;
    const taxFreeLimit = taxFreeLimits[Number(year)] || 10347;

    if (incomeNum < taxFreeLimit) {
      refund = taxPaidNum; // Full tax refund if income is below tax-free limit
    } else {
      let taxableIncome = incomeNum - taxFreeLimit;
      let deductionLimit = status === "bachelor" ? 6000 : studyExpensesNum + healthInsuranceNum;
      taxableIncome -= Math.min(deductionLimit, studyExpensesNum + healthInsuranceNum);

      if (taxableIncome < 0) taxableIncome = 0;

      refund = taxPaidNum - (taxableIncome * 0.2); // 20% estimated tax rate
      if (refund < 0) refund = 0;
    }

    setRefundEstimate(refund);
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="refund-calculator" className="py-8 bg-white border-b scroll-mt-16">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Calculate Your Potential Refund</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Use our calculator to estimate how much you could get back from your tax return
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Check Your Tax Refund Eligibility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Year</label>
                  <Select value={year} onValueChange={setYear}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {Object.keys(taxFreeLimits).map((y) => (
                        <SelectItem key={y} value={y} className="hover:bg-gray-100">{y}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="bachelor" className="hover:bg-gray-100">Bachelor</SelectItem>
                      <SelectItem value="master" className="hover:bg-gray-100">Master</SelectItem>
                      <SelectItem value="full-time" className="hover:bg-gray-100">Full-Time Employee</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Annual Income (€)", value: income, setter: setIncome },
                  { label: "Income Tax Paid (€)", value: taxPaid, setter: setTaxPaid },
                  { label: "Study-Related Expenses (€)", value: studyExpenses, setter: setStudyExpenses },
                  { label: "Health Insurance (€)", value: healthInsurance, setter: setHealthInsurance },
                ].map((field) => (
                  <div key={field.label} className="space-y-2">
                    <label className="text-sm font-medium">{field.label}</label>
                    <Input
                      type="number"
                      value={field.value}
                      onChange={(e) => field.setter(e.target.value)}
                      placeholder="Enter amount"
                    />
                  </div>
                ))}
              </div>

              <Button
                onClick={calculateRefund}
                className="w-full"
                size="lg"
              >
                Calculate Refund
              </Button>

              {refundEstimate !== null && (
                <div className="space-y-4">
                  <Alert className={refundEstimate < 100 ? "bg-red-50" : "bg-green-50"}>
                    <AlertDescription>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">Estimated Refund:</span>
                        <div className="flex items-center text-3xl font-bold">
                          <Euro className="w-6 h-6 mr-1" />
                          {refundEstimate.toFixed(2)}
                        </div>
                      </div>
                      {refundEstimate < 100 && (
                        <p className="mt-2 text-red-600">
                          Your refund is below €100! If you file with us, we guarantee a full refund of our service fee.
                        </p>
                      )}
                    </AlertDescription>
                  </Alert>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <Button 
                      onClick={scrollToPricing} 
                      className="w-full" 
                      size="lg" 
                      variant="secondary"
                    >
                      Choose a Filing Package <ArrowRight className="ml-2" />
                    </Button>
                  </motion.div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
