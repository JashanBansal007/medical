import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-500 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-300 to-primary-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white">DesiMeds</span>
                <span className="font-display text-xl font-bold text-saffron-400"> Canada</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Trusted Indian medicines delivered to your doorstep in Canada. 
              Save up to 70% compared to Canadian pharmacy prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-saffron-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-saffron-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-saffron-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-saffron-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-saffron-400 transition-colors text-sm">
                  Shop Packages
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-gray-300 hover:text-saffron-400 transition-colors text-sm">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-saffron-400 transition-colors text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-saffron-400 transition-colors text-sm">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Policies</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/refund-policy" className="text-gray-300 hover:text-saffron-400 transition-colors text-sm">
                  Refund & Return Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-saffron-400 transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-saffron-400 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-saffron-400 transition-colors text-sm">
                  Shipping Information
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-saffron-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Kapil Medical Hall,<br />
                  In front of Emergency Gate,<br />
                  Civil Hospital, Rampura Phul,<br />
                  District Bathinda, Punjab, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-saffron-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 98552 29009</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-saffron-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">jashanbansal1010@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-navy-400">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center space-x-2 bg-navy-400/50 px-4 py-2 rounded-lg">
              <span className="text-saffron-400 text-xl">🔒</span>
              <span className="text-sm text-gray-300">Secure Payments</span>
            </div>
            <div className="flex items-center space-x-2 bg-navy-400/50 px-4 py-2 rounded-lg">
              <span className="text-saffron-400 text-xl">✓</span>
              <span className="text-sm text-gray-300">Licensed Pharmacy</span>
            </div>
            <div className="flex items-center space-x-2 bg-navy-400/50 px-4 py-2 rounded-lg">
              <span className="text-saffron-400 text-xl">🌍</span>
              <span className="text-sm text-gray-300">International Shipping</span>
            </div>
            <div className="flex items-center space-x-2 bg-navy-400/50 px-4 py-2 rounded-lg">
              <span className="text-saffron-400 text-xl">💯</span>
              <span className="text-sm text-gray-300">Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-navy-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} DesiMeds Canada. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              License No: IND-PHARM-2024-XXXXX | CDSCO Registered
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
