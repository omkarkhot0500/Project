import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import newlogo from "../assets/newlogorounded.jpeg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHomePage = location.pathname === "/home";

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Initial check for scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

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
            document
              .querySelector("#form")
              .scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        FORM LINK
      </button>
    </div>
  );

  const MobileFormLinkButton = () => (
    <div
      className={`transition-all duration-300 ease-in-out transform w-full ${
        isHomePage
          ? "max-h-20 opacity-100 mb-2"
          : "max-h-0 opacity-0 mb-0 overflow-hidden"
      }`}
    >
      <button
        className="bg-white text-purple-700 w-full py-3 rounded-full hover:bg-purple-100 transition-all duration-300 font-bold shadow-md mt-2"
        onClick={() => {
          if (isHomePage) {
            document
              .querySelector("#form")
              .scrollIntoView({ behavior: "smooth" });
            toggleMenu();
          }
        }}
      >
        FORM LINK
      </button>
    </div>
  );

  return (
    <div className="fixed top-0 left-0 right-0 w-full px-4 pt-4 pb-2 z-50 bg-transparent">
      <div
        className={`flex justify-between w-full max-w-6xl mx-auto rounded-full px-5 py-3 md:px-8 md:py-4 items-center transition-all duration-300 shadow-lg ${
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
            <img
              src={newlogo}
              alt="GAT Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          {!isHomePage && (
            <h2 className="font-bold text-white text-lg md:text-xl cursor-pointer transition-all duration-300 group-hover:text-purple-200">
              HOME
            </h2>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-10 items-center">
          {[
            // { name: "PROJECTS", path: "/projects" },
            { name: "EVENTS", path: "/events" },
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
                className={`absolute -bottom-2 left-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full ${
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
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed left-4 right-4 mt-3 rounded-xl bg-gradient-to-b from-purple-700 to-violet-900 transition-all duration-300 ease-in-out z-40 shadow-2xl ${
          isOpen ? "top-16 opacity-100" : "top-[-100vh] opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-4 px-4">
          {[
            // { name: "PROJECTS", path: "/projects" },
            { name: "EVENTS", path: "/events" },
            { name: "TEAM", path: "/team" },
          ].map((item) => (
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
