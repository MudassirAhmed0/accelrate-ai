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
      <div className="bg-[#111] lg:py-[6.25vw] py1 lg:px-[40px] px-[2.79069767442vw] text-white swiss">
        <h3
          data-aos="fade"
          className="modica lg:text-[4vw] lg:tracking-[0.2vw] text60"
        >
          AI × Automation <span className="poppins">=</span> <br /> Scalable
          Growth
        </h3>
        <div className="lg:w-[70%] ml-auto lg:mt-[4vw] mt-[64px]">
          <ul className="flex flex-col lg:gap-y-[4vw] gap-y-[24px]">
            {services.map((service, index) => {
              return (
                <li key={index} className="services">
                  <Link href={"/"} className="group">
                    <div className="relative border-b border-white mb-[12px] lg:mb-[0.8vw] lg:text40 mtext22 modica font-medium flex flex-wrap lg:gap-x-[5vw] sm:gap-x-[25px] gap-x-[15px] lg:pb-[0.8vw] pb-[12px]">
                      <span className="poppins">0{index + 1}</span>
                      <span className="w-[82%]">
                        {formatText(service.title)}
                      </span>
                      <div className="absolute right-0 top-[50%] translate-y-[-50%] ml-auto lg:rotate-[-45deg] scale-[1]  group-hover:lg:rotate-[0deg] group-hover:lg:scale-[1.7] transition-all duration-300 text-white">
                        <BiSolidCaretRightCircle />
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center lg:gap-x-[81px]">
                      <span className="hidden lg:block size-[12px] rounded-full bg-white"></span>
                      <div className="lg:text32 mtext14 flex flex-wrap lg:gap-x-[1.8vw] gap-[8px]">
                        {service?.tag?.map((item, i) => (
                          <div
                            key={i}
                            className="hover:bg-white hover:text-black border border-[#ffffff4d] rounded-[30px] lg:py-[0.6vw] lg:px-[1.8vw] py-[6px] px-[20px] roboto"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
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
