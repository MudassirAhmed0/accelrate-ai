import LinkBtn from "@/component/common/buttons/LinkBtn";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111] lg:py-[2.5vw] sm:py-[60px] py-[40px] lg:text20 mtext18 text-white">
      <div className="myContainer flex flex-wrap items-center justify-between lg:gap-[3.125vw] gap-9 pb-9 border-b">
        <div className="lg:w-[30vw] pb-9 border-b lg:pb-0 lg:border-0">
          <div className="lg:w-[30vw] sm:w-[70%] w-full">
            <Link href={"/"}>
              <div className="text-[8vw] sm:text-[5vw] lg:text-[2vw] flex items-center font-semibold logo modica text-white">
                <img
                  className="inline-block lg:w-[4.5vw] sm:w-[12vw] w-[22vw] letter"
                  src="/images/icons/thunder.svg"
                />
                {[
                  // "A",
                  "C",
                  "C",
                  "E",
                  "L",
                  "E",
                  "R",
                  "A",
                  "T",
                  "E",
                  "-",
                  "A",
                  "I",
                ].map((letter, index) => (
                  <span
                    key={index}
                    className={`letter inline-block ${
                      letter == "-" ? " poppins " : ""
                    }`}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </Link>
            <p className="lg:text22 mtext18 mt20">
              Your Partner in AI & Automation for Building Scalable, Next-Gen
              Digital Experiences
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center lg:gap-12 sm:gap-12 gap-4 lg:text30 sm:mtext32 mtext24 w-full lg:w-[unset] pb-9 border-b lg:pb-0 lg:border-0">
          <ul className="flex flex-wrap flex-col sm:flex-row lg:flex-col sm:justify-between lg:gap-y-[1.25vw] lg:gap-12 sm:gap-12 gap-4">
            <li className="afterLineHover">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="afterLineHover">
              <Link href={"/"}>Services</Link>
            </li>
          </ul>
          <ul className="flex flex-wrap flex-col sm:flex-row lg:flex-col sm:justify-between lg:gap-y-[1.25vw] lg:gap-12 sm:gap-12 gap-4">
            <li className="afterLineHover">
              <Link href={"/"}>Case Studies</Link>
            </li>
            <li className="afterLineHover">
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-[unset] flex flex-wrap lg:items-end items-center justify-between lg:gap-[0.625vw] gap-[12px]">
          <p className="lg:text30 sm:mtext32 mtext24 w-full">
            Stay ahead of the curve!
          </p>
          <span className="h-[1px] bg-white grow-[1] lg:mb-[0.625vw] opacity-[0.2]"></span>

          <LinkBtn text={"Contact Us Now"} link={"/#contact"} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
