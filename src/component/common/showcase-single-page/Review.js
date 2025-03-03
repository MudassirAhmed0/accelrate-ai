import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import LinkBtn from "../buttons/LinkBtn";

const Review = ({ pageData }) => {
  return (
    <section className="bg-black text-white py1 poppins">
      <div className="myContainer">
        <div className="py1 mb-10 flex flex-col lg:gap-y-[4.16666666667vw] gap-y-[60px] border-b border-[#f8f8f81a]">
          {pageData?.images?.map(
            (image, index) =>
              index > 0 && (
                <div
                  key={index}
                  data-aos="fade"
                  className="aspect-video relative rounded-[10px] overflow-hidden w-full"
                >
                  <Image
                    unoptimized
                    fill
                    alt="banner"
                    src={image}
                    className="object-cover"
                  />
                </div>
              )
          )}
        </div>
        <div>
          <div
            data-aos="fade-up"
            dangerouslySetInnerHTML={{ __html: pageData?.review?.review }}
            className="lg:text26 mtext20 tracking-wide font-medium"
          ></div>
          <div
            data-aos="fade-up"
            className="mt-[40px] lg:mt-[2.5vw] w-full flex lg:items-end items-center justify-between lg:gap-[1.25vw] sm:gap-[12px] gap-[20px] flex-wrap"
          >
            <div className="flex sm:flex-row flex-col lg:items-center lg:gap-x-[1.25vw] gap-[12px] w-full sm:w-[unset]">
              <img
                src={`${pageData?.review?.logo}`}
                alt="designer"
                className="lg:size-[4.16666666667vw] size-[64px] rounded-[6px]"
              />
              <div className="flex flex-col">
                <span className="lg:text22 mtext18">
                  {pageData?.review?.name}{" "}
                </span>
                <span className="lg:text18 mtext14 text-[#C5C5C5]">
                  {pageData?.review?.info}
                </span>
              </div>
            </div>
            <span className="h-[1px] bg-white grow-[1] lg:mb-[0.625vw] opacity-[0.2]"></span>

            <LinkBtn text={"Let's work together"} link={"/"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
