"use client";
import Logo from "./Logo";
import Marquee from "react-fast-marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const logos = [
  "/images/about/logos/bmw.svg",
  "/images/about/logos/apple.svg",
  "/images/about/logos/twitter.svg",
  "/images/about/logos/snapchat.svg",
  "/images/about/logos/bmw.svg",
  "/images/about/logos/apple.svg",
  "/images/about/logos/twitter.svg",
  "/images/about/logos/snapchat.svg",
  "/images/about/logos/bmw.svg",
  "/images/about/logos/apple.svg",
  "/images/about/logos/twitter.svg",
  "/images/about/logos/snapchat.svg",
];
const MarqueeSlider = () => {
  useGSAP(() => {
    gsap.from(".marqueeWrapper", {
      opacity: "0",
      duration: "2",
      scrollTrigger: {
        trigger: ".marqueeWrapper",
        start: "top bottom",
      },
    });
  }, []);
  return (
    <div
      style={{
        maskImage:
          "linear-gradient(to right, rgba(248, 248, 255, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0))",
      }}
      className="relative lg:mt-[3.125vw] mt30 marqueeWrapper"
    >
      <Marquee
        pauseOnHover
        speed={100}
        className="relative z-[2] whitespace-nowrap marquee w-full flex justify-between lg:gap-x-[1.5625vw] sm:gap-x-[20px] gap-x-[12px] lg:gap-y-[3.33333333333vw] sm:gap-y-[30px] gap-y-[16px]  overflow-hidden items-center"
      >
        {logos?.map((logo, index) => (
          <Logo logo={logo} key={index} />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeSlider;
