import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashPage = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    // Sequence the animations
    const stageTimers = [
      setTimeout(() => setAnimationStage(1), 300),  // Start logo animation
      setTimeout(() => setAnimationStage(2), 800),  // Show text
      setTimeout(() => setAnimationStage(3), 1500), // Show loading bar
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => navigate('/home'), 1000);
      }, 3000) // Navigate after showing everything
    ];

    return () => stageTimers.forEach(timer => clearTimeout(timer));
  }, [navigate]);

  return (
    <div className={`flex flex-col items-center justify-center h-screen bg-gradient-to-b from-indigo-900 to-purple-900 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center text-white max-w-lg px-4">
        {/* Logo animation */}
        <div className={`mb-8 transition-all duration-700 transform ${animationStage >= 1 ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <div className="w-32 h-32 mx-auto relative">
            {/* Animated tech icon - circle with rotating elements */}
            <div className="absolute inset-0 rounded-full border-4 border-white opacity-70"></div>
            <div className={`absolute inset-0 rounded-full border-t-4 border-purple-400 opacity-90 ${animationStage >= 1 ? 'animate-spin' : ''}`} style={{animationDuration: '3s'}}></div>
            
            {/* Center logo text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
                GAT
              </span>
            </div>
            
            {/* Orbiting elements */}
            {[0, 1, 2].map((i) => (
              <div 
                key={i}
                className={`absolute w-4 h-4 bg-purple-400 rounded-full transform transition-all duration-1000 ${animationStage >= 1 ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  top: '50%',
                  left: '50%',
                  margin: '-8px 0 0 -8px',
                  animation: `orbit ${3 + i * 1.5}s linear infinite ${i * 0.5}s`,
                  boxShadow: '0 0 15px rgba(168, 85, 247, 0.8)'
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Title with staggered letter animation */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 overflow-hidden">
          {["W", "e", "l", "c", "o", "m", "e"].map((letter, i) => (
            <span 
              key={i}
              className="inline-block transition-all duration-500"
              style={{
                transform: animationStage >= 2 ? 'translateY(0)' : 'translateY(100%)',
                opacity: animationStage >= 2 ? 1 : 0,
                transitionDelay: `${i * 70 + 200}ms`
              }}
            >
              {letter}
            </span>
          ))}
        </h1>
        
        {/* Subtitle with fade-in */}
        <p 
          className="text-lg md:text-xl mb-8 transition-all duration-700"
          style={{
            opacity: animationStage >= 2 ? 1 : 0,
            transform: animationStage >= 2 ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '600ms'
          }}
        >
          Loading your experience...
        </p>
        
        {/* Loading bar */}
        <div 
          className="w-64 h-2 mx-auto bg-white bg-opacity-20 rounded-full overflow-hidden transition-all duration-500"
          style={{
            opacity: animationStage >= 3 ? 1 : 0,
            transform: animationStage >= 3 ? 'scaleX(1)' : 'scaleX(0.8)',
            transitionDelay: '800ms'
          }}
        >
          <div className="h-full bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full loading-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;