import React from "react";
import LinkBtn from "../../common/buttons/LinkBtn";

const Content = ({ hero }) => {
  return (
    <div className="myContainer relative z-[2]">
      <h1
        data-aos="fade-up"
        className="text90 font-medium tracking-tighter lg:w-[58%]"
      >
        {hero?.heading}
      </h1>
      <div
        data-aos="fade"
        data-aos-delay="500"
        className="mt30 w-full flex lg:items-end items-center justify-between lg:gap-[0.625vw] gap-[12px] flex-wrap"
      >
        <div
          dangerouslySetInnerHTML={{ __html: hero?.desc }}
          className="lg:text20 mtext18 opacity-[0.7] poppins"
        ></div>
        <span className="h-[1px] bg-white grow-[1] lg:min-w-[unset] lg:w-[unset] sm:min-w-[65%] sm:w-[65%] min-w-full w-full lg:mb-[0.625vw] opacity-[0.2]"></span>

        <LinkBtn text={"Let's work together"} link={"/#contact"} />
      </div>
    </div>
  );
};

export default Content;
