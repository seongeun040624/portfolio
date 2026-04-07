import React from 'react';

import Hero from "../component/home/Hero";
import AboutPre from "../component/home/AboutPre";
import ProjectPre from "../component/home/ProjectPre";
import "../style/home.scss";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutPre />
      <ProjectPre />
    </>
  );
};

export default Home;