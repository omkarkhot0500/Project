import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import backgroundImage from "../assets/eventbg.svg";
import EventsAndGallery from "../components/EventPage/Header";
import { current, previous } from "../TeamData/EventData";
import Infi from "../components/EventPage/Infi";
import MidInfi from "../components/EventPage/MidInfi";
import { Code } from "lucide-react";

function Card({ type, name, date, desc, img, id }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detail/${id}`, { 
      state: { 
        type, 
        name, 
        date, 
        desc, 
        img,
        id 
      } 
    });
  };

  return (
    <div
      id="box-flex"
      className={`relative flex w-full sm:w-[350px] md:w-[370px] lg:w-[400px] flex-col gap-[10px] rounded-2xl p-[15px] sm:p-[20px] md:p-[25px] transition-all duration-500 cursor-pointer
      ${
        isHovered
          ? "bg-gradient-to-r from-[#e37401] to-[#ff9933] text-white transform scale-105 rotate-2 z-10"
          : "bg-[#f5f5f5]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div
        id="Box1"
        className={`h-[175px] sm:h-[200px] md:h-[225px] rounded-2xl transition-all duration-500 overflow-hidden relative`}
      >
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        {isHovered && (
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/20 to-transparent flex items-center justify-center">
            <div className="bg-white text-black p-4 rounded-full rotate-12 animate-pulse">
              <Code size={24} />
            </div>
          </div>
        )}
      </div>

      <div className="flex items-start">
        <button
          className={`rounded-3xl px-3 sm:px-4 md:px-5 py-1 font-bold text-[12px] sm:text-[13px] md:text-[14px] transition-all duration-500
          ${
            isHovered
              ? "bg-white text-[#e37401] shadow-lg"
              : "bg-[#e37401] text-white"
          }`}
        >
          {type}
        </button>
      </div>

      <p
        className={`font-bold text-1 transition-all duration-500 text-[14px] sm:text-base ${
          isHovered ? "text-white/80" : ""
        }`}
      >
        {date}
      </p>

      <h2
        className={`font-bold text-[18px] sm:text-[20px] md:text-[24px] transition-all duration-500`}
      >
        {name}
      </h2>

      <p
        className={`transition-all duration-500 text-[14px] sm:text-base ${
          isHovered ? "text-white/90" : "opacity-50"
        }`}
      >
        {desc}
      </p>

      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -right-6 -bottom-6 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-orange-300/20 rounded-full blur-xl"></div>
          <div className="absolute -left-4 -top-4 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-orange-400/20 rounded-full blur-lg"></div>
        </div>
      )}

      {/* Click indicator */}
      {isHovered && (
        <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );
}

function EventHeading({ title, data }) {
  return (
    <div id="heading-cont" className="mt-7">
      <div
        id="curr-event-heading"
        className="flex flex-col items-center justify-center gap-[15px] sm:gap-[20px] p-4"
      >
        <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold lead bg-gradient-to-r from-[#333] to-[#777] bg-clip-text text-transparent text-center px-4">
          {title}
        </h1>
      </div>

      {data.length === 0 ? (
        <h3 className="bg-[#F5F5F5] p-3 sm:p-4 text-center text-[16px] sm:text-[18px] rounded-full shadow-inner mx-4">
          No {title}! Come Back Later
        </h3>
      ) : null}

      <div className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-6 sm:gap-y-8 perspective-1000 px-4 sm:px-6 md:px-8">
        {data.map((one, index) => (
          <div
            key={index}
            className="transform transition-all duration-700 hover:z-10 w-full sm:w-auto max-w-[400px]"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${index % 2 === 0 ? "-3deg" : "3deg"})`,
            }}
          >
            <Card
              type={one.type}
              name={one.name}
              date={one.date}
              desc={one.desc}
              img={one.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const Events = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "50vh",
    height: "auto",
    width: "100%",
  };

  return (
    <>
      <Navbar />
      <div id="main" className="h-fit overflow-x-hidden">
        <div
          style={divStyle}
          className="flex justify-center items-center flex-col py-10 md:py-16 lg:py-0 lg:h-[90vh]"
        >
          <div className="flex justify-center items-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 w-full px-4">
            <EventsAndGallery />
          </div>
        </div>

        {/* project section - with perspective for 3D effect */}
        <section
          id="events"
          className="h-fit w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] m-auto mt-8 sm:mt-10 md:mt-12 perspective-1000"
        >
          <EventHeading title="Current Events" data={current} />
          <EventHeading title="Past Events" data={previous} />
        </section>

        {/* Enhanced gallery section with mobile-first design */}
        <section className="h-fit w-full relative overflow-hidden bg-gradient-to-b from-[#f8f8f8] to-[#f0f0f0] py-10 sm:py-12 md:py-14 lg:py-16 mt-5">
          {/* Dynamic mobile-optimized background with parallax effect */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {/* Mobile-optimized background patterns */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ff9933_1px,transparent_1px)] bg-[length:20px_20px] opacity-10"></div>

            {/* Animated floating orbs - optimized for mobile viewing */}
            <div className="absolute top-1/4 left-1/4 w-40 sm:w-48 md:w-56 lg:w-64 h-40 sm:h-48 md:h-56 lg:h-64 bg-orange-300 rounded-full blur-3xl animate-pulse opacity-20 sm:opacity-30"></div>
            <div
              className="absolute bottom-1/3 right-1/3 w-48 sm:w-56 md:w-64 lg:w-80 h-48 sm:h-56 md:h-64 lg:h-80 bg-orange-400 rounded-full blur-3xl animate-pulse opacity-20 sm:opacity-30"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-2/3 left-1/2 w-44 sm:w-52 md:w-60 lg:w-72 h-44 sm:h-52 md:h-60 lg:h-72 bg-orange-200 rounded-full blur-3xl animate-pulse opacity-20 sm:opacity-30"
              style={{ animationDelay: "2s" }}
            ></div>

            {/* Mobile-specific light beams */}
            <div className="absolute w-full h-2 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 opacity-30 top-1/4 -rotate-6 blur-md sm:opacity-20"></div>
            <div className="absolute w-full h-1 bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300 opacity-20 top-3/4 rotate-3 blur-md"></div>
          </div>

          {/* Enhanced content container with mobile-specific spacing */}
          <div className="w-full m-auto relative z-10 px-4">
            {/* Enhanced 3D Gallery Title with mobile-specific animation */}
            <div className="perspective-1000 mx-auto w-fit mb-8 sm:mb-10 md:mb-12">
              <div className="text-center transform rotate-x-10 transition-transform duration-700 hover:rotate-x-0 hover:scale-110">
                <div className="relative">
                  {/* Mobile spotlight effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 rounded-full blur-2xl opacity-70 animate-pulse"></div>

                  {/* Enhanced title with animated gradient for mobile */}
                  <h2 className="text-[45px] sm:text-[55px] md:text-[70px] lg:text-[85px] font-bold relative inline-block">
                    <span className="bg-gradient-to-r from-[#e37401] via-[#ff9933] to-[#e37401] bg-clip-text text-transparent bg-size-200 animate-bg-position-x">
                      Gallery
                    </span>

                    {/* Mobile-optimized decorations */}
                    <div className="absolute -top-4 sm:-top-5 md:-top-6 -right-4 sm:-right-5 md:-right-6 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-3 sm:border-4 border-orange-400 rounded-full opacity-70 animate-spin-slow"></div>
                    <div
                      className="absolute -bottom-3 sm:-bottom-4 -left-5 sm:-left-6 md:-left-8 w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 bg-orange-500 rounded-md opacity-60 animate-bounce"
                      style={{ animationDuration: "3s" }}
                    ></div>
                  </h2>
                </div>

                {/* Enhanced mobile-friendly underline effect */}
                <div className="h-1 sm:h-1.5 md:h-2 w-3/4 mx-auto bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full mt-1 sm:mt-2 animate-pulse"></div>

                {/* Mobile-only sparkle effects */}
                <div className="sm:hidden flex justify-center mt-2 space-x-1">
                  <div className="w-1 h-1 bg-orange-400 rounded-full animate-ping"></div>
                  <div
                    className="w-1 h-1 bg-orange-500 rounded-full animate-ping"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-1 h-1 bg-orange-600 rounded-full animate-ping"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Enhanced gallery content with mobile-optimized visual effects */}
            <div className="relative">
              {/* Enhanced diagonal decorative lines for mobile */}
              <div className="absolute z-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent transform rotate-3 top-1/2"></div>
              <div className="absolute z-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-200 to-transparent transform -rotate-2 top-1/3 sm:hidden"></div>

              {/* Gallery container with enhanced mobile support */}
              <div className="relative z-10">
                {/* First gallery with mobile enhancements */}
                <div className="sm:transform sm:transition-all sm:duration-500 hover:sm:scale-[1.02] group">
                  <div className="sm:hidden absolute inset-0 bg-gradient-to-r from-orange-50 to-transparent opacity-0 group-active:opacity-20 rounded-xl transition-opacity duration-300"></div>
                  <Infi />
                </div>

                {/* Enhanced mobile-specific connector dots */}
                <div className="flex justify-center my-4 sm:my-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mx-1 animate-ping"></div>
                  <div
                    className="w-2 h-2 bg-orange-400 rounded-full mx-1 animate-ping"
                    style={{ animationDelay: "0.3s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-orange-300 rounded-full mx-1 animate-ping"
                    style={{ animationDelay: "0.6s" }}
                  ></div>
                </div>

                {/* Middle gallery with mobile enhancement */}
                <div className="sm:transform sm:transition-all sm:duration-500 hover:sm:scale-[1.02] group relative">
                  {/* Mobile-specific highlight effect */}
                  <div className="sm:hidden absolute inset-0 bg-gradient-to-l from-orange-50 to-transparent opacity-0 group-active:opacity-20 rounded-xl transition-opacity duration-300"></div>
                  <MidInfi />
                </div>

                {/* Enhanced mobile connector with interactive effect */}
                <div className="flex justify-center my-4 sm:my-4">
                  <div className="w-2 h-2 bg-orange-300 rounded-full mx-1 animate-ping"></div>
                  <div
                    className="w-2 h-2 bg-orange-400 rounded-full mx-1 animate-ping"
                    style={{ animationDelay: "0.3s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-orange-500 rounded-full mx-1 animate-ping"
                    style={{ animationDelay: "0.6s" }}
                  ></div>
                </div>

                {/* Final gallery with mobile enhancements */}
                <div className="sm:transform sm:transition-all sm:duration-500 hover:sm:scale-[1.02] group">
                  <div className="sm:hidden absolute inset-0 bg-gradient-to-r from-orange-50 to-transparent opacity-0 group-active:opacity-20 rounded-xl transition-opacity duration-300"></div>
                  <Infi />
                </div>

                {/* Mobile-only navigation indicators */}
                <div className="flex justify-center mt-6 mb-2 sm:hidden">
                  <div className="flex space-x-1">
                    <div className="w-8 h-1 bg-orange-400 rounded-full"></div>
                    <div className="w-4 h-1 bg-orange-300 rounded-full opacity-70"></div>
                    <div className="w-4 h-1 bg-orange-300 rounded-full opacity-70"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced corner decorations for mobile */}
          <div className="absolute top-0 left-0 w-24 sm:w-28 md:w-32 lg:w-40 h-24 sm:h-28 md:h-32 lg:h-40 bg-gradient-to-br from-orange-200 to-transparent opacity-40 rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-24 sm:w-28 md:w-32 lg:w-40 h-24 sm:h-28 md:h-32 lg:h-40 bg-gradient-to-tl from-orange-200 to-transparent opacity-40 rounded-tl-full"></div>

          {/* Mobile-only footer decoration */}
          <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-orange-100/20 to-transparent sm:hidden"></div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Events;