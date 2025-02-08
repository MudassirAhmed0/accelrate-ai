import React from "react";
import RegularCard from "./regular-card/RegularCard";

const RegularCards = () => {
  return (
    <div className="flex lg:gap-y-[3.125vw] gap-y-[20px] flex-wrap">
      <RegularCard />
      <RegularCard />
      <RegularCard />
      <RegularCard />
    </div>
  );
};

export default RegularCards;
