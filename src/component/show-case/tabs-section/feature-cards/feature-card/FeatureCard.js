import Image from "next/image";
import Link from "next/link";
import React from "react";
import Banner from "./Banner";

const FeatureCard = () => {
  return (
    <Link
      data-aos="fade"
      href={"/"}
      className="group flex flex-wrap lg:flex-row flex-col lg:gap-x-[1.5625vw] lg:p-[1.5625vw] sm:p-[20px] p-[10px] border lg:border-black border-[#f8f8f81a] rounded-[10px] lg:hover:border-[#f8f8f81a] transition-all duration-300"
    >
      <Banner />
      <div className="lg:grow-[.20] grow-[1] lg:border-b lg:border-[#f8f8f81a] lg:pb-[1.25vw]">
        <div>
          <div className="hidden lg:flex flex-wrap lg:gap-[1.25vw] justify-between">
            <div className="aspect-video grow-[1] relative rounded-[4px] overflow-hidden">
              <Image
                fill
                alt="banner"
                className="object-cover"
                src={"/images/show-case/feature-cards/1/small-banners/1.webp"}
              />
            </div>
            <div className="aspect-video grow-[1] relative rounded-[4px] overflow-hidden">
              <Image
                fill
                alt="banner"
                className="object-cover"
                src={"/images/show-case/feature-cards/1/small-banners/2.webp"}
              />
            </div>
          </div>
          <p className="lg:text22 mtext16 mt30">
            Establish Leeto as the #1 reference in the CSE support market.
          </p>
        </div>
        <div className="flex lg:gap-x-[0.9375vw] gap-x-[12px] items-end font-medium lg:mt-[3.125vw] mt-[30px]">
          <span className="lg:text-[8vw] lg:leading-[6vw] text-[64px] leading-[54px]">
            3+
          </span>
          <span className="lg:text18 mtext14">Months of collaboration</span>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
