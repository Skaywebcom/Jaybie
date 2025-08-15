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
        isDark ? "text-white" : "text-gray-900"
      }`}
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className={`absolute -inset-10 ${
            isDark 
              ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black" 
              : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
          }`}
        />
        
        {/* Multiple floating orbs */}
        <div 
          className="absolute top-32 left-16 w-80 h-80 bg-[#82952F]/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#9AAF3D]/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#6B7A26]/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '4s' }}
        />
        <div 
          className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-[#A8B84A]/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1s' }}
        />
        
        {/* Grid pattern overlay */}
        <div 
          className={`absolute inset-0 opacity-5 ${
            isDark ? "bg-gray-400" : "bg-gray-600"
          }`}
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-block relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-[#82952F]/20 to-[#9AAF3D]/20 rounded-full blur-lg animate-pulse" />
            <div className="relative bg-gradient-to-r from-[#82952F] to-[#9AAF3D] bg-clip-text text-transparent text-sm font-bold uppercase tracking-wider px-6 py-2">
              Get To Know More
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            About{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#82952F] via-[#9AAF3D] to-[#82952F] bg-clip-text text-transparent animate-gradient-x">
                Me
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#82952F]/20 to-[#9AAF3D]/20 blur-lg rounded-lg" />
            </span>
          </h2>
          
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            Passionate developer crafting digital experiences with modern technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left column - Enhanced story cards */}
          <div className="space-y-8">
            {[
              {
                text: "I am an experienced Frontend Developer with over 5 years of professional expertise in the field.",
                icon: "🚀",
                gradient: "from-[#82952F] to-[#9AAF3D]"
              },
              {
                text: "Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.",
                icon: "🤝",
                gradient: "from-[#9AAF3D] to-[#6B7A26]"
              },
              {
                text: "My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.",
                icon: "💡",
                gradient: "from-[#6B7A26] to-[#82952F]"
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${
                  isDark
                    ? "bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 hover:border-gray-500/70 hover:bg-gray-800/60"
                    : "bg-white/70 backdrop-blur-lg border border-gray-200/50 hover:border-gray-400/70 hover:bg-white/90"
                } hover:shadow-2xl shadow-lg`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(50px)",
                  transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-sm transition-opacity duration-500`} />
                
                <div className="relative flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className={`text-lg leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}>
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 mt-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`group relative text-center p-8 rounded-3xl transition-all duration-700 hover:scale-110 hover:-translate-y-4 cursor-pointer ${
                    isDark
                      ? "bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 hover:border-gray-500/70"
                      : "bg-white/80 backdrop-blur-lg border border-gray-200/50 hover:border-gray-400/70"
                  } hover:shadow-2xl shadow-lg overflow-hidden`}
                  style={{
                    animationDelay: `${0.8 + index * 0.1}s`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(50px)",
                    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#82952F]/5 via-transparent to-[#9AAF3D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-black mb-2 bg-gradient-to-r from-[#82952F] to-[#9AAF3D] bg-clip-text text-transparent">
                      {animatedStats[index]}{stat.suffix}
                    </div>
                    <div className={`text-sm font-semibold uppercase tracking-wider ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Enhanced Skills */}
          <div className="relative">
            <div className={`relative p-10 rounded-3xl backdrop-blur-lg ${
              isDark
                ? "bg-gray-800/50 border border-gray-700/50"
                : "bg-white/80 border border-gray-200/50"
            } shadow-2xl overflow-hidden`}>
              
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#82952F]/5 via-transparent to-[#9AAF3D]/5" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#82952F] to-[#9AAF3D] flex items-center justify-center text-2xl shadow-lg animate-bounce">
                    🛠️
                  </div>
                  <div>
                    <h3 className="text-3xl font-black mb-2">
                      <span className="bg-gradient-to-r from-[#82952F] to-[#9AAF3D] bg-clip-text text-transparent">
                        Technical Skills
                      </span>
                    </h3>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      Technologies I work with
                    </p>
                  </div>
                </div>

                {/* Category filters */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {categories.map((category, index) => (
                    <button
                      key={category}
                      onMouseEnter={() => setHoveredCategory(category)}
                      onMouseLeave={() => setHoveredCategory(null)}
                      className={`relative px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 overflow-hidden ${
                        hoveredCategory === category
                          ? "text-white scale-105 shadow-lg"
                          : isDark
                          ? "bg-gray-700/50 text-gray-300 hover:bg-gray-700/70 border border-gray-600/50"
                          : "bg-gray-100/50 text-gray-700 hover:bg-gray-200/70 border border-gray-300/50"
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {hoveredCategory === category && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[#82952F] to-[#9AAF3D] animate-gradient-x" />
                      )}
                      <span className="relative z-10">{category}</span>
                    </button>
                  ))}
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`group relative p-5 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden ${
                        hoveredCategory && hoveredCategory !== skill.category
                          ? "opacity-30 scale-95"
                          : "opacity-100 scale-100"
                      } ${
                        isDark
                          ? "bg-gray-700/40 border border-gray-600/30 hover:border-gray-500/50 hover:bg-gray-700/60"
                          : "bg-gray-50/50 border border-gray-300/30 hover:border-gray-400/50 hover:bg-white/70"
                      } hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl`}
                      onMouseEnter={() => setActiveSkillIndex(index)}
                      onMouseLeave={() => setActiveSkillIndex(null)}
                      style={{
                        animationDelay: `${1 + index * 0.05}s`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateX(0)" : "translateX(50px)",
                        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      {/* Hover gradient background */}
                      {activeSkillIndex === index && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[#82952F]/10 to-[#9AAF3D]/10 animate-pulse" />
                      )}
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#82952F]/20 to-[#9AAF3D]/20 flex items-center justify-center text-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            {skill.logo}
                          </div>
                          <div className="flex-1">
                            <div className={`font-bold text-sm ${
                              isDark ? "text-gray-200" : "text-gray-800"
                            }`}>
                              {skill.name}
                            </div>
                            <div className={`text-xs ${
                              isDark ? "text-gray-400" : "text-gray-500"
                            }`}>
                              {skill.category}
                            </div>
                          </div>
                          <div className="text-sm font-black bg-gradient-to-r from-[#82952F] to-[#9AAF3D] bg-clip-text text-transparent">
                            {skill.level}%
                          </div>
                        </div>

                        {/* Enhanced progress bar */}
                        <div className="relative">
                          <div className={`w-full h-2 rounded-full overflow-hidden ${
                            isDark ? "bg-gray-600/50" : "bg-gray-200/50"
                          }`}>
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-[#82952F] to-[#9AAF3D] relative overflow-hidden shadow-lg"
                              style={{
                                width: isVisible ? `${skill.level}%` : "0%",
                                transition: "width 1.5s ease-out",
                                transitionDelay: `${1.2 + index * 0.05}s`
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        .animate-float { 
          animation: float 8s ease-in-out infinite; 
        }
        
        .animate-gradient-x { 
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite; 
        }
        
        .animate-shimmer { 
          animation: shimmer 2s ease-in-out infinite; 
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default About;