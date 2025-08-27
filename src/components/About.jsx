import React, { useState, useEffect, useRef } from "react";
import AboutCard from "./AboutCard";
import { motion } from "framer-motion"; // ✅ use framer-motion (not "motion/react")

const categorizedSkills = {
  frontend: [
    { name: "HTML5", logo: "🌐" },
    { name: "CSS3", logo: "🎨" },
    { name: "JavaScript", logo: "⚡" },
    { name: "TypeScript", logo: "📘" },
    { name: "React", logo: "⚛️" },
    { name: "Redux", logo: "🔄" },
    { name: "Tailwind", logo: "💨" },
    { name: "Bootstrap", logo: "📦" },
    { name: "Next.js", logo: "⚡" },
    { name: "Framer Motion", logo: "🎞️" },
  ],
  backend: [
    { name: "Node.js", logo: "🟢" },
    { name: "MongoDB", logo: "🍃" },
    { name: "Python", logo: "🐍" },
    { name: "Express.js", logo: "🚀" },
    { name: "PostgreSQL", logo: "🗄️" },
    { name: "Prisma ORM", logo: "🔗" },
  ],
  tooling: [
    { name: "GitHub", logo: "📊" },
    { name: "Git", logo: "🔧" },
    { name: "npm", logo: "📦" },
    { name: "ESLint", logo: "🧹" },
    { name: "Vite", logo: "⚡" },
  ],
  deployment: [
    { name: "AWS", logo: "☁️" },
    { name: "Vercel", logo: "▲" },
    { name: "Netlify", logo: "🌍" },
    { name: "Docker", logo: "🐳" },
  ],
  testing: [
    { name: "Jest", logo: "🧪" },
    { name: "React Testing Library", logo: "🖥️" },
    { name: "Cypress", logo: "🌐" },
  ]
};

const stats = [
  { value: 5, label: "years of experience", suffix: "+", icon: "🚀" },
  { value: 50, label: "projects completed", suffix: "+", icon: "💼" },
  { value: 40, label: "happy clients", suffix: "+", icon: "😊" },
];

// Create rows from categorized skills
const allSkills = [
  ...categorizedSkills.frontend,
  ...categorizedSkills.backend,
  ...categorizedSkills.tooling,
  ...categorizedSkills.deployment,
  ...categorizedSkills.testing
];

// Split skills into rows (8 skills per row for better balance)
const skillsRow1 = allSkills.slice(0, 12); // First 12 skills
const skillsRow2 = allSkills.slice(12, 24); // Next 12 skills
const skillsRow3 = allSkills.slice(24); // Remaining skills

const About = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0]);
  const sectionRef = useRef(null);

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

  const SkillItem = ({ skill }) => (
    <div
      className={`flex items-center gap-4 px-8 py-4 rounded-2xl whitespace-nowrap ${
        isDark
          ? "bg-slate-800/60 border border-slate-700/50"
          : "bg-white/80 border border-slate-200/50"
      } backdrop-blur-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <div className="text-3xl">{skill.logo}</div>
      <span className={`font-bold text-lg ${isDark ? "text-slate-200" : "text-slate-800"}`}>
        {skill.name}
      </span>
    </div>
  );

  const SlidingRow = ({ skills, direction = "left", speed = "20s" }) => (
    <div className="relative overflow-hidden py-4">
      <div
        className={`flex gap-6 ${direction === "right" ? "animate-slide-right" : "animate-slide-left"}`}
        style={{ animationDuration: speed }}
      >
        {/* First set of skills */}
        {skills.map((skill, index) => (
          <SkillItem key={`${skill.name}-1-${index}`} skill={skill} />
        ))}
        {/* Duplicate set for seamless loop */}
        {skills.map((skill, index) => (
          <SkillItem key={`${skill.name}-2-${index}`} skill={skill} />
        ))}
        {/* Triple set for better coverage on smaller screens */}
        {skills.map((skill, index) => (
          <SkillItem key={`${skill.name}-3-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`py-20 px-6 relative overflow-hidden ${
        isDark ? "text-white" : "text-slate-800"
      }`}
    >
      {/* Background */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div
          className={`absolute -inset-10 ${
            isDark
              ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700"
              : "bg-gradient-to-br from-slate-50 via-white to-slate-100"
          }`}
        />

        {/* Floating orbs */}
        <div className="absolute top-32 left-16 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-float" />

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
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
              Me
            </span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Passionate developer crafting digital experiences with modern
            technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left column - Story + Stats */}
          <div className="space-y-8">
            {[
              {
                text: "I am an experienced Frontend Developer with over 5 years of professional expertise in the field.",
                icon: "🚀",
                gradient: "from-blue-600 to-purple-600",
              },
              {
                text: "Throughout my career, I have collaborated with prestigious organizations, contributing to their success.",
                icon: "🤝",
                gradient: "from-purple-600 to-cyan-500",
              },
              {
                text: "My passion for frontend development is reflected in my enthusiasm and dedication to each project.",
                icon: "💡",
                gradient: "from-cyan-500 to-blue-600",
              },
            ].map((item, index) => (
              <AboutCard
                key={index}
                about={item} // ✅ fixed bug
                index={index}
                className={`group relative p-8 rounded-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${
                  isDark
                    ? "bg-slate-800/40 backdrop-blur-lg border border-slate-700/50 hover:border-slate-500/70 hover:bg-slate-800/60"
                    : "bg-white/70 backdrop-blur-lg border border-slate-200/50 hover:border-slate-400/70 hover:bg-white/90"
                }`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(50px)",
                  transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              />
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`relative text-center p-8 rounded-3xl transition-all duration-700 ${
                    isDark
                      ? "bg-slate-800/50 border border-slate-700/50"
                      : "bg-white/80 border border-slate-200/50"
                  }`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(50px)",
                    transition: "all 0.8s ease",
                  }}
                >
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-black mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {animatedStats[index]}
                    {stat.suffix}
                  </div>
                  <div
                    className={`text-sm font-semibold uppercase tracking-wider ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Skills */}
          <div className="relative">
            <div
              className={`relative p-10 rounded-3xl backdrop-blur-lg ${
                isDark
                  ? "bg-slate-800/50 border border-slate-700/50"
                  : "bg-white/80 border border-slate-200/50"
              } shadow-2xl`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-2xl shadow-lg animate-bounce">
                  🛠️
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Technical Skills
                    </span>
                  </h3>
                  <p
                    className={`text-sm ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    Technologies I work with
                  </p>
                </div>
              </div>

              {/* Sliding Skills Animation */}
              <div className="space-y-6">
                {/* First row - sliding left */}
                <SlidingRow skills={skillsRow1} direction="left" speed="30s" />
                
                {/* Second row - sliding right */}
                <SlidingRow skills={skillsRow2} direction="right" speed="35s" />
                
                {/* Third row - sliding left (if there are remaining skills) */}
                {skillsRow3.length > 0 && (
                  <SlidingRow skills={skillsRow3} direction="left" speed="25s" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        @keyframes slide-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-slide-left {
          animation: slide-left var(--duration, 20s) linear infinite;
        }

        @keyframes slide-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .animate-slide-right {
          animation: slide-right var(--duration, 20s) linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;