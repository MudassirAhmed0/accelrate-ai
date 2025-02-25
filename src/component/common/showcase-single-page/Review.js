import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import LinkBtn from "../buttons/LinkBtn";

const Review = ({ review }) => {
  return (
    <section className="bg-black text-white py1 poppins">
      <div className="myContainer">
        <h4
          data-aos="fade-up"
          className="lg:text26 mtext20 tracking-wide font-medium"
        >
          {review.review}
        </h4>
        <div
          data-aos="fade-up"
          className="mt-[40px] lg:mt-[2.5vw] w-full flex lg:items-end items-center justify-between lg:gap-[1.25vw] sm:gap-[12px] gap-[20px] flex-wrap"
        >
          <div className="flex sm:flex-row flex-col lg:items-center lg:gap-x-[1.25vw] gap-[12px] w-full sm:w-[unset]">
            <img
              src={`${review.logo}`}
              alt="designer"
              className="lg:size-[4.16666666667vw] size-[64px] rounded-[6px]"
            />
            <div className="flex flex-col">
              <span className="lg:text22 mtext18">{review.name} </span>
              <span className="lg:text18 mtext14 text-[#C5C5C5]">
                {review.info}
              </span>
            </div>
          </div>
          <span className="h-[1px] bg-white grow-[1] lg:mb-[0.625vw] opacity-[0.2]"></span>

          <LinkBtn text={"Let's work together"} link={"/"} />
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
