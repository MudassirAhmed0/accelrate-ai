import React from "react";
import Image from "next/image";

const Logo = ({ logo }) => {
  return (
    <div className="relative  marqueeSlide">
      <Image
        fill
        src={logo}
        alt={"Logo"}
        className="object-cover rounded-full"
      />
    </div>
  );
};

export default Logo;
