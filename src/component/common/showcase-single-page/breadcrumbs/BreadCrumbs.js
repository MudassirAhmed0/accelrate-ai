import Link from "next/link";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const BreadCrumbs = () => {
  return (
    <div className="lg:py-[1.5625vw] py-[25px] border-y border-[#f8f8f81a] text-[#c5c5c5]">
      <div className="myContainer poppins flex items-center lg:gap-x-[0.625vw] gap-x-[12px] lg:text18 mtext16 ">
        <Link
          href={"/showcase"}
          className="flex items-center lg:gap-x-[0.3125vw] gap-x-[6px] afterLineHover"
        >
          <IoMdArrowBack />
          <span>All cases</span>
        </Link>
        <span className="h-[1px] lg:w-[2.5%] sm:w-[5%] w-[10%] bg-white"></span>
        <span>Leeto</span>
      </div>
    </div>
  );
};

export default BreadCrumbs;
