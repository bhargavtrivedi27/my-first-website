import React from 'react';
import { Star, Users, Globe, Heart, Zap } from 'lucide-react';
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
              Treats for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 block">
                loved ones
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-montserrat max-w-2xl">
              Surprise your family and friends with delightful dining experiences, delivered with love and a complimentary cab ride
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Globe className="h-5 w-5 text-green-400" />
                <span className="text-white font-montserrat text-sm">50+ Countries</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Heart className="h-5 w-5 text-red-400" />
                <span className="text-white font-montserrat text-sm">Instant Joy</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Zap className="h-5 w-5 text-yellow-400" />
                <span className="text-white font-montserrat text-sm">Free Transport</span>
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
                <span className="text-white font-montserrat">Trusted by 10,000+ families worldwide</span>
              </div>
            </div>

            {/* Early Access Form */}
            <EarlyAccessForm />
          </div>

          {/* Visual Content */}
          <div className="relative">
            {/* Interactive Feature Showcase */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-montserrat text-lg font-bold text-white mb-2">50+ Countries</h3>
                <p className="text-gray-300 font-montserrat text-sm">Global dining experiences</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-montserrat text-lg font-bold text-white mb-2">Instant Joy</h3>
                <p className="text-gray-300 font-montserrat text-sm">Immediate happiness delivered</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-montserrat text-lg font-bold text-white mb-2">3-Step Process</h3>
                <p className="text-gray-300 font-montserrat text-sm">Simple and effortless</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-montserrat text-lg font-bold text-white mb-2">Free Transport</h3>
                <p className="text-gray-300 font-montserrat text-sm">Complimentary cab included</p>
              </div>
            </div>
            
            {/* Main Hero Image - IMPROVED */}
            <div className="mt-6 relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-1 shadow-2xl">
              <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-video relative">
                <img 
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Happy family enjoying a surprise dinner together at an elegant restaurant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-montserrat text-sm bg-black/50 backdrop-blur-sm rounded-lg p-3">
                      "My daughter surprised me with the most beautiful dinner through TreatConnect. The joy on her face was priceless!" - Maria Santos, Barcelona
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