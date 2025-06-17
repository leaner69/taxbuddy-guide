
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calculator, Euro } from "lucide-react";

export const RefundCalculator = () => {
  const [income, setIncome] = useState("");
  const [taxPaid, setTaxPaid] = useState("");
  const [status, setStatus] = useState("");
  const [estimatedRefund, setEstimatedRefund] = useState<number | null>(null);

  const calculateRefund = () => {
    const incomeNum = parseFloat(income);
    const taxPaidNum = parseFloat(taxPaid);
    
    if (incomeNum && taxPaidNum) {
      // Simplified calculation based on German tax brackets
      let expectedTax = 0;
      
      if (incomeNum <= 10908) {
        expectedTax = 0; // Tax-free allowance
      } else if (incomeNum <= 61972) {
        // Progressive tax rate 14-42%
        expectedTax = (incomeNum - 10908) * 0.28; // Simplified average
      } else {
        expectedTax = (61972 - 10908) * 0.28 + (incomeNum - 61972) * 0.42;
      }
      
      // Apply student/worker deductions
      const deductions = status === "student" ? 1200 : 800;
      expectedTax = Math.max(0, expectedTax - deductions);
      
      const refund = Math.max(0, taxPaidNum - expectedTax);
      setEstimatedRefund(Math.round(refund));
    }
  };

  return (
    <section id="refund-calculator" className="py-6 bg-white border-b">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-primary mb-3">Calculate Your Potential Refund</h2>
            <p className="text-muted-foreground">
              Get an estimate of how much you could get back from German tax authorities
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Tax Refund Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="income">Annual Income (€)</Label>
                  <Input
                    id="income"
                    type="number"
                    placeholder="45000"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tax-paid">Tax Paid (€)</Label>
                  <Input
                    id="tax-paid"
                    type="number"
                    placeholder="8000"
                    value={taxPaid}
                    onChange={(e) => setTaxPaid(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="worker">Working Professional</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={calculateRefund} 
                className="w-full bg-primary hover:bg-primary-hover"
                disabled={!income || !taxPaid || !status}
              >
                Calculate Refund
              </Button>

              {estimatedRefund !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Euro className="h-6 w-6 text-primary" />
                    <span className="text-2xl font-bold text-primary">
                      €{estimatedRefund.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Estimated tax refund based on your information
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    *This is an estimate. Actual refund may vary based on deductions and circumstances.
                  </p>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
