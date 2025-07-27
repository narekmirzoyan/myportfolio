import React from 'react';
import myPhoto from './img/ARM_0406.jpg'

const About = () => {
  return (
  <section
      id="about"
      className="
        relative
        min-h-screen            /* минимум высоты экрана, но растягивается дальше, если нужно */
        flex items-center justify-center
        bg-gradient-to-br
        from-gray-900 via-purple-800 to-blue-700
        text-white
        overflow-hidden
        px-6 py-16             /* отступы по краям */
      "
    >
      <div className="
        flex flex-col md:flex-row   /* колонка → ряд на md+ */
        items-center
        gap-8                       /* отступ между фото и текстом */
        max-w-5xl w-full            /* ограничиваем ширину */
      ">
        {/* Фотография */}
        <div className="flex-shrink-0">
          <img
            src={myPhoto}
            alt="Narek Mirzoyan"
            className="w-64 md:w-80 rounded-lg shadow-2xl"
          />
        </div>

        {/* Блок с текстом */}
        <div className="space-y-6 md:space-y-8 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
            I’m <strong>Narek Mirzoyan</strong>, a Front‑End Engineer passionate about crafting
            seamless, high‑performance web experiences. With React, Redux, and Tailwind CSS I
            build interfaces that are both beautiful and efficient.
          </p>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
            I thrive on turning complex challenges into clean, maintainable code. From pixel‑perfect
            layouts to smart API integrations, my focus is always on user experience and performance
            optimization. Let’s create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
