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
        isDark ? "dark text-white" : "text-gray-900"
      }`}
      style={{
        backgroundImage: isDark
          ? "linear-gradient(135deg, #1a1a1a, #333333)" // optional dark mode gradient
          : "linear-gradient(135deg, #B8DACA 0%, #BEEDFD 50%, #FEE1DD 100%)",
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
