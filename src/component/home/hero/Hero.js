"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BottomTexts from "./bottom-texts/BottomTexts";
import Content from "./Content";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  useGSAP(() => {
    gsap.from(".logo .letter", {
      marginTop: -200,
      stagger: 0.05,
      duration: 2.5,
      ease: "power4.out",
    });
  });
  useGSAP(() => {
    gsap.from(".heroWrapper", {
      y: -900,
      duration: 1.5,
      ease: "power4.out",
    });
  });
  //   useGSAP(() => {
  //     gsap.to(".logoWrapper", {
  //       y: "-90",
  //       scrollTrigger: {
  //         trigger: ".logoWrapper",
  //         start: "top top",
  //         end: "+=100%",
  //         scrub: 1,
  //         markers: true,
  //       },
  //     });
  //   }, []);

  return (
    <section className="overflow-hidden">
      <div className="lg:pt-[5.782vw] px-[40px] flex flex-col min-h-[90vh] heroWrapper bg-black">
        <div className="overflow-hidden logoWrapper">
          <div className="text-[10.6vw] font-semibold logo modica flex text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-teal-500">
            {[
              "A",
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
              <span key={index} className="letter inline-block">
                {letter}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-end text-primary-teal text-[16px] font-light tracking-[-0.16px] leading-[17.5px] mt-auto pb-[36px]">
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
      <div className="relative overflow-hidden h-[100vh]">
        <div className="absolute top-0 left-0 size-full">
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
