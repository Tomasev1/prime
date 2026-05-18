import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-secondary pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src="/images/logo.png" alt="Prime Pest Control" className="h-40 w-auto" />
            </Link>
            <p className="text-gray-600 font-sans text-sm leading-relaxed mb-6">
              Protecting Lubbock, Texas homes and businesses from unwanted pests with professional, reliable, and effective solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-secondary border-b border-gray-200 pb-2">Quick Links</h3>
            <ul className="space-y-3 font-sans text-gray-600">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Pest control</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-secondary border-b border-gray-200 pb-2">Pest control</h3>
            <ul className="space-y-3 font-sans text-gray-600">
              <li><Link to="/services/roaches" className="hover:text-primary transition-colors">Roach Control</Link></li>
              <li><Link to="/services/termites" className="hover:text-primary transition-colors">Termite Control</Link></li>
              <li><Link to="/services/rodents" className="hover:text-primary transition-colors">Rodent Removal</Link></li>
              <li><Link to="/services/bedbugs" className="hover:text-primary transition-colors">Bed Bug Treatments</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">General Pest Prevention</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-secondary border-b border-gray-200 pb-2">Contact Us</h3>
            <ul className="space-y-4 font-sans text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Lubbock, Texas<br />Serving the surrounding areas</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+18065550123" className="hover:text-primary transition-colors">(806) 555-0123</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@primepestcontroltx.com" className="hover:text-primary transition-colors">info@primepestcontroltx.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-sans text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Prime Pest Control. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500 font-sans">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
