import Link from "next/link";
import React from "react";

const CTABox = ({ cta }) => {
  return (
    <div className="myContainer flex justify-center items-center lg:my-16 my-10">
      <Link
        href={"/#contact"}
        className="group flex flex-col items-center gap-y-5 bg-black text-white text-center p-8 rounded-lg shadow-lg max-w-3xl w-full"
      >
        <h2 className="text-2xl font-bold"> {cta}</h2>

        <button className="group-hover:scale-105 scale-100 transition-all duration-500 ease-out poppins shadow-[inset_0_-6px_12px_rgba(0,0,0,1)] relative flex items-center lg:gap-x-[0.3125vw] bg-white text-black lg:py-[0.625vw] lg:px-[1.5625vw] px-[24px] py-[10px] rounded-[8px] lg:text18 mtext16 font-medium">
          Get Started Now
        </button>
      </Link>
    </div>
  );
};

export default CTABox;
