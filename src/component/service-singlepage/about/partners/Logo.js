import React from "react";
import Image from "next/image";

const Logo = ({ logo }) => {
  return (
    <div className="relative lg:size-[9.375vw] ml-[9.375vw]">
      <Image
        unoptimized
        fill
        src={logo}
        alt={"Logo"}
        className="object-contain rounded-full brightness-[10%]"
      />
    </div>
  );
};

export default Logo;
