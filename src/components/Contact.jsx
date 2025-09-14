import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
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

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
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
        setFormData({ name: "", email: "", contactNumber: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 3000);
      })
      .catch(() => {
        setIsSubmitting(false);
        alert("Failed to send message. Please try again later.");
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jaybie1909@gmail.com",
      href: "mailto:jaybie1909@gmail.com",
      gradient: ["#2563eb", "#7c3aed"],
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62-851-1762-6717",
      href: "tel:+62-851-1762-6717",
      gradient: ["#7c3aed", "#06b6d4"],
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Indonesia",
      href: "#",
      gradient: ["#06b6d4", "#2563eb"],
    },
  ];

  // Helper to render input fields
  const renderInput = (type, name, placeholder, rows) => {
    const isTextArea = type === "textarea";
    const commonProps = {
      name,
      value: formData[name],
      onChange: handleInputChange,
      onFocus: () => setFocusedField(name),
      onBlur: () => setFocusedField(null),
      placeholder,
      required: true,
      className: `w-full p-4 rounded-2xl border transition-all duration-300 backdrop-blur-sm ${
        focusedField === name
          ? `border-blue-500 ${isDark ? "bg-slate-700/50" : "bg-white/90"}`
          : `${
              isDark
                ? "bg-slate-700/30 border-slate-600 text-white"
                : "bg-white/50 border-slate-300 text-slate-900"
            }`
      } placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
        isTextArea ? "resize-none" : ""
      }`,
    };
    return isTextArea ? (
      <textarea {...commonProps} rows={rows} />
    ) : (
      <input {...commonProps} type={type} />
    );
  };

  return (
    <section
      id="contact"
      className={`relative py-24 px-6 overflow-hidden ${
        isDark ? "bg-transparent text-white" : "bg-transparent text-slate-900"
      }`}
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <MessageCircle
              className={`w-6 h-6 ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            />
            <span
              className={`text-sm font-semibold uppercase tracking-wider ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            >
              Let's Connect
            </span>
          </div>
          <h2
            className={`text-5xl md:text-6xl font-black mb-6 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">Get In Touch</span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div
              className={`p-8 rounded-3xl backdrop-blur-lg border shadow-xl ${
                isDark
                  ? "bg-slate-800/50 border-slate-700"
                  : "bg-white/70 border-slate-200"
              }`}
            >
              <h3
                className={`text-3xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Let's Start a Conversation
              </h3>
              <p
                className={`text-lg leading-relaxed mb-8 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                I'm available for new projects — drop me a message and I'll
                reply within 24 hours.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`flex items-center gap-6 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                      isDark ? "hover:bg-slate-700/50" : "hover:bg-slate-100/70"
                    } backdrop-blur-sm`}
                  >
                    <div
                      className="relative p-4 rounded-xl shadow-lg"
                      style={{
                        background: `linear-gradient(to bottom right, ${item.gradient[0]}, ${item.gradient[1]})`,
                      }}
                    >
                      <item.icon size={24} className="text-white" />
                      <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex-1">
                      <div
                        className={`font-semibold text-lg ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {item.label}
                      </div>
                      <div
                        className="bg-clip-text text-transparent"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${item.gradient[0]}, ${item.gradient[1]})`,
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 opacity-0 hover:opacity-100 transition-all ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    />
                  </a>
                ))}
              </div>
            </div>

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

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`p-8 rounded-3xl backdrop-blur-lg border shadow-xl ${
              isDark
                ? "bg-slate-800/50 border-slate-700"
                : "bg-white/70 border-slate-200"
            } space-y-6`}
          >
            {renderInput("text", "name", "Your Name")}
            {renderInput("email", "email", "Your Email")}
            {renderInput("tel", "contactNumber", "Your Contact Number")}
            {renderInput("textarea", "message", "Your Message", 5)}

            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full p-4 rounded-2xl font-semibold text-lg transition-all duration-300 relative overflow-hidden group ${
                isSubmitted
                  ? "bg-green-500 text-white"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:shadow-blue-500/40"
              } disabled:opacity-75 focus:outline-none focus:ring-4 focus:ring-blue-500/30`}
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
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </button>
          </form>
        </div>
      </div>
      
      <style jsx>{`
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

export default Contact;
