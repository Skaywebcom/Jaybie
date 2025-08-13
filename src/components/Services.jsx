import React, { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Palette,
  Globe,
  Share2,
  Smartphone,
  TrendingUp,
  PenTool,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Web Design",
    description:
      "Creating visually appealing and user-friendly website layouts that ensure an excellent user experience across devices.",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    borderGradient: "from-blue-500/50 to-cyan-500/50",
    glowColor: "blue-500/20",
    particles: ["🌐", "💻", "🎨"],
  },
  {
    id: "02",
    title: "Graphics Design",
    description:
      "Designing custom graphics, logos, and visual assets to enhance brand identity and marketing materials.",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    borderGradient: "from-purple-500/50 to-pink-500/50",
    glowColor: "purple-500/20",
    particles: ["🎨", "✨", "🖌️"],
  },
  {
    id: "03",
    title: "Social Media",
    description:
      "Developing and managing social media campaigns to boost engagement, grow followers, and increase brand awareness.",
    icon: Share2,
    color: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    borderGradient: "from-green-500/50 to-emerald-500/50",
    glowColor: "green-500/20",
    particles: ["📱", "👥", "💬"],
  },
  {
    id: "04",
    title: "App Design",
    description:
      "Designing intuitive and responsive mobile and web app interfaces focused on usability and performance.",
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10",
    borderGradient: "from-orange-500/50 to-red-500/50",
    glowColor: "orange-500/20",
    particles: ["📱", "⚡", "🚀"],
  },
  {
    id: "05",
    title: "Digital Marketing",
    description:
      "Implementing online marketing strategies including SEO, email marketing, and paid ads to drive traffic and sales.",
    icon: TrendingUp,
    color: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-500/10 to-blue-500/10",
    borderGradient: "from-indigo-500/50 to-blue-500/50",
    glowColor: "indigo-500/20",
    particles: ["📈", "🎯", "💰"],
  },
  {
    id: "06",
    title: "Content Writing",
    description:
      "Crafting clear, compelling, and SEO-friendly content to communicate your brand message effectively.",
    icon: PenTool,
    color: "from-teal-500 to-green-500",
    bgGradient: "from-teal-500/10 to-green-500/10",
    borderGradient: "from-teal-500/50 to-green-500/50",
    glowColor: "teal-500/20",
    particles: ["✍️", "📝", "💡"],
  },
];

const Services = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  const ServiceCard = ({ service, index }) => {
    const IconComponent = service.icon;
    const isHovered = hoveredService === index;

    return (
      <div
        className="group relative"
        onMouseEnter={() => setHoveredService(index)}
        onMouseLeave={() => setHoveredService(null)}
        onMouseMove={(e) => handleMouseMove(e, index)}
        style={{
          animationDelay: `${index * 0.1}s`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.6s ease-out",
        }}
      >
        {/* Floating particles */}
        {service.particles.map((particle, pIndex) => (
          <div
            key={pIndex}
            className="absolute text-lg opacity-0 group-hover:opacity-70 transition-all duration-500 pointer-events-none"
            style={{
              top: `${20 + pIndex * 25}%`,
              right: `${-10 + pIndex * 5}%`,
              transform: isHovered
                ? `translate(${mousePosition.x * 0.5}px, ${
                    mousePosition.y * 0.5
                  }px) scale(1.2)`
                : "translate(0, 0) scale(1)",
              transitionDelay: `${pIndex * 0.1}s`,
              animation: isHovered ? "float 3s ease-in-out infinite" : "none",
              animationDelay: `${pIndex * 0.5}s`,
            }}
          >
            {particle}
          </div>
        ))}

        {/* Main card */}
        <div
          className={`relative overflow-hidden p-8 rounded-3xl transition-all duration-500 cursor-pointer group-hover:scale-105 group-hover:-translate-y-2 ${
            isDark
              ? "bg-gray-800/50 border border-gray-700/50 hover:border-gray-600/50"
              : "bg-white/70 border border-gray-200/50 hover:border-gray-300/50"
          } backdrop-blur-sm`}
          style={{
            transform: isHovered
              ? `translate(${mousePosition.x * 0.1}px, ${
                  mousePosition.y * 0.1
                }px) scale(1.05) translateY(-8px)`
              : "scale(1) translateY(0)",
            boxShadow: isHovered
              ? `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 30px ${
                  isDark
                    ? "rgba(59, 130, 246, 0.15)"
                    : "rgba(59, 130, 246, 0.1)"
                }`
              : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Background gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
          ></div>

          {/* Animated border */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${service.borderGradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500`}
            style={{ padding: "1px" }}
          >
            <div
              className={`w-full h-full rounded-3xl ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            ></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Service number and icon */}
            <div className="flex items-center justify-between mb-6">
              <div
                className={`text-lg font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
              >
                {service.id}
              </div>
              <div
                className={`p-3 rounded-2xl bg-gradient-to-r ${service.color} transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
              >
                <IconComponent size={24} className="text-white" />
              </div>
            </div>

            {/* Title */}
            <h3
              className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
              style={{
                backgroundImage: isHovered
                  ? `linear-gradient(to right, var(--tw-gradient-stops))`
                  : "none",
                "--tw-gradient-from": service.color.includes("blue")
                  ? "#3b82f6"
                  : service.color.includes("purple")
                  ? "#8b5cf6"
                  : service.color.includes("green")
                  ? "#10b981"
                  : service.color.includes("orange")
                  ? "#f97316"
                  : service.color.includes("indigo")
                  ? "#6366f1"
                  : "#14b8a6",
                "--tw-gradient-to": service.color.includes("cyan")
                  ? "#06b6d4"
                  : service.color.includes("pink")
                  ? "#ec4899"
                  : service.color.includes("emerald")
                  ? "#059669"
                  : service.color.includes("red")
                  ? "#ef4444"
                  : service.color.includes("blue")
                  ? "#3b82f6"
                  : "#059669",
              }}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              className={`${
                isDark ? "text-gray-300" : "text-gray-600"
              } mb-6 leading-relaxed group-hover:text-current transition-colors duration-300`}
            >
              {service.description}
            </p>

            {/* CTA Button */}
            <button
              className={`group/btn flex items-center gap-3 font-semibold transition-all duration-300 hover:gap-4 ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              <span
                className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
              >
                Learn More
              </span>
              <div
                className={`p-2 rounded-full bg-gradient-to-r ${service.color} group-hover:shadow-lg transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:rotate-12`}
              >
                <ExternalLink size={16} className="text-white" />
              </div>
            </button>
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 px-6 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#82952F] text-sm font-semibold uppercase tracking-wider animate-fade-in-up">
              What I Offer
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            My <span className="text-[#82952F] ">Services</span>
          </h2>
          <div className="w-24 h-1 bg-[#82952F]  mx-auto rounded-full"></div>
          <p
            className={`mt-6 text-lg max-w-2xl mx-auto animate-fade-in-up ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            Comprehensive digital solutions tailored to elevate your business
            and bring your vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <div
            className={`inline-block p-8 rounded-3xl backdrop-blur-sm ${
              isDark
                ? "bg-gray-800/50 border border-gray-700/50"
                : "bg-white/70 border border-gray-200/50"
            } animate-fade-in-up`}
            style={{ animationDelay: "1s" }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Ready to start your project?
            </h3>
            <p className={`${isDark ? "text-gray-300" : "text-gray-600"} mb-6`}>
              Let's discuss how I can help bring your ideas to life
            </p>
            <button className="bg-[#82952F] text-white px-8 py-4 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[#82952F]/40">
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 3s ease infinite;
        }

        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default Services;
