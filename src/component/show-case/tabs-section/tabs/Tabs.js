import React from "react";

const Tabs = ({ tabs, active, setActive }) => {
  return (
    <div
      data-aos="fade"
      className="lg:mb-[3.33333333333vw] mb-[40px] lg:px-[1.5625vw] sm:px-[20px] px-[10px] flex whitespace-nowrap overflow-auto hideScroll lg:gap-x-[1.25vw] gap-x-5 lg:text22 mtext20 font-medium"
    >
      {tabs?.map((tab, index) => (
        <button
          onClick={() => setActive(index)}
          key={index}
          className={`${
            active === index
              ? "underline underline-offset-[6px]"
              : "opacity-[0.7]"
          }  afterLineHover !overflow-visible lg:overflow-hidden`}
        >
          {tab?.title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
