import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHomePage = location.pathname === "/home";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const isActive = (path) => location.pathname === path;

  const FormLinkButton = () => (
    <div
      className={`transition-all duration-500 transform ${
        isHomePage
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-10 absolute pointer-events-none"
      }`}
    >
      <button
        className="bg-white text-purple-700 px-8 py-2 rounded-full hover:bg-purple-100 transition-all duration-300 font-bold text-sm shadow-md hover:shadow-lg transform hover:scale-105"
        onClick={() => {
          if (isHomePage) {
            document.querySelector("#form").scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        FORM LINK
      </button>
    </div>
  );

  const MobileFormLinkButton = () => (
    <div
      className={`transition-all duration-500 ease-in-out transform w-full ${
        isHomePage ? "max-h-20 opacity-100 mb-0" : "max-h-0 opacity-0 mb-0 overflow-hidden"
      }`}
      style={{
        animation: isOpen && isHomePage ? "fadeInUp 0.3s forwards" : "none",
        animationDelay: "250ms",
      }}
    >
      <button
        className="bg-white text-purple-700 w-full py-3 rounded-full hover:bg-purple-100 transition-all duration-300 font-bold shadow-md mt-2"
        onClick={() => {
          if (isHomePage) {
            document.querySelector("#form").scrollIntoView({ behavior: "smooth" });
            toggleMenu();
          }
        }}
      >
        FORM LINK
      </button>
    </div>
  );

  return (
    <div className="flex w-full justify-center mt-6 lg:mt-10 sticky top-4 z-50 px-4">
      <div
        className={`flex justify-between w-full md:w-[90%] lg:w-[85%] rounded-full px-5 py-3 md:px-8 md:py-4 items-center transition-all duration-300 shadow-lg ${
          scrolled
            ? "bg-gradient-to-r from-purple-700 to-violet-800 shadow-purple-500/30"
            : "bg-gradient-to-r from-purple-600 to-violet-700"
        }`}
      >
        <div
          className="flex items-center gap-2 md:gap-4 cursor-pointer group"
          onClick={() => navigate("/home")}
        >
          <div className="flex items-center justify-center bg-white bg-opacity-90 rounded-full h-8 w-8 md:h-10 md:w-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
            <span className="font-bold text-purple-700 text-xs md:text-base">GAT</span>
          </div>
          <h2 className="font-bold text-white text-lg md:text-xl cursor-pointer transition-all duration-300 group-hover:text-purple-200">
            GAT
          </h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-10 items-center">
          {[
            { name: "PROJECTS", path: "/projects" },
            { name: "EVENTS", path: "/events" },
            // { name: "DEPARTMENTS", path: "/departments" },
            // { name: "ALUMNI", path: "/alumni" },
            { name: "TEAM", path: "/team" },
          ].map((item) => (
            <div
              key={item.name}
              className={`cursor-pointer font-bold text-sm transition-all duration-300 relative group ${
                isActive(item.path)
                  ? "text-white"
                  : "text-purple-200 hover:text-white"
              }`}
              onClick={() => navigate(item.path)}
            >
              {item.name}
              <span
                className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full ${
                  isActive(item.path) ? "w-full" : "w-0"
                }`}
              ></span>
            </div>
          ))}
          <FormLinkButton />
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white p-1 focus:outline-none focus:ring-2 focus:ring-white rounded-md"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[70px] left-0 w-full bg-gradient-to-b from-purple-700 to-violet-900 transition-all duration-300 ease-in-out z-40 shadow-xl ${
          isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 px-4">
          {[
            { name: "PROJECTS", path: "/projects" },
            // { name: "DEPARTMENTS", path: "/departments" },
            { name: "EVENTS", path: "/events" },
            // { name: "ALUMNI", path: "/alumni" },
            { name: "TEAM", path: "/team" },
          ].map((item, index) => (
            <div
              key={item.name}
              className={`cursor-pointer font-bold text-sm w-full text-center py-3 transition-all duration-300 ${
                isActive(item.path)
                  ? "text-white bg-purple-600 rounded-lg"
                  : "text-purple-200 hover:text-white"
              }`}
              onClick={() => {
                navigate(item.path);
                toggleMenu();
              }}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isOpen ? "fadeInDown 0.3s forwards" : "none",
              }}
            >
              {item.name}
            </div>
          ))}
          <MobileFormLinkButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
