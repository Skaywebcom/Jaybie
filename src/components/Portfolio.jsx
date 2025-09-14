import React, { useState, useEffect } from "react";
import { Star, Sparkles, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  // ... your projects array (unchanged)
];

const Portfolio = ({ isDark = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

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
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="portfolio" className="relative w-full h-screen px-4 md:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${isDark ? "bg-slate-900" : "bg-white"}`} />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between items-center">
        {/* Header */}
        <div className="text-center mt-4 md:mt-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <Sparkles className={`w-5 h-5 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
            <span className={`text-xs font-semibold uppercase ${isDark ? "text-blue-400" : "text-blue-600"}`}>Featured Work</span>
          </div>
          <h2 className={`text-3xl md:text-5xl font-black mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">Latest Projects</span>
          </h2>
          <p className={`text-sm md:text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}>Showcasing cutting-edge solutions built with modern technologies</p>
        </div>

        {/* Carousel */}
        <div className="relative w-full flex-1 flex items-center justify-center -mt-2">
          {/* Navigation */}
          <button onClick={prevSlide} className={`absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${isDark ? "bg-slate-800 text-white" : "bg-white text-slate-800"} shadow-lg`}>
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={nextSlide} className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${isDark ? "bg-slate-800 text-white" : "bg-white text-slate-800"} shadow-lg`}>
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards */}
          <div className="relative w-full max-w-5xl h-full flex justify-center items-center">
            {getVisibleProjects().map((project, idx) => {
              const isCenter = idx === 1;
              const scale = isCenter ? 1 : 0.8;
              const opacity = isCenter ? 1 : 0.6;
              const offset = (idx - 1) * 280; // distance between cards
              const cardHeight = "h-[320px] md:h-[380px]";

              return (
                <div
                  key={`${project.id}-${currentIndex}-${idx}`}
                  className={`absolute transition-all duration-500 cursor-pointer`}
                  style={{
                    left: `50%`,
                    transform: `translateX(${offset}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: isCenter ? 10 : 5
                  }}
                  onMouseEnter={() => { setHoveredCard(project.id); setIsAutoPlay(false); }}
                  onMouseLeave={() => { setHoveredCard(null); setIsAutoPlay(true); }}
                  onClick={() => { if (!isCenter) setCurrentIndex((currentIndex + (idx > 1 ? 1 : -1) + projects.length) % projects.length); }}
                >
                  <div className={`${cardHeight} w-72 rounded-2xl overflow-hidden shadow-xl ${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"} p-3 flex flex-col`}>
                    <div className="flex-1 relative">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg" />
                      <div className="absolute top-2 left-2 px-2 py-1 text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">{project.category}</div>
                      <div className="absolute top-2 right-2 flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-yellow-400" />)}</div>
                    </div>
                    <h3 className={`text-sm md:text-lg font-bold mt-2 ${isDark ? "text-white" : "text-slate-900"}`}>{project.title}</h3>
                    <p className={`text-xs md:text-sm flex-1 ${isDark ? "text-slate-300" : "text-slate-600"}`}>{project.description}</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.tech.map((tech, i) => <span key={i} className="text-[9px] md:text-xs px-1 py-0.5 bg-slate-200 text-slate-800 rounded">{tech}</span>)}
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); handleProjectClick(project.url); }} className="mt-2 w-full py-1 text-xs md:text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded hover:scale-105 transition-all flex justify-center items-center gap-1">
                      <ExternalLink className="w-3 h-3" /> Visit
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-1 mb-2">
          {projects.map((_, idx) => (
            <button key={idx} onClick={() => goToSlide(idx)} className={`w-2 h-2 rounded-full ${idx === currentIndex ? "bg-blue-600 scale-125" : "bg-slate-400"}`} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float { 0%,100%{transform:translate(0,0)}33%{transform:translate(20px,-20px)}66%{transform:translate(-15px,15px)} }
        .animate-float { animation: float 8s ease-in-out infinite; }
        @keyframes float-delayed { 0%,100%{transform:translate(0,0)}33%{transform:translate(-20px,20px)}66%{transform:translate(15px,-15px)} }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
        @keyframes gradient-x { 0%,100%{background-position:0% 50%}50%{background-position:100% 50%} }
        .animate-gradient-x { background-size:200% 200%; animation:gradient-x 3s ease infinite; }
      `}</style>
    </section>
  );
};

export default Portfolio;
