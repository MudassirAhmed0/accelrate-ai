import React from "react";
import LinkBtn from "../../common/buttons/LinkBtn";

const Content = () => {
  return (
    <div className="myContainer relative z-[2]">
      <h1
        data-aos="fade-up"
        className="text90 font-medium tracking-tighter lg:w-[58%]"
      >
        Web Design Services Built to Deliver Results
      </h1>
      <div
        data-aos="fade"
        data-aos-delay="500"
        className="mt30 w-full flex lg:items-end items-center justify-between lg:gap-[0.625vw] gap-[12px] flex-wrap"
      >
        <p className="lg:text20 mtext18 opacity-[0.7] poppins">
          75% of users base a company&apos;s credibility on its website&apos;s
          <br />
          design (UX and UI). So, don’t overlook it—trust a web <br /> design
          agency that knows how to get it done right.
        </p>
        <span className="h-[1px] bg-white grow-[1] lg:min-w-[unset] lg:w-[unset] sm:min-w-[65%] sm:w-[65%] min-w-full w-full lg:mb-[0.625vw] opacity-[0.2]"></span>

        <LinkBtn text={"Let's work together"} link={"/"} />
      </div>
    </div>
  );
};

export default Content;
