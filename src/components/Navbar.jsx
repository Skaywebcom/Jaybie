import React, { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Menu,
  X,
  ExternalLink,
  ChevronDown,
  Handshake,
} from "lucide-react";

const Navbar = ({ isDark, toggleTheme, isMenuOpen, toggleMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "services", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    if (isMenuOpen) toggleMenu();
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? isDark
              ? "py-2 bg-transparent border-b border-slate-700/50 shadow-lg"
              : "py-2 bg-transparent border-b border-slate-200/50 shadow-lg"
            : isDark
            ? "py-4 bg-transparent"
            : "py-4 bg-transparent"
        }`}
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-lg opacity-0"></div>

            <div className="relative flex items-center">
              <span
                className="transition-all duration-300 font-extrabold tracking-wide"
                style={{
                  fontSize: "2rem",
                  background:
                    "linear-gradient(135deg, #2563eb 0%, #7c3aed 25%, #2563eb 50%, #1d4ed8 75%, #2563eb 100%)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "gradientShift 4s ease infinite",
                }}
              >
                JB Web Solution
              </span>

              <style jsx>{`
                @keyframes gradientShift {
                  0% {
                    background-position: 0% 50%;
                  }
                  50% {
                    background-position: 100% 50%;
                  }
                  100% {
                    background-position: 0% 50%;
                  }
                }
              `}</style>
            </div>
          </div>

          {/* Desktop Nav */}
          <div
            className={`hidden md:flex items-center space-x-1 px-4 py-2 rounded-full ${
              isDark
                ? "bg-slate-800/50 border border-slate-700/50"
                : "bg-white/80 border border-slate-200/50"
            }`}
            style={{ backdropFilter: "blur(10px)" }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all group ${
                  activeSection === item.id
                    ? isDark
                      ? "text-blue-400"
                      : "text-blue-600"
                    : isDark
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-sm"></div>
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`relative p-3 rounded-full ${
                isDark
                  ? "bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/50"
                  : "bg-white/80 hover:bg-slate-50/80 border border-slate-200/50"
              }`}
              style={{ backdropFilter: "blur(10px)" }}
            >
              {isDark ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-slate-600" />
              )}
            </button>

            {/* Hire Me */}
            <button
              onClick={() =>
                window.open("https://wa.me/6285117626717", "_blank")
              }
              className="hidden md:flex items-center gap-2 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all relative overflow-hidden group"
              style={{
                background:
                  "linear-gradient(135deg, #2563eb 0%, #7c3aed 25%, #2563eb 50%, #1d4ed8 75%, #2563eb 100%)",
                backgroundSize: "200% 200%",
                animation: "gradientShift 4s ease infinite",
              }}
            >
              <style jsx>{`
                @keyframes gradientShift {
                  0% {
                    background-position: 0% 50%;
                  }
                  50% {
                    background-position: 100% 50%;
                  }
                  100% {
                    background-position: 0% 50%;
                  }
                }
              `}</style>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Handshake size={18} className="relative z-10" />
              <span className="relative z-10">Connect with me</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className={`md:hidden p-3 rounded-full ${
                isDark
                  ? "bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/50"
                  : "bg-white/80 hover:bg-slate-50/80 border border-slate-200/50"
              }`}
              style={{ backdropFilter: "blur(10px)" }}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden p-6 space-y-2 ${
              isDark
                ? "bg-slate-900/90 border-t border-slate-700/50"
                : "bg-white/90 border-t border-slate-200/50"
            }`}
            style={{ backdropFilter: "blur(20px)" }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl font-medium ${
                  activeSection === item.id
                    ? isDark
                      ? "text-blue-400 bg-blue-500/10"
                      : "text-blue-600 bg-blue-50"
                    : isDark
                    ? "text-slate-300 hover:text-white hover:bg-slate-800/50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  {item.label}
                  <ChevronDown size={16} />
                </div>
              </button>
            ))}
            <button
              className="mt-4 w-full text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 relative overflow-hidden group"
              style={{
                background:
                  "linear-gradient(135deg, #2563eb 0%, #7c3aed 25%, #2563eb 50%, #1d4ed8 75%, #2563eb 100%)",
                backgroundSize: "200% 200%",
                animation: "gradientShift 4s ease infinite",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">Connect With Me</span>
              <ExternalLink size={16} className="relative z-10" />
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
