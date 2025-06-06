import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
const expertises = [
  {
    title: "AI-Powered Conversational Assistants",
    logos: [
      "/images/expertise/1/1.png",
      "/images/expertise/1/2.png",
      "/images/expertise/1/3.png",
      "/images/expertise/1/4.png",
      "/images/expertise/1/5.png",
      "/images/expertise/1/6.png",
    ],
  },
  {
    title: "Intelligent Voice AI Solutions",
    logos: [
      "/images/expertise/2/1.png",
      "/images/expertise/2/2.png",
      "/images/expertise/2/3.png",
      "/images/expertise/2/4.png",
      "/images/expertise/2/5.png",
    ],
  },
  {
    title: "Business Process Automation & Orchestration",
    logos: [
      "/images/expertise/3/1.png",
      "/images/expertise/3/2.png",
      "/images/expertise/3/3.png",
      "/images/expertise/3/4.png",
    ],
  },
  {
    title: "AI-Driven CRM Optimization & Customer Engagement",
    logos: [
      "/images/expertise/3/1.png",
      "/images/expertise/3/2.png",
      "/images/expertise/3/3.png",
      "/images/expertise/3/4.png",
      "/images/expertise/4/1.png",
      "/images/expertise/4/2.png",
      "/images/expertise/4/3.png",
    ],
  },
  {
    title: "Advanced Data Intelligence & Automation",
    logos: [
      "/images/expertise/5/1.png",
      "/images/expertise/5/2.svg",
      "/images/expertise/5/3.png",
    ],
  },
  {
    title: "Scalable & AI-Integrated Web Solutions ",
    logos: [
      "/images/expertise/6/1.webp",
      "/images/expertise/6/2.png",
      "/images/expertise/6/3.svg",
      "/images/expertise/6/4.svg",
    ],
  },
  {
    title: "AI-Enabled E-commerce Automation & Secure Payment Systems ",
    logos: [
      "/images/expertise/7/1.png",
      "/images/expertise/7/2.png",
      "/images/expertise/7/3.png",
      "/images/expertise/7/4.png",
      "/images/expertise/7/5.svg",
    ],
  },
  {
    title: "High-Performance API & Backend Engineering",
    logos: [
      "/images/expertise/8/1.svg",
      "/images/expertise/8/2.svg",
      "/images/expertise/8/3.png",
      "/images/expertise/8/4.svg",
      "/images/expertise/8/5.png",
    ],
  },
  {
    title: "Database & Storage Scalable Cloud & Data Infrastructure",
    logos: [
      "/images/expertise/9/1.png",
      "/images/expertise/9/2.png",
      "/images/expertise/9/3.svg",
      "/images/expertise/9/4.png",
      "/images/expertise/9/5.png",
      "/images/expertise/9/6.webp",
    ],
  },
];
const Expertise = ({ variant }) => {
  return (
    <section
      id="techstack"
      className={`${
        variant ? (variant == "blue" ? " bg-[ghostwhite] " : "") : " bg-black "
      } py1`}
    >
      <h2
        className="myContainer text-center text-black mx-auto"
        data-aos="fade-up"
      >
        Built on Best-in-Class Technology
      </h2>
      <div className="lg:mt-[6.25vw] mt-[40px] flex flex-col">
        <Marquee speed={120} className="flex">
          {expertises.map((expertise, index) => (
            <div
              data-aos="fade"
              key={index}
              className="bg-[#111] text-white rounded-[20px] lg:p-[3.125vw] sm:p-[40px] p-[30px] lg:ml-[1.25vw] ml-[20px]"
            >
              <h4 className="lg:text30 mtext22 font-medium text-center">
                {expertise.title}
              </h4>
              <div className="flex whitespace-nowrap justify-center lg:gap-x-[2.5vw] sm:gap-x-[30px] gap-x-[16px] mt-[16px] lg:mt-[2.86458333333vw]">
                {expertise.logos.map((logo, ind) => (
                  <div
                    data-aos="fade"
                    data-aos-delay={`${ind * 50}`}
                    key={ind}
                    className={`relative lg:size-[6.25vw] sm:size-[12vw] size-[12vw]`}
                  >
                    <Image
                      fill
                      alt="expertiseLogo"
                      src={logo}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Expertise;
