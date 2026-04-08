import React from "react";
import Hero from "../component/home/Hero";
import AboutPre from "../component/home/AboutPre";
import ProjectPre from "../component/home/ProjectPre";
import Contact from "../component/home/Contact";
import Skill from "../component/home/Skill";
import "../style/home.scss";

const Home = () => {
  return (
    <div className="home-page">
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <AboutPre />
      </section>

      

      <section id="projects">
        <ProjectPre />
      </section>

      <section id="contact">
        <Contact />
      </section>

      
    </div>
  );
};

export default Home;