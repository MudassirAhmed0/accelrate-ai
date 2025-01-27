"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedText from "./bottom-texts/AnimatedText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  // useGSAP(() => {
  //   gsap.from(".logo .letter", {
  //     y: -200,
  //     stagger: -0.05,
  //     duration: 2.5,
  //     ease: "power4.out",
  //   });
  // });
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
          {/* <svg
            className="logo"
            id="Calque_1"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1358 217"
            fill="white"
            data-v-75307eb6=""
          >
            <path
              className="letter"
              d="M1358,102.2c0-50.7-30.6-101.4-97-102.2-57.6-.8-101,40.4-101,108.1s46.9,108.9,102.1,108.9,87.4-29.3,94.6-70.9h-35.8c-6.8,24.2-25.8,38.8-58,38.8s-63.2-19.8-66.4-65.3h160.2c.8-5.9,1.2-11.5,1.2-17.4ZM1197.4,89.5c5.2-40.8,30.2-57.4,62.8-57.4s56.4,16.2,60.8,57.4h-123.6Z"
            />
            <path
              className="letter"
              d="M1045.4,32.1c31.4,0,57.6,12.7,62.4,50.7h35.4C1139.2,26.5,1097.5,0,1046.2,0s-102.1,39.2-102.1,108.1,46.9,108.9,102.5,108.9,92.6-31.7,96.6-88.7h-35.4c-5.2,38-30.2,56.6-62,56.6s-65.6-25.3-65.6-76.4,29.8-76.4,65.2-76.4Z"
            />
            <rect
              className="letter"
              x="889.3"
              y="5.6"
              width={35}
              height="205.9"
            />
            <path
              className="letter"
              d="M826.5,122.4c0,45.9-22.7,63-54.8,63s-54.8-17-54.8-63V5.6h-35v123.9c0,63.4,48.5,87.5,89.8,87.5s89.8-24.2,89.8-87.5V5.6h-35v116.8Z"
            />
            <path
              className="letter"
              d="M556.4,0c-54.8,0-102.5,39.2-102.5,108.1s47.7,108.9,102.5,108.9,102.5-40,102.5-108.9S611.2,0,556.4,0ZM556.4,184.9c-35.8,0-66.4-25.3-66.4-76.4s30.6-76.4,66.4-76.4,66.4,23.4,66.4,76.4-30.6,76.4-66.4,76.4Z"
            />
            <path
              className="letter"
              d="M395,118.8c0,39.6-20.3,61-52.5,61h-21.5v34.1h20.7c42.5,0,88.2-26.9,88.2-92.3V5.6h-35v113.2Z"
            />
            <path
              className="letter"
              d="M216.8,0c-57.6-.8-100.9,40.4-100.9,108.1s46.9,108.9,102.1,108.9,87.4-29.3,94.6-70.9h-35.8c-6.8,24.2-25.8,38.8-58,38.8s-63.2-19.8-66.4-65.3h160.2c.8-5.9,1.2-11.5,1.2-17.4C313.7,51.5,283.1.8,216.8,0ZM153.2,89.5c5.2-40.8,30.2-57.4,62.8-57.4s56.4,16.2,60.8,57.4h-123.6Z"
            />
            <path
              className="letter"
              d="M0,95.4v116h35v-113.2c0-39.6,20.3-61,52.5-61h21.5V3.2h-20.7C45.7,3.2,0,30.1,0,95.4Z"
            />
          </svg> */}
          <div className="logo flex text-white text-[12.5vw] font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-teal-500">
            <p className="letter inline-block">A</p>
            <p className="letter inline-block">C</p>
            <p className="letter inline-block">C</p>
            <p className="letter inline-block">E</p>
            <p className="letter inline-block">L</p>
            <p className="letter inline-block">E</p>
            <p className="letter inline-block">R</p>
            <p className="letter inline-block">A</p>
            <p className="letter inline-block">T</p>
            <p className="letter inline-block">E</p>
            <p className="letter inline-block">-</p>
            <p className="letter inline-block">A</p>
            <p className="letter inline-block">I</p>
          </div>
        </div>
        <div className="flex justify-between items-end text-white suisseIntl text-[16px] font-light tracking-[-0.16px] leading-[17.5px] mt-auto pb-[36px]">
          <AnimatedText />
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
      <div className="bg-black text-white px-[40px] py-[60px]">
        <div className="text60 switzer">
          <h2>Heading - AI-Powered Precision.</h2>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Human-Centric Impact. ",
              500, // wait 1s before replacing "Mice" with "Hamsters"
              "Web Development",
              500,
              "CRM and SaaS Development",
              500,
              "Fintech Development",
              500,
            ]}
            wrapper="span"
            speed={50}
            style={{
              display: "inline-block",
            }}
            repeat={Infinity}
          />
        </div>
        <p className="suisseIntl font-light text30 mt30">
          By 2030, AI will add $15.7 trillion to the global economy. At
          Accelerate-AI, we help you claim{" "}
          <Link href="/">
            <span className="font-bold"> your share</span>
          </Link>{" "}
          by integrating AI and automation into your business processes—quickly
          and effectively.
        </p>
      </div>
    </section>
  );
};

export default Hero;
