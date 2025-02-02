import { FileText, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About TaxBuddy</h1>
          <p className="text-lg text-gray-600 mb-12">
            We're on a mission to help students in Germany maximize their tax refunds
            through simple, guided processes and expert support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Simple Process</h3>
            <p className="text-gray-600">
              We've simplified the complex German tax system into easy-to-follow steps
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-600">
              Our team of tax experts is here to help you every step of the way
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Maximum Returns</h3>
            <p className="text-gray-600">
              We help you identify all possible deductions to maximize your refund
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;