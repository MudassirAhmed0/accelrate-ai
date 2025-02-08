import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="aspect-video grow-[1] relative rounded-[8px] overflow-hidden w-full lg:w-[unset]">
      <Image
        fill
        alt="banner"
        className="object-cover"
        src={"/images/show-case/feature-cards/1/banner/main.webp"}
      />
      <Image
        fill
        alt="banner"
        className="object-cover opacity-0 group-hover:opacity-[1] transition-all duration-300"
        src={"/images/show-case/feature-cards/1/banner/video.webp"}
      />
    </div>
  );
};

export default Banner;
