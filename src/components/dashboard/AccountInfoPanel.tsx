
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Calendar, CheckCircle, Mail } from "lucide-react";

interface AccountInfoPanelProps {
  userEmail: string;
  submissionConfirmed: boolean;
}

const AccountInfoPanel = ({ userEmail, submissionConfirmed }: AccountInfoPanelProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-6 w-6" />
          Account Info
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-500">Email</label>
          <p className="text-gray-900">{userEmail}</p>
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
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Premium User</Badge>
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium text-gray-500">WhatsApp Support</label>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="text-green-600 text-sm">Enabled</span>
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium text-gray-500">Booking Status</label>
          <p className="text-gray-900">Pending</p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">Submission Status</label>
          <p className="text-gray-900">{submissionConfirmed ? 'Complete' : 'In Progress'}</p>
        </div>
        
        <div className="pt-4 border-t">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            onClick={() => window.location.href = 'mailto:support@studenttax.de'}
          >
            <Mail className="h-4 w-4 mr-2" />
            Contact Support
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountInfoPanel;
