import React from "react";
import Banner from "./Banner";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

const RegularCard = ({ cardData, fromPinSection }) => {
  return (
    <Link
      data-aos="fade"
      href={`/showcase/${cardData.slug}`}
      className={`${
        fromPinSection
          ? "min-w-[400px] w-[400px] sm:min-w-[500px] sm:w-[500px] lg:min-w-[unset]"
          : "w-full"
      } sm:w-[47%] group self-start text-white flex flex-wrap lg:flex-row flex-col lg:gap-x-[1.5625vw] lg:p-[1.5625vw] p-5 border rounded-[10px] border-[#f8f8f81a] lg:border-transparent hover:lg:border-[#f8f8f81a] transition-all duration-300`}
    >
      <Banner images={cardData?.images} />
      <div className="w-full">
        <div>
          <p className="lg:text20 mtext16 mt30 group-hover:underline line-clamp-3">
            {cardData?.desc}
          </p>
        </div>

        <div className="w-full lg:mt-[1.25vw] mt-[16px] flex lg:items-end items-center justify-between lg:gap-[1.25vw] gap-[12px] flex-wrap">
          {/* <div className="flex lg:gap-x-[0.41666666666vw] gap-x-[8px] items-end w-full lg:w-[unset]">
            <span className="lg:text-[5vw] lg:leading-[4.2vw] sm:text-[54px] sm:leading-[50px] text-[28px] leading-[32px] font-medium">
              7x
            </span>
            <span className="lg:text16 mtext14 opacity-[0.7]">
              More productivity
            </span>
          </div> */}
          <span className="h-[1px] bg-white grow-[1] lg:mb-[0.625vw] opacity-[0.2]"></span>
          <div className="opacity-[0.7] group-hover:opacity-100 ml-auto lg:mb-[-0.3125vw] lg:text18 mtext16 lg:leading-[2.5vw] flex items-center lg:gap-x-[0.3125vw] gap-x-[4px] font-medium">
            Read case
            <IoMdArrowForward />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RegularCard;
