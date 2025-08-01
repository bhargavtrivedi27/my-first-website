import React from 'react';
import { Globe, Calendar, Heart, Gift } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      id: 1,
      title: "Treat from anywhere",
      description: "Distance doesn't matter when love does. Book memorable dining experiences for your loved ones from anywhere in the world with our global restaurant network.",
      icon: Globe,
    },
    {
      id: 2,
      title: "Special day never goes without enjoyment",
      description: "Every celebration deserves to be special. From birthdays to anniversaries, ensure your loved ones feel cherished on their most important days.",
      icon: Calendar,
    },
    {
      id: 3,
      title: "Create memories while away from home",
      description: "Being physically apart doesn't mean being emotionally distant. Create beautiful memories and strengthen bonds through thoughtful dining surprises.",
      icon: Heart,
    },
    {
      id: 4,
      title: "Loved ones feel special",
      description: "The joy of an unexpected treat is priceless. Watch your loved ones light up with surprise and feel truly valued with our seamless booking experience.",
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
            Transform the way you show love and care with our innovative platform designed for modern relationships
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
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-montserrat text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
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
      </div>
    </section>
  );
};

export default Benefits;