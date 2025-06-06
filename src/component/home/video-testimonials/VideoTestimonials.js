"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { BiSolidCaretRightCircle } from "react-icons/bi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Card from "./Card";
import FsLightbox from "fslightbox-react";
import useResponsivness from "@/hooks/useResponsivness";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RegularCard from "@/component/show-case/tabs-section/regular-cards/regular-card/RegularCard";
// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const VideoTestimonials = ({ heading, headingTag, id, videoCard, data }) => {
  const videoUrls = data.map((item) => item. youtubeSrc );
  const { isDesktop } = useResponsivness();
  const [toggler, setToggler] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);
  const testimonialsSectionRef = useRef(null);
  const cardsWrapperRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);

  // useGSAP(() => {
  //   if (isDesktop) {
  //     const totalWidth =
  //       cardsWrapperRef.current.offsetWidth - window.innerWidth / 2;
  //     gsap.to(cardsWrapperRef.current, {
  //       x: () => `-${totalWidth}px`,
  //       scrollTrigger: {
  //         trigger: testimonialsSectionRef.current,
  //         start: "top top",
  //         end: () => `+=${totalWidth}`,
  //         pin: testimonialsSectionRef.current,
  //         scrub: 1,
  //       },
  //     });
  //   }
  // }, [isDesktop]);

  useEffect(() => {
    if (
      !isDesktop ||
      !testimonialsSectionRef.current ||
      !cardsWrapperRef.current
    )
      return;

    const totalWidth =
      cardsWrapperRef.current.offsetWidth - window.innerWidth / 2;

    let ctx = gsap.context(() => {
      gsap.to(cardsWrapperRef.current, {
        x: `-${totalWidth}px`,
        scrollTrigger: {
          trigger: testimonialsSectionRef.current,
          start: "top top",
          end: `+=${totalWidth}`,
          pin: true,
          scrub: 1,
        },
      });
    });

    return () => ctx.revert(); // Clean up animation on unmount
  }, [isDesktop]);

  return (
    <>
      <section
        ref={testimonialsSectionRef}
        className="h-[100vh] flex flex-col lg:flex-row items-center overflow-hidden relative bg-[#f5f5f5]"
        id={`${id}`}
      >
        <div
          data-aos="fade-up"
          className="lg:w-[47%] lg:px-[40px] lg:py-[unset] px-[2.79069767442vw] pt-[64px] pb-[40px] flex flex-col justify-center"
        >
          <div className="flex items-center gap-x-[8px]">
            <span className="block size-[5px] rounded-full bg-black mb-[2px]"></span>
            <span className="text22 capitalize font-medium">{headingTag}</span>
          </div>
          <h4 className="text70 font-bold poppins text-black">{heading}</h4>
        </div>
        <div
          ref={cardsWrapperRef}
          className="lg:min-w-[50%] w-full lg:w-[unset] lg:absolute top-0 left-[50%] translate-x-0 flex items-center bg-[#111] h-full lg:px-[120px]"
          id={`cardsWrapper`}
        >
          <div className="w-full lg:w-[unset] overflow-auto px-[60px] lg:px-[unset] lg:overFlowUnset hideScroll min-h-[60%] flex lg:gap-x-[1.5625vw] gap-x-[20px] items-stretch lg:whitespace-nowrap">
            {videoCard
              ? data?.map((cardVideo, index) => (
                  <Card
                    toggler={toggler}
                    setToggler={setToggler}
                    setSlideIndex={setSlideIndex}
                    cardVideo={cardVideo}
                    key={index}
                    index={index + 1}
                    activeVideo={activeVideo}
                    setActiveVideo={setActiveVideo}
                  />
                ))
              : data?.map(
                  (cardData, index) =>
                   index <5 && (
                      <RegularCard
                        key={index}
                        cardData={cardData}
                        fromPinSection
                      />
                    )
                )}
          </div>
        </div>
      </section>
      <FsLightbox toggler={toggler} slide={slideIndex} sources={videoUrls} />
    </>
  );
};

export default VideoTestimonials;
