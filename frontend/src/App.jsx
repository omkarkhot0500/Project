import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Departments from "./pages/Departments";
import Alumni from "./pages/Alumni";
import SplashPage from "./pages/SplashPage";
import DetailPage from "./pages/DetailPage"; // Import the new DetailPage component

// Inner App component with access to router context
const AppContent = () => {
  const location = useLocation();

  const hideNavbarFooter =
    location.pathname === "/" || 
    location.pathname === "/projects" || 
    location.pathname === "/events" ||
    location.pathname.startsWith("/detail/"); // Hide navbar/footer on detail pages

  return (
    <div className="w-full min-h-screen">
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/events" element={<Events />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/detail/:id" element={<DetailPage />} /> 
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

// Main App wrapper with Router
const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;