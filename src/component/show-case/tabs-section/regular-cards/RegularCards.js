import React from "react";
import RegularCard from "./regular-card/RegularCard";

const RegularCards = ({cardsData}) => {
  return (
    <div className="flex lg:gap-y-[3.125vw] gap-y-[20px] flex-wrap">
      {
        cardsData.map((cardData,index) => (
          index >1 &&   <RegularCard key={index} cardData={cardData} />
        )
        )
      }
    
     
    </div>
  );
};

export default RegularCards;
