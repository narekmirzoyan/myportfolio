import React from "react";
import htmllogo from "./img/html.png";
import csslogo from "./img/css.png";
import jslogo from "./img/jsImg.png";
import reactlogo from "./img/react.png";
import tailwindlogo from "./img/Tailwind_CSS_Logo.svg.png";
import figmalogo from "./img/figma.png";
import gitlogo from "./img/git.png";
import reduxlogo from './img/redux.svg'

const skills = [
  { name: "HTML",    icon: htmllogo },
  { name: "CSS",     icon: csslogo },
  { name: "JavaScript", icon: jslogo },
  { name: "React",   icon: reactlogo },
  {name: "Redux", icon:reduxlogo},
  { name: "Tailwind CSS", icon: tailwindlogo },
  { name: "Figma",   icon: figmalogo },
  { name: "Git",     icon: gitlogo },
];

const Skills = () => {
  return (
     <section
      id="skills"
      className="
        relative
        py-20
        bg-gradient-to-br from-blue-50 to-purple-100
        overflow-hidden
      "
    >
      {/* SVG‑паттерн для глубины */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 800 800"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          d="M0 400 Q200 200 400 400 T800 400"
        />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Skills
        </h2>

        {/* Горизонтальный скролл */}
        <div
          className="
            flex flex-nowrap overflow-x-auto gap-8
            snap-x snap-mandatory
            scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200
            pb-4
            scrollbar-custom   /* наш кастомный скроллбар */
          "
        >
          {skills.map(({ name, icon }) => (
            <div
              key={name}
              className="
                flex-shrink-0 snap-start
                w-48 h-48
                bg-white bg-opacity-80 backdrop-blur-sm
                p-6 rounded-xl shadow-lg
                flex flex-col items-center justify-center text-center
                transition-transform duration-300
                hover:scale-105
              "
            >
              <img
                src={icon}
                alt={`${name} logo`}
                className="w-16 h-16 mb-4"
              />
              <span className="mt-2 text-lg font-medium text-gray-800">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
