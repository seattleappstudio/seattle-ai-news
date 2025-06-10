import React from 'react';
import { Brain, MapPin, Users, Target, Award, Linkedin, Twitter, Mail } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "We believe in the power of connecting people and fostering collaboration within Seattle's AI ecosystem."
    },
    {
      icon: Target,
      title: "Practical Focus",
      description: "Our content and services focus on real-world applications and actionable insights rather than hype."
    },
    {
      icon: Award,
      title: "Quality Over Quantity",
      description: "We prioritize deep, valuable content and meaningful connections over volume and surface-level coverage."
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Seattle AI News
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building bridges in the Pacific Northwest's artificial intelligence community through 
            journalism, content creation, and directory services.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <Brain className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-blue-100">
                To strengthen the Pacific Northwest's AI ecosystem by connecting professionals, 
                sharing knowledge, and helping businesses practically implement artificial intelligence solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Founder */}
        <section className="mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                    <img
                      src="/joe-as-engineer.png"
                      alt="Founder - Tech Journalist & Content Creator"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Founder</h2>
                  <h3 className="text-xl text-blue-600 font-semibold mb-4">Tech Journalist & Content Creator</h3>
                  <p className="text-gray-600 mb-6">
                    With over a decade of experience covering the technology industry, our founder has been 
                    documenting Seattle's transformation into a major AI hub. Previously a staff writer at 
                    leading tech publications, they now focus exclusively on the artificial intelligence 
                    ecosystem in the Pacific Northwest.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Beyond journalism, they provide strategic content creation services to help AI 
                    companies communicate their value and connect with their audiences. Their 
                    work has been featured in major publications and has helped dozens of businesses 
                    tell their stories effectively.
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="mailto:seattleainews@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proudly Seattle-Based
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of the Pacific Northwest's innovation ecosystem
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Seattle, Washington</h3>
                <p className="text-gray-600">Pacific Northwest, USA</p>
              </div>
            </div>
            <p className="text-gray-600 text-center">
              Operating from Seattle allows us to stay connected to the pulse of the region's AI 
              development, from the innovation labs of major tech companies to the emerging startups 
              in South Lake Union and beyond.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Community
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you're an AI professional, business owner, or simply curious about artificial 
              intelligence, we'd love to connect with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://seattleainews.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Subscribe to Newsletter
              </a>
              <a
                href="mailto:seattleainews@gmail.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;