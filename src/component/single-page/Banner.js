import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div
      data-aos="fade"
      className="aspect-video relative rounded-[10px] overflow-hidden w-full"
    >
      <Image
        fill
        alt="banner"
        src={"/images/show-case/feature-cards/1/banner/main.webp"}
      />
    </div>
  );
};

export default Banner;
