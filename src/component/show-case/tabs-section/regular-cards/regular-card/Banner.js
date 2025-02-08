import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="aspect-video relative rounded-[8px] overflow-hidden w-full">
      <Image
        fill
        alt="banner"
        className="object-cover"
        src={"/images/show-case/regular-cards/1/banner.jpg"}
      />
      <Image
        fill
        alt="banner"
        className="object-cover opacity-0 group-hover:opacity-[1] transition-all duration-300"
        src={"/images/show-case/regular-cards/1/video.webp"}
      />
    </div>
  );
};

export default Banner;
