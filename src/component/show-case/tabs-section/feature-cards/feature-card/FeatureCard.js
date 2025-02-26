import Image from "next/image";
import Link from "next/link";
import React from "react";
import Banner from "./Banner";
import { IoMdArrowForward } from "react-icons/io";

const FeatureCard = ({ images, desc,slug }) => {
  return (
    <Link
      data-aos="fade"
      href={`/showcase/${slug}`}
      className="group flex flex-wrap lg:flex-row flex-col lg:gap-x-[1.5625vw] lg:p-[1.5625vw] sm:p-[20px] p-[10px] border lg:border-black border-[#f8f8f81a] rounded-[10px] lg:hover:border-[#f8f8f81a] transition-all duration-300"
    >
      <Banner images={images} />
      <div className="lg:grow-[.20] grow-[1] lg:border-b lg:border-[#f8f8f81a] lg:pb-[1.25vw] lg:max-w-[43.3333333333vw] lg:w-[43.3333333333vw]">
        <div>
          <div className="hidden lg:flex flex-wrap lg:gap-[1.25vw] justify-between">
            {images.map((image, index) =>
              index >= 2 && index <= 4 ? (
                <div
                  key={index}
                  className=" aspect-video grow-[1]  relative rounded-[4px] overflow-hidden lg:w-[48.5576923077%] lg:max-w-[48.5576923077%]"
                >
                  <img
                    alt="banner"
                    className="object-cover size-full"
                    src={image}
                  />
                </div>
              ) : null
            )}
            {/* <div className="aspect-video grow-[1] relative rounded-[4px] overflow-hidden">
              <Image
                fill
                alt="banner"
                className="object-cover"
                src={"/images/show-case/feature-cards/1/small-banners/2.webp"}
              />
            </div> */}
          </div>
          <p className="lg:text30 font-medium mtext20 mt30 group-hover:underline">
            {desc}
          </p>
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
            <div className="ml-auto lg:mb-[-0.3125vw] lg:text18 mtext16 lg:leading-[2.5vw] flex items-center lg:gap-x-[0.3125vw] gap-x-[4px] font-medium">
              Read case
              <IoMdArrowForward />
            </div>
          </div>
        </div>
        {/* <div className="flex lg:gap-x-[0.9375vw] gap-x-[12px] items-end font-medium lg:mt-[3.125vw] mt-[30px]">
          <span className="lg:text-[8vw] lg:leading-[6vw] text-[64px] leading-[54px]">
            3+
          </span>
          <span className="lg:text18 mtext14">Months of collaboration</span>
        </div> */}
      </div>
    </Link>
  );
};

export default FeatureCard;
