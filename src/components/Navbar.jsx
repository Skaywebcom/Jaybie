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

      // Update active section based on scroll position
      const sections = ["home", "about", "services", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

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
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About Me", href: "#about" },
    { id: "services", label: "Services", href: "#services" },
    { id: "portfolio", label: "Portfolio", href: "#portfolio" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? isDark
              ? "py-2 bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50 shadow-2xl shadow-black/20"
              : "py-2 bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-2xl shadow-gray-900/10"
            : isDark
            ? "py-4 bg-gray-900/80 backdrop-blur-sm"
            : "py-4 bg-white/80 backdrop-blur-sm"
        }`}
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo with advanced styling */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div
                className={`relative text-2xl font-bold transition-all duration-300 ${
                  scrolled ? "text-xl" : "text-2xl"
                }`}
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-300%">
                  Jay
                </span>
                <span className={isDark ? "text-white" : "text-gray-900"}>
                  bie
                </span>
              </div>
            </div>

            {/* Desktop Navigation with advanced effects */}
            <div className="hidden md:flex items-center">
              <div
                className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-all duration-300 ${
                  isDark
                    ? "bg-gray-800/50 border border-gray-700/50"
                    : "bg-gray-50/80 border border-gray-200/50"
                }`}
                style={{
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setActiveSection(item.id)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                      activeSection === item.id
                        ? isDark
                          ? "text-blue-400"
                          : "text-blue-600"
                        : isDark
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {activeSection === item.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-sm"></div>
                    )}
                    <span className="relative z-10">{item.label}</span>
                    <div
                      className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full ${
                        activeSection === item.id ? "w-full" : ""
                      }`}
                    ></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-3">
              {/* Theme toggle with advanced styling */}
              <button
                onClick={toggleTheme}
                className={`relative p-3 rounded-full transition-all duration-500 group overflow-hidden ${
                  isDark
                    ? "bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700/50"
                    : "bg-gray-100/80 hover:bg-gray-200/80 border border-gray-200/50"
                }`}
                style={{
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                  {isDark ? (
                    <Sun size={18} className="text-yellow-400 drop-shadow-lg" />
                  ) : (
                    <Moon size={18} className="text-slate-700 drop-shadow-lg" />
                  )}
                </div>
              </button>

              {/* Connect button with glassmorphism */}

              <button
                onClick={() =>
                  window.open("https://wa.me/639193741599", "_blank")
                }
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Handshake icon with animation */}
                <Handshake
                  size={18}
                  className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                />

                <span className="relative z-10">Hire Me</span>
              </button>
              {/* Mobile menu toggle */}
              <button
                onClick={toggleMenu}
                className={`md:hidden p-3 rounded-full transition-all duration-300 ${
                  isDark
                    ? "bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700/50"
                    : "bg-gray-100/80 hover:bg-gray-200/80 border border-gray-200/50"
                }`}
                style={{
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <div className="relative">
                  <Menu
                    size={18}
                    className={`transition-all duration-300 ${
                      isMenuOpen
                        ? "rotate-90 opacity-0"
                        : "rotate-0 opacity-100"
                    }`}
                  />
                  <X
                    size={18}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isMenuOpen
                        ? "rotate-0 opacity-100"
                        : "-rotate-90 opacity-0"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Advanced Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`mx-6 mt-4 p-6 rounded-2xl transition-all duration-300 ${
              isDark
                ? "bg-gray-800/90 border border-gray-700/50"
                : "bg-white/90 border border-gray-200/50"
            }`}
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative px-4 py-3 rounded-xl text-left font-medium transition-all duration-300 group ${
                    activeSection === item.id
                      ? isDark
                        ? "text-blue-400 bg-blue-500/10"
                        : "text-blue-600 bg-blue-50"
                      : isDark
                      ? "text-gray-300 hover:text-white hover:bg-gray-700/50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </a>
              ))}

              {/* Mobile connect button */}
              <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-2 group">
                <span>Connect With Me</span>
                <ExternalLink
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Animated background blur overlay when menu is open */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300 z-40 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      />

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 3s ease infinite;
        }

        .bg-300% {
          background-size: 300% 300%;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}</style>
    </>
  );
};

export default Navbar;
