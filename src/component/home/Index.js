import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";
import Stats from "./stats/Stats";
import Expertise from "./expertise/Expertise";
import Contact from "../contact/Contact";

const HomePage = ({ variant }) => {
  return (
    <>
      <Hero variant={variant} />
      <About variant={variant} />
      <Services variant={variant} />
      <Stats variant={variant} />
      <Testimonials
        heading={"Des réponses à vos challenges RH"}
        variant={variant}
      />
      <Expertise variant={variant} />
      <Testimonials heading={"Show cases"} variant={variant} />
      <Contact variant={variant} />
    </>
  );
};

export default HomePage;
