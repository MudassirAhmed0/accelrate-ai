"use client";
import React, { useState } from "react";
import Tabs from "./tabs/Tabs";
import FeatureCards from "./feature-cards/FeatureCards";
import RegularCards from "./regular-cards/RegularCards";

const TabsSections = ({ tabs,cardsData }) => {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-black text-white py1">
      <div className="myContainer">
        <Tabs active={active} setActive={setActive} tabs={tabs} />
        <div className="flex flex-col lg:mt-[3.125vw] mt-[30px]">
          
          <FeatureCards cardsData={cardsData} />
          
          <RegularCards cardsData={cardsData} />
        </div>
      </div>
    </section>
  );
};

export default TabsSections;
