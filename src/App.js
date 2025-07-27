import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./pages/HomePage/Hero";
import About from "./pages/AboutPage/About";
import Skills from "./pages/SkillsPage/Skills";
import Projects from "./pages/ProjectsPage/Projects";
import Contact from "./pages/ContactPage/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="main">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          {/* <Projects /> */}
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
