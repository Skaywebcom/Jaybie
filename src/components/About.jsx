import React, { useState, useEffect, useRef } from "react";

const skills = [
  { name: "HTML5", level: 95, logo: "🌐", category: "Frontend" },
  { name: "CSS3", level: 92, logo: "🎨", category: "Frontend" },
  { name: "JavaScript", level: 90, logo: "⚡", category: "Frontend" },
  { name: "TypeScript", level: 85, logo: "📘", category: "Frontend" },
  { name: "React", level: 93, logo: "⚛️", category: "Frontend" },
  { name: "Redux", level: 82, logo: "🔄", category: "Frontend" },
  { name: "Tailwind", level: 88, logo: "💨", category: "Frontend" },
  { name: "Bootstrap", level: 85, logo: "📦", category: "Frontend" },
  { name: "Node.js", level: 80, logo: "🟢", category: "Backend" },
  { name: "MongoDB", level: 78, logo: "🍃", category: "Database" },
  { name: "Python", level: 75, logo: "🐍", category: "Backend" },
  { name: "AWS", level: 70, logo: "☁️", category: "Cloud" },
  { name: "Vercel", level: 88, logo: "▲", category: "Deployment" },
  { name: "Github", level: 90, logo: "📊", category: "Tools" },
];

const stats = [
  { value: 5, label: "years of experience", suffix: "+", icon: "🚀" },
  { value: 50, label: "projects completed", suffix: "+", icon: "💼" },
  { value: 40, label: "happy clients", suffix: "+", icon: "😊" },
];

const About = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0]);
  const [activeSkillIndex, setActiveSkillIndex] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const sectionRef = useRef(null);

  const categories = [...new Set(skills.map((skill) => skill.category))];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          stats.forEach((stat, index) => animateCounter(index, stat.value));
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const animateCounter = (index, targetValue) => {
    let current = 0;
    const increment = targetValue / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        current = targetValue;
        clearInterval(timer);
      }
      setAnimatedStats((prev) => {
        const newStats = [...prev];
        newStats[index] = Math.floor(current);
        return newStats;
      });
    }, 30);
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`py-20 px-6 relative overflow-hidden ${
        isDark ? "bg-gray-900 text-white" : "bg-[#F4F2D3] text-gray-900"
      }`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-64 h-64 ${
            isDark ? "bg-gray-800/20" : "bg-yellow-100/50"
          } rounded-full blur-3xl animate-pulse`}
        ></div>
        <div
          className={`absolute bottom-20 right-10 w-80 h-80 ${
            isDark ? "bg-gray-700/20" : "bg-yellow-200/50"
          } rounded-full blur-3xl animate-pulse`}
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 ${
            isDark ? "bg-gray-800/10" : "bg-yellow-100/30"
          } rounded-full blur-3xl animate-pulse`}
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span
              className={`${
                isDark ? "text-gray-400" : ""
              } text-sm font-semibold uppercase tracking-wider animate-fade-in`}
              style={{ color: isDark ? "#82952F" : "#82952F" }}
            >
              Get To Know More
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span
              className={`${isDark ? "text-gray-300" : ""} relative`}
              style={{ color: isDark ? "#82952F" : "#82952F" }}
            >
              Me
              <div
                className={`absolute -bottom-2 left-0 w-full h-1 ${
                  isDark ? "bg-[#82952F]" : "bg-[#82952F]"
                } rounded-full animate-expand`}
              ></div>
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div className="space-y-8">
            {[
              "I am an experienced Frontend Developer with over 5 years of professional expertise in the field.",
              "Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.",
              "My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.",
            ].map((text, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl backdrop-blur-sm transition-all duration-700 hover:scale-105 hover:-translate-y-1 ${
                  isDark
                    ? "bg-gray-800/40 border border-gray-700/30 hover:border-gray-500/50 hover:bg-gray-800/60"
                    : "bg-white/80 border border-gray-300/30 hover:border-gray-500/50 hover:bg-white/90"
                } hover:shadow-2xl`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-2 h-2 rounded-full mt-3 ${
                      isDark ? "bg-gray-500" : "bg-gray-800"
                    } group-hover:scale-150 transition-transform duration-300`}
                  ></div>
                  <p
                    className={`text-lg leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-800"
                    }`}
                  >
                    {text}
                  </p>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`group text-center p-6 rounded-2xl transition-all duration-700 hover:scale-110 hover:-translate-y-3 cursor-pointer ${
                    isDark
                      ? "bg-gray-800/50 border border-gray-700/30 hover:border-gray-500/50 hover:bg-gray-800/70"
                      : "bg-white/90 border border-gray-300/30 hover:border-gray-500/50 hover:bg-white"
                  } hover:shadow-2xl`}
                  style={{
                    animationDelay: `${0.6 + index * 0.1}s`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <div className="text-4xl mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {stat.icon}
                  </div>
                  <div
                    className={`text-3xl font-bold mb-1 relative`}
                    style={{ color: isDark ? undefined : "#82952F" }}
                  >
                    {animatedStats[index]}
                    {stat.suffix}
                    <div className="absolute inset-0 animate-pulse-glow"></div>
                  </div>
                  <div
                    className={`text-sm font-medium ${
                      isDark ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Skills */}
          <div className="flex items-center">
            <div className="w-full">
              <div
                className={`p-8 rounded-3xl backdrop-blur-sm ${
                  isDark
                    ? "bg-gray-800/40 border border-gray-700/30"
                    : "bg-white/90 border border-gray-300/30"
                } shadow-2xl h-full flex flex-col`}
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl animate-bounce">🛠️</span>
                  <span className="relative">
                    Technical Skills
                    <div
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                        isDark ? "bg-gray-500" : "bg-gray-800"
                      } animate-expand-width`}
                    ></div>
                  </span>
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {categories.map((category, index) => (
                    <button
                      key={category}
                      onMouseEnter={() => setHoveredCategory(category)}
                      onMouseLeave={() => setHoveredCategory(null)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                        hoveredCategory === category
                          ? isDark
                            ? "bg-gray-700 text-gray-200 scale-105"
                            : "bg-[#82952F] text-white scale-105"
                          : isDark
                          ? "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"
                          : "bg-gray-200/50 text-gray-700 hover:bg-[#82952F]/80 hover:text-white"
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 flex-1">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`group relative p-3 rounded-lg transition-all duration-500 cursor-pointer ${
                        hoveredCategory && hoveredCategory !== skill.category
                          ? "opacity-40 scale-95"
                          : "opacity-100 scale-100"
                      } ${
                        isDark
                          ? "bg-gray-800/30 border border-gray-700/20 hover:border-gray-500/40 hover:bg-gray-800/60"
                          : "bg-gray-100/50 border border-gray-300/20 hover:border-gray-500/40 hover:bg-white/80"
                      } hover:scale-105 hover:-translate-y-1`}
                      onMouseEnter={() => setActiveSkillIndex(index)}
                      onMouseLeave={() => setActiveSkillIndex(null)}
                      style={{
                        animationDelay: `${0.8 + index * 0.05}s`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateX(0)"
                          : "translateX(30px)",
                        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                          {skill.logo}
                        </span>
                        <div className="flex-1">
                          <div className="font-semibold text-xs text-gray-800">
                            {skill.name}
                          </div>
                          <div className="text-xs text-gray-600">
                            {skill.category}
                          </div>
                        </div>
                        <div className="text-xs font-bold text-gray-700">
                          {skill.level}%
                        </div>
                      </div>

                      <div className="relative">
                        <div className="w-full h-1.5 rounded-full overflow-hidden bg-gray-300/50">
                          <div
                            className="h-full rounded-full bg-gray-500 relative overflow-hidden"
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              transition: "width 1s ease-out",
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                          </div>
                        </div>
                      </div>

                      {activeSkillIndex === index && (
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse-border"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes expand { from { width: 0; } to { width: 100%; } }
        @keyframes expand-width { from { width: 0; } to { width: 100%; } }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        @keyframes pulse-glow { 0%, 100% { opacity: 0; } 50% { opacity: 0.1; } }
        @keyframes pulse-border { 0%, 100% { opacity: 0; } 50% { opacity: 0.3; } }

        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-expand { animation: expand 1s ease-out 0.5s both; }
        .animate-expand-width { animation: expand-width 1s ease-out 1s both; }
        .animate-shimmer { animation: shimmer 2s ease-in-out infinite; animation-delay: 1s; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-pulse-border { animation: pulse-border 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default About;
