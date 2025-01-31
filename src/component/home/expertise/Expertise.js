import Image from "next/image";
import React from "react";
const expertiseLogos = [
  "/images/expertise/mongodb.svg",
  "/images/expertise/express.svg",
  "/images/expertise/react.svg",
  "/images/expertise/nodejs.svg",
  "/images/expertise/nextjs.svg",
  "/images/expertise/tailwind.svg",
];
const Expertise = () => {
  return (
    <section className="bg-black">
      <div className="px-[40px] text-white py1">
        <h2 className="text-center">Tech stack expertise</h2>
        <div className="flex justify-center gap-x-[6.25vw] mt-[6.25vw]">
          {expertiseLogos.map((expertiseLogo, index) => (
            <div
              key={index}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              className={`relative lg:size-[7.8125vw] opacity-[0.7] hover:opacity-[1] animate-bounce`}
            >
              <Image fill alt="expertiseLogo" src={expertiseLogo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
