
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, QrCode } from "lucide-react";

const WhatsAppSection = () => {
  return (
    <Card className="border-green-200 bg-green-50/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-800">
          <MessageSquare className="h-6 w-6" />
          Need help while filing?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">
          Scan to get quick support via WhatsApp (Premium only)
        </p>
        <div className="bg-white p-6 rounded-lg border border-green-200 text-center">
          <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-3">
            <QrCode className="h-16 w-16 text-gray-400" />
          </div>
          <p className="text-sm text-gray-600">
            📲 WhatsApp QR Code - Premium Support
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WhatsAppSection;
