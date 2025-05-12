import React, { useState, useEffect } from "react";

const eventCategories = [
  "Hackathons",
  "Speaker Interactions",
  "Watch Parties",
  "Workshops",
];

function EventsAndGallery() {
  // Animation states
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  
  // Start animations after component mounts
  useEffect(() => {
    // Initial fade in
    setIsVisible(true);
    
    // Create word cycling effect
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % eventCategories.length);
    }, 3000); // Change word every 3 seconds
    
    return () => clearInterval(wordInterval);
  }, []);

  return (
    <main className="flex flex-col items-center mt-14 font-bold leading-none text-black relative">
      {/* Banner Background with Subtle Gradient Animation */}
      <div 
        className="absolute top-0 left-0 w-full h-full -z-10 rounded-3xl overflow-hidden"
        style={{
          background: "linear-gradient(120deg, rgba(227, 116, 1, 0.05), rgba(0, 0, 0, 0.02), rgba(227, 116, 1, 0.05))",
          backgroundSize: "200% 200%",
          animation: "gradientMove 15s ease-in-out infinite"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[80%] h-[80%] rounded-full bg-white/5 blur-3xl animate-pulse-slow"></div>
        </div>
      </div>
      
      {/* First Line Animated Categories */}
      <div className="flex flex-wrap gap-4 justify-center items-center text-xl text-center text-black text-opacity-60 max-md:max-w-full relative h-14 overflow-hidden">
        {eventCategories.map((category, index) => (
          <div 
            key={index}
            className={`transition-all duration-1000 transform absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap
                        ${index === wordIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                       `}
          >
            {category}
          </div>
        ))}
      </div>
      
      {/* Animated Line */}
      <div 
        className={`w-0 h-0.5 bg-gradient-to-r from-transparent via-[#e37401] to-transparent 
                    transition-all duration-1000 ease-out mb-3 mt-2
                    ${isVisible ? "w-64" : "w-0"}`}
      ></div>
      
      {/* Main Title with Letter Animation */}
      <h1 className="text-8xl max-md:text-4xl overflow-hidden flex flex-wrap justify-center">
        {"Events and Gallery".split("").map((letter, index) => (
          <span 
            key={index}
            className="inline-block transition-all duration-1000"
            style={{
              transform: isVisible ? "translateY(0)" : "translateY(100%)",
              opacity: isVisible ? 1 : 0,
              transitionDelay: `${100 + index * 50}ms`,
              color: letter === " " ? "transparent" : "inherit"
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h1>
      
      {/* Animated underline */}
      <div 
        className={`w-0 h-0.5 bg-gradient-to-r from-transparent via-black to-transparent 
                    transition-all duration-1500 ease-out mt-4
                    ${isVisible ? "w-96" : "w-0"}`}
        style={{ transitionDelay: "700ms" }}
      ></div>
      
      {/* Subscribe button with subtle animation */}
      <div 
        className={`transition-all duration-1000 transform mt-6
                   ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{ transitionDelay: "800ms" }}
      >
        <SubscribeButton />
      </div>
      
      {/* CSS Animations */}
      <style>{`
  @keyframes gradientMove {
    0% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
    100% { background-position: 0% 50% }
  }

  @keyframes pulse-slow {
    0% { opacity: 0.3; transform: scale(0.95); }
    50% { opacity: 0.5; transform: scale(1); }
    100% { opacity: 0.3; transform: scale(0.95); }
  }

  .animate-pulse-slow {
    animation: pulse-slow 8s infinite ease-in-out;
  }
`}</style>

    </main>
  );
}

function SubscribeButton() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div></div>
  );
}

export default EventsAndGallery;