"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BottomTexts from "./bottom-texts/BottomTexts";
import Content from "./Content";
gsap.registerPlugin(ScrollTrigger);
const Hero = ({ variant }) => {
  const heroWrapper = useRef(null);
  useGSAP(() => {
    gsap.from(".logo .letter", {
      marginTop: -200,
      stagger: 0.05,
      duration: 2.5,
      ease: "power4.out",
    });
  });

  useGSAP(() => {
    const hero = heroWrapper.current;

    if (!hero) return;

    // Initial entrance animation
    gsap.fromTo(
      hero,
      { y: -900 }, // Start position
      {
        y: 0, // End at natural position
        duration: 1.5,
        ease: "power4.out",
        onComplete: () => {
          // Scroll-triggered animation AFTER the entrance animation
          gsap.to(hero, {
            y: () => -hero.offsetHeight + window.innerHeight * 0.9,
            scrollTrigger: {
              trigger: hero,
              start: "top top", // Starts when the top of the hero hits the top of the viewport
              end: () => `+=${hero.offsetHeight + window.innerHeight * 0.9}`,
              scrub: 1,
              preventOverlaps: true,
              anticipatePin: 1,
            },
          });
        },
      }
    );
  }, []);
  useGSAP(() => {
    gsap.from(".heroVideoWrapper", {
      y: -200,
      opacity: 0,
      delay: 0.7,
      ease: "power1.out",
    });
  });

  return (
    <section className="overflow-hidden">
      <div
        ref={heroWrapper}
        className={`lg:pt-[5.782vw] pt-[30vw] lg:px-[40px] px-[2.79069767442vw] flex flex-col min-h-[90vh] heroWrapper ${
          variant ? (variant == "blue" ? " bg-[#111] " : "") : " bg-black "
        } z-[2]`}
      >
        <div className="overflow-hidden logoWrapper">
          <div className="text-[10.5vw] lg:text-[10.5vw] flex items-center font-semibold logo modica text-white">
            <img
              className="inline-block w-[9.5vw] letter"
              src="/images/icons/thunder.svg"
            />
            {[
              // "A",
              "C",
              "C",
              "E",
              "L",
              "E",
              "R",
              "A",
              "T",
              "E",
              "-",
              "A",
              "I",
            ].map((letter, index) => (
              <span
                key={index}
                className={`letter inline-block ${
                  letter == "-" ? " poppins " : ""
                }`}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-end  text-white text-[16px] font-light tracking-[-0.16px] leading-[17.5px] mt-auto pb-[36px]">
          <BottomTexts />
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={12}
              fill="none"
              viewBox="0 0 12 12"
              className="icon"
              data-v-b7c81db9=""
            >
              <path
                fill="currentColor"
                d="m5.796 9.246-2.97-2.97-.762.782 4.356 4.356 4.356-4.356-.782-.782-2.96 2.96V1.039H5.806z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative h-[100vh] heroVideoWrapper z-[-1]">
        <div className="absolute top-0 left-0 size-full z-[-1] heroVideo">
          <span className="absolute top-0 left-0 size-full bg-black bg-opacity-[0.5]"></span>
          <video
            src="/videos/home-hero.mp4"
            muted
            loop
            autoPlay
            playsInline
            className="object-cover size-full"
            preload="auto"
            loading="lazy"
          ></video>
        </div>
      </div>
      <Content />
    </section>
  );
};

export default Hero;
