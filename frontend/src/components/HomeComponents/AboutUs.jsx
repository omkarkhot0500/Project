import React, { useState, useEffect, useRef } from 'react';
import "../../Css/animation.css";
import Events from './../../pages/Events';

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
      members: 60,
      events: 8,
      projects: 12
    };

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuad = progress => 1 - (1 - progress) * (1 - progress);
      const easedProgress = easeOutQuad(progress);
      
      setMembersCount(Math.floor(easedProgress * targetValues.members));
      setEventsCount(Math.floor(easedProgress * targetValues.events));
      setProjectsCount(Math.floor(easedProgress * targetValues.projects));
      
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
    <div className='w-full flex justify-center'>
      <div
        ref={sectionRef}
        className="w-[90%] md:w-[80%] bg-gradient-to-br from-gray-100 to-gray-200 justify-center rounded-3xl px-8 md:px-20 py-10 aboutUs shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-36 items-center">
          <div className="md:col-span-3">
            <button className='bg-red-500 px-4 py-2 rounded-3xl text-white mb-6 hover:bg-red-600 transition-all shadow-md hover:shadow-lg transform hover:scale-105'>
              CSE(AIML)
            </button>
            <h1 className='text-4xl md:text-6xl font-bold mb-4 text-gradient'>ABOUT</h1>
            <p className='text-gray-500 leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odio hic delectus nemo blanditiis repudiandae. Vel distinctio ducimus blanditiis quos minima provident hic obcaecati sequi voluptate quas, sed nam nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia natus? Nulla, veniam vero inventore fugiat distinctio consequatur quas eveniet maiores, sunt nisi vel? Dolore, rem minima! Id, deleniti veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corporis recusandae nihil beatae ut id dolores. Culpa deserunt ullam quam eius tempore hic quibusdam expedita ad fuga. Ipsum, a quam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis suscipit, neque voluptate expedita odio doloremque ullam dolores et. Quam ad beatae pariatur expedita voluptates sunt delectus debitis itaque, natus voluptas?
            </p>
            <div className="mt-10 flex w-full gap-8 md:gap-16">
              <div className="counter-item">
                <h1 className='counter-value'>{membersCount}<span className="counter-plus">+</span></h1>
                <p className='counter-label'>Members</p>
              </div>
              <div className="counter-item">
                <h1 className='counter-value'>{eventsCount}<span className="counter-plus">+</span></h1>
                <p className='counter-label'>Events</p>
              </div>
              <div className="counter-item">
                <h1 className='counter-value'>{projectsCount}<span className="counter-plus">+</span></h1>
                <p className='counter-label'>Projects</p>
              </div>
            </div>
          </div>

          {/* Animated code visualization replacing the static image */}
          <div className="md:col-span-2 h-full flex items-center justify-center">
            <div className="code-animation-container">
              <div className="code-editor">
                <div className="code-header">
                  <div className="code-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <div className="code-title">coding_club.py</div>
                </div>
                <div className="code-body">
                  <div className="code-line">
                    <span className="code-keyword">import</span> 
                    <span className="code-normal"> machine_learning </span>
                    <span className="code-keyword">as</span>
                    <span className="code-normal"> ml</span>
                  </div>
                  <div className="code-line">
                    <span className="code-keyword">from</span> 
                    <span className="code-normal"> innovation </span>
                    <span className="code-keyword">import</span>
                    <span className="code-normal"> creativity</span>
                  </div>
                  <div className="code-line">
                    <span className="code-comment"># Create amazing projects</span>
                  </div>
                  <div className="code-line">
                    <span className="code-keyword">class</span> 
                    <span className="code-class"> CodingClub</span>
                    <span className="code-normal">:</span>
                  </div>
                  <div className="code-line indented">
                    <span className="code-keyword">def</span> 
                    <span className="code-function"> __init__</span>
                    <span className="code-normal">(self):</span>
                  </div>
                  <div className="code-line double-indented typing-animation">
                    <span className="code-normal">self.members = </span>
                    <span className="code-number">{membersCount}</span>
                  </div>
                  <div className="code-line double-indented typing-animation-2">
                    <span className="code-normal">self.events = </span>
                    <span className="code-number">{eventsCount}</span>
                  </div>
                  <div className="code-line double-indented typing-animation-3">
                    <span className="code-normal">self.projects = </span>
                    <span className="code-number">{projectsCount}</span>
                  </div>
                  <div className="code-line indented typing-animation-4">
                    <span className="code-keyword">def</span> 
                    <span className="code-function"> innovate</span>
                    <span className="code-normal">(self):</span>
                  </div>
                  <div className="code-line double-indented typing-animation-5">
                    <span className="code-keyword">return</span>
                    <span className="code-normal"> creativity.generate()</span>
                  </div>
                </div>
                <div className="blinking-cursor"></div>
              </div>
              <div className="floating-elements">
                <div className="floating-element element-1"></div>
                <div className="floating-element element-2"></div>
                <div className="floating-element element-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;