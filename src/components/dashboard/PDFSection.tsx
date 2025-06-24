
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import { useState } from "react";

const PDFSection = () => {
  const [selectedType, setSelectedType] = useState<"bachelor" | "master" | null>(null);

  const handleDownload = (type: "bachelor" | "master") => {
    // In a real implementation, these would be actual PDF URLs
    const pdfUrls = {
      bachelor: "/pdfs/bachelor-tax-guide.pdf",
      master: "/pdfs/master-tax-guide.pdf"
    };
    
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = pdfUrls[type];
    link.download = `${type}-tax-guide.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="border-purple-200 bg-purple-50/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-purple-800">
          <FileText className="h-6 w-6" />
          Your Premium Tax Guide
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">
          Download your personalized PDF guide based on your student level:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-gray-800 mb-2">Bachelor Student Guide</h3>
            <p className="text-sm text-gray-600 mb-3">
              Comprehensive guide for Bachelor students with simplified deductions and common scenarios.
            </p>
            <Button 
              onClick={() => handleDownload("bachelor")}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Bachelor Guide
            </Button>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-gray-800 mb-2">Master Student Guide</h3>
            <p className="text-sm text-gray-600 mb-3">
              Advanced guide for Master students with additional deductions and research-related expenses.
            </p>
            <Button 
              onClick={() => handleDownload("master")}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Master Guide
            </Button>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            💡 <strong>Tip:</strong> Download and keep your guide open while following the steps below for the best experience.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PDFSection;
