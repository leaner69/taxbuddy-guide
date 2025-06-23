
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  CheckCircle, 
  Circle, 
  ChevronDown, 
  User, 
  Calendar,
  MessageSquare,
  FileText,
  UserCheck,
  Phone,
  Mail
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import BookingForm from "@/components/BookingForm";

interface Step {
  id: string;
  title: string;
  description: string;
  content: string;
  completed: boolean;
}

const PremiumUserDashboard = () => {
  const { user } = useAuth();
  
  const [steps, setSteps] = useState<Step[]>([
    {
      id: "elster-signup",
      title: "Register on Elster",
      description: "Create your Elster account",
      content: "Use Pages 1–5 in your Premium PDF Guide. This is required before filing.",
      completed: false
    },
    {
      id: "profile-setup",
      title: "Complete Your Elster Profile",
      description: "Fill in your personal details and tax profile on Elster",
      content: "No support is needed for this part — just follow the screenshots in the guide (Pages 6–7).",
      completed: false
    },
    {
      id: "filing-deductions",
      title: "Start Filing Deductions",
      description: "Begin entering deductions like Transport, Laptop, Rent, Study material",
      content: "If you're unsure about a specific deduction, leave it blank for now — we'll cover it during your support call.",
      completed: false
    },
    {
      id: "whatsapp-support",
      title: "Need Help While Filing?",
      description: "Have questions as you go? Get quick replies via WhatsApp",
      content: "Scan the QR code below to get quick replies via WhatsApp — exclusive to Premium users.",
      completed: false
    },
    {
      id: "book-call",
      title: "Book Your 1-on-1 Call",
      description: "Ready to book your private session?",
      content: "Once you've completed the steps above, you're ready to book your private session.",
      completed: false
    }
  ]);

  const [openSections, setOpenSections] = useState<string[]>(["elster-signup"]);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const toggleStep = (stepId: string) => {
    setSteps(prev => prev.map(step => 
      step.id === stepId ? { ...step, completed: !step.completed } : step
    ));
  };

  const toggleSection = (stepId: string) => {
    setOpenSections(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  const completedSteps = steps.filter(step => step.completed).length;
  const progressPercentage = (completedSteps / steps.length) * 100;

  const getStepIcon = (step: Step, index: number) => {
    const icons = [UserCheck, User, FileText, MessageSquare, Phone];
    const IconComponent = icons[index];
    
    return step.completed ? (
      <CheckCircle className="h-6 w-6 text-green-600" />
    ) : (
      <IconComponent className="h-6 w-6 text-gray-400" />
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-primary mb-2">Premium Dashboard</h1>
          <p className="text-gray-600">Your guided path to completing your tax return</p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content - 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            {/* Progress Bar Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Steps completed</span>
                    <span>{completedSteps} of {steps.length}</span>
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
                          {step.title.split(' ')[0]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step Sections */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <Card key={step.id} className={`transition-all ${step.completed ? 'border-green-200 bg-green-50/30' : ''}`}>
                  <Collapsible 
                    open={openSections.includes(step.id)}
                    onOpenChange={() => toggleSection(step.id)}
                  >
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer hover:bg-gray-50/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {getStepIcon(step, index)}
                            <div>
                              <CardTitle className="text-lg flex items-center gap-2">
                                Step {index + 1}: {step.title}
                                {step.completed && <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Done</Badge>}
                              </CardTitle>
                              <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                            </div>
                          </div>
                          <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${openSections.includes(step.id) ? 'rotate-180' : ''}`} />
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <div className="bg-blue-50 p-4 rounded-lg mb-4">
                          <p className="text-gray-700">{step.content}</p>
                          
                          {/* Special content for specific steps */}
                          {step.id === "filing-deductions" && (
                            <div className="mt-3 space-y-2">
                              <p className="font-medium text-gray-800">Common deductions:</p>
                              <ul className="space-y-1 text-sm text-gray-600">
                                <li>🚆 Transport costs</li>
                                <li>💻 Laptop and equipment</li>
                                <li>🏠 Rent (if home office)</li>
                                <li>📚 Study materials and books</li>
                              </ul>
                            </div>
                          )}
                          
                          {step.id === "whatsapp-support" && (
                            <div className="mt-4 p-4 bg-white rounded-lg border">
                              <div className="flex items-center justify-center">
                                <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                                  <span className="text-sm text-gray-500">WhatsApp QR Code</span>
                                </div>
                              </div>
                              <p className="text-center text-sm text-gray-600 mt-2">
                                Scan to connect with our support team
                              </p>
                            </div>
                          )}
                          
                          {step.id === "book-call" && (
                            <div className="mt-4">
                              {!showBookingForm ? (
                                <Button 
                                  onClick={() => setShowBookingForm(true)}
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
                        
                        <Button
                          onClick={() => toggleStep(step.id)}
                          variant={step.completed ? "secondary" : "default"}
                          className={step.completed ? "bg-green-100 text-green-800 hover:bg-green-200" : ""}
                        >
                          {step.completed ? (
                            <>
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Mark as Incomplete
                            </>
                          ) : (
                            <>
                              <Circle className="h-4 w-4 mr-2" />
                              Mark as Done
                            </>
                          )}
                        </Button>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </div>

          {/* Account Info Panel - 1 column */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-6 w-6" />
                  Account Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Email Address</label>
                  <p className="text-gray-900">{user?.email || 'user@example.com'}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-500 flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Member Since
                  </label>
                  <p className="text-gray-900">{new Date().toLocaleDateString()}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-500">Status</label>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Premium User</Badge>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-500">WhatsApp Support</label>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 text-sm">Enabled</span>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-500">Booking Status</label>
                  <p className="text-gray-900">Pending</p>
                </div>
                
                <div className="pt-4 border-t">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.location.href = 'mailto:support@studenttax.de'}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumUserDashboard;
