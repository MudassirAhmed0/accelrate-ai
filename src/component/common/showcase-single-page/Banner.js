import Image from "next/image";
import React from "react";

const Banner = ({ pageData }) => {
  return (
    <div
      data-aos="fade"
      className="myContainer aspect-video relative rounded-[10px] overflow-hidden"
    >
      <Image
        fill
        alt="banner"
        unoptimized
        src={pageData?.images[1]}
        className="object-cover"
      />
    </div>
  );
};

export default Banner;
