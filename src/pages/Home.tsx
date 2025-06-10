import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Users, FileText, ArrowRight, ExternalLink } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

const Home: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        // Using RSS2JSON service to convert Substack RSS to JSON
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://seattleainews.substack.com/feed'
        );
        const data = await response.json();
        
        if (data.status === 'ok') {
          setBlogPosts(data.items.slice(0, 6)); // Get latest 6 posts
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/seattle-ai-news.png"
            alt="Seattle AI News - Professional with tablet and geometric background"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/80 to-cyan-700/85"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg">
                AI Content Products & Media
              </h1>
              <p className="text-2xl md:text-3xl text-blue-100 font-medium drop-shadow-md">
                Your AI Content Partner in Seattle & Beyond
              </p>
              <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                Connecting the Pacific Northwest's artificial intelligence ecosystem through 
                community building, content creation, and directory services.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link
                to="/directory"
                className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Explore AI Directory
                <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
              <Link
                to="/content-studio"
                className="border-3 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Content Services
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Helping You to Navigate Seattle's AI Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From discovering local AI companies to creating compelling content and building community connections.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Link
              to="/directory"
              className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-6">
                <Users className="w-16 h-16" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Seattle AI Directory</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Discover and connect with AI startups, consultants, researchers, and investors 
                throughout the Pacific Northwest region.
              </p>
              <div className="text-blue-600 font-bold text-lg group-hover:text-blue-700 flex items-center">
                Explore Directory
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link
              to="/content-studio"
              className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="text-cyan-600 mb-6">
                <FileText className="w-16 h-16" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Seattle Content Studio</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Professional content creation services including blog writing, whitepapers, 
                case studies, and technical documentation.
              </p>
              <div className="text-cyan-600 font-bold text-lg group-hover:text-cyan-700 flex items-center">
                Learn More
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest from the Blog
            </h2>
            <p className="text-xl text-gray-600">
              Stay informed with the latest AI news and insights from Seattle
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-8 animate-pulse">
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 w-2/3"></div>
                  <div className="h-3 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {stripHtml(post.description).substring(0, 150)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {formatDate(post.pubDate)}
                    </span>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                    >
                      Read More
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <Brain className="w-16 h-16 mx-auto mb-6 opacity-50" />
              <p className="text-lg">Blog posts will appear here once available.</p>
            </div>
          )}

          <div className="text-center mt-16">
            <a
              href="https://seattleainews.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Visit Our Substack
              <ExternalLink className="ml-3 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
      {/*
      <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl">
            <Brain className="w-20 h-20 text-blue-600 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join the Seattle AI Community
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Get weekly insights, company spotlights, and exclusive content delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterSignup showTitle={false} />
            </div>
          </div>
        </div>
      </section>
      */}
      
    </div>
  );
};

export default Home;