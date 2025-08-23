import React, { useState } from "react";
import { Star, Zap, Code2, Sparkles } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    tech: ["React", "Node.js", "MongoDB"],
    description:
      "Full-stack e-commerce platform featuring real-time inventory management, secure payments, and responsive design.",
    image: "/urban.jpg",
    url: "https://www.urbanathletics.com.ph",
  },
  {
    id: 2,
    title: "Cleaning Service Booking",
    tech: ["React", "Tailwind CSS", "Firebase"],
    description:
      "Responsive web platform for booking home and office cleaning services with instant scheduling and secure online payments.",
    image: "/getklean.jpg",
    url: "https://www.getkleanph.com/",
  },
  {
    id: 3,
    title: "Car Rental System",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    description:
      "Full-featured car rental application with vehicle search, booking management, and real-time availability updates.",
    image: "/8drive.jpg",
    url: "https://8drivecars.com/",
  },
  {
    id: 4,
    title: "Dental Clinic Website",
    tech: ["React", "Next.js", "Tailwind CSS"],
    description:
      "Modern dental clinic website featuring appointment booking, service information, and an engaging patient gallery.",
    image: "/dentalworld.jpg",
    url: "https://dentalworld.com.ph/",
  },
  {
    id: 5,
    title: "Car Dealer Inventory",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    description:
      "Interactive car dealership platform with searchable inventory, image galleries, and inquiry forms for potential buyers.",
    image: "/manilaauto.jpg",
    url: "https://www.manilaautodisplay.com/",
  },
  {
    id: 6,
    title: "Education Learning Portal",
    tech: ["React", "Next.js", "Firebase"],
    description:
      "Online learning portal offering courses, quizzes, and progress tracking with responsive design for all devices.",
    image: "/ahalearning.jpg",
    url: "https://www.ahalearningcenter.com/",
  },
];

const Portfolio = ({ isDark = false }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleProjectClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="portfolio" className="relative py-24 px-6">
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles
              className={`w-6 h-6 ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            />
            <span
              className={`text-sm font-semibold uppercase tracking-wider ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            >
              Featured Work
            </span>
          </div>
          <h2
            className={`text-5xl md:text-6xl font-black mb-6 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">Latest Projects</span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Showcasing cutting-edge solutions built with modern technologies
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project.url)}
            >
              <div
                className={`relative overflow-hidden rounded-3xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 ${
                  isDark ? "bg-slate-800" : "bg-white"
                } shadow-xl hover:shadow-2xl backdrop-blur-lg border ${
                  isDark ? "border-slate-700" : "border-slate-100"
                }`}
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-contain transition-all duration-500 ${
                      hoveredProject === project.id
                        ? "blur-sm scale-110"
                        : "blur-0 scale-100"
                    }`}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />

                  {/* Fallback gradient */}
                  <div
                    className="hidden absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500"
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

                  {/* Hover overlay */}
                  <div
                    className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-all duration-500 flex flex-col items-center justify-center p-6 text-center ${
                      hoveredProject === project.id
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-slate-200 mb-6 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-white/20 text-white backdrop-blur-lg border border-white/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-200 text-sm font-medium underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.url}
                      </a>
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
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-x { 
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite; 
        }
      `}</style>
    </section>
  );
};

export default Portfolio;