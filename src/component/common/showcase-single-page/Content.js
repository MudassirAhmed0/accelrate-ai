import React from "react";
import { IoMdArrowUp } from "react-icons/io";
import Link from "next/link";
import LinkBtn from "../buttons/LinkBtn";

const Content = ({ pageData }) => {
  return (
    <div className="py1 myContainer relative z-[2]">
      {/* <img
        data-aos="fade"
        src="https://cdn.prod.website-files.com/67053868fc01e494462e71c9/673b5cc930b7152407c39d0e_logo-leeto-white.svg"
        alt="logo"
        className="w-auto lg:h-[3.496vw] sm:h-[48px] h-[32px] object-contain"
      /> */}
      <h1
        data-aos="fade-up"
        className="lg:text60 mtext32 font-medium tracking-tighter lg:w-[90%] lg:my-[3.125vw] my-[40px]"
      >
        {pageData?.desc}
      </h1>
      <div className="mt30 w-full poppins flex lg:items-end items-center justify-between lg:gap-[1.5625vw] gap-[20px] flex-wrap">
        {/* <div className="lg:text60 mtext32 flex lg:flex-row flex-col gap-y-[24px] lg:gap-x-[6.25vw] w-full lg:w-[unset]">
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
        </div> */}
        <span className="h-[1px] bg-white grow-[1] lg:mb-[0.625vw] opacity-[0.2]"></span>

        <LinkBtn text={"Visit website"} link={"/"} />
      </div>
    </div>
  );
};

export default Content;
