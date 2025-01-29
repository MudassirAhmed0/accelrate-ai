import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Services />
    </>
  );
};

export default HomePage;
