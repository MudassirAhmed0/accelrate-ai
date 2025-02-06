"use client";
import Image from "next/image";
import React, { Fragment, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MarqueeSlider from "./marquee/Marquee";

const About = ({ variant }) => {
  const aboutContainer = useRef();
  // Function to wrap each word in spans
  const wrapWordsInSpan = (text) => {
    return text.split(" ").map((word, index) => {
      return (
        <Fragment key={index}>
          <span className="inline-block">{word}</span>{" "}
        </Fragment>
      );
    });
  };
  useGSAP(() => {
    gsap.from(".heading span", {
      // y: "-90", // Animation effect
      opacity: "0.3",
      stagger: "0.09",
      duration: "1",
      scrollTrigger: {
        trigger: aboutContainer.current, // The element that triggers the scroll animation
        start: "25% 70%", // Animation starts when the top of the aboutContainer hits the top of the viewport
        end: () => `55% 72%`, // Animation ends when the bottom of the aboutContainer hits the top of the viewport
        scrub: 1, // Smooth scroll animation
        // markers: true, // Optional: Show scroll markers for debugging
      },
    });
  }, []);

  return (
    <section
      id="about"
      className={`${
        variant ? (variant == "blue" ? " bg-[ghostwhite] " : "") : " bg-black "
      } py1`}
    >
      <div
        ref={aboutContainer}
        className="flex flex-wrap gap-[40px] justify-between items-center myContainer"
      >
        <div
          data-aos="fade"
          className="relative lg:w-[34.8958333333vw] lg:h-[53.3333333333vw] w-full sm:h-[60vw] h-[85vw]"
        >
          <Image
            fill
            alt="about"
            src="/images/icons/gradient-rocket.svg"
          ></Image>
        </div>
        <div className="lg:w-[52%] w-full relative">
          <div>
            <span className="inline mr-[12px] lg:mr-[1.25vw] lg:text20 mtext16 relative top-[-4px] opacity-[0.7] poppins font-[600] text-black">
              (About){" "}
            </span>{" "}
            {/* (About) inline with text */}
            <h3 className="lg:text38 mtext22 leading-[22px] heading inline poppins font-[600] text-black">
              {wrapWordsInSpan(
                "We don’t just bring AI into your business—we empower you to lead with it. Accelerate-AI transforms workflows, scales operations, and drives unparalleled impact, ensuring you’re ready for the AI-driven future."
              )}
            </h3>
          </div>
          <MarqueeSlider />
        </div>
      </div>
    </section>
  );
};

export default About;
