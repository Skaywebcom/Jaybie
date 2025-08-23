import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 relative z-0 ${
        isDark ? "dark text-white" : "text-slate-800"
      }`}
      style={{
        backgroundImage: isDark
          ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
          : "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)",
      }}
    >
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <Hero isDark={isDark} />
      <About isDark={isDark} />
      <Services isDark={isDark} />
      <Portfolio isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
};

export default App;