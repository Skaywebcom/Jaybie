import React, { useEffect, useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Hero = ({ isDark }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const facts = [
    "Passionate about creating stunning UIs ✨",
    "Skilled in React, Tailwind, and modern web tools ⚛️",
    "Problem solver with an eye for detail 🔍",
    "Loves collaborating and building great user experiences 🤝",
    "Always learning and exploring new technologies 🚀",
  ];

  // Typewriter effect
  useEffect(() => {
    const currentFact = facts[currentIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentFact.length) {
        setDisplayedText(currentFact.slice(0, displayedText.length + 1));
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentFact.slice(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText.length === currentFact.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % facts.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentIndex, facts]);

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDark ? "text-white" : "text-slate-800"
      }`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -inset-10 ${
            isDark
              ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700"
              : "bg-gradient-to-br from-slate-50 via-white to-slate-100"
          }`}
        />

        {/* Floating orbs */}
        <div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />

        {/* Grid pattern */}
        <div
          className={`absolute inset-0 opacity-5 ${
            isDark ? "bg-slate-400" : "bg-slate-600"
          }`}
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        {/* Greeting with animated background */}
        <div className="inline-block relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg animate-pulse" />
          <div className="relative text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold px-6 py-2">
            👋 Hello there!
          </div>
        </div>

        {/* Main heading with enhanced styling */}
        <h1 className="text-4xl md:text-7xl font-black leading-tight mb-8">
          I'm{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
              Jaybie
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg rounded-lg" />
          </span>
          , <br className="hidden sm:block" />
          <span className={`${isDark ? "text-slate-200" : "text-slate-700"}`}>
            Web Developer
          </span>
          <br className="hidden sm:block" />
          <span className="text-2xl md:text-4xl font-normal bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            based in Philippines
          </span>
        </h1>

        {/* Enhanced typewriter text */}
        <div className="relative mb-10">
          <div
            className={`absolute inset-0 rounded-2xl blur-sm ${
              isDark
                ? "bg-slate-800/30 border border-slate-700/50"
                : "bg-white/50 border border-slate-200/50"
            }`}
            style={{ backdropFilter: "blur(10px)" }}
          />
          <p
            className={`relative text-lg md:text-xl font-mono p-6 rounded-2xl ${
              isDark ? "text-slate-200" : "text-slate-700"
            }`}
          >
            {displayedText}
            <span className="inline-block w-[3px] h-6 ml-1 bg-gradient-to-b from-blue-500 to-purple-500 animate-blink rounded-full" />
          </p>
        </div>

        {/* Enhanced gradient button */}
        <div className="mb-10">
          <button
            onClick={() => window.open("https://wa.me/639193741599", "_blank")}
            className="group relative px-12 py-4 rounded-full font-bold text-lg text-white hover:scale-105 transform transition-all duration-300 shadow-2xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #2563eb 0%, #7c3aed 25%, #2563eb 50%, #06b6d4 75%, #2563eb 100%)",
              backgroundSize: "200% 200%",
              animation: "gradientShift 4s ease infinite",
            }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            {/* Button content */}
            <span className="relative z-10 flex items-center justify-center gap-2">
              Connect with me
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
          </button>
        </div>

        {/* Enhanced social links */}
        <div className="flex gap-6 justify-center">
          {[
            { icon: Github, label: "GitHub" },
            { icon: Linkedin, label: "LinkedIn" },
            { icon: Twitter, label: "Twitter" },
          ].map((social, index) => {
            const IconComponent = social.icon;
            return (
              <button
                key={index}
                className={`group relative p-4 rounded-2xl hover:scale-110 transition-all duration-300 ${
                  isDark
                    ? "bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white border border-slate-700/50"
                    : "bg-white/50 hover:bg-slate-50/80 text-slate-600 hover:text-slate-900 border border-slate-200/50"
                } backdrop-blur-sm shadow-lg hover:shadow-xl`}
                title={social.label}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300" />
                <IconComponent size={24} className="relative z-10" />
              </button>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%,
          50%,
          100% {
            opacity: 1;
          }
          25%,
          75% {
            opacity: 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }

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

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-blink {
          animation: blink 1s infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;