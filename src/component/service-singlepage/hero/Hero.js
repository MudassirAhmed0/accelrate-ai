import React from "react";
import Content from "./Content";
import Image from "next/image";
import Backgrounds from "./backgrounds/Backgrounds";

const Hero = () => {
  return (
    <section
      className="relative lg:pt-[11.4583333333vw] lg:pb-[6.25vw] py1 sm:pt-[180px] pt-[120px] bg-black text-white fullVh
fullSvh flex items-end"
    >
      <Backgrounds />
      <Content />
    </section>
  );
};

export default Hero;
