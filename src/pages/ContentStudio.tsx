import React from 'react';
import { FileText, PenTool, BookOpen, Megaphone, CheckCircle, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContentStudio: React.FC = () => {
  const services = [
    {
      icon: FileText,
      title: "Blog & Newsletter Writing",
      description: "Engaging, SEO-optimized content that positions your company as a thought leader in AI and technology.",
      features: ["Weekly/monthly blog posts", "Newsletter content", "SEO optimization", "Industry insights"]
    },
    {
      icon: BookOpen,
      title: "Whitepapers & Case Studies",
      description: "In-depth technical content that showcases your expertise and drives qualified leads.",
      features: ["Technical whitepapers", "Customer case studies", "Research reports", "Industry analysis"]
    },
    {
      icon: PenTool,
      title: "Technical Documentation",
      description: "Clear, structured, and developer-friendly content that empowers users and showcases your platform's capabilities.",
      features: ["API reference documentation", "Developer tutorials & walkthroughs", "How-to guides & quickstarts", "Technical editing"]
    },
    {
      icon: Megaphone,
      title: "Tech Event Coverage",
      description: "Comprehensive coverage of AI conferences, meetups, and industry events to amplify your presence.",
      features: ["Event live-tweeting", "Post-event summaries", "Speaker interviews", "Trend analysis"]
    }
  ];

  const portfolio = [
    {
      title: "Developer Portal",
      type: "Developer Docs",
      description: "Led technical writing of developer-focused documentation for a leading IT observability company.",
      results: "Overhauled and integrated docs into a new developer portal."
    },
    {
      title: "Tech Magazine Coverage",
      type: "Journalism",
      description: "Covered a portfolio of major companies' news and events for a segment of the enterprise software market.",
      results: "Boosted media awareness, created brand familiarity in marketplace."
    },
    {
      title: "Tech Blog Content",
      type: "Blogs",
      description: "Wrote initial slate of blog posts for an innovative product of a major software company.",
      results: "Seeded a v1.0 product with content and set tone and style for ongoing publication."
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Seattle Content Studio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional content creation services that help AI companies and professionals 
            tell their stories, share their expertise, and connect with their audiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors inline-flex items-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#portfolio"
              className="border-2 border-cyan-600 text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
            >
              View Portfolio
            </a>
          </div>
        </div>

        {/* Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Content Services
            </h2>
            <p className="text-xl text-gray-600">
              From blog posts to whitepapers, we create content that drives results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-cyan-100 rounded-lg mr-4">
                      <Icon className="w-6 h-6 text-cyan-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Work
            </h2>
            <p className="text-xl text-gray-600">
              Results-driven content that makes an impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
                <div className="mb-4">
                  <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <div className="bg-white rounded-lg p-3 border border-cyan-200">
                  <p className="text-sm font-semibold text-cyan-800">Results:</p>
                  <p className="text-sm text-cyan-700">{item.results}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              From strategy to publication, we handle every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Discovery", description: "Understanding your goals, audience, and brand voice" },
              { step: "2", title: "Strategy", description: "Creating a content plan aligned with your objectives" },
              { step: "3", title: "Creation", description: "Writing, editing, and optimizing your content" },
              { step: "4", title: "Delivery", description: "Final review, approval, and publication support" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600">
                Let's discuss your content needs and create something amazing together.
              </p>
            </div>
            <ContactForm service="content" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContentStudio;