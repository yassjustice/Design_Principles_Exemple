import React from "react";

const PrincipleCard = ({ title, sections }) => (
  <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/30 p-8 mb-8 animate-fade">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-green-400 to-pink-500 bg-clip-text text-transparent">
      {title}
    </h2>
    {sections.map((section, idx) => (
      <div key={idx} className="mb-8 animate-slide">
        <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">
          {section.subtitle}
        </h3>
        <ul className="list-disc pl-6 space-y-3">
          {section.content.map((item, i) => (
            <li key={i} className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
              {item}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default PrincipleCard;
