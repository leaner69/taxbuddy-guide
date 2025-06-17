
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Lock, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export const PDFPreview = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handlePurchase = () => {
    if (!user) {
      navigate("/auth");
      return;
    }
    navigate("/payment", { 
      state: { 
        planName: "Self-Service Guide", 
        planPrice: "€29.99" 
      } 
    });
  };

  return (
    <section className="py-8 bg-gray-50 border-b">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Step-by-Step PDF Guide Preview</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a sneak peek of our comprehensive guide that walks you through the entire German tax filing process
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardHeader className="bg-primary text-white">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6" />
                Master Guide - German Tax Filing for Students
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* PDF Preview Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                {[1, 2, 3, 4].map((page) => (
                  <div key={page} className="relative">
                    <div className="bg-white border-2 border-gray-200 rounded-lg aspect-[8.5/11] flex items-center justify-center shadow-sm">
                      <div className="text-center">
                        <FileText className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">Page {page} Preview</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Locked Content Indicator */}
              <div className="bg-gray-100 border-t p-6">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Lock className="h-8 w-8 text-gray-500" />
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-700">More Content Available</h3>
                    <p className="text-sm text-gray-500">20+ additional pages with detailed instructions</p>
                  </div>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-600">
                    <span className="bg-white px-3 py-1 rounded-full">✓ Complete ELSTER walkthrough</span>
                    <span className="bg-white px-3 py-1 rounded-full">✓ Screenshot tutorials</span>
                    <span className="bg-white px-3 py-1 rounded-full">✓ Deduction checklists</span>
                    <span className="bg-white px-3 py-1 rounded-full">✓ Multi-language support</span>
                  </div>
                  
                  <Button 
                    onClick={handlePurchase}
                    size="lg" 
                    className="bg-primary hover:bg-primary-hover"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Purchase Full Guide - €29.99
                  </Button>
                  
                  {!user && (
                    <p className="text-sm text-gray-500">
                      Create an account to access your purchases
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
