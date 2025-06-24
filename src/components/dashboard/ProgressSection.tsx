
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, UserCheck, User, FileText, MessageSquare, Phone } from "lucide-react";

interface Step {
  id: string;
  title: string;
  description: string;
  content: string;
  estimatedTime: string;
  pages: string;
  completed: boolean;
}

interface ProgressSectionProps {
  steps: Step[];
  completedSteps: number;
  progressPercentage: number;
}

const ProgressSection = ({ steps, completedSteps, progressPercentage }: ProgressSectionProps) => {
  const getStepIcon = (step: Step, index: number) => {
    const icons = [UserCheck, User, FileText, FileText, CheckCircle, MessageSquare, Phone];
    const IconComponent = icons[index];
    
    return step.completed ? (
      <CheckCircle className="h-6 w-6 text-green-600" />
    ) : (
      <IconComponent className="h-6 w-6 text-gray-400" />
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle className="h-6 w-6 text-green-600" />
          Your Progress
        </CardTitle>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="h-4 w-4" />
          <span>Estimated total time: ~45–60 minutes</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Steps completed</span>
            <span>{completedSteps} of {steps.length} ({Math.round(progressPercentage)}%)</span>
          </div>
          <Progress value={progressPercentage} className="h-3" />
          
          {/* Step indicators */}
          <div className="flex justify-between items-center pt-2">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center text-center">
                <div className={`p-2 rounded-full mb-2 ${step.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
                  {getStepIcon(step, index)}
                </div>
                <span className="text-xs text-gray-600 max-w-16 leading-tight">
                  Step {index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressSection;
