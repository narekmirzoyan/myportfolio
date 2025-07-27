import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper"; // для версии 9

import img1 from "./img/4.png";
import img2 from "./img/5.png";
import img3 from "./img/6.png";
import img4 from "./img/7.png";

const projects = [
  { title: "Project One", img: img1, url: "https://demo1.com" },
  { title: "Project Two", img: img2, url: "https://demo2.com" },
  { title: "Project Three", img: img3, url: "https://demo3.com" },
  { title: "Project Four", img: img4, url: "https://demo4.com" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Portfolio</h2>

        <Swiper
          modules={[Pagination, Mousewheel]}
          slidesPerView="auto"
          spaceBetween={16}
          mousewheel={{ forceToAxis: true }}
          pagination={{ clickable: true }} // убрали el
          className="!overflow-visible"
        >
          {projects.map(({ title, img, url }, idx) => (
            <SwiperSlide
              key={idx}
              style={{ width: "18rem", height: "12rem" }}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="
                  absolute inset-0 bg-black bg-opacity-40
                  opacity-0 hover:opacity-100 transition-opacity
                  flex items-center justify-center text-white text-lg font-semibold
                "
                >
                  {title}
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
