import Image from "next/image";
import React from "react";

const Banner = ({images}) => {
  return (
    <div className="aspect-video relative rounded-[8px] overflow-hidden w-full">
     {images.length >0 && <img
        fill
        alt="banner"
        className="object-cover absolute top-0 left-0 w-full h-full"
        src={images[0]}
      
      />}
      {images.length >1 &&
      
      <img
        fill
        alt="banner"
        className="object-cover opacity-0 group-hover:opacity-[1] transition-all duration-300  absolute top-0 left-0 w-full h-full"
        src={images[1]}
      />
      
      }
    </div>
  );
};

export default Banner;
