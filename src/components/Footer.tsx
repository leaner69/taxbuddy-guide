import { Link } from "react-router-dom";
import { Shield, Mail, FileText } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#0A1F3E] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">TaxBuddy</h3>
            <p className="text-gray-300">
              Simplifying tax returns for students in Germany.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#D4AF37]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#D4AF37]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#D4AF37]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#D4AF37]" />
                <span className="text-gray-300">support@taxbuddy.de</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#D4AF37]" />
                <span className="text-gray-300">Secure & GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TaxBuddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};