import Link from "next/link";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const Cta = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* <img
        src="/images/show-case/cta/bg.svg"
        alt="bg"
        id="bg"
        className="absolute inset-0 size-full object-cover"
      /> */}
      <img
        src="/images/show-case/cta/bg.png"
        alt="bg"
        id="bg"
        className="absolute top-[50%] translate-y-[-50%] left-0 size-full object-contain animate-pulse"
      />

      <div className="relative text-center z-[2] flex flex-col items-center myContainer lg:w-[70%] lg:pt-[11.4583333333vw] lg:pb-[6.25vw] sm:py-[180px] py-[120px]">
        <div className="relative w-full h-[80vh] lg:h-[70vh] rounded-xl overflow-hidden p-6 lg:p-8 border border-neutral-500">
          <span className="absolute top-0 left-0 size-full bg-black opacity-[0.5]"></span>
          <video
            style={{
              boxShadow:
                "rgba(255, 255, 255, 0.4) 2px -5px 20px, rgba(255, 255, 255, 0.4) -2px 5px 20px",
            }}
            src="/videos/home-hero.mp4"
            muted
            loop
            autoPlay
            playsInline
            className="object-cover size-full rounded-xl overflow-hidden border border-white"
            preload="auto"
            loading="lazy"
          ></video>
        </div>
        <h2
          style={{
            textShadow:
              "rgba(0, 0, 0, 1) 6px -10px 10px, rgba(0, 0, 0, 0.7) -4px 4px 10px",
            WebkitTextStroke: "1px black", // Thicker stroke for better contrast
          }}
          data-aos="fade-up"
          className="text-white tracking-tighter backdrop-blur-[1px] mt30"
        >
          Is your business ready for a tech evolution? Let’s automate, innovate,
          and accelerate together.
        </h2>
        <Link
          data-aos="fade"
          href={"/#contact"}
          className="group poppins shadow-[inset_0_-6px_12px_rgba(0,0,0,1)] relative mt30 lg:mt-[2.5vw] flex items-center lg:gap-x-[0.3125vw] bg-white text-black lg:py-[0.625vw] lg:px-[1.5625vw] px-[24px] py-[10px] rounded-[8px] lg:text18 mtext16 font-medium"
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
