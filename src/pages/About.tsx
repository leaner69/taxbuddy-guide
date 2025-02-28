
import { FileText, Users, TrendingUp, GraduationCap, BookOpen, Euro } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About TaxBuddy</h1>
          <p className="text-lg text-gray-600 mb-8">
            We're students who discovered that most of our peers leave hundreds of euros unclaimed 
            each year. We built TaxBuddy to solve this problem.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <div className="bg-blue-50 rounded-lg p-8 mb-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <GraduationCap className="h-12 w-12 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    While studying at TU Berlin, we discovered that over 70% of students never file their tax returns,
                    leaving an average of €850 unclaimed each year. The complexity of the German tax system and language 
                    barriers were the main obstacles. As students ourselves, we experienced these challenges firsthand.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    We created TaxBuddy with a simple mission: make tax filing accessible to every student in Germany, 
                    regardless of their background or German language proficiency.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Simple Process</h3>
            <p className="text-gray-600">
              We've simplified the complex German tax system into easy-to-follow steps that anyone can complete in under 30 minutes.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">By Students, For Students</h3>
            <p className="text-gray-600">
              Our team consists entirely of students who understand your financial challenges and tax situations firsthand.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Maximum Returns</h3>
            <p className="text-gray-600">
              We help you identify all possible deductions to maximize your refund at the lowest possible fee.
            </p>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="max-w-5xl mx-auto mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-gray-200 transition-all duration-300 hover:shadow-md">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <GraduationCap className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Max Schmidt</h3>
                <p className="text-sm text-center text-gray-500 mb-3">Computer Science Student, TU Berlin</p>
                <p className="text-gray-600 text-sm text-center">
                  "I was shocked to learn I'd left over €2,000 unclaimed over two years. That experience inspired me to build TaxBuddy."
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 transition-all duration-300 hover:shadow-md">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <BookOpen className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Anna Weber</h3>
                <p className="text-sm text-center text-gray-500 mb-3">Law Student, LMU Munich</p>
                <p className="text-gray-600 text-sm text-center">
                  "I bring my legal knowledge to ensure our advice is accurate and up-to-date with the latest German tax regulations."
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 transition-all duration-300 hover:shadow-md">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Euro className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Jan Müller</h3>
                <p className="text-sm text-center text-gray-500 mb-3">Economics Student, University of Hamburg</p>
                <p className="text-gray-600 text-sm text-center">
                  "My goal is to help international students navigate the German tax system and claim what they're entitled to."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mt-24 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-8 text-white"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">Our Promise to Students</h2>
            <p className="text-lg mb-6 text-center">
              We charge the lowest possible fees while providing the highest quality service.
            </p>
            <ul className="space-y-4 max-w-2xl mx-auto">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-white rounded-full p-1 flex-shrink-0">
                  <FileText className="h-4 w-4 text-blue-600" />
                </div>
                <p>We'll never charge you unless you receive a refund. Our success is tied to yours.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-white rounded-full p-1 flex-shrink-0">
                  <FileText className="h-4 w-4 text-blue-600" />
                </div>
                <p>We provide full transparency at every step of the process, with no hidden fees.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-white rounded-full p-1 flex-shrink-0">
                  <FileText className="h-4 w-4 text-blue-600" />
                </div>
                <p>We're constantly improving our platform based on student feedback.</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
