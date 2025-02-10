import Image from "next/image";
import React from "react";
import Overlays from "./Overlays";

const Backgrounds = () => {
  return (
    <div className="absolute inset-0 size-full z-[1] pointer-events-none">
      <Overlays />
      <div className="absolute inset-0 size-full">
        <Image
          fill
          unoptimized
          alt="hero"
          className="object-cover"
          src="https://cdn.prod.website-files.com/6705382c85d21c496de94fa5/676024b52a8a5c273abea395_webdesign-service-header-p-1600.webp"
        />
      </div>
    </div>
  );
};

export default Backgrounds;
