import React from "react";
import { IoMdArrowUp } from "react-icons/io";
import Link from "next/link";

const Content = () => {
  return (
    <div className="py1">
      <img
        data-aos="fade"
        src="https://cdn.prod.website-files.com/67053868fc01e494462e71c9/673b5cc930b7152407c39d0e_logo-leeto-white.svg"
        alt="logo"
        className="w-auto lg:h-[3.496vw] sm:h-[48px] h-[32px] object-contain"
      />
      <h1
        data-aos="fade-up"
        className="text60 font-medium tracking-tighter lg:w-[60%] lg:my-[3.125vw] my-[40px]"
      >
        Establish Leeto as the #1 reference in the CSE support market.
      </h1>
      <div className="mt30 w-full poppins flex lg:items-end items-center justify-between lg:gap-[1.5625vw] gap-[20px] flex-wrap">
        <div className="lg:text60 mtext32 flex lg:flex-row flex-col gap-y-[24px] lg:gap-x-[6.25vw] w-full lg:w-[unset]">
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            className="flex flex-col"
          >
            <span className="font-medium tracking-tighter">3+</span>
            <span className="lg:text20 mtext16 opacity-[0.7]">
              Months of collaboration
            </span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="flex flex-col"
          >
            <span className="font-medium tracking-tighter">+30</span>
            <span className="lg:text20 mtext16 opacity-[0.7]">Pages</span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="flex flex-col"
          >
            <span className="font-medium tracking-tighter">15</span>
            <span className="lg:text20 mtext16 opacity-[0.7]">
              CMS Collections
            </span>
          </div>
        </div>
        <span className="h-[1px] bg-white grow-[1] lg:mb-[0.625vw] opacity-[0.2]"></span>
        <Link
          href={"/"}
          className="ml-auto lg:mb-[-0.3125vw] lg:text22 mtext18 lg:leading-[2.5vw] flex items-center lg:gap-x-[0.3125vw] gap-x-[4px] font-medium group afterLineHover"
        >
          Visit website
          <div className="lg:text30 mtext24 relative overflow-hidden rotate-[45deg]">
            <div className="translate-y-0 group-hover:translate-y-[-100%] group-hover:duration-[600ms] group-hover:transition-[cubic-bezier(0.62,0.05,0.01,0.99)]">
              <IoMdArrowUp />
            </div>
            <div className="absolute left-0 bottom-[-100%] group-hover:bottom-0 group-hover:duration-[600ms] group-hover:transition-[cubic-bezier(0.62,0.05,0.01,0.99)]">
              <IoMdArrowUp />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Content;
