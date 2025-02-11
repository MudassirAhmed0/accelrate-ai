import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import KeyMetrics from "./keymetrics/KeyMetrics";
import VideoTestimonials from "../home/video-testimonials/VideoTestimonials";
import Testimonials from "../home/testimonials/Testimonials";
import Cta from "../common/cta/Cta";

const ServiceSinglePage = () => {
  return (
    <>
      <Hero />
      <About />
      <KeyMetrics />
      <VideoTestimonials heading={"Testimonials"} id={"testimonials"} />
      <Testimonials />
    </>
  );
};

export default ServiceSinglePage;
