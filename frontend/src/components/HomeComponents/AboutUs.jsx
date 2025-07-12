import React, { useState, useEffect, useRef } from "react";
import "../../Css/animation.css";

const AboutUs = () => {
  // Counter references and states
  const [membersCount, setMembersCount] = useState(0);
  const [eventsCount, setEventsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const countingStarted = useRef(false);

  // Animation frame control
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When section comes into view and counting hasn't started yet, start counting
        if (entry.isIntersecting && !countingStarted.current) {
          setIsInView(true);
          countingStarted.current = true;
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Counter animation - only runs when isInView is true
  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const duration = 1500; // Animation duration in ms

    const targetValues = {
      members: 15,
      events: 9,
      // projects: 12
    };

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smoother animation
      const easeOutQuad = (progress) => 1 - (1 - progress) * (1 - progress);
      const easedProgress = easeOutQuad(progress);

      setMembersCount(Math.floor(easedProgress * targetValues.members));
      setEventsCount(Math.floor(easedProgress * targetValues.events));
      // setProjectsCount(Math.floor(easedProgress * targetValues.projects));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      }
    };

    animationRef.current = requestAnimationFrame(step);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isInView]);

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 md:px-8">
      <div
        ref={sectionRef}
        className="w-full max-w-7xl bg-gradient-to-br from-gray-100 to-gray-200 justify-center rounded-xl sm:rounded-2xl md:rounded-3xl px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-10 aboutUs shadow-md sm:shadow-lg"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-3 space-y-4 sm:space-y-5 md:space-y-6">
            <button className="bg-red-500 px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl sm:rounded-3xl text-white text-xs sm:text-sm mb-4 sm:mb-6 hover:bg-red-600 transition-all shadow-md hover:shadow-lg transform hover:scale-105">
              CSE(AIML)
            </button>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 text-gradient">
              ABOUT
            </h1>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Our department continues to achieve excellence through active
              student and faculty participation in research, innovation, and
              technical skill development. With expert talks from industry
              leaders, value-added programs, and strong industry collaborations,
              we strive to create a vibrant learning environment. We focus on
              emerging technologies, curriculum enhancement, and ethical
              professional growth—preparing students to contribute meaningfully
              to both industry and academia.
            </p>
            <div className="mt-6 sm:mt-8 lg:mt-10 flex w-full gap-4 sm:gap-6 md:gap-8 lg:gap-16">
              <div className="counter-item">
                <h1 className="counter-value text-2xl sm:text-3xl md:text-4xl font-bold">
                  {membersCount}
                  <span className="counter-plus">+</span>
                </h1>
                <p className="counter-label text-xs sm:text-sm md:text-base">
                  Members
                </p>
              </div>
              <div className="counter-item">
                <h1 className="counter-value text-2xl sm:text-3xl md:text-4xl font-bold">
                  {eventsCount}
                  <span className="counter-plus">+</span>
                </h1>
                <p className="counter-label text-xs sm:text-sm md:text-base">
                  Events
                </p>
              </div>
              {/* <div className="counter-item">
                <h1 className="counter-value text-2xl sm:text-3xl md:text-4xl font-bold">
                  {projectsCount}
                  <span className="counter-plus">+</span>
                </h1>
                <p className="counter-label text-xs sm:text-sm md:text-base">
                  Projects
                </p>
              </div> */}
            </div>
          </div>

          {/* Animated code visualization replacing the static image */}
          <div className="lg:col-span-2 h-full flex items-center justify-center mt-6 lg:mt-0">
            <div className="code-animation-container w-full max-w-sm">
              <div className="code-editor rounded-lg sm:rounded-xl shadow-lg">
                <div className="code-header flex items-center p-2 sm:p-3 bg-gray-800 rounded-t-lg sm:rounded-t-xl">
                  <div className="code-dots flex space-x-1.5 sm:space-x-2">
                    <span className="dot dot-red w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></span>
                    <span className="dot dot-yellow w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></span>
                    <span className="dot dot-green w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></span>
                  </div>
                  <div className="code-title text-xs sm:text-sm text-white mx-auto">
                    ANVESHAN.py
                  </div>
                </div>
                <div className="code-body p-3 sm:p-4 bg-gray-900 rounded-b-lg sm:rounded-b-xl text-xs sm:text-sm overflow-x-auto">
                  <div className="code-line">
                    <span className="code-keyword text-purple-400">import</span>
                    <span className="code-normal text-gray-200">
                      {" "}
                      machine_learning{" "}
                    </span>
                    <span className="code-keyword text-purple-400">as</span>
                    <span className="code-normal text-gray-200"> ml</span>
                  </div>
                  <div className="code-line">
                    <span className="code-keyword text-purple-400">from</span>
                    <span className="code-normal text-gray-200">
                      {" "}
                      innovation{" "}
                    </span>
                    <span className="code-keyword text-purple-400">import</span>
                    <span className="code-normal text-gray-200">
                      {" "}
                      creativity
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="code-comment text-gray-400">
                      # Create amazing projects
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="code-keyword text-purple-400">class</span>
                    <span className="code-class text-yellow-300">
                      {" "}
                      CodingClub
                    </span>
                    <span className="code-normal text-gray-200">:</span>
                  </div>
                  <div className="code-line pl-4">
                    <span className="code-keyword text-purple-400">def</span>
                    <span className="code-function text-blue-300">
                      {" "}
                      __init__
                    </span>
                    <span className="code-normal text-gray-200">(self):</span>
                  </div>
                  <div className="code-line pl-8 typing-animation">
                    <span className="code-normal text-gray-200">
                      self.members ={" "}
                    </span>
                    <span className="code-number text-green-300">
                      {membersCount}
                    </span>
                  </div>
                  <div className="code-line pl-8 typing-animation-2">
                    <span className="code-normal text-gray-200">
                      self.events ={" "}
                    </span>
                    <span className="code-number text-green-300">
                      {eventsCount}
                    </span>
                  </div>
                  {/* <div className="code-line pl-8 typing-animation-3">
                    <span className="code-normal text-gray-200">
                      self.projects ={" "}
                    </span>
                    <span className="code-number text-green-300">
                      {projectsCount}
                    </span>
                  </div> */}
                  <div className="code-line pl-4 typing-animation-4">
                    <span className="code-keyword text-purple-400">def</span>
                    <span className="code-function text-blue-300">
                      {" "}
                      innovate
                    </span>
                    <span className="code-normal text-gray-200">(self):</span>
                  </div>
                  <div className="code-line pl-8 typing-animation-5">
                    <span className="code-keyword text-purple-400">return</span>
                    <span className="code-normal text-gray-200">
                      {" "}
                      creativity.generate()
                    </span>
                  </div>
                  <div className="blinking-cursor h-4 w-2 bg-white opacity-70"></div>
                </div>
              </div>
              <div className="floating-elements hidden sm:block">
                <div className="floating-element element-1 absolute w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500 opacity-30"></div>
                <div className="floating-element element-2 absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-purple-500 opacity-20"></div>
                <div className="floating-element element-3 absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500 opacity-25"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
