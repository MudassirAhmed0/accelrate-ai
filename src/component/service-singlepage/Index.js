"use client";
import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import KeyMetrics from "./keymetrics/KeyMetrics";
import VideoTestimonials from "../home/video-testimonials/VideoTestimonials";
import Testimonials from "../home/testimonials/Testimonials";
import Cta from "../common/cta/Cta";
import ListsWrapper from "./about/lists-wrapper/ListsWrapper";
import GridLayout from "./about/grid-layout/GridLayout";
import CTABox from "./about/CTABox";
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
const ServiceSinglePage = ({ pageData }) => {
  return (
    <>
      <Hero
        hero={pageData?.hero}
        image={
          "https://images.pexels.com/photos/17483874/pexels-photo-17483874/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-was-inspired-by-neural-networks-used-in-deep-learning-it-was-created-by-novoto-studio-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />
      <About
        brandLogos={pageData?.brandLogos}
        about={pageData?.about}
        slug={pageData.slug}
      />

      <ListsWrapper data={pageData?.process} />

      <GridLayout grids={pageData?.grids} />
      <CTABox cta={pageData?.cta} />
      <ListsWrapper data={pageData?.lists} />
    </>
  );
};

export default ServiceSinglePage;
