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
      gradient: ["#6B8E23", "#82952F"], // darker to #82952F
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63-919-374-1599",
      href: "tel:+63-919-374-1599",
      gradient: ["#7DAA36", "#82952F"],
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Philippines",
      href: "#",
      gradient: ["#90B63F", "#82952F"],
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
          ? `border-[#82952F] ${isDark ? "bg-gray-700/50" : "bg-white/90"}`
          : `${
              isDark
                ? "bg-gray-700/30 border-gray-600 text-white"
                : "bg-white/50 border-gray-300 text-gray-900"
            }`
      } placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#82952F] ${
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
        isDark ? "bg-transparent text-white" : "bg-transparent text-gray-900"
      }`}
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <MessageCircle
              className={`w-6 h-6 ${
                isDark ? "text-[#82952F]" : "text-[#82952F]"
              }`}
            />
            <span
              className={`text-sm font-semibold uppercase tracking-wider ${
                isDark ? "text-[#82952F]" : "text-[#82952F]"
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
            <span className="text-[#82952F]">Get In Touch</span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
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
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-white/70 border-gray-200"
              }`}
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
                I'm available for new projects — drop me a message and I’ll
                reply within 24 hours.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`flex items-center gap-6 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                      isDark ? "hover:bg-gray-700/50" : "hover:bg-gray-100/70"
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
                          isDark ? "text-white" : "text-gray-900"
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
                        isDark ? "text-gray-400" : "text-gray-500"
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
                  <div className="w-3 h-3 bg-[#82952F] rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-[#82952F] rounded-full animate-ping"></div>
                </div>
                <span
                  className={`font-medium ${
                    isDark ? "text-[#82952F]" : "text-[#82952F]"
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
                ? "bg-gray-800/50 border-gray-700"
                : "bg-white/70 border-gray-200"
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
                  : "bg-[#82952F] text-white hover:shadow-xl hover:shadow-[#82952F]/40"
              } disabled:opacity-75 focus:outline-none focus:ring-4 focus:ring-[#82952F]/30`}
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
    </section>
  );
};

export default Contact;
