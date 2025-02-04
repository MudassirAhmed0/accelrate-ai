import Image from "next/image";
import React from "react";
import CardsWrapper from "./CardsWrapper";
const data = {
  statistics: [
    {
      title: "30+",
      description: "<p>Countries Served</p>",
    },
    {
      title: "13+",
      description: "<p>Tech Partners</p>",
    },
    {
      title: "250+",
      description: "<p>Projects</p>",
    },
    {
      title: "5M+",
      description: "<p>Spending</p>",
    },
  ],
};

const Stats = ({ variant }) => {
  return (
    <section
      className={`py1 lg:pb-[7.8125vw] relative ${
        variant ? (variant == "blue" ? " bg-[ghostwhite] " : "") : " bg-black "
      }`}
    >
      <div className="relative z-[2] myContainer flex flex-col items-center lg:gap-y-[5.20833333333vw] gap-y-[62px] text-black">
        <div className="lg:w-[61.4583333333vw] flex flex-col items-center text-center">
          <h2 data-aos="fade-up" className="text50">
            Stats
          </h2>
          <div data-aos="fade-down" className={`lg:text25 mt30 mtext18`}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            animi, est nemo sapiente consequuntur temporibus soluta corporis
            assumenda eos, qui officiis sint.
          </div>
        </div>
        <CardsWrapper data={data?.statistics} />
      </div>
    </section>
  );
};

export default Stats;
