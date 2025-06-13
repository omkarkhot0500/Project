import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Tag,
  Share2,
  Code2,
  Sparkles,
} from "lucide-react";
import { previous, current } from "../TeamData/EventData"; // Import your event data

const DetailPage = () => {
  const location = useLocation();
  const { id } = useParams();
  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    // First, try to get event data from navigation state
    if (location.state) {
      setCurrentEvent(location.state);
    } else {
      // Fallback: find event by ID from the data arrays
      const allEvents = [...current, ...previous];
      const foundEvent = allEvents.find((event, index) => index.toString() === id);
      
      if (foundEvent) {
        setCurrentEvent(foundEvent);
      } else {
        // If no event found, use a default/fallback
        setCurrentEvent({
          type: "Event Not Found",
          name: "Event Details Unavailable",
          date: "Unknown Date",
          desc: "Sorry, we couldn't find the details for this event.",
          img: "https://via.placeholder.com/400x300?text=No+Image+Available",
        });
      }
    }
  }, [location.state, id]);

  const handleBack = () => {
    window.history.back();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentEvent?.name,
        text: currentEvent?.desc,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  // Loading state
  if (!currentEvent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
          <p className="text-lg">Loading event details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/6 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-40 right-40 w-48 h-48 bg-orange-500/6 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      {/* Header with navigation */}
      <div className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-3 text-white/70 hover:text-white transition-all duration-300 group bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform duration-300"
            />
            <span className="font-medium">Back to Events</span>
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-6 py-2.5 rounded-lg hover:from-cyan-600 hover:to-violet-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Share2 size={16} />
            <span className="font-medium">Share</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Image Section */}
          <div className="lg:col-span-2 relative group">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-700 to-slate-800 border border-white/10">
                <img
                  src={currentEvent.img}
                  alt={currentEvent.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback image if the original fails to load
                    e.target.src = "https://via.placeholder.com/400x300?text=Image+Unavailable";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-violet-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-3 space-y-8">
            {/* Type and Date Badges */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                <Code2 size={18} />
                <span className="font-semibold">{currentEvent.type}</span>
              </div>
              <div className="flex items-center gap-3 text-white/80 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <Calendar size={18} />
                <span className="font-medium">{currentEvent.date}</span>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-100 to-violet-100 bg-clip-text text-transparent leading-tight">
                {currentEvent.name}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"></div>
            </div>

            {/* Description */}
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-xl hover:bg-white/8 transition-all duration-300">
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed font-light tracking-wide">
                {currentEvent.desc}
              </p>
            </div>

            {/* Enhanced Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-lg">
                    <Sparkles className="text-cyan-400" size={20} />
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    Learning Focus
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Hands-on experience with cutting-edge technologies and
                  industry best practices for professional development.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gradient-to-r from-violet-500/20 to-emerald-500/20 rounded-lg">
                    <Code2 className="text-violet-400" size={20} />
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-violet-300 transition-colors">
                    Skills Gained
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Practical implementation skills, problem-solving techniques,
                  and real-world application knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;