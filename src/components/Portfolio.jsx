import React, { useState, useEffect } from "react";
import { ExternalLink, Github, Star, Zap, Code2, Sparkles } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    tech: ["React", "Node.js", "MongoDB"],
    description: "Full-stack e-commerce solution with real-time inventory",
    image: "/project1.webp",
  },
  {
    id: 2,
    title: "Cleaning Service Booking",
    tech: ["React", "Tailwind CSS", "Firebase"],
    description:
      "Responsive web platform for booking home and office cleaning services with instant scheduling and secure online payments.",
    image: "/project2.webp",
  },
  {
    id: 3,
    title: "Car Rental System",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    description:
      "Full-featured car rental application with vehicle search, booking management, and real-time availability updates.",
    image: "/project3.webp",
  },
  {
    id: 4,
    title: "Dental Clinic Website",
    tech: ["React", "Next.js", "Tailwind CSS"],
    description:
      "Modern dental clinic website featuring appointment booking, service information, and an engaging patient gallery.",
    image: "/project4.webp",
  },
  {
    id: 5,
    title: "Car Dealer Inventory",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    description:
      "Interactive car dealership platform with searchable inventory, image galleries, and inquiry forms for potential buyers.",
    image: "/project5.webp",
  },
  {
    id: 6,
    title: "Education Learning Portal",
    tech: ["React", "Next.js", "Firebase"],
    description:
      "Online learning portal offering courses, quizzes, and progress tracking with responsive design for all devices.",
    image: "/project6.webp",
  },
];

const Portfolio = ({ isDark = false }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="portfolio"
      className={`relative py-24 px-6 overflow-hidden ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl transition-all duration-1000"
          style={{
            background: `radial-gradient(circle, ${
              isDark ? "#3b82f6" : "#8b5cf6"
            }, transparent)`,
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
          }}
        />
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 blur-2xl ${
            isDark ? "bg-purple-500" : "bg-blue-500"
          }`}
        />
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 blur-2xl ${
            isDark ? "bg-cyan-500" : "bg-pink-500"
          }`}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header with enhanced typography */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles
              className={`w-6 h-6 ${
                isDark ? "text-purple-400" : "text-purple-600"
              }`}
            />
            <span
              className={`text-sm font-semibold uppercase tracking-wider ${
                isDark ? "text-purple-400" : "text-purple-600"
              }`}
            >
              Featured Work
            </span>
          </div>
          <h2
            className={`text-5xl md:text-6xl font-black mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
              Latest Projects
            </span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Showcasing cutting-edge solutions built with modern technologies
          </p>
        </div>

        {/* Projects grid with staggered animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Card with advanced styling */}
              <div
                className={`relative overflow-hidden rounded-3xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 ${
                  isDark ? "bg-gray-800" : "bg-white"
                } shadow-xl hover:shadow-2xl backdrop-blur-lg border ${
                  isDark ? "border-gray-700" : "border-gray-100"
                }`}
              >
                {/* Project image area */}
                <div className="relative h-80 overflow-hidden">
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredProject === project.id
                        ? "blur-sm scale-110"
                        : "blur-0 scale-100"
                    }`}
                    onError={(e) => {
                      // Fallback gradient background if image fails to load
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />

                  {/* Fallback gradient background */}
                  <div
                    className="hidden absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500"
                    style={{ display: "none" }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <Code2 className="w-16 h-16 text-white opacity-80 animate-pulse" />
                        <div className="absolute -top-2 -right-2">
                          <Zap className="w-6 h-6 text-yellow-300 animate-bounce" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover overlay with project details */}
                  <div
                    className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-all duration-500 flex flex-col items-center justify-center p-6 text-center ${
                      hoveredProject === project.id
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    {/* Project Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 transform transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-gray-200 mb-6 text-sm leading-relaxed transform transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6 justify-center transform transition-all duration-700 delay-200 translate-y-4 group-hover:translate-y-0">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-white/20 text-white backdrop-blur-lg border border-white/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 transform transition-all duration-700 delay-300 translate-y-4 group-hover:translate-y-0">
                      <button className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-lg transition-all duration-200 hover:scale-110 border border-white/30">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                      <button className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-lg transition-all duration-200 hover:scale-110 border border-white/30">
                        <Github className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Star rating */}
                  <div className="absolute top-4 right-4 flex gap-1 z-10">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-yellow-400 text-yellow-400 drop-shadow-lg"
                      />
                    ))}
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 rounded-3xl transition-opacity duration-500 pointer-events-none ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    boxShadow: `0 0 50px rgba(139, 92, 246, 0.4)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
