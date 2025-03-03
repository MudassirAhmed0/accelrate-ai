import LinkBtn from "@/component/common/buttons/LinkBtn";
import Backgrounds from "@/component/service-singlepage/hero/backgrounds/Backgrounds";
import Link from "next/link";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <section
      className="relative lg:pt-[11.4583333333vw] lg:pb-[6.25vw] py1 sm:pt-[180px] pt-[120px] bg-black text-white fullVh
fullSvh flex items-end"
    >
      <Backgrounds />
      <div className="myContainer relative z-[2]">
        <h1
          data-aos="fade-up"
          className="text70 font-medium tracking-tighter lg:w-[80%]"
        >
          We help businesses scale with AI-powered conversations, automation,
          and next-gen digital experiences.
        </h1>
        <div
          data-aos="fade"
          className="mt30 w-full flex lg:items-end items-center justify-between lg:gap-[0.625vw] gap-[12px] flex-wrap"
        >
          <p className="lg:text20 mtext18 opacity-[0.7]">
            Discover how our AI and automation solutions have helped businesses
            scale efficiently <br /> through our case studies — optimizing
            customer interactions, streamlining backend workflows, and driving
            operational excellence.
          </p>
          <span className="h-[1px] bg-white grow-[1] lg:min-w-[unset] lg:w-[unset] sm:min-w-[65%] sm:w-[65%] min-w-full w-full lg:mb-[0.625vw] opacity-[0.2]"></span>

          <LinkBtn text={"Let's work together"} link={"/#contact"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
