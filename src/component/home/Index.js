import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Services from "./services/Services";
import Stats from "./stats/Stats";
import Expertise from "./expertise/Expertise";
import Contact from "../contact/Contact";
import VideoTestimonials from "./video-testimonials/VideoTestimonials";
import Testimonials from "./testimonials/Testimonials";

const HomePage = ({ variant }) => {
  return (
    <>
      <Hero variant={variant} />
      <About variant={variant} />
      <Services variant={variant} />
      <Stats variant={variant} />
      <VideoTestimonials
        id={"showcase"}
        heading={"Show case"}
        variant={variant}
      />
      <Expertise variant={variant} />
      <VideoTestimonials
        heading={"Testimonials"}
        variant={variant}
        id={"testimonials"}
      />
      <Testimonials variant={variant} />
      <Contact variant={variant} />
    </>
  );
};

export default HomePage;
