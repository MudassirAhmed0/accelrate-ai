import RegularCards from "@/component/show-case/tabs-section/regular-cards/RegularCards";
import Link from "next/link";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const ExploreMore = () => {
  return (
    <section>
      <div className="myContainer py1 pt-[unset]">
        <h2
          data-aos="fade-up"
          className="text-center lg:mb-[3.125vw] mb-[60px]"
        >
          Explore more case studies
        </h2>
        <RegularCards />
        <div className="mt-[40px] lg:mt-[4.16666666667vw] w-full flex lg:items-end items-center justify-between lg:gap-[0.625vw] gap-[12px] flex-wrap">
          <span className="h-[1px] bg-white grow-[1] lg:mb-[0.625vw] opacity-[0.2]"></span>
          <Link
            href={"/"}
            className="ml-auto lg:mb-[-0.3125vw] lg:text22 mtext18 lg:leading-[2.5vw] flex items-center lg:gap-x-[0.3125vw] gap-x-[4px] font-medium group afterLineHover"
          >
            See all cases
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

export default ExploreMore;
