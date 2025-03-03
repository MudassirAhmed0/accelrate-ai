"use client";
import React, { useState } from "react";
import Tabs from "./tabs/Tabs";
import FeatureCards from "./feature-cards/FeatureCards";
import RegularCards from "./regular-cards/RegularCards";
import Link from "next/link";

const TabsSections = ({ tabs, cardsData }) => {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-black text-white py1">
      <div className="myContainer">
        <Tabs active={active} setActive={setActive} tabs={tabs} />
        <div className="flex flex-col lg:mt-[3.125vw] mt-[30px]">
          <FeatureCards cardsData={cardsData} />

          <RegularCards cardsData={cardsData} />
          <div className="relative flex justify-center w-full lg:mt-[3.125vw] mt-14">
            <span className="w-full h-[.5px] block bg-white opacity-10 absolute left-0  top-1/2 -translate-y-1/2"></span>
            <div data-aos="fade" className="group bg-black px-4 relative z-[2]">
              <Link
                href={"/"}
                className="group-hover:scale-95 scale-100 transition-all duration-500 ease-out poppins shadow-[inset_0_-6px_12px_rgba(0,0,0,1)] relative flex items-center lg:gap-x-[0.3125vw] bg-white text-black lg:py-[0.625vw] lg:px-[1.5625vw] px-[24px] py-[10px] rounded-[8px] lg:text18 mtext16 font-medium"
              >
                Load more project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSections;
