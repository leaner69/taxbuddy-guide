
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const UpsellSection = () => {
  return (
    <Card className="border-orange-200 bg-orange-50/50">
      <CardHeader>
        <CardTitle className="text-orange-800">Need to file another year?</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">
          Book an additional 1-on-1 session for €24.99
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>30-min call</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>Return review</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>Covers one extra year</span>
          </div>
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700">
          Book Extra Session
        </Button>
      </CardContent>
    </Card>
  );
};

export default UpsellSection;
