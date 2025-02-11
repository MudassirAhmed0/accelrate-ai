import React from "react";
import Hero from "./hero/Hero";
import TabsSections from "./tabs-section/TabsSections";
import VideoTestimonials from "../home/video-testimonials/VideoTestimonials";
import Cta from "../common/cta/Cta";

const ShowCasePage = () => {
  return (
    <>
      <Hero />
      <TabsSections />
      <VideoTestimonials
        heading={"testimonials"}
        id={"show-case-testimonials"}
      />
    </>
  );
};

export default ShowCasePage;
