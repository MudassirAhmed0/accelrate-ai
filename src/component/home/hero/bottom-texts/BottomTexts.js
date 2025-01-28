import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const BottomTexts = () => {
  useGSAP(() => {
    gsap.from(".bottomText", {
      y: -200,
      duration: 2.5,
      ease: "power4.out",
    });
  });
  return (
    <div className="flex gap-x-[69px]">
      <div>
        <div className="overflow-hidden">
          <p className="bottomText">Strategy, Design,</p>
        </div>
        <div className="overflow-hidden">
          <p className="bottomText">and Performance.</p>
        </div>
      </div>
      <div>
        <div className="overflow-hidden">
          <p className="bottomText">Two Engagement</p>
        </div>
        <div className="overflow-hidden">
          <p className="bottomText">Models: Cash or Equity.</p>
        </div>
      </div>
    </div>
  );
};

export default BottomTexts;
