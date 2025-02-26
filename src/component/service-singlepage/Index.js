import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import KeyMetrics from "./keymetrics/KeyMetrics";
import VideoTestimonials from "../home/video-testimonials/VideoTestimonials";
import Testimonials from "../home/testimonials/Testimonials";
import Cta from "../common/cta/Cta";
const cardVideos = [
  {
    src: "/videos/home-hero.mp4",
    poster: "/images/testimonials/thumbnail.jpg",
  },

  {
    src: "https://youtu.be/qBXjSlkpwFk?si=Xt8kt6Uq08FbDZZU",
    poster: "/images/testimonials/thumbnail.jpg",
  },

  {
    src: "https://youtu.be/d9a92iJwLWg?si=HX1EL3gOecn_x1YZ",
    poster: "/images/testimonials/thumbnail.jpg",
  },
];
const ServiceSinglePage = () => {
  return (
    <>
      <Hero />
      <About />
      <KeyMetrics />
      <VideoTestimonials
        heading={"Testimonials"}
        id={"testimonials"}
        headingTag={"The Journey with us"}
        videoCard
        data={cardVideos}
      />
      <Testimonials />
    </>
  );
};

export default ServiceSinglePage;
