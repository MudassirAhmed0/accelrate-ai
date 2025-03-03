import React from "react";
import RegularCard from "./regular-card/RegularCard";

const RegularCards = ({ cardsData }) => {
  return (
    <div className="flex lg:gap-y-[3.125vw] gap-[20px] flex-wrap">
      {cardsData.map(
        (cardData, index) =>
           <RegularCard key={index} cardData={cardData} />
      )}
    </div>
  );
};

export default RegularCards;
