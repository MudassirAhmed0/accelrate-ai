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
          <p className="bottomText">AI. Automation. Acceleration. </p>
        </div>
        {/* <div className="overflow-hidden">
          <p className="bottomText"> Acceleration.</p>
        </div> */}
      </div>
    </div>
  );
};

export default BottomTexts;
