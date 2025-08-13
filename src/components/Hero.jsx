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
        isDark ? "bg-gray-900 text-white" : "bg-[#F4F2D3] text-gray-900"
      }`}
    >
      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <div className="text-lg text-[#82952F] font-medium">👋 Hello,</div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          I'm <span className="text-[#82952F]">Jaybie</span>, Web developer
          based in Philippines.
        </h1>

        {/* Typewriter text */}
        <p
          className={`text-lg font-mono mt-4 ${
            isDark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          {displayedText}
          <span className="inline-block w-[2px] h-5 ml-1 bg-current animate-blink" />
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={() => window.open("https://wa.me/639193741599", "_blank")}
            className="group bg-[#82952F] text-white px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300"
          >
            Connect with me →
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center mt-6">
          {[
            { icon: Github, label: "GitHub" },
            { icon: Linkedin, label: "LinkedIn" },
            { icon: Twitter, label: "Twitter" },
          ].map((social, index) => {
            const IconComponent = social.icon;
            return (
              <button
                key={index}
                className={`p-3 rounded-full hover:scale-110 transition-transform ${
                  isDark
                    ? "bg-gray-800 text-gray-300"
                    : "bg-gray-100 text-gray-600"
                }`}
                title={social.label}
              >
                <IconComponent size={20} />
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
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
