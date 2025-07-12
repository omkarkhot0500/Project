import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import newlogo from "../assets/newlogorounded.jpeg";

const SplashPage = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    const stageTimers = [
      setTimeout(() => setAnimationStage(1), 300),
      setTimeout(() => setAnimationStage(2), 800),
      setTimeout(() => setAnimationStage(3), 1500),
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      }, 3000),
    ];

    return () => stageTimers.forEach((timer) => clearTimeout(timer));
  }, [navigate]);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen bg-gradient-to-b from-indigo-900 to-purple-900 transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center text-white max-w-lg px-4">
        {/* Logo animation */}
        <div
          className={`mb-8 transition-all duration-700 transform ${
            animationStage >= 1 ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          <div className="w-32 h-32 mx-auto relative">
            <div className="absolute inset-0 rounded-full border-4 border-white opacity-70"></div>
            <div
              className={`absolute inset-0 rounded-full border-t-4 border-purple-400 opacity-90 ${
                animationStage >= 1 ? "animate-spin" : ""
              }`}
              style={{ animationDuration: "3s" }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={newlogo}
                alt="Logo"
                className="w-30 aspect-square object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 overflow-hidden">
          {["W", "e", "l", "c", "o", "m", "e"].map((letter, i) => (
            <span
              key={i}
              className="inline-block transition-all duration-500"
              style={{
                transform:
                  animationStage >= 2 ? "translateY(0)" : "translateY(100%)",
                opacity: animationStage >= 2 ? 1 : 0,
                transitionDelay: `${i * 70 + 200}ms`,
              }}
            >
              {letter}
            </span>
          ))}
        </h1>

        <p
          className="text-lg md:text-xl mb-8 transition-all duration-700"
          style={{
            opacity: animationStage >= 2 ? 1 : 0,
            transform:
              animationStage >= 2 ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "600ms",
          }}
        >
          Loading your experience...
        </p>

        {/* Refined Loading Bar */}
        <div
          className="w-72 h-3 mx-auto relative transition-all duration-500"
          style={{
            opacity: animationStage >= 3 ? 1 : 0,
            transform: animationStage >= 3 ? "scaleX(1)" : "scaleX(0.8)",
            transitionDelay: "800ms",
          }}
        >
          <div className="absolute -inset-1 rounded-full loading-glow-bg"></div>
          <div className="absolute inset-0 bg-white bg-opacity-10 rounded-full border border-white border-opacity-20 loading-track"></div>
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="h-full loading-bar-gradient rounded-full relative">
              <div className="absolute inset-0 loading-shine"></div>
              <div className="absolute right-0 top-0 h-full w-4 loading-pulse rounded-full"></div>
            </div>
          </div>
          <div className="absolute inset-0 overflow-visible">
            <div className="loading-sparkle loading-sparkle-1"></div>
            <div className="loading-sparkle loading-sparkle-2"></div>
            <div className="loading-sparkle loading-sparkle-3"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading-bar-fill {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes loading-shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(350%);
          }
        }

        @keyframes loading-pulse {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        @keyframes loading-glow {
          0%,
          100% {
            box-shadow: 0 0 15px rgba(168, 85, 247, 0.3);
          }
          50% {
            box-shadow: 0 0 25px rgba(168, 85, 247, 0.5);
          }
        }

        @keyframes sparkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .loading-bar-gradient {
          background: linear-gradient(
            90deg,
            #6366f1 0%,
            #8b5cf6 50%,
            #a855f7 100%
          );
          animation: loading-bar-fill 2.5s ease-out infinite;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .loading-shine {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          width: 30%;
          animation: loading-shine 2s ease-in-out infinite;
        }

        .loading-pulse {
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.6) 0%,
            rgba(168, 85, 247, 0.4) 50%,
            transparent 100%
          );
          animation: loading-pulse 1.5s ease-in-out infinite;
        }

        .loading-glow-bg {
          background: rgba(168, 85, 247, 0.1);
          animation: loading-glow 2.5s ease-in-out infinite;
          border-radius: 9999px;
          filter: blur(4px);
        }

        .loading-track {
          background: rgba(255, 255, 255, 0.08);
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .loading-sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, #ffffff 0%, #a855f7 100%);
          border-radius: 50%;
          animation: sparkle 2s ease-in-out infinite;
        }

        .loading-sparkle-1 {
          top: -4px;
          left: 25%;
          animation-delay: 0s;
        }

        .loading-sparkle-2 {
          top: -4px;
          left: 65%;
          animation-delay: 0.7s;
        }

        .loading-sparkle-3 {
          bottom: -4px;
          left: 85%;
          animation-delay: 1.4s;
        }
      `}</style>
    </div>
  );
};

export default SplashPage;
