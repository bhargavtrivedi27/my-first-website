import React from 'react';
import { Play, Star, Users } from 'lucide-react';

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
              Give surprises to your loved ones from anywhere, choices of their favorite places at your fingertips
            </p>

            <div className="mb-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-montserrat font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
                Make a day with a small surprise
              </button>
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

            {/* Testimonial Snippets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {[
                { name: "Sarah C.", text: "Made my mom's birthday unforgettable!" },
                { name: "David R.", text: "Flawless service, beautiful interface." },
                { name: "Priya P.", text: "Perfect for surprising loved ones remotely." },
                { name: "James W.", text: "My kids were absolutely thrilled!" }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-sm text-gray-300 mb-2 font-montserrat">"{testimonial.text}"</p>
                  <p className="text-xs text-blue-400 font-montserrat font-semibold">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Video Component */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-1 shadow-2xl">
              <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-video relative group cursor-pointer">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="TreatConnect Demo Video"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-all duration-300">
                    <Play className="h-12 w-12 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-montserrat text-sm bg-black/50 backdrop-blur-sm rounded-lg p-3">
                    Watch how TreatConnect helps you surprise loved ones from anywhere in the world
                  </p>
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