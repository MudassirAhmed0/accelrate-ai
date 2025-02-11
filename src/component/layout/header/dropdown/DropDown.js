import LinkBtn from "@/component/common/buttons/LinkBtn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DropDown = ({ headerDropDown, toggleMenu }) => {
  return (
    <div
      ref={headerDropDown}
      className="opacity-0 lg:pointer-events-none group-hover/dropDown:lg:opacity-[1] group-hover/dropDown:lg:pointer-events-auto transition-all duration-500 lg:duration-0 lg:transition-none max-h-0 lg:max-h-[unset] overflow-hidden lg:overflow-visible lg:absolute inset-0 size-full bg-transparent lg:bg-[#1C1C1C] lg:pt-[5.20833333333vw] flex flex-col"
    >
      <div className="bg-transparent flex lg:bg-[#1C1C1C] wrapper lg:mt-[unset] sm:mt-[30px] mt-[20px]">
        <div className="w-full flex lg:flex-row flex-col flex-wrap items-stretch lg:gap-[2.5vw] sm:gap-[24px] gap-[20px] border-t border-[#4B4B4B] lg:mx-[40px] lg:px-[unset] px-[2.79069767442vw] poppins lg:py-[2.5vw] sm:py-[30px] py-[20px]">
          <span className="text-[#A4A4A4] lg:mt-[0.3125vw] mtext16 hidden lg:block">
            Our services
          </span>
          <div className="flex flex-col lg:gap-y-[unset] sm:gap-y-[15px] gap-y-[10px] justify-start lg:text35 sm:mtext28 mtext22 lg:leading-[3.125vw] tracking-tight w-full lg:w-[41%]">
            <Link
              onClick={toggleMenu}
              href={"/service-singlepage"}
              className="block after:hidden lg:after:block afterLineHover"
            >
              AI Chat Agents & Bots
            </Link>
            <Link
              onClick={toggleMenu}
              href={"/service-singlepage"}
              className="block after:hidden lg:after:block afterLineHover"
            >
              AI Voice Agents & Bots
            </Link>
            <Link
              onClick={toggleMenu}
              href={"/service-singlepage"}
              className="block after:hidden lg:after:block afterLineHover"
            >
              Workflow and Business Process Automation
            </Link>
          </div>
          <span className="lg:w-[1px] lg:min-w-[1px] w-full min-w-full h-[1px] lg:h-[unset] bg-[#4B4B4B]"></span>
          <div className="flex flex-col lg:gap-y-[unset] sm:gap-y-[15px] gap-y-[10px] justify-start lg:text35 sm:mtext28 mtext22 lg:leading-[3.125vw] tracking-tight w-full lg:w-[41%]">
            <Link
              onClick={toggleMenu}
              href={"/service-singlepage"}
              className="block after:hidden lg:after:block afterLineHover"
            >
              AI Consulting and Business Transformation
            </Link>
            <Link
              onClick={toggleMenu}
              href={"/service-singlepage"}
              className="block after:hidden lg:after:block afterLineHover"
            >
              Web Design & Development
            </Link>
          </div>
          {/* <div className="grow-[1] flex flex-wrap sm:flex-nowrap justify-between items-stretch lg:gap-[1.04166666667vw] gap-[16px]">
            {[1, 2].map((c, i) => (
              <Link
                key={i}
                onClick={toggleMenu}
                href={"/service-singlepage"}
                className="w-full group afterLineHoverHandler flex justify-center items-center lg:h-[11.9791666667vw] h-[120px] relative border-[#f8f8f81a] border rounded-[4px] overflow-hidden"
              >
                <div className="absolute inset-0 size-full pointer-events-none">
                  <Image
                    fill
                    alt="bg"
                    src={"/images/header/card1.svg"}
                    className="object-cover"
                  />
                  <span className="absolute inset-0 size-full bg-[#10101066] opacity-[1] transition-all duration-300 group-hover:opacity-0"></span>
                </div>
                <div className="relative z-[2] text-[#A4A4A4] flex flex-col items-center">
                  <span className="font-medium lg:text24 mtext18 text-white">
                    Webflow Enterprise
                  </span>
                  <LinkBtn
                    tag={"div"}
                    smallVarient
                    text={"For big-scale and secure solutions"}
                  />
                </div>
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
