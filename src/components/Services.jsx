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
    particles: ["🌐", "💻", "🎨"],
  },
  {
    id: "02",
    title: "Graphics Design",
    description:
      "Designing custom graphics, logos, and visual assets to enhance brand identity and marketing materials.",
    icon: Palette,
    particles: ["🎨", "✨", "🖌️"],
  },
  {
    id: "03",
    title: "Social Media",
    description:
      "Developing and managing social media campaigns to boost engagement, grow followers, and increase brand awareness.",
    icon: Share2,
    particles: ["📱", "👥", "💬"],
  },
  {
    id: "04",
    title: "App Design",
    description:
      "Designing intuitive and responsive mobile and web app interfaces focused on usability and performance.",
    icon: Smartphone,
    particles: ["📱", "⚡", "🚀"],
  },
  {
    id: "05",
    title: "Digital Marketing",
    description:
      "Implementing online marketing strategies including SEO, email marketing, and paid ads to drive traffic and sales.",
    icon: TrendingUp,
    particles: ["📈", "🎯", "💰"],
  },
  {
    id: "06",
    title: "Content Writing",
    description:
      "Crafting clear, compelling, and SEO-friendly content to communicate your brand message effectively.",
    icon: PenTool,
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

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  const getGradientVariant = (index) => {
    const variants = [
      "from-[#82952F] to-[#6d7d28]",
      "from-[#82952F] to-[#9fa839]",
      "from-[#6d7d28] to-[#82952F]",
      "from-[#9fa839] to-[#82952F]",
      "from-[#82952F] to-[#5d6b20]",
      "from-[#5d6b20] to-[#9fa839]",
    ];
    return variants[index % variants.length];
  };

  const ServiceCard = ({ service, index }) => {
    const IconComponent = service.icon;
    const isHovered = hoveredService === index;
    const gradientClass = getGradientVariant(index);

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
            className="absolute text-lg opacity-0 group-hover:opacity-70 transition-all duration-500 pointer-events-none z-20"
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
              ? "bg-gray-800/50 border border-gray-700/50 hover:border-[#82952F]/40"
              : "bg-white/70 border border-gray-200/50 hover:border-[#82952F]/50"
          } backdrop-blur-sm`}
          style={{
            transform: isHovered
              ? `translate(${mousePosition.x * 0.1}px, ${
                  mousePosition.y * 0.1
                }px) scale(1.05) translateY(-8px)`
              : "scale(1) translateY(0)",
            boxShadow: isHovered
              ? `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 30px rgba(130, 149, 47, 0.2)`
              : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Background gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-[#82952F]/5 to-[#6d7d28]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
          ></div>

          {/* Animated border glow */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${gradientClass} opacity-0 group-hover:opacity-20 rounded-3xl transition-all duration-500 blur-sm`}
          ></div>

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div
                className={`text-lg font-bold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}
              >
                {service.id}
              </div>
              <div
                className={`p-3 rounded-2xl bg-gradient-to-r ${gradientClass} transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-[#82952F]/30`}
              >
                <IconComponent size={24} className="text-white" />
              </div>
            </div>

            <h3
              className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                isHovered
                  ? `text-transparent bg-gradient-to-r ${gradientClass} bg-clip-text`
                  : isDark
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              {service.title}
            </h3>

            <p
              className={`${
                isDark ? "text-gray-300" : "text-gray-600"
              } mb-6 leading-relaxed transition-colors duration-300`}
            >
              {service.description}
            </p>

            <button
              className={`group/btn flex items-center gap-3 font-semibold transition-all duration-300 hover:gap-4 ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              <span
                className={`bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent font-semibold`}
              >
                Learn More
              </span>
              <div
                className={`p-2 rounded-full bg-gradient-to-r ${gradientClass} group-hover:shadow-lg transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:rotate-12 group-hover:shadow-[#82952F]/40`}
              >
                <ExternalLink size={16} className="text-white" />
              </div>
            </button>
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#82952F]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>

          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(130, 149, 47, 0.3) 1px, transparent 0)`,
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} id="services" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#82952F] text-sm font-semibold uppercase tracking-wider animate-fade-in-up">
              What I Offer
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            My{" "}
            <span className="text-[#82952F] relative">
              Services
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#82952F] to-[#6d7d28] rounded-full animate-expand"></div>
            </span>
          </h2>
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
                ? "bg-gray-800/50 border border-gray-700/50 hover:border-[#82952F]/30"
                : "bg-white/70 border border-gray-200/50 hover:border-[#82952F]/40"
            } animate-fade-in-up group hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-[#82952F]/10`}
            style={{ animationDelay: "1s" }}
          >
            <h3
              className={`text-2xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Ready to start your project?
            </h3>
            <p className={`${isDark ? "text-gray-300" : "text-gray-600"} mb-6`}>
              Let's discuss how I can help bring your ideas to life
            </p>
            <button className="bg-gradient-to-r from-[#82952F] to-[#6d7d28] text-white px-8 py-4 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[#82952F]/40 relative overflow-hidden group font-semibold">
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#6d7d28] to-[#82952F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 100%;
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

        .animate-expand {
          animation: expand 1s ease-out 0.8s both;
        }
      `}</style>
    </section>
  );
};

export default Services;
