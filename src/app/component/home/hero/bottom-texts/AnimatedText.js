import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AnimatedText = () => {
  useGSAP(() => {
    gsap.from(".animatedText", {
      y: -200,
      duration: 2.5,
      ease: "power4.out",
    });
  });
  return (
    <div className="flex gap-x-[69px]">
      <div>
        <div className="overflow-hidden">
          <p className="animatedText">Strategy, Design,</p>
        </div>
        <div className="overflow-hidden">
          <p className="animatedText">and Performance.</p>
        </div>
      </div>
      <div>
        <div className="overflow-hidden">
          <p className="animatedText">Two Engagement</p>
        </div>
        <div className="overflow-hidden">
          <p className="animatedText">Models: Cash or Equity.</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
