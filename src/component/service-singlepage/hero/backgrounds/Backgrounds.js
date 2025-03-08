import Image from "next/image";
import React from "react";
import Overlays from "./Overlays";

const Backgrounds = ({ image }) => {
  return (
    <div className="absolute inset-0 size-full z-[1] pointer-events-none">
      <Overlays />
      <div className="absolute inset-0 size-full">
        <Image
          fill
          unoptimized
          alt="hero"
          className="object-cover"
          src={image}
        />
      </div>
    </div>
  );
};

export default Backgrounds;
