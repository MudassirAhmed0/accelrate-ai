import Link from "next/link";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <section className="lg:pt-[11.4583333333vw] lg:pb-[6.25vw] sm:py-[180px] py-[120px] bg-black text-white">
      <div className="myContainer">
        <h1 className="text90 font-medium tracking-tighter lg:w-[60%]">
          We build websites that drive business success
        </h1>
        <div className="mt30 w-full flex lg:items-end items-center justify-between lg:gap-[0.625vw] gap-[12px] flex-wrap">
          <p className="lg:text20 mtext18 opacity-[0.7]">
            From strategy to technical execution, <br /> explore our case
            studies to discover the impact of our agency.
          </p>
          <span className="h-[1px] bg-white grow-[1] lg:min-w-[unset] lg:w-[unset] sm:min-w-[65%] sm:w-[65%] min-w-full w-full lg:mb-[0.625vw] opacity-[0.2]"></span>
          <Link
            href={"/"}
            className="ml-auto lg:mb-[-0.3125vw] lg:text22 mtext20 lg:leading-[2.5vw] flex items-center lg:gap-x-[0.3125vw] gap-x-[4px] font-medium group afterLineHover"
          >
            Let&apos;s work together
            <div className="lg:text30 mtext24 relative overflow-hidden">
              <div className="translate-x-0 group-hover:translate-x-[100%] group-hover:duration-[600ms] group-hover:transition-[cubic-bezier(0.62,0.05,0.01,0.99)]">
                <IoMdArrowForward />
              </div>
              <div className="absolute top-0 left-[-100%] group-hover:left-0 group-hover:duration-[600ms] group-hover:transition-[cubic-bezier(0.62,0.05,0.01,0.99)]">
                <IoMdArrowForward />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
