"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { BiSolidCaretRightCircle } from "react-icons/bi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Card from "./Card";
import FsLightbox from "fslightbox-react";
const cardVideos = [
  {
    src: "/videos/home-hero.mp4",
    poster: "/images/testimonials/sample2.jpg",
  },

  {
    src: "https://youtu.be/qBXjSlkpwFk?si=Xt8kt6Uq08FbDZZU",
    poster: "/images/testimonials/sample3.jpg",
  },

  {
    src: "https://youtu.be/d9a92iJwLWg?si=HX1EL3gOecn_x1YZ",
    poster: "/images/testimonials/sample2.jpg",
  },

  {
    src: "/videos/home-hero.mp4",
    poster: "/images/testimonials/sample3.jpg",
  },

  {
    src: "https://youtu.be/qBXjSlkpwFk?si=Xt8kt6Uq08FbDZZU",
    poster: "/images/testimonials/sample2.jpg",
  },

  {
    src: "https://youtu.be/d9a92iJwLWg?si=HX1EL3gOecn_x1YZ",
    poster: "/images/testimonials/sample3.jpg",
  },
];

const videoUrls = cardVideos.map((item) => item.src);
const VideoTestimonials = ({ heading }) => {
  const [toggler, setToggler] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);
  const testimonialsSectionRef = useRef(null);
  const cardsWrapperRef = useRef(null);

  useGSAP(() => {
    const totalWidth =
      cardsWrapperRef.current.offsetWidth - window.innerWidth / 2;
    gsap.to(cardsWrapperRef.current, {
      x: () => `-${totalWidth}px`,
      scrollTrigger: {
        trigger: testimonialsSectionRef.current,
        start: "top top",
        end: () => `+=${totalWidth}`,
        pin: testimonialsSectionRef.current,
        scrub: 1,
      },
    });
  }, []);

  return (
    <>
      <section
        ref={testimonialsSectionRef}
        className="h-[100vh] flex items-center overflow-hidden relative bg-[#f5f5f5]"
        id={`testimonialsSection`}
      >
        <div
          data-aos="fade-up"
          className="w-[40%] px-[40px] flex flex-col justify-center"
        >
          <div className="flex items-center gap-x-[8px]">
            <span className="block size-[5px] rounded-full bg-black mb-[2px]"></span>
            <span className="text22 uppercase font-medium">
              Nos produits & services
            </span>
          </div>
          <h4 className="text70 font-bold poppins text-black">{heading}</h4>
        </div>
        <div
          ref={cardsWrapperRef}
          className="min-w-[50%] w-auto absolute top-0 left-[50%] translate-x-0 flex items-center bg-[#111] h-full px-[120px]"
          id={`cardsWrapper`}
        >
          <div className="w-full min-h-[65%] flex gap-x-[20px] items-stretch whitespace-nowrap">
            {cardVideos.map((cardVideo, index) => (
              <Card
                toggler={toggler}
                setToggler={setToggler}
                setSlideIndex={setSlideIndex}
                cardVideo={cardVideo}
                key={index}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </section>
      <FsLightbox
        onClose={() => setActiveVideo("")}
        toggler={toggler}
        slide={slideIndex}
        sources={videoUrls}
      />
    </>
  );
};

export default VideoTestimonials;
