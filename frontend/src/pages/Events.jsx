import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import backgroundImage from "/src/assets/eventbg.svg";
import EventsAndGallery from "../components/EventPage/Header";
import { current, previous } from "/src/TeamData/EventData.js";
import Infi from "../components/EventPage/Infi";
import MidInfi from "../components/EventPage/MidInfi";
import { Code } from "lucide-react";

// Card component with dramatic dimension change on hover
function Card({ type, name, date, desc }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id="box-flex"
      className={`flex w-[400px] flex-col gap-[10px] rounded-2xl p-[25px] transition-all duration-500 cursor-pointer
      ${
        isHovered
          ? "bg-gradient-to-r from-[#e37401] to-[#ff9933] text-white transform scale-105 rotate-2 z-10"
          : "bg-[#f5f5f5]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        id="Box1"
        className={`h-[225px] rounded-2xl transition-all duration-500 overflow-hidden
        ${
          isHovered
            ? "transform skew-y-2 shadow-lg shadow-orange-400/50"
            : "bg-white"
        }`}
      >
        {isHovered && (
          <div className="w-full h-full bg-gradient-to-br from-black/20 to-transparent flex items-center justify-center">
            <div className="bg-white text-black p-4 rounded-full rotate-12 animate-pulse">
              <Code size={30} />
            </div>
          </div>
        )}
      </div>
      <div className="flex items-start">
        <button
          className={`rounded-3xl px-5 py-1 font-bold text-[14px] transition-all duration-500
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
        className={`font-bold text-1 transition-all duration-500 ${
          isHovered ? "text-white/80" : ""
        }`}
      >
        {date}
      </p>
      <h2
        className={`font-bold text-[24px] transition-all duration-500 ${
          isHovered ? "" : ""
        }`}
      >
        {name}
      </h2>
      <p
        className={`transition-all duration-500 ${
          isHovered ? "text-white/90" : "opacity-50"
        }`}
      >
        {desc}
      </p>
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-orange-300/20 rounded-full blur-xl"></div>
          <div className="absolute -left-4 -top-4 w-16 h-16 bg-orange-400/20 rounded-full blur-lg"></div>
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
        className="flex flex-col items-center justify-center gap-[20px] p-4"
      >
        <div>
          <button className="rounded-3xl bg-[#e37401] px-6 py-2 text-center text-[16px] font-bold text-white hover:bg-[#ff9933] transition-colors shadow-md shadow-orange-200">
            {title === "Current Events" ? "🚀 Random Text" : "📚 Random Text"}
          </button>
        </div>
        <h1 className="text-[64px] font-bold lead bg-gradient-to-r from-[#333] to-[#777] bg-clip-text text-transparent">
          {title}
        </h1>
      </div>

      {data.length === 0 ? (
        <h3 className="bg-[#F5F5F5] p-4 text-center text-[18px] rounded-full shadow-inner">
          No {title}! Come Back Later
        </h3>
      ) : null}

      <div className="flex flex-wrap w-auto justify-center items-center gap-x-10 gap-y-8 perspective-1000">
        {data.map((one, index) => (
          <div
            key={index}
            className="transform transition-all duration-700 hover:z-10"
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
    height: "90vh",
    width: "100vw",
  };

  return (
    <>
      <Navbar />
      <div id="main" className="h-fit overflow-y-hidden">
        <div
          style={divStyle}
          className="flex justify-center items-center flex-col"
        >
          <div className="flex justify-center items-center mb-14 w-full">
            {/* This is where the animated header is now placed */}
            <EventsAndGallery />
          </div>
        </div>

        {/* project section - with perspective for 3D effect */}
        <section
          id="events"
          className="h-fit w-[80%] m-auto mt-12 perspective-1000"
        >
          <EventHeading title="Current Events" data={current} />
          <EventHeading title="Past Events" data={previous} />
        </section>

        {/* gallery section - maintaining original positioning */}
        <section className="h-fit w-full relative overflow-hidden bg-gradient-to-b from-[#f8f8f8] to-[#f0f0f0] py-16 mt-5">
          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-300 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-orange-400 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-2/3 left-1/2 w-72 h-72 bg-orange-200 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="w-full m-auto relative z-10">
            {/* 3D Rotating Gallery Title */}
            <div className="perspective-1000 mx-auto w-fit mb-12">
              <div className="text-center transform rotate-x-10 transition-transform duration-700 hover:rotate-x-0 hover:scale-110">
                <h2 className="text-[85px] font-bold relative inline-block">
                  <span className="bg-gradient-to-r from-[#e37401] via-[#ff9933] to-[#e37401] bg-clip-text text-transparent bg-size-200 animate-bg-position-x">
                    Gallery
                  </span>
                  <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-orange-200 to-orange-100 rounded-full blur-2xl opacity-70 animate-pulse"></div>

                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 border-4 border-orange-400 rounded-full opacity-70 animate-spin-slow"></div>
                  <div
                    className="absolute -bottom-4 -left-8 w-8 h-8 bg-orange-500 rounded-md opacity-60 animate-bounce"
                    style={{ animationDuration: "3s" }}
                  ></div>
                </h2>

                {/* Underline effect */}
                <div className="h-2 w-3/4 mx-auto bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>

            {/* Gallery content with dynamic hover effects */}
            <div className="relative">
              {/* Diagonal decorative line */}
              <div className="absolute z-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent transform rotate-3 top-1/2"></div>

              <div className="relative z-10">
                <Infi />

                {/* Connector elements between galleries */}
                <div className="flex justify-center my-4">
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

                <MidInfi />

                {/* Another set of connector elements */}
                <div className="flex justify-center my-4">
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

                <Infi />
              </div>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-orange-200 to-transparent opacity-40 rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-orange-200 to-transparent opacity-40 rounded-tl-full"></div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Events;
