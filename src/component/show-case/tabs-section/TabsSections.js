import React from "react";
import Tabs from "./tabs/Tabs";
import FeatureCards from "./feature-cards/FeatureCards";
import RegularCards from "./regular-cards/RegularCards";

const TabsSections = () => {
  return (
    <section className="bg-black text-white py1">
      <div className="myContainer">
        <Tabs />
        <div className="flex flex-col lg:mt-[3.125vw] mt-[30px]">
          <FeatureCards />
          <RegularCards />
        </div>
      </div>
    </section>
  );
};

export default TabsSections;
