import React, { useEffect, useState } from "react";
import heroImage from "../../assets/Hero-Shapes.png";
import "../../Css/animation.css";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a slight delay before starting animations for better effect
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  // SVG paths for tech-themed elements
  const techElements = [
    // Microchip
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M8 18H16V6H8V18Z" fill="currentColor" fillOpacity="0.2" />
      <path
        d="M6 16V8M18 16V8M8 6H16V18H8V6Z M4 12H2M22 12H20M12 20V22M12 2V4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M10 10H14V14H10V10Z" fill="currentColor" />
    </svg>,

    // Code brackets
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path
        d="M9 17L4 12L9 7M15 7L20 12L15 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,

    // Database
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path
        d="M12 8C16.4183 8 20 6.65685 20 5C20 3.34315 16.4183 2 12 2C7.58172 2 4 3.34315 4 5C4 6.65685 7.58172 8 12 8Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        d="M4 5V19C4 20.6569 7.58172 22 12 22C16.4183 22 20 20.6569 20 19V5M4 12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>,

    // Network nodes
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <circle cx="5" cy="12" r="2" fill="currentColor" />
      <circle cx="19" cy="12" r="2" fill="currentColor" />
      <circle cx="12" cy="5" r="2" fill="currentColor" />
      <circle cx="12" cy="19" r="2" fill="currentColor" />
      <path
        d="M5 12L12 5M5 12L12 19M19 12L12 5M19 12L12 19"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>,

    // Binary code
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <text x="2" y="8" fontSize="4" fill="currentColor">
        01
      </text>
      <text x="12" y="8" fontSize="4" fill="currentColor">
        10
      </text>
      <text x="6" y="14" fontSize="4" fill="currentColor">
        01
      </text>
      <text x="16" y="14" fontSize="4" fill="currentColor">
        10
      </text>
      <text x="2" y="20" fontSize="4" fill="currentColor">
        10
      </text>
      <text x="12" y="20" fontSize="4" fill="currentColor">
        01
      </text>
    </svg>,

    // Server/cloud
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path
        d="M6 8H18C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        d="M6 14H18C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10H6C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        d="M6 20H18C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16H6C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        d="M6 8H18C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6 14H18C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10H6C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6 20H18C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16H6C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>,

    // CPU
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        rx="1"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 2V6M15 2V6M9 18V22M15 18V22M2 9H6M2 15H6M18 9H22M18 15H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="9" y="9" width="6" height="6" fill="currentColor" />
    </svg>,

    // AI brain
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path
        d="M12 4C14.7614 4 17 6.23858 17 9C17 10.1394 16.5897 11.1857 15.9 12C16.5897 12.8143 17 13.8606 17 15C17 17.7614 14.7614 20 12 20C9.23858 20 7 17.7614 7 15C7 13.8606 7.41031 12.8143 8.1 12C7.41031 11.1857 7 10.1394 7 9C7 6.23858 9.23858 4 12 4Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        d="M17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 10.1394 7.41031 11.1857 8.1 12M17 9C17 10.1394 16.5897 11.1857 15.9 12M17 9H19M8.1 12C7.41031 12.8143 7 13.8606 7 15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15C17 13.8606 16.5897 12.8143 15.9 12M8.1 12H15.9M7 9H5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="10" cy="8" r="1" fill="currentColor" />
      <circle cx="14" cy="8" r="1" fill="currentColor" />
      <path
        d="M10 16C10 16 10.5 17 12 17C13.5 17 14 16 14 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>,
  ];

  return (
    <div className="relative flex justify-center items-center flex-col h-[80vh] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="particle-container">
          {[...Array(20)].map((_, index) => {
            // More varied sizes for visual interest
            const size = Math.random() * 60 + 20;

            // Enhanced color variations - wider range of purples and blues
            const hue = Math.floor(Math.random() * 60) + 220; // Blue to purple range
            const saturation = Math.floor(Math.random() * 40) + 60;
            const lightness = Math.floor(Math.random() * 30) + 40;

            // Create random path for floating animation
            const randomPathClass = `float-path-${
              Math.floor(Math.random() * 5) + 1
            }`;

            return (
              <div
                key={index}
                className={`particle rounded-lg backdrop-blur-sm ${randomPathClass}`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `linear-gradient(135deg, hsla(${hue}, ${saturation}%, ${lightness}%, 0.7), hsla(${
                    hue + 40
                  }, ${saturation + 10}%, ${lightness - 15}%, 0.9))`,
                  boxShadow: `0 0 20px 5px hsla(${hue}, 80%, 70%, 0.5)`,
                  animationDuration: `${Math.random() * 20 + 20}s`,
                  animationDelay: `${Math.random() * 10}s`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  backdropFilter: "blur(3px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center text-white opacity-80 rotate-animation"
                  style={{
                    transform: `rotate(${Math.random() * 360}deg)`,
                    animation: `spin ${
                      Math.random() * 15 + 15
                    }s linear infinite`,
                  }}
                >
                  {techElements[index % techElements.length]}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hero image with pulse effect */}
      <img
        src={heroImage}
        alt="hero"
        className="absolute -z-20 heroimg animate-pulse-slow"
      />

      {/* Content container with entrance animation */}
      {/* Content container with entrance animation */}
<div
  className={`w-[80%] justify-center items-center flex flex-col transition-all duration-1000 ${
    isVisible
      ? "opacity-100 transform translate-y-0"
      : "opacity-0 transform translate-y-10"
  }`}
>
  <h2
    className={`text-gray-600 font-light mb-4 mt-8 transition-all duration-1000 delay-300 ${
      isVisible
        ? "opacity-100 transform translate-y-0"
        : "opacity-0 transform translate-y-10"
    }`}
  >
    Welcome to <span className="text-blue-600 font-semibold">CSE (AI & ML)</span>
  </h2>

  {/* Animated headline with word-by-word reveal to prevent mobile splitting */}
  <h1 className="text-3xl lg:text-8xl text-center font-bold text-blue-900 overflow-hidden">
    {"A vibrant space where we code, create, and innovate with AI & ML.".split(" ").map((word, wordIndex) => (
      <span key={wordIndex} className="inline-block mr-2">
        {word.split("").map((letter, letterIndex) => (
          <span
            key={letterIndex}
            className="inline-block transition-all duration-700"
            style={{
              transform: isVisible ? "translateY(0)" : "translateY(100%)",
              opacity: isVisible ? 1 : 0,
              transitionDelay: `${(wordIndex * word.length + letterIndex) * 50}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </span>
    ))}
  </h1>
</div>

      {/* Add interactive floating glow effects */}
      <div className="absolute top-0 left-0 w-full h-full -z-15 pointer-events-none">
        {[...Array(12)].map((_, index) => {
          const size = Math.random() * 80 + 40;
          const hue = Math.floor(Math.random() * 60) + 220; // Blue to purple range
          const randomPathClass = `float-path-${
            Math.floor(Math.random() * 5) + 1
          }`;

          return (
            <div
              key={`glow-element-${index}`}
              className={`absolute text-white opacity-20 ${randomPathClass}`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 90 + 5}%`,
                top: `${Math.random() * 90 + 5}%`,
                color: `hsla(${hue}, 80%, 60%, 0.7)`,
                filter: "blur(2px)",
                animationDuration: `${Math.random() * 15 + 25}s`,
                animationDelay: `${Math.random() * 10}s`,
                transform: `scale(${Math.random() * 0.5 + 0.8})`,
                animation: `pulse-size ${
                  Math.random() * 4 + 4
                }s ease-in-out infinite alternate`,
              }}
            >
              {techElements[(index + 4) % techElements.length]}
            </div>
          );
        })}
      </div>

      {/* Add subtle interaction effects to make the scene more dynamic */}
      <div
        className="absolute inset-0 z-0"
        onMouseMove={(e) => {
          // Optional: add mouse interaction effects
          const particles = document.querySelectorAll(".particle");
          const mouseX = e.clientX / window.innerWidth;
          const mouseY = e.clientY / window.innerHeight;

          particles.forEach((particle, index) => {
            const speed = index % 5 === 0 ? 15 : 5;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            particle.style.transform = `translate(${x}px, ${y}px) rotate(${
              Math.random() * 360
            }deg)`;
          });
        }}
      />
    </div>
  );
};

export default HeroSection;
