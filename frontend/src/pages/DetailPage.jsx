// DetailPage.jsx - Beautiful detail page component
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, ExternalLink, Share2 } from 'lucide-react';

const DetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Get data from navigation state or fallback
  const data = location.state || {};
  const { type, name, date, desc, img } = data;

  const handleBack = () => {
    navigate(-1);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: name,
        text: desc,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (!data.name) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Content not found</h2>
          <button 
            onClick={() => navigate('/projects')}
            className="bg-[#e37401] text-white px-6 py-2 rounded-lg hover:bg-[#cc6600] transition-colors"
          >
            Go Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Header with navigation */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-[#e37401] transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back</span>
          </button>
          
          <button
            onClick={handleShare}
            className="flex items-center gap-2 bg-[#e37401] text-white px-4 py-2 rounded-lg hover:bg-[#cc6600] transition-colors"
          >
            <Share2 size={16} />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image Section */}
          <div className="relative group">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
              <img
                src={img}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-200/30 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl" />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            {/* Type Badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-gradient-to-r from-[#e37401] to-[#ff9933] text-white px-4 py-2 rounded-full">
                <Tag size={16} />
                <span className="font-semibold text-sm">{type}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                <Calendar size={16} />
                <span className="text-sm font-medium">{date}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              {name}
            </h1>

            {/* Description */}
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="text-lg">{desc}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button className="bg-gradient-to-r from-[#e37401] to-[#ff9933] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <ExternalLink size={18} />
                View Project
              </button>
              <button className="border-2 border-[#e37401] text-[#e37401] px-8 py-3 rounded-xl font-semibold hover:bg-[#e37401] hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Performance</h3>
            <p className="text-gray-600">Optimized for speed and efficiency with modern technologies.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Reliable</h3>
            <p className="text-gray-600">Built with robust architecture and tested thoroughly.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">User Friendly</h3>
            <p className="text-gray-600">Designed with user experience as the top priority.</p>
          </div>
        </div>

        {/* Timeline or additional info */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Timeline</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-3 h-3 bg-[#e37401] rounded-full"></div>
              <div>
                <p className="font-semibold text-gray-800">Planning Phase</p>
                <p className="text-sm text-gray-600">Initial concept and requirements gathering</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-3 h-3 bg-[#e37401] rounded-full"></div>
              <div>
                <p className="font-semibold text-gray-800">Development</p>
                <p className="text-sm text-gray-600">Core functionality implementation</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-semibold text-gray-800">Testing & Launch</p>
                <p className="text-sm text-gray-600">Quality assurance and deployment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;