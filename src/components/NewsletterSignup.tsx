import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'light' | 'dark';
  showTitle?: boolean;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ 
  variant = 'light', 
  showTitle = true 
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would integrate with your newsletter service
      console.log('Newsletter signup:', email);
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const isDark = variant === 'dark';

  return (
    <div className={`space-y-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
      {showTitle && (
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Get the latest AI news and insights from Seattle
          </p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex">
          <div className="relative flex-1">
            <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`w-full pl-10 pr-4 py-2 border rounded-l-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitted}
            className={`px-4 py-2 rounded-r-md font-medium transition-colors ${
              isSubmitted
                ? 'bg-green-600 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {isSubmitted ? (
              'Subscribed!'
            ) : (
              <ArrowRight className="w-4 h-4" />
            )}
          </button>
        </div>
        
        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          Join our community of AI enthusiasts and professionals
        </p>
      </form>
    </div>
  );
};

export default NewsletterSignup;