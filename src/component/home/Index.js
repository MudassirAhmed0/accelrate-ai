import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Services from "./services/Services";
import Stats from "./stats/Stats";
import Expertise from "./expertise/Expertise";
import Contact from "./contact/Contact";
import VideoTestimonials from "./video-testimonials/VideoTestimonials";
import Testimonials from "./testimonials/Testimonials";
import { caseStudiesData } from "@/component/show-case/Index";

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
        headingTag={"Show case"}
        variant={variant}
        data={caseStudiesData}
      />
      <Expertise variant={variant} />
      <VideoTestimonials
        variant={variant}
        id={"testimonials"}
        heading={"In our client's words"}
        headingTag={"The Journey with us"}
        videoCard
        data={cardVideos}
      />
      <Testimonials variant={variant} />
      <Contact variant={variant} />
    </>
  );
};

export default HomePage;
