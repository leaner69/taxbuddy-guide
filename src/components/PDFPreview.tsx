
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Lock, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Auth from "@/pages/Auth";

export const PDFPreview = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);

  // PDF page images from Supabase storage
  const pdfPages = [
    "https://chghngeolthjinalfajg.supabase.co/storage/v1/object/public/pdf-resources/page-1.png",
    "https://chghngeolthjinalfajg.supabase.co/storage/v1/object/public/pdf-resources/page-2.png", 
    "https://chghngeolthjinalfajg.supabase.co/storage/v1/object/public/pdf-resources/page-3.png",
    "https://chghngeolthjinalfajg.supabase.co/storage/v1/object/public/pdf-resources/page-4.png"
  ];

  const handlePurchase = () => {
    if (!user) {
      setAuthModalOpen(true);
      return;
    }
    navigate("/payment", { 
      state: { 
        planName: "Self-Service Guide", 
        planPrice: "€29.99" 
      } 
    });
  };

  const handleAuthSuccess = () => {
    setAuthModalOpen(false);
    navigate("/payment", { 
      state: { 
        planName: "Self-Service Guide", 
        planPrice: "€29.99" 
      } 
    });
  };

  return (
    <section className="py-4 bg-gray-50 border-b">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-primary mb-3">Step-by-Step PDF Guide Preview</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a sneak peek of our comprehensive guide that walks you through the entire German tax filing process
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardHeader className="bg-primary text-white py-4">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6" />
                Master Guide - German Tax Filing for Students
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* PDF Preview Carousel */}
              <div className="p-6">
                <Carousel className="w-full max-w-3xl mx-auto">
                  <CarouselContent>
                    {pdfPages.map((pageUrl, index) => (
                      <CarouselItem key={index}>
                        <div className="relative">
                          <div className="bg-white border-2 border-gray-200 rounded-lg shadow-sm overflow-hidden">
                            <img 
                              src={pageUrl} 
                              alt={`Page ${index + 1} Preview`}
                              className="w-full h-auto object-contain"
                              style={{ maxHeight: '600px' }}
                              onError={(e) => {
                                // Fallback to placeholder if image fails to load
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.parentElement!.innerHTML = `
                                  <div class="flex items-center justify-center h-96 bg-gray-100">
                                    <div class="text-center">
                                      <div class="h-12 w-12 text-gray-400 mx-auto mb-2">📄</div>
                                      <p class="text-sm text-gray-500">Page ${index + 1} Preview</p>
                                    </div>
                                  </div>
                                `;
                              }}
                            />
                          </div>
                          <div className="absolute bottom-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                            Page {index + 1} of 4
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
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
                  
                  <Dialog open={authModalOpen} onOpenChange={setAuthModalOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        onClick={handlePurchase}
                        size="lg" 
                        className="bg-primary hover:bg-primary-hover"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Purchase Full Guide - €29.99
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Create Account to Continue</DialogTitle>
                      </DialogHeader>
                      <Auth onSuccess={handleAuthSuccess} />
                    </DialogContent>
                  </Dialog>
                  
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
