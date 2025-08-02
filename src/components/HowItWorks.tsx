import React from 'react';
import { Search, Calendar, CreditCard, Mail } from 'lucide-react';
import EarlyAccessForm from './EarlyAccessForm';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Search & Discover",
      description: "Search restaurants by country and zip code",
      details: "Browse through our curated selection of restaurants worldwide. Filter by cuisine, price range, ambiance, and special dietary requirements to find the perfect match.",
      icon: Search,
    },
    {
      id: 2,
      title: "Book & Arrange",
      description: "Book table for recipient(s) including cab service",
      details: "Select your preferred date and time, specify the number of guests, and customize the experience with special requests. Our complimentary round-trip cab service ensures seamless transportation.",
      icon: Calendar,
    },
    {
      id: 3,
      title: "Secure Payment",
      description: "Save payment details for complete order processing",
      details: "Complete your booking with our bank-grade security. Your payment information is encrypted and stored safely for future convenience while ensuring complete transaction protection.",
      icon: CreditCard,
    },
    {
      id: 4,
      title: "Confirmation & Surprise",
      description: "Receive email and text confirmations for both parties",
      details: "Get instant confirmation with all booking details. Add a personal note that will be delivered with the surprise. Both you and your loved one receive notifications at the perfect time.",
      icon: Mail,
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
            Four simple steps to create unforgettable moments for your loved ones
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
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
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 group-hover:border-blue-500/50 dark:group-hover:border-blue-400/50">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="font-montserrat text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-montserrat font-semibold text-sm mb-3">
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
                      <div className="w-0.5 h-8 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="max-w-md mx-auto">
            <EarlyAccessForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;