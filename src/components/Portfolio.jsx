import React, { useState, useEffect } from "react";
import { Star, Zap, Code2, Sparkles, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    tech: ["React", "Node.js", "MongoDB"],
    description:
      "Full-stack e-commerce platform featuring real-time inventory management, secure payments, and responsive design.",
    image: "/urban.jpg",
    url: "https://www.urbanathletics.com.ph",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Cleaning Service Booking",
    tech: ["React", "Tailwind CSS", "Firebase"],
    description:
      "Responsive web platform for booking home and office cleaning services with instant scheduling and secure online payments.",
    image: "/getklean.jpg",
    url: "https://www.getkleanph.com/",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Car Rental System",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    description:
      "Full-featured car rental application with vehicle search, booking management, and real-time availability updates.",
    image: "/8drive.jpg",
    url: "https://8drivecars.com/",
    category: "Full Stack"
  },
  {
    id: 4,
    title: "Dental Clinic Website",
    tech: ["React", "Next.js", "Tailwind CSS"],
    description:
      "Modern dental clinic website featuring appointment booking, service information, and an engaging patient gallery.",
    image: "/dentalworld.jpg",
    url: "https://dentalworld.com.ph/",
    category: "Frontend"
  },
  {
    id: 5,
    title: "Car Dealer Inventory",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    description:
      "Interactive car dealership platform with searchable inventory, image galleries, and inquiry forms for potential buyers.",
    image: "/manilaauto.jpg",
    url: "https://www.manilaautodisplay.com/",
    category: "Full Stack"
  },
  {
    id: 6,
    title: "Education Learning Portal",
    tech: ["React", "Next.js", "Firebase"],
    description:
      "Online learning portal offering courses, quizzes, and progress tracking with responsive design for all devices.",
    image: "/ahalearning.jpg",
    url: "https://www.ahalearningcenter.com/",
    category: "Frontend"
  },
];

const Portfolio = ({ isDark = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const getVisibleProjects = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length;
      result.push({ ...projects[index], position: i });
    }
    return result;
  };

  const handleProjectClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="portfolio" className="relative py-4 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
              : "bg-gradient-to-br from-slate-50 via-white to-slate-100"
          }`}
        />
        
        {/* Animated background orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-2">
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
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
              Latest Projects
            </span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto mb-2 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Showcasing cutting-edge solutions built with modern technologies
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative -mt-2">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full backdrop-blur-lg border transition-all duration-300 hover:scale-110 ${
              isDark
                ? "bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700/90"
                : "bg-white/80 border-slate-200 text-slate-800 hover:bg-white/90"
            } shadow-xl`}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full backdrop-blur-lg border transition-all duration-300 hover:scale-110 ${
              isDark
                ? "bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700/90"
                : "bg-white/80 border-slate-200 text-slate-800 hover:bg-white/90"
            } shadow-xl`}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Track */}
          <div className="flex justify-center items-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px] perspective-1000">

            <div className="relative w-full max-w-6xl">
              {getVisibleProjects().map((project, idx) => {
                const isCenter = idx === 1;
                const isLeft = idx === 0;
                const isRight = idx === 2;

                return (
                  <div
                    key={`${project.id}-${currentIndex}-${idx}`}
                    className={`absolute top-0 transition-all duration-700 ease-out cursor-pointer ${
                      isCenter
                        ? "left-1/2 transform -translate-x-1/2 z-10 scale-100"
                        : isLeft
                        ? "left-8 z-0 scale-75 opacity-60 -rotate-6"
                        : "right-8 z-0 scale-75 opacity-60 rotate-6"
                    }`}
                    style={{
                      transform: `${
                        isCenter
                          ? "translateX(-50%) scale(1) rotateY(0deg)"
                          : isLeft
                          ? "translateX(0) scale(0.85) rotateY(25deg)"
                          : "translateX(0) scale(0.85) rotateY(-25deg)"
                      }`,
                    }}
                    onMouseEnter={() => {
                      setHoveredCard(project.id);
                      setIsAutoPlay(false);
                    }}
                    onMouseLeave={() => {
                      setHoveredCard(null);
                      setIsAutoPlay(true);
                    }}
                    onClick={() => {
                      if (!isCenter) {
                        setCurrentIndex((currentIndex + (isRight ? 1 : -1) + projects.length) % projects.length);
                      }
                    }}
                  >
                    <div
                      className={`w-80 h-[500px] rounded-3xl overflow-hidden transition-all duration-500 transform hover:scale-105 ${
                        isDark ? "bg-slate-800" : "bg-white"
                      } shadow-2xl backdrop-blur-lg border ${
                        isDark ? "border-slate-700" : "border-slate-200"
                      } ${hoveredCard === project.id && isCenter ? "shadow-3xl ring-4 ring-blue-500/20" : ""}`}
                    >
                      {/* Image Section */}
                      <div className="relative h-60 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
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
                            <Code2 className="w-16 h-16 text-white opacity-80" />
                          </div>
                        </div>

                        {/* Category badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
                            {project.category}
                          </span>
                        </div>

                        {/* Star rating */}
                        <div className="absolute top-4 right-4 flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 fill-yellow-400 text-yellow-400 drop-shadow-lg"
                            />
                          ))}
                        </div>

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>

                      {/* Content Section */}
                      <div className="p-6 h-60 flex flex-col">
                        <h3
                          className={`text-xl font-black mb-3 ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {project.title}
                        </h3>
                        
                        <p
                          className={`text-sm leading-relaxed mb-4 flex-1 ${
                            isDark ? "text-slate-300" : "text-slate-600"
                          }`}
                        >
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.slice(0, 3).map((tech, i) => (
                            <span
                              key={i}
                              className={`px-2 py-1 text-xs font-medium rounded-lg ${
                                isDark
                                  ? "bg-slate-700 text-slate-300"
                                  : "bg-slate-100 text-slate-700"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-lg ${
                                isDark
                                  ? "bg-slate-700 text-slate-400"
                                  : "bg-slate-100 text-slate-500"
                              }`}
                            >
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Visit Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProjectClick(project.url);
                          }}
                          className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-lg"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Visit Project
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 scale-125"
                    : isDark
                    ? "bg-slate-600 hover:bg-slate-500"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div
            className={`w-full h-1 rounded-full mt-6 ${
              isDark ? "bg-slate-700" : "bg-slate-200"
            } overflow-hidden`}
          >
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-100 ease-linear"
              style={{
                width: isAutoPlay ? "100%" : "0%",
                animation: isAutoPlay ? "progress 4s linear infinite" : "none",
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-30px, 30px) rotate(-120deg); }
          66% { transform: translate(20px, -20px) rotate(-240deg); }
        }
        
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-x { 
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite; 
        }
        
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
