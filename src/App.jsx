import React, { useEffect, useRef, useState } from 'react'
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

  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  // Reference for mouse movement
  const mouse = useRef({x:0, y:0})
  const position = useRef({x:0, y:0})

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    } 

    document.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
  // Dot follows instantly
  dotRef.current.style.transform = `translate3d(${mouse.current.x -6}px, ${mouse.current.y-6}px, 0)`;

  // Outline follows smoothly (trailing effect)
  position.current.x += (mouse.current.x - position.current.x) * 0.5;
  position.current.y += (mouse.current.y - position.current.y) * 0.5;
  outlineRef.current.style.transform = `translate3d(${position.current.x -20}px, ${position.current.y-20}px, 0)`;

  requestAnimationFrame(animate);
};
    animate();
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  },[])

  return (
    <div
      className={`min-h-screen transition-colors duration-300 relative z-0 ${
        isDark ? "dark text-white" : "text-slate-800"
      } cursor-none`}
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

      {/* custom cursor ring */}
      <div ref={outlineRef} className="fixed top-0 left-0 h-10 w-10 rounded-full border border-blue-500 pointer-events-none z-[9999]" style={{transition: 'transform 0.1s ease-out'}}></div>
      {/* custom cursor dot */}
      <div ref={dotRef} className="fixed top-0 left-0 h-3 w-3 rounded-full bg-blue-500 pointer-events-none z-[9999] "></div>
    </div>
  );
};

export default App;