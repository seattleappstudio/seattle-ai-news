import React, { useState } from 'react';
import { Search, Building2, Users, Wrench, TrendingUp, GraduationCap, UserCheck, ExternalLink } from 'lucide-react';

interface DirectoryListing {
  id: number;
  name: string;
  description: string;
  category: 'startup' | 'consultant' | 'tool' | 'investor' | 'research' | 'group';
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
      name: "Avanade AI",
      description: "Focuses on enterprise AI and cloud consulting services with a focus on Microsoft AI tools and integration strategies.",
      category: "consultant",
      website: "https://www.avanade.com/",
      location: "Seattle, WA"
    },
    {
      id: 2,
      name: "Fresh Consulting",
      description: "Pursues computing advances to create intelligent machines that complement human reasoning to augment and enrich our experience and competencies..",
      category: "consultant",
      website: "https://www.freshconsulting.com/",
      location: "Bellevue, WA"
    },
    {
      id: 3,
      name: "Scalability",
      description: "Offers consulting for digital marketing, content strategy, and analytics.",
      category: "consultant",
      website: "https://www.scalability.agency/",
      location: "Seattle, WA"
    },
    {
      id: 4,
      name: "Slalom AI",
      description: "Designs and implements cloud-first AI and automation strategies for enterprise clients across industries.",
      category: "consultant",
      website: "https://www.slalom.com/us/en/services/artificial-intelligence",
      location: "Seattle, WA"
    },
    {
      id: 5,
      name: "West Monroe AI Consulting",
      description: "Helps businesses integrate AI into their operations with a focus on practical outcomes and enterprise readiness.",
      category: "consultant",
      website: "https://www.westmonroe.com/offices/seattle",
      location: "Chicago, IL (office in Seattle, WA)"
    },
    {
      id: 6,
      name: "Amperity",
      description: "Provides AI-powered customer data platforms to unify and analyze enterprise customer data for personalized marketing and insights.",
      category: "startup",
      website: "https://amperity.com/",
      location: "Kirkland, WA"
    },
    {
      id: 7,
      name: "BirchAI (Sagility Health)",
      description: "Specializes in automating medical documentation and patient communications.",
      category: "startup",
      website: "https://www.birchai.com/",
      location: "Seattle, WA"
    },
    {
      id: 8,
      name: "Defined.ai",
      description: "Offers a marketplace for high-quality training data and AI model building, with roots in Portugal and strong operations in Seattle.",
      category: "startup",
      website: "https://www.birchai.com/",
      location: "Seattle, WA"
    },
    {
      id: 9,
      name: "Enzzo",
      description: "Operates in the AI-driven hardware development space, providing tools to streamline product design and manufacturing.",
      category: "tool",
      website: "https://enzzo.ai/",
      location: "Seattle, WA"
    },
    {
      id: 10,
      name: "Evisort",
      description: "Provides AI-powered contract management and document automation tools for enterprise legal teams. Significant Seattle expansion post-funding.",
      category: "tool",
      website: "https://www.evisort.com/",
      location: "Seattle, WA"
    },
    {
      id: 11,
      name: "Falkon AI",
      description: "Offers an AI-powered sales and marketing analytics platform built by ex-Amazon and Tableau employees. Backed by Madrona Venture Group.",
      category: "startup",
      website: "https://www.falkon.ai/",
      location: "Seattle, WA"
    },
    {
      id: 12,
      name: "Gradial",
      description: "Uses generative AI to help businesses maintain up-to-date digital content.",
      category: "tool",
      website: "https://www.gradial.com/",
      location: "Seattle, WA"
    },
    {
      id: 13,
      name: "Healionics",
      description: "Develops artificial blood vessels for dialysis patients.",
      category: "startup",
      website: "https://healionics.com/",
      location: "Seattle, WA"
    },
    {
      id: 14,
      name: "Humanly",
      description: "Provides a conversational AI tool for recruiting and candidate screening.",
      category: "tool",
      website: "https://www.humanly.io/",
      location: "Seattle, WA"
    },
    {
      id: 15,
      name: "Kaskada (DataStax)",
      description: "Serves the data science and machine learning industries, helping users create and operate predictive models with event-based data.",
      category: "startup",
      website: "https://www.kaskada.com/",
      location: "Seattle, WA"
    },
    {
      id: 16,
      name: "Lexion",
      description: "Provides AI-powered contract lifecycle management tools.",
      category: "tool",
      website: "https://www.lexion.ai/",
      location: "Seattle, WA"
    },
    {
      id: 17,
      name: "Mason",
      description: "Combines IoT and AI to deliver smart device management and provisioning for enterprises. Funded by Coatue and Kleiner Perkins.",
      category: "startup",
      website: "https://www.bymason.com/",
      location: "Seattle, WA"
    },
    {
      id: 18,
      name: "Oleria",
      description: "Offers adaptive AI-driven cybersecurity platforms. Founded by former AWS security leaders, backed by Salesforce Ventures.",
      category: "startup",
      website: "https://www.oleria.com/",
      location: "Bellevue, WA"
    },
    {
      id: 19,
      name: "PreemptiveAI",
      description: "Offers real-time diagnostic solutions powered by AI.",
      category: "startup",
      website: "https://www.preemptiveai.com/",
      location: "Seattle, WA"
    },
    {
      id: 20,
      name: "Protect AI (Palo Alto Networks)",
      description: "Helps companies monitor and protect AI systems from cyberattacks.",
      category: "startup",
      website: "https://protectai.com/",
      location: "Seattle, WA"
    },
    {
      id: 21,
      name: "Pulumi",
      description: "Integrates AI to assist developers with automated code generation and ops insights.",
      category: "startup",
      website: "https://www.pulumi.com/",
      location: "Seattle, WA"
    },
    {
      id: 22,
      name: "Read AI",
      description: "Specializes in enhancing virtual meetings through its AI-powered tools.",
      category: "tool",
      website: "https://www.read.ai/",
      location: "Seattle, WA"
    },
    {
      id: 23,
      name: "Runway AI",
      description: "Offers generative video tools using AI, with a satellite office in Seattle supporting core product development.",
      category: "tool",
      website: "https://runwayml.com/",
      location: "Seattle, WA"
    },
    {
      id: 24,
      name: "Sanctuary AI",
      description: "specializing in general-purpose humanoid robots powered by advanced AI. Maintains a Seattle tech office for U.S. expansion.",
      category: "startup",
      website: "https://www.sanctuary.ai/",
      location: "Vancouver, BC"
    },
    {
      id: 25,
      name: "SeekOut",
      description: "Provides AI talent intelligence platform founded by ex-Microsoft engineers.",
      category: "tool",
      website: "https://www.seekout.com/",
      location: "Seattle, WA"
    },
    {
      id: 26,
      name: "WellSaid Labs",
      description: "Offers an AI-powered voice generation platform.",
      category: "tool",
      website: "https://www.wellsaidlabs.com/",
      location: "Seattle, WA"
    },
    {
      id: 27,
      name: "Flying Fish Partners",
      description: "Focuses specifically on AI and ML startups in the Pacific Northwest.",
      category: "investor",
      website: "https://www.flyingfish.vc/about-us",
      location: "Seattle, WA"
    },
    {
      id: 28,
      name: "Madrona Venture Group",
      description: "Invests primarily in AI and automation.",
      category: "investor",
      website: "https://www.madrona.com/",
      location: "Seattle, WA"
    },
    {
      id: 29,
      name: "M12 (Microsoft’s VC arm)",
      description: "Invests with a tight relationiship with the Copilot ecosystem.",
      category: "investor",
      website: "https://m12.vc/",
      location: "Seattle, WA"
    },
        {
      id: 30,
      name: "Seven Peaks Ventures",
      description: "Invests in AI, no-code, and automation..",
      category: "investor",
      website: "https://sevenpeaksventures.com/",
      location: "Bend, OR"
    },
    {
      id: 31,
      name: "Unlock Venture Partners",
      description: "Offers an early-stage fund with Seattle office; active in AI startup seed rounds.",
      category: "investor",
      website: "https://www.unlockvp.com/",
      location: "Seattle, WA"
    },
    {
      id: 32,
      name: "Voyager Capital",
      description: "Invests in cloud infrastructure and automation startups in the PNW.",
      category: "investor",
      website: "https://www.voyagercapital.com/",
      location: "Seattle, WA"
    },
    {
      id: 33,
      name: "FUSE VC",
      description: "Invests in B2B SaaS, data infrastructure, and AI platforms..",
      category: "investor",
      website: "https://fuse.vc/",
      location: "Seattle, WA"
    },
    {
      id: 34,
      name: "Pioneer Square Labs",
      description: "Offers a startup studio and fund with AI and no-code incubations.",
      category: "investor",
      website: "https://www.pioneersquarelabs.com/",
      location: "Seattle, WA"
    },
    {
      id: 35,
      name: "AI House",
      description: "Offers an AI incubator hub launched as a public-private joint venture.",
      category: "research",
      website: "https://www.ai2incubator.com/ai-house",
      location: "Seattle, WA"
    },    {
      id: 36,
      name: "Allen Institute for AI (AI2)",
      description: "Focused on large-scale open models, data, robotics, and conservation.",
      category: "research",
      website: "https://allenai.org/",
      location: "Seattle, WA"
    },    
    {
      id: 37,
      name: "University of Washington NLP Group",
      description: "Offers a world-renowned team of AI researchers.",
      category: "research",
      website: "https://nlp.washington.edu/",
      location: "Seattle, WA"
    },    
    {
      id: 38,
      name: "Microsoft Research AI",
      description: "Focused on NLP, Copilot, and generative AI.",
      category: "research",
      website: "https://www.microsoft.com/en-us/research/research-area/artificial-intelligence/",
      location: "Seattle, WA"
    },
        {
      id: 39,
      name: "Seattle AI Society",
      description: "Brings together AI builders, founders, and enthusiasts.",
      category: "group",
      website: "https://www.seattleaisociety.org/",
      location: "Seattle, WA"
    },
  ];

  const categories = [
    { id: 'all', name: 'All Categories', icon: Search },
    { id: 'startup', name: 'Startups', icon: Building2 },
    { id: 'consultant', name: 'Consultants', icon: Users },
    { id: 'tool', name: 'Tools & Platforms', icon: Wrench },
    { id: 'investor', name: 'Investors', icon: TrendingUp },
    { id: 'research', name: 'Research', icon: GraduationCap },
    { id: 'group', name: 'Groups', icon: UserCheck },
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
      group: 'bg-orange-100 text-orange-800',
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
            Discover and connect with AI companies, consultants, tools, investors, research organizations, and community groups throughout the Silicon Forest.
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