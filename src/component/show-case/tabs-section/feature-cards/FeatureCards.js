import React from "react";
import FeatureCard from "./feature-card/FeatureCard";

const FeatureCards = () => {
  return (
    <div className="w-full flex flex-col">
      <FeatureCard />
      <FeatureCard />
    </div>
  );
};

export default FeatureCards;
