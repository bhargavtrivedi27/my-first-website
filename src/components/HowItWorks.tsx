import React from 'react';
import { Search, Calendar, CreditCard, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Choose & Personalize",
      description: "Select the perfect dining experience for your loved one",
      details: "Browse our curated collection of restaurants worldwide. Filter by cuisine, ambiance, and special occasions. Add a personal message and any dietary preferences to make it truly special.",
      icon: Search,
    },
    {
      id: 2,
      title: "Book with Love",
      description: "Schedule the surprise for the perfect moment",
      details: "Pick the ideal date and time for maximum impact. We'll handle all the coordination with the restaurant, ensuring everything is prepared exactly as you envisioned.",
      icon: Calendar,
    },
    {
      id: 3,
      title: "Joy Delivered",
      description: "Watch the magic unfold as your surprise creates lasting memories",
      details: "We handle everything from restaurant confirmation to complimentary transportation. Your loved one enjoys an unforgettable experience while you receive updates to share in their joy.",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-montserrat max-w-3xl mx-auto">
            Creating moments of joy is simple with TreatConnect. Three easy steps to surprise someone special with an unforgettable dining experience.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.id} className="relative group">
                  {/* Step Number */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl font-montserrat shadow-lg group-hover:scale-110 transition-transform duration-300 z-10 relative">
                        {step.id}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 group-hover:border-purple-500/50 dark:group-hover:border-purple-400/50">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h3 className="font-montserrat text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 font-montserrat font-semibold text-sm mb-3">
                        {step.description}
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-montserrat text-sm leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                  {/* Mobile Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-6">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-purple-600 to-blue-600"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;