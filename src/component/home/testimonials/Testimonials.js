"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { BiSolidCaretRightCircle } from "react-icons/bi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { document } from "postcss";

const Testimonials = () => {
  const scroller = useRef();
  useGSAP(() => {
    gsap.to(".scroller", {
      x: "-100%",
      duration: "1",
      scrollTrigger: {
        trigger: ".scroller",
        pin: true,
        start: "top top",
        end: () => scroller.current.offsetWidth,
        scrub: 1,
        // markers: true,
      },
    });
  }, []);
  return (
    <section className="fullVh fullSvh w-full bg-secondary-light flex overflow-hidden">
      <div className="flex justify-between items-stretch min-h-full w-full">
        <div className="w-[40%] px-[40px] flex flex-col justify-center">
          <div className="flex items-center gap-x-[15px]">
            <span className="block size-[8px] rounded-full bg-primary-teal"></span>
            <span className="text22 uppercase text-primary-teal font-medium">
              Nos produits & services
            </span>
          </div>
          <h4 className="text70 font-bold poppins text-secondary-gray">
            Des réponses à vos challenges RH
          </h4>
        </div>
        <div className="w-[57%] flex items-stretch">
          <div
            ref={scroller}
            className="flex items-center whitespace-nowrap bg-primary-blue scroller"
          >
            <div className="w-full min-h-[65%] flex gap-x-[20px] items-stretch whitespace-nowrap px-[120px]">
              {[1, 2, 3, 4, 5, 6].map((v, index) => (
                <div
                  key={index}
                  className="group relative min-h-full bg-secondary-gray w-[27%] min-w-[27%] rounded-[20px] text-secondary-light p-[1.5625vw] whitespace-normal overflow-hidden"
                >
                  <div className="relative z-[2]">
                    <div className="flex items-center gap-x-[8px] text30">
                      <span className="font-medium  uppercase">Idoneo</span>
                      <BiSolidCaretRightCircle />
                    </div>
                    <div className="mx-auto mt-[50px] relative lg:size-[120px] lg:min-w-[120px] opacity-[0.5]">
                      <Image
                        fill
                        alt="icon"
                        src={"/images/about/logos/bmw.svg"}
                      />
                    </div>
                    <p className="text18 mt30">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Qui temporibus dicta dolores provident, et suscipit,
                      eveniet dolorem ipsum in repellat ad quod quasi nulla illo
                      molestiae odio. Cumque cupiditate sunt ipsum.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
