"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BiSolidCaretRightCircle } from "react-icons/bi";
import Link from "next/link";

const services = [
  {
    title: "AI-Powered Conversational Assistants",
    tag: ["Your best salesperson, available 24/7", "never asks for a raise."],
  },
  {
    title: "Intelligent Voice AI Solutions",
    tag: ["AI that speaks human", "so you don’t have to repeat yourself."],
  },
  {
    title: "Business Process Automation & Orchestration",
    tag: ["Delegate to AI — automate the mundane", "focus on growth."],
  },
  {
    title: "AI-Driven CRM Optimization & Customer Engagement",
    tag: ["Turning data into relationships", "and relationships into revenue."],
  },
  {
    title: "Advanced Data Intelligence & Automation",
    tag: ["Actionable insights", "minus the analysis paralysis."],
  },
  {
    title: "Scalable & AI-Integrated Web Solutions",
    tag: ["Smart websites that don’t just sit pretty", "they convert."],
  },
  {
    title: "E-commerce Automation & Secure Payment Systems",
    tag: ["Because abandoned carts", "don’t belong in your business model."],
  },
  {
    title: "High-Performance API & Backend Engineering",
    tag: ["Invisible yet indispensable", "because great tech works quietly."],
  },
  {
    title: "Database & Storage Scalable Cloud & Data Infrastructure",
    tag: ["Your data deserves a VIP seat", "in the cloud."],
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
        y: 90,
        duration: 1,
        scrollTrigger: {
          trigger: service,
          start: "top 115%", // Adjusted for smoother effect
          end: "bottom 120%", // Corrected syntax
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <section>
      <div className="bg-[#111] lg:py-[6.25vw] py1 px-[40px] text-white swiss">
        <h3 data-aos="fade" className="modica text-[4vw] tracking-[0.2vw]">
          AI × Automation <span className="poppins">=</span> <br /> Scalable
          Growth
        </h3>
        <div className="w-[70%] ml-auto mt-[4vw]">
          <ul className="flex flex-col gap-y-[4vw]">
            {services.map((service, index) => {
              return (
                <li key={index} className="services">
                  <Link href={"/"} className="group">
                    <div className="relative border-b border-white mb-[0.8vw] text40 modica font-medium flex items-center lg:gap-x-[5vw] pb-[0.3vw]">
                      <span className="poppins">0{index + 1}</span>
                      <span className="w-[82%]">
                        {formatText(service.title)}
                      </span>
                      <div className="absolute right-0 ml-auto rotate-[-45deg] scale-[1]  group-hover:rotate-[0deg] group-hover:scale-[1.7] transition-all duration-300 text-white">
                        <BiSolidCaretRightCircle />
                      </div>
                    </div>
                    <div className="flex items-center lg:gap-x-[81px]">
                      <span className="block size-[12px] rounded-full bg-white"></span>
                      <div className="text32 flex gap-x-[1.8vw]">
                        {service?.tag?.map((item, i) => (
                          <div
                            key={i}
                            className="hover:bg-white hover:text-black border border-[#ffffff4d] rounded-[30px] py-[0.6vw] px-[1.8vw]"
                          >
                            {item}
                          </div>
                        ))}
                        {/* <div className="border border-royalblue rounded-[30px] py-[10px] px-[30px]">
                        {secondHalf}
                      </div> */}
                      </div>
                      {/* <span className="block size-[12px] rounded-full bg-white ml-auto"></span> */}
                    </div>
                  </Link>
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
