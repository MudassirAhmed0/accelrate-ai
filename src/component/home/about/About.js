"use client";
import Image from "next/image";
import React, { Fragment, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MarqueeSlider from "./marquee/Marquee";

const About = () => {
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
  useGSAP(() => {
    gsap.from(".bannerImg", {
      // y: "-90", // Animation effect
      y: "-40",
      scale: "1.3",

      duration: "1",
      scrollTrigger: {
        trigger: aboutContainer.current, // The element that triggers the scroll animation
        start: "top bottom", // Animation starts when the top of the aboutContainer hits the top of the viewport
        end: () => `+=${aboutContainer.current.offsetHeight}`,
        scrub: 1, // Smooth scroll animation
        // markers: true, // Optional: Show scroll markers for debugging
      },
    });
  }, []);

  return (
    <section>
      <div
        ref={aboutContainer}
        className="flex justify-between items-center m-[40px] my-[120px] p-[40px] border border-secondary-light rounded-[32px]"
      >
        <div className="relative lg:w-[39.8958333333vw] lg:h-[53.3333333333vw] bannerImg">
          <Image fill alt="about" src={"/images/about/about.png"}></Image>
        </div>
        <div className="w-[52%] text-secondary-light relative">
          <div>
            <span className="inline mr-[1.25vw] text20 relative top-[-4px] opacity-[0.7]">
              (About){" "}
            </span>{" "}
            {/* (About) inline with text */}
            <h3 className="text35 heading inline">
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
