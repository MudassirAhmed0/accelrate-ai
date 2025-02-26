import Image from "next/image";
import React from "react";

const Banner = ({ pageData }) => {
  return (
    <div
      data-aos="fade"
      className="aspect-video relative rounded-[10px] overflow-hidden w-full"
    >
      <Image
        fill
        alt="banner"
        unoptimized
        src={pageData?.images[0]}
        className="object-cover"
      />
    </div>
  );
};

export default Banner;
