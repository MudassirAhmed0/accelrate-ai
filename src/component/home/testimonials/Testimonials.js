"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { BiSolidCaretRightCircle } from "react-icons/bi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Testimonials = () => {
  useGSAP(() => {
    const totalWidth =
      document.querySelector(".cardsWrapper").offsetWidth -
      window.innerWidth / 2;
    gsap.to(".cardsWrapper", {
      x: () => `-${totalWidth}px`,
      scrollTrigger: {
        trigger: ".testimonialsSection",
        start: "top top",
        end: () => `+=${totalWidth}`,
        pin: ".testimonialsSection",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section className="h-[100vh]  flex items-center overflow-hidden relative testimonialsSection">
      <div className="w-[40%] px-[40px] flex flex-col justify-center">
        <div className="flex items-center gap-x-[8px]">
          <span className="block size-[5px] rounded-full bg-black mb-[2px]"></span>
          <span className="text22 uppercase font-medium">
            Nos produits & services
          </span>
        </div>
        <h4 className="text70 font-bold poppins text-black">
          Des réponses à vos challenges RH
        </h4>
      </div>
      <div className="min-w-[50%] w-auto absolute top-0 left-[50%] translate-x-0 flex items-center gradient h-full cardsWrapper px-[120px]">
        <div className="w-full min-h-[65%] flex gap-x-[20px] items-stretch whitespace-nowrap">
          {[1, 2, 3, 4, 5, 6].map((v, index) => (
            <div
              key={index}
              className="group relative min-h-full bg-white w-[300px] min-w-[300px] rounded-[20px] text-light p-[1.5625vw] whitespace-normal overflow-hidden"
            >
              <div className="relative z-[2]">
                <div className="flex items-center gap-x-[8px] text30">
                  <span className="font-medium  uppercase">Idoneo</span>
                  <BiSolidCaretRightCircle />
                </div>
                <div className="mx-auto mt-[50px] relative lg:size-[120px] lg:min-w-[120px]">
                  <Image fill alt="icon" src={"/images/about/logos/bmw.svg"} />
                </div>
                <p className="text20 mt30">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
                  temporibus dicta dolores provident, et suscipit, eveniet
                  dolorem ipsum in repellat ad quod quasi nulla illo molestiae
                  odio. Cumque cupiditate sunt ipsum.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
