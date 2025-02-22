
import { useState } from "react";
import { motion } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Euro } from "lucide-react";

export const RefundCalculator = () => {
  const [year, setYear] = useState(2024);
  const [income, setIncome] = useState(0);
  const [taxPaid, setTaxPaid] = useState(0);
  const [jobType, setJobType] = useState("mini-job");
  const [studyExpenses, setStudyExpenses] = useState(0);
  const [status, setStatus] = useState("bachelor");
  const [rentExpenses, setRentExpenses] = useState(0);
  const [healthInsurance, setHealthInsurance] = useState(0);
  const [travelExpenses, setTravelExpenses] = useState(0);
  const [otherDeductions, setOtherDeductions] = useState(0);
  const [refundEstimate, setRefundEstimate] = useState<number | null>(null);

  const taxFreeLimits: Record<number, number> = {
    2020: 9408,
    2021: 9744,
    2022: 9984,
    2023: 10347,
    2024: 11004,
  };

  const calculateRefund = () => {
    let refund = 0;
    const taxFreeLimit = taxFreeLimits[year] || 10347;

    if (income < taxFreeLimit) {
      refund = taxPaid; // Full tax refund if income is below tax-free limit
    } else {
      let taxableIncome = income - taxFreeLimit;
      let deductionLimit = status === "bachelor" ? 6000 : studyExpenses + rentExpenses + healthInsurance + travelExpenses + otherDeductions;
      taxableIncome -= Math.min(deductionLimit, studyExpenses + rentExpenses + healthInsurance + travelExpenses + otherDeductions);

      if (taxableIncome < 0) taxableIncome = 0;

      refund = taxPaid - (taxableIncome * 0.2); // 20% estimated tax rate
      if (refund < 0) refund = 0;
    }

    setRefundEstimate(refund);
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

          <Card>
            <CardHeader>
              <CardTitle>Check Your Tax Refund Eligibility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Year</label>
                  <Select value={year.toString()} onValueChange={(value) => setYear(Number(value))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(taxFreeLimits).map((y) => (
                        <SelectItem key={y} value={y}>{y}</SelectItem>
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
                    <SelectContent>
                      <SelectItem value="bachelor">Bachelor</SelectItem>
                      <SelectItem value="master">Master</SelectItem>
                      <SelectItem value="full-time">Full-Time Employee</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Annual Income (€)", value: income, setter: setIncome },
                  { label: "Income Tax Paid (€)", value: taxPaid, setter: setTaxPaid },
                  { label: "Study-Related Expenses (€)", value: studyExpenses, setter: setStudyExpenses },
                  { label: "Rent Expenses (€)", value: rentExpenses, setter: setRentExpenses },
                  { label: "Health Insurance (€)", value: healthInsurance, setter: setHealthInsurance },
                  { label: "Travel Expenses (€)", value: travelExpenses, setter: setTravelExpenses },
                  { label: "Other Deductible Expenses (€)", value: otherDeductions, setter: setOtherDeductions },
                ].map((field) => (
                  <div key={field.label} className="space-y-2">
                    <label className="text-sm font-medium">{field.label}</label>
                    <Input
                      type="number"
                      value={field.value}
                      onChange={(e) => field.setter(Number(e.target.value))}
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
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
