
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Lock, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export const PDFPreview = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const { user } = useAuth();

  const pdfPages = [
    'https://chghngeolthjinalfajg.supabase.co/storage/v1/object/public/pdf-resources/page1.png',
    'https://chghngeolthjinalfajg.supabase.co/storage/v1/object/public/pdf-resources/page2.png',
    'https://chghngeolthjinalfajg.supabase.co/storage/v1/object/public/pdf-resources/page3.png',
    'https://chghngeolthjinalfajg.supabase.co/storage/v1/object/public/pdf-resources/page4.png'
  ];

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

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pdfPages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pdfPages.length) % pdfPages.length);
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
              {/* PDF Preview Carousel */}
              <div className="relative p-6">
                <div className="relative bg-white border-2 border-gray-200 rounded-lg aspect-[8.5/11] flex items-center justify-center shadow-sm overflow-hidden max-w-md mx-auto">
                  <img 
                    src={pdfPages[currentPage]} 
                    alt={`Page ${currentPage + 1} Preview`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden flex-col items-center justify-center text-center">
                    <FileText className="h-12 w-12 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">Page {currentPage + 1} Preview</p>
                  </div>
                </div>
                
                {/* Navigation buttons */}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevPage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextPage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                
                {/* Page indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                  {pdfPages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentPage ? 'bg-primary' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
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
