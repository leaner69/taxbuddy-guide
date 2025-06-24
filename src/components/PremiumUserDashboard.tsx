
import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import ProgressSection from "@/components/dashboard/ProgressSection";
import PDFSection from "@/components/dashboard/PDFSection";
import StepCard from "@/components/dashboard/StepCard";
import SubmissionSection from "@/components/dashboard/SubmissionSection";
import UpsellSection from "@/components/dashboard/UpsellSection";
import WhatsAppSection from "@/components/dashboard/WhatsAppSection";
import AccountInfoPanel from "@/components/dashboard/AccountInfoPanel";

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
            <ProgressSection 
              steps={steps}
              completedSteps={completedSteps}
              progressPercentage={progressPercentage}
            />

            {/* PDF Section */}
            <PDFSection />

            {/* Step Sections */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <StepCard
                  key={step.id}
                  step={step}
                  index={index}
                  isOpen={openSections.includes(step.id)}
                  showBookingForm={showBookingForm}
                  onToggleStep={toggleStep}
                  onToggleSection={toggleSection}
                  onShowBookingForm={setShowBookingForm}
                />
              ))}
            </div>

            {/* Submission Confirmation */}
            <SubmissionSection
              submissionConfirmed={submissionConfirmed}
              selectedYear={selectedYear}
              onSubmissionConfirmedChange={setSubmissionConfirmed}
              onSelectedYearChange={setSelectedYear}
            />

            {/* Upsell Block - Only show after submission confirmation */}
            {submissionConfirmed && <UpsellSection />}

            {/* WhatsApp Support */}
            <WhatsAppSection />
          </div>

          {/* Account Info Panel - 1 column */}
          <div className="lg:col-span-1">
            <AccountInfoPanel
              userEmail={user?.email || 'user@example.com'}
              submissionConfirmed={submissionConfirmed}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumUserDashboard;
