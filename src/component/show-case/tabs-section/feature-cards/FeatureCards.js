import React, { Fragment } from "react";
import FeatureCard from "./feature-card/FeatureCard";

const FeatureCards = ({ cardsData }) => {
  return (
    <div className="w-full flex flex-col lg:gap-y-[3.125vw] sm:gap-y-[40px] gap-y-[20px]">
      {cardsData.map(
        (cardData, index) =>
          cardData.featured && (
            <Fragment key={index}>
              <FeatureCard
                images={cardData.images}
                desc={cardData.desc}
                slug={cardData.slug}
              />
              {index == 0 && (
                <span className="w-full h-[1px] bg-[#f8f8f81a]"></span>
              )}
            </Fragment>
          )
      )}
    </div>
  );
};

export default FeatureCards;
