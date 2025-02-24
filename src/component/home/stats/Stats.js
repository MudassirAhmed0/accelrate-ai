import Image from "next/image";
import React from "react";
import CardsWrapper from "./CardsWrapper";
const data = {
  statistics: [
    {
      title: "15+",
      description: "<p>Countries Served</p>",
    },
    {
      title: "50+",
      description: "<p>Clients Served</p>",
    },
    {
      title: "10+",
      description: "<p>Industries Served</p>",
    },
    {
      title: "200+",
      description: "<p>Automations Deployed</p>",
    },
    {
      title: "25+",
      description: "<p>Agents Delivered</p>",
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
          <h2 data-aos="fade-up">Our Footprint in AI & Automation</h2>
          <div data-aos="fade-up" className={`lg:text25 mt30 mtext18`}>
          Accelerate AI is your launchpad for everything from interactive chat and voice agents to end-to-end web development and advanced automations. We don’t just keep pace with innovation — we set it. The stats below reflect our unwavering commitment to pushing boundaries.
          </div>
        </div>
        <CardsWrapper data={data?.statistics} />
      </div>
    </section>
  );
};

export default Stats;
