import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Sparkles,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import emailjs from "emailjs-com";

const Contact = ({ isDark = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /* const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  }; */

  // Updated contactInfo
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jaybie1909@gmail.com",
      href: "mailto:jaybie1909@gmail.com",
      gradient: ["#a855f7", "#ec4899"], // from-purple-500 to-pink-500
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63-919-374-1599",
      href: "tel:+63-919-374-1599",
      gradient: ["#3b82f6", "#06b6d4"], // from-blue-500 to-cyan-500
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Philippines",
      href: "#",
      gradient: ["#22c55e", "#10b981"], // from-green-500 to-emerald-500
    },
  ];

  return (
    <section
      id="contact"
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
              isDark ? "#8b5cf6" : "#3b82f6"
            }, transparent)`,
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
          }}
        />
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 blur-2xl ${
            isDark ? "bg-blue-500" : "bg-purple-500"
          }`}
        />
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 blur-2xl ${
            isDark ? "bg-pink-500" : "bg-cyan-500"
          }`}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <MessageCircle
              className={`w-6 h-6 ${
                isDark ? "text-purple-400" : "text-purple-600"
              }`}
            />
            <span
              className={`text-sm font-semibold uppercase tracking-wider ${
                isDark ? "text-purple-400" : "text-purple-600"
              }`}
            >
              Let's Connect
            </span>
          </div>
          <h2
            className={`text-5xl md:text-6xl font-black mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
              Get In Touch
            </span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Contact info */}
          <div className="space-y-8">
            <div
              className={`p-8 rounded-3xl backdrop-blur-lg border ${
                isDark
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-white/70 border-gray-200"
              } shadow-xl`}
            >
              <h3
                className={`text-3xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Let's Start a Conversation
              </h3>
              <p
                className={`text-lg leading-relaxed mb-8 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                I'm currently available to work on new projects, so feel free to
                send me a message about anything that you want me to work on. I
                respond to all inquiries within 24 hours.
              </p>

              {/* Contact methods with enhanced styling */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: "slideInLeft 0.6s ease-out forwards",
                    }}
                  >
                    <a
                      href={item.href}
                      className={`flex items-center gap-6 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                        isDark ? "hover:bg-gray-700/50" : "hover:bg-gray-100/70"
                      } backdrop-blur-sm`}
                    >
                      {/* Icon container */}
                      <div
                        className="relative p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                        style={{
                          background: `linear-gradient(to bottom right, ${item.gradient[0]}, ${item.gradient[1]})`,
                        }}
                      >
                        <item.icon size={24} className="text-white" />
                        <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Text content */}
                      <div className="flex-1">
                        <div
                          className={`font-semibold text-lg ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {item.label}
                        </div>
                        <div
                          className={`${
                            isDark ? "text-gray-300" : "text-gray-600"
                          } 
                        group-hover:text-transparent group-hover:bg-clip-text 
                        transition-all duration-300`}
                          style={{
                            backgroundImage: `linear-gradient(to right, ${item.gradient[0]}, ${item.gradient[1]})`,
                          }}
                        >
                          {item.value}
                        </div>
                      </div>

                      {/* Arrow */}
                      <ArrowRight
                        className={`w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability status */}
            <div
              className={`p-6 rounded-2xl backdrop-blur-lg border ${
                isDark
                  ? "bg-green-900/20 border-green-700/50"
                  : "bg-green-50/70 border-green-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <span
                  className={`font-medium ${
                    isDark ? "text-green-400" : "text-green-700"
                  }`}
                >
                  Available for new projects
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div
            className={`p-8 rounded-3xl backdrop-blur-lg border shadow-xl ${
              isDark
                ? "bg-gray-800/50 border-gray-700"
                : "bg-white/70 border-gray-200"
            }`}
          >
            <div className="space-y-6">
              {/* Name field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Your Name"
                  required
                  className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 backdrop-blur-sm ${
                    focusedField === "name"
                      ? `border-purple-500 ${
                          isDark ? "bg-gray-700/50" : "bg-white/90"
                        }`
                      : `${
                          isDark
                            ? "bg-gray-700/30 border-gray-600 text-white"
                            : "bg-white/50 border-gray-300 text-gray-900"
                        }`
                  } placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-500/20`}
                />
              </div>

              {/* Email field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Your Email"
                  required
                  className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 backdrop-blur-sm ${
                    focusedField === "email"
                      ? `border-purple-500 ${
                          isDark ? "bg-gray-700/50" : "bg-white/90"
                        }`
                      : `${
                          isDark
                            ? "bg-gray-700/30 border-gray-600 text-white"
                            : "bg-white/50 border-gray-300 text-gray-900"
                        }`
                  } placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-500/20`}
                />
              </div>

              {/* Contact Number field */}
              <div className="relative">
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("contactNumber")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Your Contact Number"
                  required
                  className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 backdrop-blur-sm ${
                    focusedField === "contactNumber"
                      ? `border-purple-500 ${
                          isDark ? "bg-gray-700/50" : "bg-white/90"
                        }`
                      : `${
                          isDark
                            ? "bg-gray-700/30 border-gray-600 text-white"
                            : "bg-white/50 border-gray-300 text-gray-900"
                        }`
                  } placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-500/20`}
                />
              </div>

              {/* Message field */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  placeholder="Your Message"
                  required
                  className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 backdrop-blur-sm resize-none ${
                    focusedField === "message"
                      ? `border-purple-500 ${
                          isDark ? "bg-gray-700/50" : "bg-white/90"
                        }`
                      : `${
                          isDark
                            ? "bg-gray-700/30 border-gray-600 text-white"
                            : "bg-white/50 border-gray-300 text-gray-900"
                        }`
                  } placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-500/20`}
                />
              </div>

              {/* Submit button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  emailjs
                    .send(
                      "service_wmg77de",
                      "template_2tc6x3a",
                      {
                        name: formData.name,
                        email: formData.email,
                        contact_number: formData.contactNumber,
                        message: formData.message,
                      },
                      "0q_6shdl0EFrxIzx1"
                    )
                    .then(() => {
                      setIsSubmitting(false);
                      setIsSubmitted(true);
                      setFormData({
                        name: "",
                        email: "",
                        contactNumber: "",
                        message: "",
                      });
                      setTimeout(() => setIsSubmitted(false), 3000);
                    })
                    .catch(() => {
                      setIsSubmitting(false);
                      alert("Failed to send message. Please try again later.");
                    });
                }}
                disabled={isSubmitting || isSubmitted}
                className={`w-full p-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] focus:scale-[0.98] relative overflow-hidden group ${
                  isSubmitted
                    ? "bg-green-500 text-white"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl hover:shadow-purple-500/25"
                } disabled:opacity-75 focus:outline-none focus:ring-4 focus:ring-purple-500/20`}
              >
                <div className="flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </div>

                {/* Button shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
