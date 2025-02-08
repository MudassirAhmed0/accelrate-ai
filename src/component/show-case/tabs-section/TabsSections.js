import React from "react";
import Tabs from "./tabs/Tabs";
import FeatureCards from "./feature-cards/FeatureCards";
import RegularCards from "./regular-cards/RegularCards";

const TabsSections = () => {
  return (
    <section className="bg-black text-white">
      <div className="myContainer">
        <Tabs />
        <FeatureCards />
        <RegularCards />
      </div>
    </section>
  );
};

export default TabsSections;
