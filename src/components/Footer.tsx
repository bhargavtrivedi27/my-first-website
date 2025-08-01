import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CTA Section */}
        <div className="text-center mb-16 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-8 border border-blue-500/20">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Magic?
          </h2>
          <p className="text-gray-300 font-montserrat text-lg mb-8 max-w-2xl mx-auto">
            Start surprising your loved ones today with unforgettable dining experiences from anywhere in the world
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-montserrat font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
            Make a day with a small surprise
          </button>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-montserrat text-2xl font-bold mb-2">TreatConnect</h3>
              <p className="text-gray-400 font-montserrat text-sm">
                Connecting hearts through memorable dining experiences, no matter the distance.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 font-montserrat text-sm">hello@treatconnect.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 font-montserrat text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 font-montserrat text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'How It Works', 'Careers', 'Press Kit', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white font-montserrat text-sm transition-colors duration-200 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-montserrat text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {['Contact Support', 'Partner Restaurants', 'Help Center', 'Safety Guidelines', 'Community'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white font-montserrat text-sm transition-colors duration-200 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-montserrat text-lg font-semibold mb-6">Stay Connected</h4>
            <p className="text-gray-400 font-montserrat text-sm mb-4">
              Get surprise ideas and special offers delivered to your inbox
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white font-montserrat text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-r-lg transition-all duration-300 transform hover:scale-105"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </form>

            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 transform hover:scale-110"
                  >
                    <IconComponent className="h-5 w-5 text-gray-400 hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 font-montserrat text-sm">
              © 2024 TreatConnect. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-white font-montserrat text-sm transition-colors duration-200 hover:underline"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;