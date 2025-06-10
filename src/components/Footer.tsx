import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Twitter, Linkedin, Github, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">Seattle AI News</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Connecting the Pacific Northwest's AI ecosystem through news, directory, and content creation services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="https://seattleainews.substack.com/" className="block text-gray-400 hover:text-white transition-colors">
                AI News
              </Link>
              <Link to="/directory" className="block text-gray-400 hover:text-white transition-colors">
                AI Directory
              </Link>
              <Link to="/content-studio" className="block text-gray-400 hover:text-white transition-colors">
                Content Studio
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <nav className="space-y-2">
              <span className="block text-gray-400 text-sm">Content Creation</span>
              <span className="block text-gray-400 text-sm">Community Building</span>
              <span className="block text-gray-400 text-sm">Directory Listings</span>
              <span className="block text-gray-400 text-sm">Event Coverage</span>
            </nav>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <a
              href="https://seattleainews.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors mb-6"
            >
              Subscribe to Newsletter
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:seattleainews@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Seattle AI News. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;