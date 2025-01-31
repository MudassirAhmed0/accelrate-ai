import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";
import Stats from "./stats/Stats";
import Expertise from "./expertise/Expertise";
import Contact from "../contact/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Testimonials heading={"Des réponses à vos challenges RH"} />
      <Expertise />
      <Testimonials heading={"Show cases"} />
      <Contact />
    </>
  );
};

export default HomePage;
