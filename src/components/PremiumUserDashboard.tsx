
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  Mail,
  Clock,
  BookOpen,
  QrCode
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
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

const PremiumUserDashboard = () => {
  const { user } = useAuth();
  
  const [steps, setSteps] = useState<Step[]>([
    {
      id: "register-elster",
      title: "Register Elster Account",
      description: "Create your account at elster.de",
      content: "Create your account at elster.de using the step-by-step instructions provided in your PDF guide.",
      estimatedTime: "~10 min",
      pages: "Pages 5–7",
      completed: false
    },
    {
      id: "complete-profile",
      title: "Complete Elster Profile",
      description: "Fill in your address, bank details, and tax ID",
      content: "Complete your profile information including personal details, address, and banking information for tax refunds.",
      estimatedTime: "~5 min",
      pages: "Page 8",
      completed: false
    },
    {
      id: "select-form-fetch-data",
      title: "Select Form & Fetch Income Data",
      description: "Use Elster's autofill feature to retrieve your tax data",
      content: "Use Elster's autofill feature ('Bescheinigungen') to automatically retrieve your employment and tax data from previous submissions.",
      estimatedTime: "~10 min",
      pages: "Pages 9–16",
      completed: false
    },
    {
      id: "enter-personal-info",
      title: "Enter Personal Info & Bank Details",
      description: "Complete this section in Elster manually (if not auto-filled)",
      content: "Fill in any personal information and bank details that weren't automatically populated in the previous step.",
      estimatedTime: "~5 min",
      pages: "Pages 17–21",
      completed: false
    },
    {
      id: "check-income-data",
      title: "Check Auto-Filled Income Data",
      description: "Confirm your income data is correct",
      content: "Review and confirm that your Lohnsteuer, solidarity surcharge, and insurance data are correctly filled and accurate.",
      estimatedTime: "~5 min",
      pages: "Pages 22–23",
      completed: false
    },
    {
      id: "file-deductions",
      title: "File Deductions",
      description: "Enter expenses like transport, rent, study materials, software",
      content: "Enter your deductible expenses including transport costs, rent (if home office), study materials, software, and other eligible deductions. If you're unsure about any item, skip for now — we'll review it together on your call.",
      estimatedTime: "~15–20 min",
      pages: "Pages 24–33",
      completed: false
    },
    {
      id: "book-call-review",
      title: "Book a Call – Review & Submission",
      description: "Fill intake form and schedule your 1-on-1 session",
      content: "Complete a short intake form and schedule your consultation call to review everything before final submission.",
      estimatedTime: "~2 min",
      pages: "Final step",
      completed: false
    }
  ]);

  const [openSections, setOpenSections] = useState<string[]>(["register-elster"]);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [submissionConfirmed, setSubmissionConfirmed] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");

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
    const icons = [UserCheck, User, FileText, FileText, CheckCircle, MessageSquare, Phone];
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
          <p className="text-gray-600">Your step-by-step guide to completing your German tax return</p>
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
                          <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${openSections.includes(step.id) ? 'rotate-180' : ''}`} />
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
                        
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id={step.id}
                            checked={step.completed}
                            onCheckedChange={() => toggleStep(step.id)}
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
              ))}
            </div>

            {/* Submission Confirmation */}
            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <CheckCircle className="h-6 w-6" />
                  Final Step: Submission Confirmation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="submission-confirmed"
                      checked={submissionConfirmed}
                      onCheckedChange={setSubmissionConfirmed}
                    />
                    <label htmlFor="submission-confirmed" className="font-medium cursor-pointer">
                      I have submitted my return
                    </label>
                  </div>
                  
                  <div className="ml-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Tax Year
                    </label>
                    <Select value={selectedYear} onValueChange={setSelectedYear}>
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

            {/* Upsell Block - Only show after submission confirmation */}
            {submissionConfirmed && (
              <Card className="border-orange-200 bg-orange-50/50">
                <CardHeader>
                  <CardTitle className="text-orange-800">Need help filing another year?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Book an extra 1-on-1 session for just €24.99.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Full review of your tax return</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>30-minute consultation call</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Support for one additional tax year</span>
                    </div>
                  </div>
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    Book Extra Session
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* WhatsApp Support */}
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <MessageSquare className="h-6 w-6" />
                  Need help while working on your return?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Scan the QR code below to get quick replies from our team on WhatsApp.
                </p>
                <div className="bg-white p-6 rounded-lg border border-green-200 text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <QrCode className="h-16 w-16 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-600">
                    WhatsApp QR Code - Premium Support
                  </p>
                </div>
              </CardContent>
            </Card>
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
                  <label className="text-sm font-medium text-gray-500">Email</label>
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

                <div>
                  <label className="text-sm font-medium text-gray-500">Submission Status</label>
                  <p className="text-gray-900">{submissionConfirmed ? 'Complete' : 'In Progress'}</p>
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
