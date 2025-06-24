
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Eye } from "lucide-react";

const PDFSection = () => {
  const handleViewGuide = (type: "bachelor" | "master") => {
    // In a real implementation, these would open secure view-only PDFs
    const pdfUrls = {
      bachelor: "/pdfs/bachelor-tax-guide.pdf",
      master: "/pdfs/master-tax-guide.pdf"
    };
    
    // Open in new tab for secure viewing
    window.open(pdfUrls[type], '_blank');
  };

  return (
    <Card className="border-blue-200 bg-blue-50/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-800">
          <FileText className="h-6 w-6" />
          Your Tax Guides
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">
          Secure view-only access:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="bg-white border border-blue-200 hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Bachelor Guide</h3>
              <p className="text-sm text-gray-600 mb-3">
                For first-degree students
              </p>
              <Button 
                onClick={() => handleViewGuide("bachelor")}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <Eye className="h-4 w-4 mr-2" />
                View Guide
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white border border-blue-200 hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Master Guide</h3>
              <p className="text-sm text-gray-600 mb-3">
                For second-degree students
              </p>
              <Button 
                onClick={() => handleViewGuide("master")}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <Eye className="h-4 w-4 mr-2" />
                View Guide
              </Button>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};

export default PDFSection;
