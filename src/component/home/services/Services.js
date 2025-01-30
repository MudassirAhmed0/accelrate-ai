"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BiSolidCaretRightCircle } from "react-icons/bi";
import Link from "next/link";

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
        y: 90,
        duration: 1,
        scrollTrigger: {
          trigger: service,
          start: "top 90%", // Adjusted for smoother effect
          end: "50% bottom", // Corrected syntax
          scrub: 1,
        },
      });

      // Find `.dividerLn` inside the current service element
      const divider = service.querySelector(".dividerLn");
      if (divider) {
        gsap.from(divider, {
          scale: 0,
          opacity: 0,
          scrollTrigger: {
            trigger: divider,
            start: "top 106%",
            end: "bottom bottom",
            scrub: 1,
          },
        });
      }
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
                  <Link href={"/"} className="group">
                    <div className="text-[2.6vw] modica font-medium flex items-center lg:gap-x-[5vw] pb-[0.3vw]">
                      <span className="poppins">0{index + 1}</span>
                      <span>{formatText(service.title)}</span>
                      <div className="ml-auto rotate-[-45deg] scale-[1] translate-x-[-2.5vw] group-hover:rotate-[360deg] group-hover:scale-[1.7] transition-all duration-300 text-white group-hover:text-black group-hover:translate-x-0">
                        <BiSolidCaretRightCircle />
                      </div>
                    </div>
                    <span className="h-[2px] bg-black w-full block my-[0.8vw] dividerLn"></span>
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
