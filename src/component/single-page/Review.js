import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const Review = () => {
  return (
    <section className="bg-black text-white py1 poppins">
      <div className="myContainer">
        <h4
          data-aos="fade-up"
          className="lg:text40 sm:mtext32 mtext22 font-medium tracking-tight"
        >
          “Very well-established processes, continuous support throughout the
          project, and real expertise to assist us in the redesign of the Leeto
          website. We will not hesitate to recommend them!”
        </h4>
        <div
          data-aos="fade-up"
          className="mt-[40px] lg:mt-[2.5vw] w-full flex lg:items-end items-center justify-between lg:gap-[1.25vw] sm:gap-[12px] gap-[20px] flex-wrap"
        >
          <div className="flex sm:flex-row flex-col lg:items-center lg:gap-x-[1.25vw] gap-[12px] w-full sm:w-[unset]">
            <img
              src="https://cdn.prod.website-files.com/67053868fc01e494462e71c9/67238ebf4e03e7dd28d9f384_6672a3c485d92fc7c6aaca10_maxime-ridou.webp"
              alt="designer"
              className="lg:size-[4.16666666667vw] size-[64px] rounded-[6px]"
            />
            <div className="flex flex-col">
              <span className="lg:text22 mtext18">Maxime Ridou</span>
              <span className="lg:text18 mtext14 text-[#C5C5C5]">
                Product Designer @Leeto
              </span>
            </div>
          </div>
          <span className="h-[1px] bg-white grow-[1] lg:mb-[0.625vw] opacity-[0.2]"></span>
          <Link
            href={"/"}
            className="ml-auto lg:mb-[-0.3125vw] lg:text22 mtext18 lg:leading-[2.5vw] flex items-center lg:gap-x-[0.3125vw] gap-x-[4px] font-medium group afterLineHover"
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
        <div className="py1 flex flex-col lg:gap-y-[4.16666666667vw] gap-y-[60px] border-b border-[#f8f8f81a]">
          <div
            data-aos="fade"
            className="aspect-video relative rounded-[10px] overflow-hidden w-full"
          >
            <Image
              fill
              alt="banner"
              src={"/images/show-case/feature-cards/1/banner/video.webp"}
            />
          </div>
          <div
            data-aos="fade"
            className="aspect-video relative rounded-[10px] overflow-hidden w-full"
          >
            <Image
              fill
              alt="banner"
              src={"/images/show-case/feature-cards/1/banner/video.webp"}
            />
          </div>
          <div
            data-aos="fade"
            className="aspect-video relative rounded-[10px] overflow-hidden w-full"
          >
            <Image
              fill
              alt="banner"
              src={"/images/show-case/feature-cards/1/banner/video.webp"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
