"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const services = [
  {
    title: "Conversational AI: Voice & Chat Agents",
    tag: "Let AI Talk the Talk",
  },
  {
    title: "Workflow Automation",
    tag: "Workflows That Work for You",
  },
  {
    title: "Intelligent CRM Automation",
    tag: "Smarter CRMs, Happier Teams",
  },
  {
    title: "Data Empowerment Solutions",
    tag: "Data That Does the Heavy Lifting",
  },
  {
    title: "Tailored Web Development",
    tag: "Websites That Work as Hard as You Do",
  },
];
const splitText = (text) => {
  const words = text.split(" ");
  const half = Math.ceil(words.length / 2); // Split text at the midpoint
  const firstHalf = words.slice(0, half).join(" ");
  const secondHalf = words.slice(half).join(" ");
  return { firstHalf, secondHalf };
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
      <div className="bg-primary-teal lg:py-[6.25vw] py1 px-[40px] text-secondary-gray">
        <h2>
          AI × Automation = <br /> Scalable Growth
        </h2>
        <div className="w-[80%] ml-auto pt-[60px]">
          <ul className="flex flex-col gap-y-[30px]">
            {services.map((service, index) => {
              const { firstHalf, secondHalf } = splitText(service.tag);
              return (
                <li key={index} className="services">
                  <div className="text60 font-medium flex lg:gap-x-[3.125vw] border-b border-primary-blue mb-[8px] pb-[2px]">
                    <span className="text-primary-blue">0{index + 1}</span>
                    <span>{service.title}</span>
                  </div>
                  <div className="flex items-center lg:gap-x-[81px]">
                    <span className="block size-[12px] rounded-full bg-primary-blue"></span>
                    <div className="text30 flex">
                      <div className="border border-primary-blue rounded-[30px] py-[10px] px-[30px]">
                        {firstHalf}
                      </div>
                      <div className="border border-primary-blue rounded-[30px] py-[10px] px-[30px]">
                        {secondHalf}
                      </div>
                    </div>
                    <span className="block size-[12px] rounded-full bg-primary-blue ml-auto"></span>
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
