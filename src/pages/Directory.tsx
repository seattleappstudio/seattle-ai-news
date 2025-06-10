import React, { useState } from 'react';
import { Search, Building2, Users, Wrench, TrendingUp, GraduationCap, ExternalLink } from 'lucide-react';

interface DirectoryListing {
  id: number;
  name: string;
  description: string;
  category: 'startup' | 'consultant' | 'tool' | 'investor' | 'research';
  website: string;
  location: string;
}

const Directory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Sample directory data - in production, this would come from a CMS or API
  const listings: DirectoryListing[] = [
    {
      id: 1,
      name: "Temporal Technologies",
      description: "Microservice orchestration platform that simplifies building and operating resilient applications.",
      category: "startup",
      website: "https://temporal.io",
      location: "Seattle, WA"
    },
    {
      id: 2,
      name: "AI Consulting Northwest",
      description: "Strategic AI implementation and transformation consulting for enterprise clients.",
      category: "consultant",
      website: "https://example.com",
      location: "Bellevue, WA"
    },
    {
      id: 3,
      name: "DataRobot",
      description: "Enterprise AI platform that democratizes data science and accelerates digital transformation.",
      category: "tool",
      website: "https://datarobot.com",
      location: "Seattle, WA"
    },
    {
      id: 4,
      name: "Madrona Venture Group",
      description: "Venture capital firm investing in early-stage technology companies, including AI startups.",
      category: "investor",
      website: "https://madrona.com",
      location: "Seattle, WA"
    },
    {
      id: 5,
      name: "University of Washington AI Lab",
      description: "Leading research in machine learning, natural language processing, and computer vision.",
      category: "research",
      website: "https://www.cs.washington.edu/research/ai",
      location: "Seattle, WA"
    },
    {
      id: 6,
      name: "Lexmas",
      description: "AI-powered legal document analysis and contract management platform.",
      category: "startup",
      website: "https://lexmas.com",
      location: "Kirkland, WA"
    },
    {
      id: 7,
      name: "Semantic Machines",
      description: "Conversational AI platform acquired by Microsoft, focusing on natural language understanding.",
      category: "startup",
      website: "https://www.microsoft.com",
      location: "Seattle, WA"
    },
    {
      id: 8,
      name: "AI Strategy Partners",
      description: "Management consulting focused on AI strategy, implementation, and organizational transformation.",
      category: "consultant",
      website: "https://example.com",
      location: "Seattle, WA"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', icon: Search },
    { id: 'startup', name: 'Startups', icon: Building2 },
    { id: 'consultant', name: 'Consultants', icon: Users },
    { id: 'tool', name: 'Tools & Platforms', icon: Wrench },
    { id: 'investor', name: 'Investors', icon: TrendingUp },
    { id: 'research', name: 'Research', icon: GraduationCap },
  ];

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || listing.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : Building2;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      startup: 'bg-blue-100 text-blue-800',
      consultant: 'bg-green-100 text-green-800',
      tool: 'bg-purple-100 text-purple-800',
      investor: 'bg-yellow-100 text-yellow-800',
      research: 'bg-red-100 text-red-800',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Seattle AI Directory
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover and connect with AI companies, consultants, tools, investors, and research organizations 
            throughout the Pacific Northwest region.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search companies, tools, or services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing {filteredListings.length} of {listings.length} listings
          </p>
        </div>

        {/* Directory Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => {
            const Icon = getCategoryIcon(listing.category);
            return (
              <div key={listing.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{listing.name}</h3>
                      <p className="text-sm text-gray-500">{listing.location}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(listing.category)}`}>
                    {categories.find(cat => cat.id === listing.category)?.name}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {listing.description}
                </p>
                
                <a
                  href={listing.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Visit Website
                  <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        {filteredListings.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want to be listed in our directory?
          </h2>
          <p className="text-gray-600 mb-6">
            We're always looking to expand our directory with more AI companies and professionals from the Pacific Northwest.
          </p>
          <a
            href="mailto:hello@seattleainews.com?subject=Directory Listing Request"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Request Listing
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Directory;