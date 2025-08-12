import React, { useEffect, useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Hero = ({ isDark }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Coding icons with different animations
  const codingIcons = [
    {
      icon: "⚛️",
      animation: "animate-spin",
      delay: "0s",
      position: "top-8 left-8",
    },
    {
      icon: "🚀",
      animation: "animate-bounce",
      delay: "0.5s",
      position: "top-12 right-12",
    },
    {
      icon: "💻",
      animation: "animate-pulse",
      delay: "1s",
      position: "bottom-16 left-12",
    },
    {
      icon: "🎨",
      animation: "animate-ping",
      delay: "1.5s",
      position: "bottom-8 right-8",
    },
    {
      icon: "⚡",
      animation: "animate-bounce",
      delay: "2s",
      position: "top-1/2 left-4",
    },
    {
      icon: "🔥",
      animation: "animate-pulse",
      delay: "2.5s",
      position: "top-1/3 right-4",
    },
    {
      icon: "💡",
      animation: "animate-spin",
      delay: "3s",
      position: "bottom-1/3 left-6",
    },
    {
      icon: "🌟",
      animation: "animate-ping",
      delay: "3.5s",
      position: "bottom-1/4 right-6",
    },
  ];

  return (
    <section id="home" className="pt-24 pb-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div
                className="text-lg text-blue-600 font-medium animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                👋 Hello, I'm
              </div>

              <h1
                className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-300% animate-gradient">
                  Jaybie
                </span>
                , frontend developer based in Philippines.
              </h1>

              <p
                className={`text-lg animate-fade-in-up ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
                style={{ animationDelay: "0.6s" }}
              >
                I am a frontend developer from Philippines, with 5 years of
                experience in multiple companies like Lazada Philippines,
                Foodpanda, Globe Telecom, PNB Bank.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <button
                onClick={() =>
                  window.open("https://wa.me/639193741599", "_blank")
                }
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Connect with me
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* <button
                className={`group px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 relative overflow-hidden ${
                  isDark ? "hover:shadow-blue-500/25" : "hover:shadow-lg"
                }`}
              >
                <span className="relative z-10">My resume</span>
                <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button> */}
            </div>

            {/* Social Links */}
            <div
              className="flex gap-4 animate-fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              {[
                { icon: Github, label: "GitHub" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <button
                    key={index}
                    className={`group p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                      isDark
                        ? "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                    }`}
                    title={social.label}
                  >
                    <IconComponent
                      size={20}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Enhanced Image Section with Animations */}
          <div
            className="relative animate-fade-in-up"
            style={{
              animationDelay: "0.6s",
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div
              className={`relative rounded-3xl p-12 h-96 flex items-center justify-center transform transition-all duration-500 hover:scale-105 group ${
                isDark
                  ? "bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"
                  : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
              }`}
              style={{
                boxShadow: isDark
                  ? "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                  : "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
              }}
            >
              {/* Animated Coding Icons */}
              {codingIcons.map((item, index) => (
                <div
                  key={index}
                  className={`absolute text-2xl ${item.position} ${item.animation} opacity-60 hover:opacity-100 cursor-pointer transition-all duration-300 hover:scale-125 z-10`}
                  style={{
                    animationDelay: item.delay,
                    animationDuration:
                      item.animation === "animate-spin" ? "3s" : "2s",
                    filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.5) rotate(15deg)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1) rotate(0deg)";
                  }}
                >
                  {item.icon}
                </div>
              ))}

              {/* Floating Code Snippets */}
              <div className="absolute top-6 left-6 text-xs text-blue-500/70 font-mono animate-float opacity-50">
                {"</>"}
              </div>
              <div className="absolute bottom-6 right-6 text-xs text-purple-500/70 font-mono animate-float-delayed opacity-50">
                {"{ }"}
              </div>
              <div className="absolute top-6 right-6 text-xs text-green-500/70 font-mono animate-pulse opacity-50">
                {"()=>"}
              </div>

              {/* Main Profile Image Container */}
              <div className="relative w-full h-full overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <img
                  src="/animation.png"
                  alt="Jaybie Profile"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />

                {/* Fallback content */}
                <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 items-center justify-center text-white text-3xl font-bold">
                  JB
                </div>

                {/* Optional hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-3xl border-2 border-blue-500/20 animate-pulse"></div>
              <div
                className="absolute inset-4 rounded-2xl border border-purple-500/20 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Particle effects */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              <div
                className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>

            {/* Floating elements around the container */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-float opacity-70"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-float-delayed opacity-70"></div>
            <div className="absolute -top-2 right-8 w-4 h-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-bounce opacity-60"></div>
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

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
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

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default Hero;
