import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Heart,
  ArrowUp,
  Code,
  Coffee,
  Zap,
} from "lucide-react";

const Footer = ({ isDark = false }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "#",
      label: "GitHub",
      color: "hover:text-purple-400",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "hover:text-cyan-400",
    },
    { icon: Mail, href: "#", label: "Email", color: "hover:text-pink-400" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "#resume" },
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Tailwind",
    "Bootstrap",
    "Node.js",
    "MongoDB",
    "Python",
    "AWS",
    "Vercel",
    "Github",
  ];

  return (
    <footer className="relative">
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              {/* Brand section */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#82952F]  shadow-lg">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3
                    className={`text-2xl font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    JB Web Solution
                  </h3>
                </div>
                <p
                  className={`text-lg leading-relaxed max-w-md ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Crafting digital experiences with modern technologies.
                  Passionate about clean code, innovative solutions, and
                  continuous learning.
                </p>

                {/* Live status */}
                <div
                  className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border ${
                    isDark
                      ? "bg-green-900/20 border-green-700/50 text-green-400"
                      : "bg-green-50 border-green-200 text-green-700"
                  }`}
                >
                  <div className="relative">
                    <div className="w-2 h-2 bg-[#82952F] rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-2 h-2 bg-[#82952F] rounded-full animate-ping"></div>
                  </div>
                  <span className="text-sm font-medium text-[#82952F]">
                    Available for freelance
                  </span>
                </div>
              </div>

              {/* Quick links */}
              <div>
                <h4
                  className={`text-lg font-semibold mb-6 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className={`transition-all duration-200 hover:translate-x-2 inline-block ${
                          isDark
                            ? "text-gray-300 hover:text-purple-400"
                            : "text-gray-600 hover:text-purple-600"
                        }`}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h4
                  className={`text-lg font-semibold mb-6 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 hover:scale-105 ${
                        isDark
                          ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Local time */}
                <div className="mt-6">
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Philippines Time
                  </p>
                  <p
                    className={`text-lg font-mono ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {currentTime.toLocaleTimeString("en-SG", {
                      hour12: false,
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex justify-center mb-12">
              <div
                className={`flex gap-4 p-4 rounded-2xl backdrop-blur-sm ${
                  isDark
                    ? "bg-gray-800/50 border border-gray-700"
                    : "bg-white/70 border border-gray-200"
                }`}
              >
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                      isDark
                        ? "bg-gray-700/50 text-gray-400 hover:bg-gray-600"
                        : "bg-gray-100/70 text-gray-600 hover:bg-white"
                    } ${social.color} hover:shadow-lg`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`border-t ${
            isDark ? "border-gray-800" : "border-gray-200"
          } py-8 px-6`}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div
              className={`flex items-center gap-2 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <span>
                © {new Date().getFullYear()} JB Web Solution. All rights
                reserved.
              </span>
              <span className="hidden md:inline">•</span>
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>and</span>
                <Coffee className="w-4 h-4 text-amber-500" />
              </div>
            </div>

            <div
              className={`flex items-center gap-3 text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>Fast & Optimized</span>
              </div>
              <span className="hidden md:inline">•</span>
              <span>Built with React</span>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg transition-all duration-300 z-50 ${
            showScrollTop
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          } ${
            isDark
              ? "bg-gray-800 text-white hover:bg-gray-700"
              : "bg-white text-gray-900 hover:bg-gray-100"
          } hover:scale-110 hover:shadow-xl border ${
            isDark ? "border-gray-700" : "border-gray-200"
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
