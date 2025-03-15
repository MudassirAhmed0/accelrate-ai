import React from "react";
import dynamic from "next/dynamic";
import Hero from "./hero/Hero";
import { caseStudiesData } from "@/component/show-case/Index";

// Dynamically import other components
const About = dynamic(() => import("./about/About"), { ssr: false });
const Services = dynamic(() => import("./services/Services"), { ssr: false });
const Stats = dynamic(() => import("./stats/Stats"), { ssr: false });
const Expertise = dynamic(() => import("./expertise/Expertise"), {
  ssr: false,
});
const Contact = dynamic(() => import("./contact/Contact"), { ssr: false });
const VideoTestimonials = dynamic(
  () => import("./video-testimonials/VideoTestimonials"),
  { ssr: false }
);
const Testimonials = dynamic(() => import("./testimonials/Testimonials"), {
  ssr: false,
});

const cardVideos = [
  {
    src: "/videos/daniel-short.mp4",
    youtubeSrc: "https://www.youtube.com/watch?v=kVfjNfReacQ",
    poster: "/images/testimonials/thumbnail.jpg",
  },
  {
    src: "/videos/seema-short.mp4",
    youtubeSrc: "https://www.youtube.com/watch?v=6tr1gKXZlu4",
    poster: "/images/testimonials/thumbnail.jpg",
  },
  {
    src: "/videos/juan-short.mp4",
    youtubeSrc: "https://www.youtube.com/watch?v=1Dz9VSOpOlw",
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
        heading={"In our client's words"}
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
