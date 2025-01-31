"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { BiSolidCaretRightCircle } from "react-icons/bi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Testimonials = ({ heading }) => {
  const testimonialsSectionRef = useRef(null);
  const cardsWrapperRef = useRef(null);

  useGSAP(() => {
    const totalWidth =
      cardsWrapperRef.current.offsetWidth - window.innerWidth / 2;
    gsap.to(cardsWrapperRef.current, {
      x: () => `-${totalWidth}px`,
      scrollTrigger: {
        trigger: testimonialsSectionRef.current,
        start: "top top",
        end: () => `+=${totalWidth}`,
        pin: testimonialsSectionRef.current,
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      ref={testimonialsSectionRef}
      className="h-[100vh] flex items-center overflow-hidden relative bg-[#f5f5f5]"
      id={`testimonialsSection`}
    >
      <div className="w-[40%] px-[40px] flex flex-col justify-center">
        <div className="flex items-center gap-x-[8px]">
          <span className="block size-[5px] rounded-full bg-black mb-[2px]"></span>
          <span className="text22 uppercase font-medium">
            Nos produits & services
          </span>
        </div>
        <h4 className="text70 font-bold poppins text-black">{heading}</h4>
      </div>
      <div
        ref={cardsWrapperRef}
        className="min-w-[50%] w-auto absolute top-0 left-[50%] translate-x-0 flex items-center bg-[#111] h-full px-[120px]"
        id={`cardsWrapper`}
      >
        <div className="w-full min-h-[65%] flex gap-x-[20px] items-stretch whitespace-nowrap">
          {[1, 2, 3, 4, 5, 6].map((v, index) => (
            <div
              key={index}
              className="group text-white hover:bg-[#7b6d6d4d] transition-all duration-[500ms] testimonialCard relative min-h-full bg-white w-[300px] min-w-[300px] rounded-[20px] text-light p-[1.5625vw] whitespace-normal overflow-hidden"
            >
              <div className="relative z-[2]">
                <div className="flex items-center gap-x-[8px] text30">
                  <span className="font-medium uppercase select-none">
                    Idoneo
                  </span>
                  <BiSolidCaretRightCircle />
                </div>
                <div className="mx-auto mt-[50px] relative lg:size-[120px] lg:min-w-[120px]">
                  <Image fill alt="icon" src={"/images/about/logos/bmw.svg"} />
                </div>
                <p className="text20 mt30 select-none">
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
