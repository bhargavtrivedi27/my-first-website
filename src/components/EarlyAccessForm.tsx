import React, { useState } from 'react';
import { Mail, User, CheckCircle, AlertCircle, Loader } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const EarlyAccessForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error status when user starts typing
    if (status.type === 'error') {
      setStatus({ type: 'idle', message: '' });
    }
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name' });
      return false;
    }
    if (!formData.email.trim()) {
      setStatus({ type: 'error', message: 'Please enter your email address' });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      return false;
    }
    return true;
  };

  const submitToGoogleSheets = async (data: FormData): Promise<boolean> => {
    try {
      // Google Apps Script Web App URL - Replace with your actual deployment URL
      const GOOGLE_SCRIPT_URL = https://script.google.com/macros/s/AKfycbx6-w3iub1otokkoTXBEjK_hVkxr5wEIIRWI27KVLqc5OIVxcj78Sy7W1jJgYnKOw3S2A/exec;
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          timestamp: new Date().toISOString(),
          source: 'TreatConnect Landing Page',
          userAgent: navigator.userAgent
        })
      });

      // With no-cors mode, we assume success if no error is thrown
      return true;
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setStatus({ type: 'loading', message: 'Signing you up...' });

    try {
      const success = await submitToGoogleSheets(formData);
      
      if (success) {
        setStatus({ 
          type: 'success', 
          message: 'Welcome to TreatConnect! We\'ll notify you when we launch.' 
        });
        setFormData({ name: '', email: '' });
        
        // Track conversion event (you can integrate with your analytics)
        if (typeof gtag !== 'undefined') {
          gtag('event', 'early_access_signup', {
            event_category: 'engagement',
            event_label: 'hero_form'
          });
        }
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again.' 
      });
    }
  };

  if (status.type === 'success') {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center max-w-md mx-auto">
        <CheckCircle className="h-16 w-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
        <h3 className="font-montserrat text-xl font-bold text-green-800 dark:text-green-200 mb-2">
          You're In!
        </h3>
        <p className="text-green-700 dark:text-green-300 font-montserrat">
          {status.message}
        </p>
        <button
          onClick={() => setStatus({ type: 'idle', message: '' })}
          className="mt-4 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 font-montserrat text-sm underline"
        >
          Sign up another person
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20">
        <h3 className="font-montserrat text-xl font-bold text-white mb-4 text-center">
          Get Early Access
        </h3>
        <p className="text-gray-300 font-montserrat text-sm mb-6 text-center">
          Be the first to surprise your loved ones with TreatConnect
        </p>
        
        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              className="w-full pl-10 pr-4 py-3 bg-white/20 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600/50 rounded-lg text-white placeholder-gray-300 font-montserrat focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>
          
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              className="w-full pl-10 pr-4 py-3 bg-white/20 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600/50 rounded-lg text-white placeholder-gray-300 font-montserrat focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>
        </div>

        {status.message && (
          <div className={`mt-4 p-3 rounded-lg flex items-center space-x-2 ${
            status.type === 'error' 
              ? 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800' 
              : 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
          }`}>
            {status.type === 'loading' && <Loader className="h-4 w-4 text-blue-600 animate-spin" />}
            {status.type === 'error' && <AlertCircle className="h-4 w-4 text-red-600" />}
            <p className={`text-sm font-montserrat ${
              status.type === 'error' 
                ? 'text-red-700 dark:text-red-300' 
                : 'text-blue-700 dark:text-blue-300'
            }`}>
              {status.message}
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-montserrat font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
        >
          {status.type === 'loading' ? (
            <div className="flex items-center justify-center space-x-2">
              <Loader className="h-5 w-5 animate-spin" />
              <span>Signing Up...</span>
            </div>
          ) : (
            'Get Early Access'
          )}
        </button>
        
        <p className="text-xs text-gray-400 font-montserrat mt-3 text-center">
          We'll never spam you. Unsubscribe at any time.
        </p>
      </div>
    </form>
  );
};

export default EarlyAccessForm;