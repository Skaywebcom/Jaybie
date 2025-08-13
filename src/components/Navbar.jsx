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
              ? "py-2 bg-transparent border-b border-gray-700/50 shadow-lg"
              : "py-2 bg-transparent border-b border-gray-200/50 shadow-lg"
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
            <div className="absolute -inset-1 bg-[#82952F] rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div
              className={`relative font-bold transition-all duration-300 ${
                scrolled ? "text-xl" : "text-2xl"
              }`}
            >
              <span className="bg-[#82952F] bg-clip-text text-transparent">
                JB
              </span>{" "}
              <span className={isDark ? "text-white" : "text-gray-900"}>
                Web Solution
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div
            className={`hidden md:flex items-center space-x-1 px-4 py-2 rounded-full ${
              isDark
                ? "bg-gray-800/50 border border-gray-700/50"
                : "bg-gray-50/80 border border-gray-200/50"
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
                      ? "text-[#82952F]"
                      : "text-[#82952F]"
                    : isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-sm"></div>
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
                  ? "bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700/50"
                  : "bg-gray-100/80 hover:bg-gray-200/80 border border-gray-200/50"
              }`}
              style={{ backdropFilter: "blur(10px)" }}
            >
              {isDark ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} />
              )}
            </button>

            {/* Hire Me */}
            <button
              onClick={() =>
                window.open("https://wa.me/639193741599", "_blank")
              }
              className="hidden md:flex items-center gap-2 bg-[#82952F] text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all"
            >
              <Handshake size={18} />
              Hire Me
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className={`md:hidden p-3 rounded-full ${
                isDark
                  ? "bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700/50"
                  : "bg-gray-100/80 hover:bg-gray-200/80 border border-gray-200/50"
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
                ? "bg-gray-800/90 border-t border-gray-700/50"
                : "bg-white/90 border-t border-gray-200/50"
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
                      ? "text-[#82952F] bg-blue-500/10"
                      : "text-[#82952F] bg-blue-50"
                    : isDark
                    ? "text-gray-300 hover:text-white hover:bg-gray-700/50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  {item.label}
                  <ChevronDown size={16} />
                </div>
              </button>
            ))}
            <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2">
              <span>Connect With Me</span>
              <ExternalLink size={16} />
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
