
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Mail, Crown, CheckCircle, Calendar, User } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const BasicUserDashboard = () => {
  const { user } = useAuth();

  const handleDownloadPDF = (type: 'bachelor' | 'master') => {
    // Create a link to download the appropriate PDF from Supabase storage
    const filename = type === 'bachelor' ? 'Bachelor-Guide.pdf' : 'Master-Guide.pdf';
    const downloadUrl = `https://chghngeolthjinalfajg.supabase.co/storage/v1/object/public/pdfs/${filename}`;
    window.open(downloadUrl, '_blank');
  };

  const handleEmailSupport = () => {
    window.location.href = 'mailto:support@studenttax.de?subject=Support Request - Basic User';
  };

  const handlePremiumUpgrade = () => {
    // Navigate to payment page or show upgrade modal
    console.log('Upgrade to premium clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-primary mb-2">Welcome to StudentTax</h1>
          <p className="text-gray-600">Your tax return guides are ready to download</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Section 1: Your Purchases */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6" />
                  Your Purchases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Tax Return Guide Package</h3>
                      <p className="text-sm text-gray-600">Purchased on {new Date().toLocaleDateString()}</p>
                      <p className="text-lg font-bold text-primary mt-1">€24.99</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Paid
                    </Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Button 
                      onClick={() => handleDownloadPDF('bachelor')}
                      variant="outline"
                      className="h-auto p-4 flex flex-col items-start gap-2 hover:bg-primary/5"
                    >
                      <div className="flex items-center gap-2 w-full">
                        <Download className="h-5 w-5 text-primary" />
                        <span className="font-semibold">Bachelor Guide</span>
                      </div>
                      <span className="text-sm text-gray-600 text-left">
                        Tax return for Bachelor students
                      </span>
                    </Button>

                    <Button 
                      onClick={() => handleDownloadPDF('master')}
                      variant="outline"
                      className="h-auto p-4 flex flex-col items-start gap-2 hover:bg-primary/5"
                    >
                      <div className="flex items-center gap-2 w-full">
                        <Download className="h-5 w-5 text-primary" />
                        <span className="font-semibold">Master Guide</span>
                      </div>
                      <span className="text-sm text-gray-600 text-left">
                        Tax return for Master students
                      </span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: Support Note */}
            <Card className="border-blue-200 bg-blue-50/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">Need help with anything?</h3>
                    <p className="text-gray-600 mb-4">
                      We offer email support with replies within 72 hours for basic users.
                    </p>
                    <Button 
                      onClick={handleEmailSupport}
                      variant="outline"
                      size="sm"
                      className="border-blue-300 text-blue-700 hover:bg-blue-100"
                    >
                      Email us → support@studenttax.de
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: Premium Upsell */}
            <Card className="border-green-200" style={{ backgroundColor: '#e9f9f0' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Crown className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Crown className="h-5 w-5 text-yellow-500" />
                      Want faster, expert help? Upgrade to Premium – €24.99
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">30-minute 1-on-1 consultation call</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">Tax form reviewed before submission</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">Quick support via WhatsApp</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">Support valid for 1 tax return (e.g. 2024)</span>
                      </div>
                    </div>

                    <Button 
                      onClick={handlePremiumUpgrade}
                      className="bg-green-600 hover:bg-green-700 text-white mb-2"
                    >
                      Upgrade to Premium
                    </Button>
                    <p className="text-sm text-gray-600">
                      One-time payment · Full guidance included
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Account Info */}
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
                    <Badge variant="secondary">Basic User</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicUserDashboard;
