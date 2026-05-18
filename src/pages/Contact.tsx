import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, ChevronRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'general',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting Prime Pest Control. We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'general',
      message: ''
    });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Pc_Contact.png" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-300 font-sans mb-4">
            <Link to="/" className="text-primary hover:text-primary-light transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-500" />
            <span className="text-white">Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 font-sans max-w-2xl">
            Get in touch for a free quote, to schedule an inspection, or to ask any questions about our services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-[#217953] font-sans font-bold tracking-wider uppercase text-sm mb-3">Get In Touch</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">We're Here to Help</h3>
              <p className="text-gray-600 font-sans text-lg leading-relaxed mb-10">
                Whether you have an immediate pest emergency or want to set up preventative care, Prime Pest Control is ready to respond. Reach out today.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-secondary mb-1">Phone</h4>
                    <p className="font-sans text-gray-600 mb-1">Call us for immediate assistance.</p>
                    <a href="tel:+18065550123" className="font-sans font-semibold text-primary hover:text-primary-dark transition-colors text-lg">(806) 555-0123</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-secondary mb-1">Email</h4>
                    <p className="font-sans text-gray-600 mb-1">Send us a message anytime.</p>
                    <a href="mailto:info@primepestcontroltx.com" className="font-sans font-semibold text-primary hover:text-primary-dark transition-colors">info@primepestcontroltx.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-secondary mb-1">Service Area</h4>
                    <p className="font-sans text-gray-600">Lubbock, Texas and surrounding communities.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-secondary mb-1">Hours</h4>
                    <p className="font-sans text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: By Appointment<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
              <h3 className="text-2xl font-heading font-bold text-secondary mb-6">Request a Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-sans text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors font-sans"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-sans text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors font-sans"
                      placeholder="(806) 555-0000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-sans text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors font-sans"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block font-sans text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
                  <select 
                    id="service" 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors font-sans bg-white"
                  >
                    <option value="general">General Pest Control</option>
                    <option value="termites">Termite Inspection/Treatment</option>
                    <option value="rodents">Rodent Removal</option>
                    <option value="bedbugs">Bed Bugs</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-sans text-sm font-semibold text-gray-700 mb-2">How can we help? *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors font-sans resize-none"
                    placeholder="Please describe your pest issue..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-md font-heading font-bold text-lg hover:bg-primary-dark transition-colors shadow-md"
                >
                  Send Message
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
