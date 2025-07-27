import React from "react";
import { FaDownload } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';

import bg from "./img/bg.jpg";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center text-center p-6 py-50"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center gap-3">
       <h1 className="text-5xl md:text-6xl font-bold text-white">
          Hi, I&apos;m{" "}
          <span className="text-blue-400">
            <Typewriter
              words={["Narek", "Front‑End Developer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Front-End Engineer | React & Redux
        </p>
        <div className="mt-6">
          <a 
          href="#contact"
          className="cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Contact ME
            </span>
          </a>
          <a
            href="/NarekCV.pdf"
            download="/NarekCV.pdf"
            className="cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          >
            <span className="flex justify-center items-center gap-2 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Download CV
              <FaDownload />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
