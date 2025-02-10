import LinkBtn from "@/component/common/buttons/LinkBtn";
import Link from "next/link";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <section className="lg:pt-[11.4583333333vw] !pb-[unset] sm:py-[180px] py-[120px] bg-black text-white">
      <div className="myContainer">
        <h1
          data-aos="fade-up"
          className="text90 font-medium tracking-tighter lg:w-[60%]"
        >
          We build websites that drive business success
        </h1>
        <div
          data-aos="fade"
          className="mt30 w-full flex lg:items-end items-center justify-between lg:gap-[0.625vw] gap-[12px] flex-wrap"
        >
          <p className="lg:text20 mtext18 opacity-[0.7]">
            From strategy to technical execution, <br /> explore our case
            studies to discover the impact of our agency.
          </p>
          <span className="h-[1px] bg-white grow-[1] lg:min-w-[unset] lg:w-[unset] sm:min-w-[65%] sm:w-[65%] min-w-full w-full lg:mb-[0.625vw] opacity-[0.2]"></span>

          <LinkBtn text={"Let's work together"} link={"/"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
