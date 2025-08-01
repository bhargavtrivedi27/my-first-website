import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How far in advance can I book?",
      answer: "You can book dining experiences up to 3 months in advance. For special occasions and popular restaurants, we recommend booking at least 1-2 weeks ahead to ensure availability. Last-minute bookings (same day) are also possible based on restaurant availability."
    },
    {
      id: 2,
      question: "What happens if the restaurant is fully booked?",
      answer: "If your preferred restaurant is fully booked, we'll immediately suggest similar alternatives in the same area with comparable cuisine and ambiance. You can also join our waitlist, and we'll notify you if a spot becomes available. Our customer service team is available 24/7 to help find the perfect alternative."
    },
    {
      id: 3,
      question: "Can I modify or cancel my booking?",
      answer: "Yes, you can modify or cancel your booking up to 24 hours before the reservation time at no charge. Changes made within 24 hours may incur a small fee depending on the restaurant's policy. Cancellations within 4 hours of the reservation time may result in a cancellation fee."
    },
    {
      id: 4,
      question: "How does the cab service work?",
      answer: "Our complimentary round-trip cab service is included with every booking. The cab will arrive 15 minutes before the scheduled pickup time and wait for up to 10 minutes. After the meal, your loved ones simply need to call the provided number, and the return cab will arrive within 15 minutes. All cab details are sent via SMS."
    },
    {
      id: 5,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All transactions are secured with bank-grade encryption. You can save your payment information for future bookings with complete security."
    },
    {
      id: 6,
      question: "Is the service available internationally?",
      answer: "Yes! TreatConnect operates in over 50 countries worldwide. Our platform supports multiple currencies and languages. International bookings include the same level of service and support, with local customer service teams available in major regions to assist with any special requirements."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-montserrat">
            Everything you need to know about TreatConnect
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-montserrat text-lg md:text-xl font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-6 w-6 text-blue-600 dark:text-blue-400 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400 transition-transform duration-200" />
                    )}
                  </div>
                </div>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 font-montserrat leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 font-montserrat mb-6">
            Still have questions? We're here to help!
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-montserrat font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;