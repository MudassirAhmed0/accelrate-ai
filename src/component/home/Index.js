import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";
import Stats from "./stats/Stats";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Testimonials />
    </>
  );
};

export default HomePage;
