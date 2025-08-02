import React from 'react';
import { Globe, Calendar, Heart, Gift } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      id: 1,
      title: "Access Care Anywhere",
      description: "Location shouldn't limit your healthcare options. Connect with top-rated specialists and primary care providers nationwide, whether you're at home or traveling.",
      icon: Globe,
    },
    {
      id: 2,
      title: "Never Miss Important Care",
      description: "Your health can't wait. Get same-day appointments, urgent care consultations, and preventive screenings exactly when you need them most.",
      icon: Calendar,
    },
    {
      id: 3,
      title: "Personalized Healthcare Journey",
      description: "Every patient is unique. Our platform matches you with providers who understand your specific needs, medical history, and healthcare preferences.",
      icon: Heart,
    },
    {
      id: 4,
      title: "Family-Centered Care",
      description: "Healthcare that works for your whole family. Manage appointments for children, elderly parents, and yourself all in one secure, easy-to-use platform.",
      icon: Gift,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2240%22%20height=%2240%22%20viewBox=%220%200%2040%2040%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%239C92AC%22%20fill-opacity=%220.05%22%20fill-rule=%22evenodd%22%3E%3Cpath%20d=%22m0%2040l40-40h-40v40zm40%200v-40h-40l40%2040z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose TreatConnect?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-montserrat max-w-3xl mx-auto">
            Experience healthcare the way it should be - accessible, reliable, and patient-centered
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={benefit.id}
                className={`group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 ${
                  index % 2 === 0 ? 'md:translate-y-4' : ''
                }`}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-montserrat text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 font-montserrat leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">98%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-montserrat">Patient Satisfaction</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-montserrat">Support Available</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">5,000+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-montserrat">Verified Providers</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">HIPAA</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-montserrat">Compliant & Secure</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;