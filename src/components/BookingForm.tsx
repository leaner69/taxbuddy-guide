
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CheckCircle } from "lucide-react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    taxYear: "",
    studentType: "",
    documentsReady: "",
    questions: ""
  });
  const [showCalendly, setShowCalendly] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking form submitted:", formData);
    setShowCalendly(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (showCalendly) {
    return (
      <Card className="border-green-200 bg-green-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <CheckCircle className="h-6 w-6" />
            Ready to Book Your Call!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-gray-700">
              Great! Based on your information, you can now schedule your 1-on-1 consultation call.
            </p>
            
            {/* Calendly placeholder */}
            <div className="border-2 border-dashed border-green-300 rounded-lg p-8 text-center bg-white">
              <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Calendly Booking Widget
              </h3>
              <p className="text-gray-600 mb-4">
                Select your preferred time slot for the consultation
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                Open Calendar
              </Button>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">What to expect in your call:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Review your tax return draft</li>
                <li>• Clarify any deductions you're unsure about</li>
                <li>• Get personalized advice for your situation</li>
                <li>• Final check before submission</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pre-Booking Information</CardTitle>
        <p className="text-sm text-gray-600">
          Help us prepare for your consultation by answering a few quick questions.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tax Year
            </label>
            <Select onValueChange={(value) => handleInputChange("taxYear", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select tax year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Student Type
            </label>
            <Select onValueChange={(value) => handleInputChange("studentType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your student type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bachelor">Bachelor Student</SelectItem>
                <SelectItem value="master">Master Student</SelectItem>
                <SelectItem value="phd">PhD Student</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Documents Ready?
            </label>
            <Select onValueChange={(value) => handleInputChange("documentsReady", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Do you have all necessary documents?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes, all documents ready</SelectItem>
                <SelectItem value="mostly">Most documents ready</SelectItem>
                <SelectItem value="some">Some documents missing</SelectItem>
                <SelectItem value="no">No, need help finding documents</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Main Doubts or Questions
            </label>
            <Textarea
              placeholder="What specific areas would you like help with during the call?"
              value={formData.questions}
              onChange={(e) => handleInputChange("questions", e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700"
            disabled={!formData.taxYear || !formData.studentType || !formData.documentsReady}
          >
            Continue to Booking
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
