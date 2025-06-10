import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Send, Linkedin, Twitter } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      details: "seattleainews@gmail.com",
      description: "Send us a message anytime",
      link: "mailto:seattleainews@gmail.com"
    },
    {
      icon: Twitter,
      title: "X",
      details: "@seattleainews",
      description: "Follow us for daily updates",
      link: "https://x.com/seattleainews"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "206-276-4473",
      description: "Call us during business hours",
      link: "tel:206-276-4473"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      details: "Seattle AI News",
      description: "Connect with us professionally",
      link: "https://linkedin.com/company/seattle-ai-news"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you need content creation, want to join our directory, or have questions 
            about the Seattle AI ecosystem, we'd love to hear from you.
          </p>
        </div>

        {/* Contact Methods */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-blue-600 font-medium mb-1">{method.details}</p>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Send className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you within 24-48 hours.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How quickly do you respond to inquiries?",
                answer: "We typically respond to all inquiries within 24-48 hours during business days. Urgent requests are prioritized and may receive faster responses."
              },
              {
                question: "Do you offer free consultations?",
                answer: "Yes! We offer free 30-minute consultations for content creation services to discuss your needs and see if we're a good fit."
              },
              {
                question: "Can you help businesses outside of Seattle?",
                answer: "While we focus on the Pacific Northwest region, we do work with businesses throughout Washington, Oregon, and occasionally beyond for the right projects."
              },
              {
                question: "What's the typical timeline for content projects?",
                answer: "Content projects typically take 1-3 weeks depending on complexity and scope. We'll provide detailed timelines during our initial consultation."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;