import React from "react";
import FeatureCard from "./feature-card/FeatureCard";

const FeatureCards = () => {
  return (
    <div className="w-full flex flex-col lg:gap-y-[3.125vw] sm:gap-y-[40px] gap-y-[20px]">
      <FeatureCard />
      <span className="w-full h-[1px] bg-[#f8f8f81a]"></span>
      <FeatureCard />
    </div>
  );
};

export default FeatureCards;
