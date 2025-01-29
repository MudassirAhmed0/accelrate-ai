"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const services = [
  {
    title: "Conversational AI: Voice & Chat Agents",
    tag: ["Let AI Talk the Talk"],
  },
  {
    title: "Workflow Automation",
    tag: ["Workflows That Work for You"],
  },
  {
    title: "Intelligent CRM Automation",
    tag: ["Smarter CRMs", "Happier Teams"],
  },
  {
    title: "Data Empowerment Solutions",
    tag: ["Data That Does the Heavy Lifting"],
  },
  {
    title: "Tailored Web Development",
    tag: ["Websites That Work as Hard as You Do"],
  },
];
const splitText = (text) => {
  const words = text.split(" ");
  const half = Math.ceil(words.length / 2); // Split text at the midpoint
  const firstHalf = words.slice(0, half).join(" ");
  const secondHalf = words.slice(half).join(" ");
  return { firstHalf, secondHalf };
};

export const formatText = (text) => {
  return text.split(/([^\w\s])/g).map((part, index) =>
    part.match(/[^\w\s]/) ? (
      <span key={index} className="poppins">
        {part}
      </span>
    ) : (
      part
    )
  );
};
const Services = () => {
  useGSAP(() => {
    document.querySelectorAll(".services").forEach((service) => {
      gsap.from(service, {
        y: "90",
        duration: "1",
        scrollTrigger: {
          trigger: service,
          start: "-200% 70%",
          end: () => `end 100%`,
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <section>
      <div className="gradient lg:py-[6.25vw] py1 px-[40px] text-white swiss">
        <h3 className="modica text-[4vw] tracking-[0.2vw]">
          AI × Automation <span className="poppins">=</span> <br /> Scalable
          Growth
        </h3>
        <div className="w-[70%] ml-auto pt-[4vw]">
          <ul className="flex flex-col gap-y-[4vw]">
            {services.map((service, index) => {
              return (
                <li key={index} className="services">
                  <div className="text-[2.6vw] modica  font-medium flex lg:gap-x-[3.125vw] border-b border-[#ffffff4d] mb-[0.8vw] pb-[0.3vw]">
                    <span className="poppins">0{index + 1}</span>
                    <span>{formatText(service.title)}</span>
                  </div>
                  <div className="flex items-center lg:gap-x-[81px]">
                    <span className="block size-[12px] rounded-full bg-white"></span>
                    <div className="text32 flex gap-x-[1.8vw]">
                      {service?.tag?.map((item, i) => (
                        <div
                          key={i}
                          className="border  border-[#ffffff4d] rounded-[30px] py-[0.6vw] px-[1.8vw]"
                        >
                          {item}
                        </div>
                      ))}
                      {/* <div className="border border-primary-blue rounded-[30px] py-[10px] px-[30px]">
                        {secondHalf}
                      </div> */}
                    </div>
                    {/* <span className="block size-[12px] rounded-full bg-white ml-auto"></span> */}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
