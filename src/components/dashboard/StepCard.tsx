
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Clock, BookOpen, UserCheck, User, FileText, CheckCircle, MessageSquare, Phone } from "lucide-react";
import BookingForm from "@/components/BookingForm";

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
  const getStepIcon = (step: Step, index: number) => {
    const icons = [UserCheck, User, FileText, FileText, CheckCircle, MessageSquare, Phone];
    const IconComponent = icons[index];
    
    return step.completed ? (
      <CheckCircle className="h-6 w-6 text-green-600" />
    ) : (
      <IconComponent className="h-6 w-6 text-gray-400" />
    );
  };

  const handleCheckboxChange = (checked: boolean | "indeterminate") => {
    if (typeof checked === 'boolean') {
      onToggleStep(step.id);
    }
  };

  return (
    <Card className={`transition-all ${step.completed ? 'border-green-200 bg-green-50/30' : ''}`}>
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
              <p className="text-gray-700">{step.content}</p>
              
              {/* Special content for file deductions step */}
              {step.id === "file-deductions" && (
                <div className="mt-3 space-y-2">
                  <p className="font-medium text-gray-800">Common deductions to enter:</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>🚆 Transport costs to university/work</li>
                    <li>💻 Laptop, software, and equipment</li>
                    <li>🏠 Rent (if you have a home office)</li>
                    <li>📚 Study materials, books, and courses</li>
                    <li>📱 Internet and phone bills (work-related portion)</li>
                  </ul>
                </div>
              )}
              
              {/* Special content for booking step */}
              {step.id === "book-call-review" && (
                <div className="mt-4">
                  {!showBookingForm ? (
                    <Button 
                      onClick={() => onShowBookingForm(true)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Start Booking Process
                    </Button>
                  ) : (
                    <BookingForm />
                  )}
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
