import React, { useState, useEffect, useRef } from "react";

const skills = [
  {
    name: "HTML & CSS",
    level: 95,
    icon: "🎨",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "React JS",
    level: 90,
    icon: "⚛️",
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "JavaScript",
    level: 88,
    icon: "🟨",
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "Next JS",
    level: 85,
    icon: "⚡",
    color: "from-gray-700 to-gray-900",
  },
];

const About = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0]);
  const sectionRef = useRef(null);
  const statsRef = useRef([]);

  const stats = [
    { value: 5, label: "years of experience", suffix: "+", icon: "🚀" },
    { value: 50, label: "projects completed", suffix: "+", icon: "💼" },
    { value: 40, label: "happy clients", suffix: "+", icon: "😊" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate stats when section becomes visible
          stats.forEach((stat, index) => {
            animateCounter(index, stat.value);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounter = (index, targetValue) => {
    let current = 0;
    const increment = targetValue / 50; // 50 steps
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
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/30 rotate-45 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-purple-400/30 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-green-400/30 rotate-45 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
              Get To Know More
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-300% animate-gradient">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            {/* Text Content with Cards */}
            <div className="space-y-6">
              {[
                "I am an experienced Frontend Developer with over 5 years of professional expertise in the field.",
                "Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.",
                "My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.",
              ].map((text, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:-translate-y-1 ${
                    isDark
                      ? "bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/30"
                      : "bg-white/70 border border-gray-200/50 hover:border-blue-500/30"
                  } hover:shadow-xl hover:shadow-blue-500/10`}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.6s ease-out",
                  }}
                >
                  <p
                    className={`text-lg leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  ref={(el) => (statsRef.current[index] = el)}
                  className={`group text-center p-6 rounded-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer ${
                    isDark
                      ? "bg-gray-800/70 border border-gray-700/50 hover:border-blue-500/50"
                      : "bg-white/80 border border-gray-200/50 hover:border-blue-500/50"
                  } hover:shadow-xl hover:shadow-blue-500/20`}
                  style={{
                    animationDelay: `${0.6 + index * 0.1}s`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.6s ease-out",
                  }}
                >
                  <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                    {animatedStats[index]}
                    {stat.suffix}
                  </div>
                  <div
                    className={`text-sm font-medium ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Skills Section */}
          <div className="space-y-8">
            <div
              className={`p-8 rounded-3xl backdrop-blur-sm ${
                isDark
                  ? "bg-gray-800/50 border border-gray-700/50"
                  : "bg-white/70 border border-gray-200/50"
              } shadow-xl`}
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="text-3xl">🛠️</span>
                Technical Skills
              </h3>

              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group"
                    style={{
                      animationDelay: `${0.8 + index * 0.1}s`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateX(0)"
                        : "translateX(50px)",
                      transition: "all 0.6s ease-out",
                    }}
                  >
                    {/* Skill Header */}
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <span className="font-semibold text-lg">
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className={`text-lg font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    {/* Enhanced Progress Bar */}
                    <div className="relative">
                      <div
                        className={`w-full h-4 rounded-full overflow-hidden ${
                          isDark ? "bg-gray-700" : "bg-gray-200"
                        }`}
                      >
                        {/* Background glow effect */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-20 rounded-full`}
                        ></div>

                        {/* Animated progress bar */}
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 ease-out relative overflow-hidden`}
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${1 + index * 0.2}s`,
                          }}
                        >
                          {/* Animated shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>

                          {/* Progress indicator */}
                          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </div>
                      </div>

                      {/* Skill level indicator */}
                      <div
                        className="absolute -top-8 bg-gray-900 text-white px-2 py-1 rounded text-xs font-bold transition-all duration-2000"
                        style={{
                          left: isVisible ? `${skill.level}%` : "0%",
                          transform: "translateX(-50%)",
                          transitionDelay: `${1.5 + index * 0.2}s`,
                          opacity: isVisible ? 1 : 0,
                        }}
                      >
                        {skill.level}%
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info Card */}
            <div
              className={`p-6 rounded-2xl backdrop-blur-sm ${
                isDark
                  ? "bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20"
                  : "bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-500/20"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl animate-bounce">🎯</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Always Learning</h4>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Continuously expanding my skillset with the latest
                    technologies and best practices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(45deg);
          }
          50% {
            transform: translateY(-10px) rotate(45deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 3s ease infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-shine {
          animation: shine 2s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default About;
