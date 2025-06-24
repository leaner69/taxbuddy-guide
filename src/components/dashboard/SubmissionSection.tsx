
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

interface SubmissionSectionProps {
  submissionConfirmed: boolean;
  selectedYear: string;
  onSubmissionConfirmedChange: (confirmed: boolean) => void;
  onSelectedYearChange: (year: string) => void;
}

const SubmissionSection = ({ 
  submissionConfirmed, 
  selectedYear, 
  onSubmissionConfirmedChange, 
  onSelectedYearChange 
}: SubmissionSectionProps) => {
  const handleCheckboxChange = (checked: boolean | "indeterminate") => {
    if (typeof checked === 'boolean') {
      onSubmissionConfirmedChange(checked);
    }
  };

  return (
    <Card className="border-blue-200 bg-blue-50/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-800">
          <CheckCircle className="h-6 w-6" />
          Confirm your submission
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Checkbox
              id="submission-confirmed"
              checked={submissionConfirmed}
              onCheckedChange={handleCheckboxChange}
            />
            <label htmlFor="submission-confirmed" className="font-medium cursor-pointer">
              I have submitted my return
            </label>
          </div>
          
          <div className="ml-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select year
            </label>
            <Select value={selectedYear} onValueChange={onSelectedYearChange}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubmissionSection;
