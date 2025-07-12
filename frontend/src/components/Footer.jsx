import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center w-full mb-10">
      <footer className="bg-white text-black pt-10 pb-6 border-2 border-gray-300 rounded-3xl w-[90%] md:w-[80%] mt-10 p-6 md:p-10">
        <div className="flex flex-col md:flex-row w-full justify-between items-center mb-10 md:mb-20">
          <div className="flex gap-4 mb-6 md:mb-0">
            <img
              src={logo}
              onClick={() => navigate("/home")}
              alt="CSE(AIML) Logo"
              className="h-6 cursor-pointer"
            />
            <h2 className="font-bold text-gray-800">GAT Club</h2>
          </div>
          <button
            className="bg-black text-white px-6 md:px-8 py-2 rounded-3xl hover:text-black hover:bg-white transition-all hover:border-2 hover:border-black"
            onClick={() => {
              document
                .querySelector("#form")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            JOIN US
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 w-full mb-8">
          {/* Quick Links */}
          <div>
            <h1 className="text-gray-600 font-bold mb-4">QUICK LINKS</h1>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
                <a href="#about">About Us</a>
              </div>
              <div className="text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
                <a href="#events">Events</a>
              </div>
              <div className="text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
                <a href="#workshops">Workshops</a>
              </div>
              <div className="text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
                <a href="#gallery">Gallery</a>
              </div>
            </div>
          </div>

          {/* Projects */}
          {/* <div>
            <h1 className="text-gray-600 font-bold mb-4">PROJECTS</h1>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
                <a href="#projects/web-dev">Web Development</a>
              </div>
              <div className="text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
                <a href="#projects/mobile-apps">Mobile Apps</a>
              </div>
              <div className="text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
                <a href="#projects/ai-ml">AI/ML Projects</a>
              </div>
              <div className="text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
                <a href="#projects/open-source">Open Source</a>
              </div>
            </div>
          </div> */}

          {/* Resources */}
          <div>
            <h1 className="text-gray-600 font-bold mb-4">RESOURCES</h1>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
                <a href="#tutorials">Tutorials</a>
              </div>
              <div className="text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
                <a href="#coding-challenges">Challenges</a>
              </div>
              <div className="text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
                <a href="#blog">Tech Blog</a>
              </div>
              <div className="text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
                <a href="#documentation">Docs</a>
              </div>
            </div>
          </div>

          {/* Team */}
          <div>
            <h1 className="text-gray-600 font-bold mb-4">TEAM</h1>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
                <a href="#team/core">Core Team</a>
              </div>
              <div className="text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
                <a href="#team/mentors">Mentors</a>
              </div>
              <div className="text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
                <a href="#team/alumni">Alumni</a>
              </div>
              <div className="text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h1 className="text-gray-600 font-bold mb-4">CONNECT</h1>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
                <a href="#" target="_blank" rel="noopener noreferrer">Discord</a>
              </div>
              <div className="text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
                <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <div className="text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
                <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
              <div className="text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
                <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs lg:text-sm font-medium text-center md:text-left mb-4 md:mb-0">
              Developed by CSE(AIML) Club. <span>© 2025 CSE(AIML). All rights reserved.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;