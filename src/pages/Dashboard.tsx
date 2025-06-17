import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Clock, CheckCircle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface Purchase {
  id: string;
  package_type: string;
  amount: number;
  status: string;
  created_at: string;
}

const Dashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [loadingPurchases, setLoadingPurchases] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchPurchases();
    }
  }, [user]);

  const fetchPurchases = async () => {
    try {
      const { data, error } = await supabase
        .from("purchases")
        .select("*")
        .eq("user_id", user?.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPurchases(data || []);
    } catch (error) {
      console.error("Error fetching purchases:", error);
      toast({
        title: "Error",
        description: "Failed to load your purchases",
        variant: "destructive",
      });
    } finally {
      setLoadingPurchases(false);
    }
  };

  const handleDownloadPDF = () => {
    // Create a link to download the PDF from Supabase storage
    const downloadUrl = `https://chghngeolthjinalfajg.supabase.co/storage/v1/object/public/pdfs/Masterguide.pdf`;
    window.open(downloadUrl, '_blank');
  };

  if (loading || loadingPurchases) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  const completedPurchases = purchases.filter(p => p.status === 'completed');
  const hasSelfService = completedPurchases.some(p => p.package_type === 'self_service');
  const hasExpertService = completedPurchases.some(p => p.package_type === 'expert_service');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here are your purchased guides and services.</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Purchases</p>
                    <p className="text-2xl font-bold">{completedPurchases.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Active Services</p>
                    <p className="text-2xl font-bold">{completedPurchases.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Download className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Downloads Available</p>
                    <p className="text-2xl font-bold">{hasSelfService ? 1 : 0}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Available Resources */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Your Resources</h2>

            {completedPurchases.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No purchases yet</h3>
                  <p className="text-gray-600 mb-4">
                    You haven't purchased any guides yet. Get started with our tax refund calculator!
                  </p>
                  <Button onClick={() => navigate("/#refund-calculator")}>
                    Calculate Your Refund
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6">
                {hasSelfService && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-6 w-6" />
                        Master Guide - German Tax Filing for Students
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-600 mb-2">
                            Complete step-by-step guide with ELSTER walkthrough
                          </p>
                          <div className="flex items-center gap-2 text-sm text-green-600">
                            <CheckCircle className="h-4 w-4" />
                            Ready for download
                          </div>
                        </div>
                        <Button onClick={handleDownloadPDF}>
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {hasExpertService && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-6 w-6" />
                        Expert Service
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-gray-600">
                          Your expert service is active. You'll be contacted by our tax expert within 24 hours.
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-900 mb-2">What's included:</h4>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Personal tax expert consultation</li>
                            <li>• Document review & optimization</li>
                            <li>• Direct submission to Finanzamt</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {/* Purchase History */}
            <Card>
              <CardHeader>
                <CardTitle>Purchase History</CardTitle>
              </CardHeader>
              <CardContent>
                {purchases.length === 0 ? (
                  <p className="text-gray-600">No purchases yet.</p>
                ) : (
                  <div className="space-y-4">
                    {purchases.map((purchase) => (
                      <div key={purchase.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium capitalize">
                            {purchase.package_type.replace('_', ' ')} Package
                          </p>
                          <p className="text-sm text-gray-600">
                            {new Date(purchase.created_at).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">€{purchase.amount}</p>
                          <div className="flex items-center gap-2">
                            {purchase.status === 'completed' ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : (
                              <Clock className="h-4 w-4 text-yellow-600" />
                            )}
                            <span className="text-sm capitalize">{purchase.status}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
