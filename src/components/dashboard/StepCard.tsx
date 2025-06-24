
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, Clock, BookOpen, UserCheck, User, FileText, CheckCircle, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";

interface Step {
  id: string;
  title: string;
  description: string;
  content: string;
  estimatedTime: string;
  pages: string;
  completed: boolean;
}

interface StepCardProps {
  step: Step;
  index: number;
  isOpen: boolean;
  showBookingForm: boolean;
  onToggleStep: (stepId: string) => void;
  onToggleSection: (stepId: string) => void;
  onShowBookingForm: (show: boolean) => void;
}

const StepCard = ({ 
  step, 
  index, 
  isOpen, 
  showBookingForm, 
  onToggleStep, 
  onToggleSection, 
  onShowBookingForm 
}: StepCardProps) => {
  const [formData, setFormData] = useState({
    taxYear: "",
    studentType: "",
    documentsReady: "",
    questions: ""
  });

  const getStepIcon = (step: Step, index: number) => {
    const icons = [UserCheck, User, FileText, FileText, CheckCircle, MessageSquare, Phone];
    const IconComponent = icons[index];
    
    return step.completed ? (
      <CheckCircle className="h-6 w-6 text-green-600" />
    ) : (
      <IconComponent className="h-6 w-6 text-blue-600" />
    );
  };

  const handleCheckboxChange = (checked: boolean | "indeterminate") => {
    if (typeof checked === 'boolean') {
      onToggleStep(step.id);
    }
  };

  const isExpandableStep = step.id === "file-deductions" || step.id === "book-call-review";

  // For steps 1-5, use simple card style (no dropdown)
  if (!isExpandableStep) {
    return (
      <Card className={`transition-all ${step.completed ? 'border-green-200 bg-green-50/30' : 'border-gray-200'}`}>
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              {getStepIcon(step, index)}
            </div>
            
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2 flex-wrap">
                    Step {index + 1}: {step.title}
                    {step.completed && <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Done</Badge>}
                  </CardTitle>
                  <p className="text-gray-600 mt-1">{step.description}</p>
                </div>
                
                <div className="flex flex-col items-end gap-2 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{step.estimatedTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    <span>{step.pages}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mt-4">
                <Checkbox
                  id={step.id}
                  checked={step.completed}
                  onCheckedChange={handleCheckboxChange}
                />
                <label 
                  htmlFor={step.id}
                  className="text-sm font-medium cursor-pointer"
                >
                  Mark as Done
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // For steps 6-7, use collapsible style
  return (
    <Card className={`transition-all ${step.completed ? 'border-green-200 bg-green-50/30' : 'border-gray-200'}`}>
      <Collapsible open={isOpen} onOpenChange={() => onToggleSection(step.id)}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-gray-50/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {getStepIcon(step, index)}
                <div className="flex-1">
                  <CardTitle className="text-lg flex items-center gap-2 flex-wrap">
                    Step {index + 1}: {step.title}
                    {step.completed && <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Done</Badge>}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{step.estimatedTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      <span>{step.pages}</span>
                    </div>
                  </div>
                </div>
              </div>
              <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <CardContent className="pt-0">
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              {/* Special content for file deductions step */}
              {step.id === "file-deductions" && (
                <div className="space-y-3">
                  <p className="text-gray-700 font-medium">Enter eligible deductions:</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>🚊 Public transport to university/work</li>
                    <li>💻 Laptop and software</li>
                    <li>🌐 Internet costs (work-related portion)</li>
                    <li>🏠 Rent (if home office)</li>
                    <li>📚 Study materials and books</li>
                  </ul>
                  <p className="text-sm text-blue-700 font-medium mt-3">
                    💡 If you're unsure about any item, leave it for now — we'll cover it in the call.
                  </p>
                </div>
              )}
              
              {/* Special content for booking step */}
              {step.id === "book-call-review" && (
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-800">Pre-call Form:</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tax Year</label>
                      <Select value={formData.taxYear} onValueChange={(value) => setFormData({...formData, taxYear: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2023">2023</SelectItem>
                          <SelectItem value="2024">2024</SelectItem>
                          <SelectItem value="2025">2025</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Student Type</label>
                      <Select value={formData.studentType} onValueChange={(value) => setFormData({...formData, studentType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bachelor">Bachelor</SelectItem>
                          <SelectItem value="master">Master</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Documents Ready?</label>
                    <Select value={formData.documentsReady} onValueChange={(value) => setFormData({...formData, documentsReady: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Main Questions</label>
                    <Textarea 
                      placeholder="What would you like to discuss during the call?"
                      value={formData.questions}
                      onChange={(e) => setFormData({...formData, questions: e.target.value})}
                      rows={3}
                    />
                  </div>
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Submit & Book Call
                  </Button>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-3">
              <Checkbox
                id={step.id}
                checked={step.completed}
                onCheckedChange={handleCheckboxChange}
              />
              <label 
                htmlFor={step.id}
                className="text-sm font-medium cursor-pointer flex-1"
              >
                Mark as Done
              </label>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default StepCard;
