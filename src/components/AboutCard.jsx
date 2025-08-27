// src/components/AboutCard.jsx
import React from "react";

const AboutCard = ({ about, index, className = "", style }) => {
  const { text, icon, gradient } = about || {};
  return (
    <div className={`group relative ${className}`} style={style}>
      {/* Gradient border effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-sm transition-opacity duration-500`}
      />
      <div className="relative flex items-start gap-6">
        <div
          className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
        >
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-lg leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard; // 👈 default export
