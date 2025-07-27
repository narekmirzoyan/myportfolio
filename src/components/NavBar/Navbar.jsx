import React from "react";
import nmLogo from "./img/NMLOGO.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between
                      px-3 py-2 md:px-6 md:py-4">
        {/* Logo */}
        <a href="#main" className="group relative">
          <img
            src={nmLogo}
            alt="Logo"
            className="w-10 md:w-20 transition-transform hover:scale-110"
          />
          <span className="
            absolute left-0 bottom-[-2px] h-0.5 w-0 
            bg-indigo-600 
            group-hover:w-full
            transition-[width] duration-300
          "/>
        </a>

        {/* Меню */}
        <ul className="flex items-center space-x-2 md:space-x-6">
          {["about","skills","projects","contact"].map((id, i) => (
            <li key={i}>
              <a
                href={`#${id}`}
                className="group relative text-lg md:text-2xl font-medium
                           px-2 md:px-0 py-1 md:py-0 text-white"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
                <span className="
                  absolute left-0 bottom-[-2px] h-0.5 w-0 
                  bg-indigo-600 
                  group-hover:w-full
                  transition-[width] duration-300
                "/>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;