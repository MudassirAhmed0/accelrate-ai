import Link from "next/link";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const Cta = () => {
  return (
    <section className="relative w-full bg-black">
      <img
        src="/images/show-case/cta/bg.svg"
        alt="bg"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="relative text-center z-[2] flex flex-col items-center myContainer lg:w-[55%] lg:pt-[11.4583333333vw] lg:pb-[6.25vw] sm:py-[180px] py-[120px]">
        <h2 className="text-white font-medium">
          Want to turn your website into your most valuable asset?
        </h2>
        <Link
          href={"/"}
          className="group relative mt30 lg:mt-[2.5vw] flex items-center lg:gap-x-[0.3125vw] bg-white lg:py-[0.625vw] lg:px-[1.5625vw] px-[24px] py-[10px] rounded-[8px] lg:text18 mtext16 font-medium"
        >
          <span className="translate-x-0 group-hover:translate-x-[-10%] transition-all duration-300">
            Contact us today
          </span>
          <div className="absolute translate-x-[-50%] top-[50%] right-[8%] translate-y-[-50%] opacity-0 group-hover:opacity-[1] group-hover:translate-x-0 transition-all duration-300">
            <IoMdArrowForward />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Cta;
