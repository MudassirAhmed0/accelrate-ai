import React from "react";
import Banner from "./Banner";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

const RegularCard = () => {
  return (
    <Link
      href={"/"}
      className="group sm:w-[50%] w-full flex flex-wrap lg:flex-row flex-col lg:gap-x-[1.5625vw] lg:p-[1.5625vw] sm:p-[20px] p-[10px] border border-black rounded-[10px] hover:border-[#f8f8f81a] transition-all duration-300"
    >
      <Banner />
      <div className="w-full">
        <div>
          <p className="lg:text20 mtext16 mt30">
            Rich text component editing platform: a tailored solution for Septeo
          </p>
        </div>

        <div className="w-full lg:mt-[1.25vw] mt-[16px] flex lg:items-end items-center justify-between lg:gap-[1.25vw] gap-[12px] flex-wrap">
          <div className="flex lg:gap-x-[0.41666666666vw] gap-x-[8px] items-end w-full lg:w-[unset]">
            <span className="lg:text-[5vw] lg:leading-[4.2vw] sm:text-[54px] sm:leading-[50px] text-[28px] leading-[32px] font-medium">
              7x
            </span>
            <span className="lg:text16 mtext14 opacity-[0.7]">
              More productivity
            </span>
          </div>
          <span className="h-[1px] bg-white grow-[1] lg:mb-[0.625vw] opacity-[0.2]"></span>
          <div className="opacity-[0.7] ml-auto lg:mb-[-0.3125vw] lg:text18 mtext16 lg:leading-[2.5vw] flex items-center lg:gap-x-[0.3125vw] gap-x-[4px] font-medium">
            Read case
            <IoMdArrowForward />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RegularCard;
