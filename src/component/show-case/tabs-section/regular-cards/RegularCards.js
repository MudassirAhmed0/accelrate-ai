import React from "react";
import RegularCard from "./regular-card/RegularCard";

const RegularCards = () => {
  return (
    <div className="flex flex-wrap">
      <RegularCard />
      <RegularCard />
      <RegularCard />
      <RegularCard />
    </div>
  );
};

export default RegularCards;
