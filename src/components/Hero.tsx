import React from 'react';
import { Star, Users, ArrowRight, Globe, Heart, Zap } from 'lucide-react';
import EarlyAccessForm from './EarlyAccessForm';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Artistic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%239C92AC%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-montserrat text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Connect with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 block">
                Healthcare
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-montserrat max-w-2xl">
              Find trusted healthcare providers, book appointments instantly, and access quality medical care from anywhere
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Globe className="h-5 w-5 text-green-400" />
                <span className="text-white font-montserrat text-sm">Nationwide Network</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Heart className="h-5 w-5 text-red-400" />
                <span className="text-white font-montserrat text-sm">Quality Care</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Zap className="h-5 w-5 text-yellow-400" />
                <span className="text-white font-montserrat text-sm">Instant Booking</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-white font-montserrat">4.8/5</span>
                <span className="text-gray-400 font-montserrat">(2,847 users)</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-400" />
                <span className="text-white font-montserrat">Trusted by 50,000+ patients nationwide</span>
              </div>
            </div>

            {/* Testimonial Snippets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {[
                { name: "Sarah M.", text: "Found an excellent cardiologist in minutes!" },
                { name: "David R.", text: "Seamless booking, professional service." },
                { name: "Maria L.", text: "Finally, healthcare that works for busy families." },
                { name: "James K.", text: "The best medical platform I've used!" }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-sm text-gray-300 mb-2 font-montserrat">"{testimonial.text}"</p>
                  <p className="text-xs text-blue-400 font-montserrat font-semibold">- {testimonial.name}</p>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="mt-8">
              <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-montserrat font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Find Healthcare Providers
              </button>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            {/* Interactive Feature Showcase */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-montserrat text-lg font-bold text-white mb-2">Nationwide Network</h3>
                <p className="text-gray-300 font-montserrat text-sm">Access providers across all states</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-montserrat text-lg font-bold text-white mb-2">Quality Care</h3>
                <p className="text-gray-300 font-montserrat text-sm">Verified, licensed professionals</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-montserrat text-lg font-bold text-white mb-2">Instant Booking</h3>
                <p className="text-gray-300 font-montserrat text-sm">Schedule appointments 24/7</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-montserrat text-lg font-bold text-white mb-2">Patient Support</h3>
                <p className="text-gray-300 font-montserrat text-sm">24/7 assistance available</p>
              </div>
            </div>
            
            {/* Main Hero Image */}
            <div className="mt-6 relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-1 shadow-2xl">
              <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-video relative">
                <img 
                  src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Professional healthcare consultation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-montserrat text-sm bg-black/50 backdrop-blur-sm rounded-lg p-3">
                      "TreatConnect helped me find the perfect specialist for my condition. Excellent service!" - Dr. Sarah Chen, Patient
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;