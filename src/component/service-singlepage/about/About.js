import React from "react";
import Partners from "./partners/Partners";
import LinkBtn from "@/component/common/buttons/LinkBtn";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-white lg:py-[4.16666666667vw] py1">
      <Partners />
      <div className="myContainer flex lg:flex-row flex-col-reverse flex-wrap lg:gap-[2.5vw] gap-[20px] items-center justify-between lg:mt-[3.125vw] mt-[40px]">
        <div className="flex flex-col items-start lg:gap-y-[2.5vw] gap-y-[20px] lg:w-[40%] poppins lg:mt-[3.125vw] tracking-tight">
          <h2 data-aos="fade-up" className="font-medium normal-case">
            At Digidop, we believe website design should follow 3 key rules...
          </h2>
          <div
            data-aos="fade-up"
            className="lg:text20 mtext18 defaultList text-[#4c4b49]"
          >
            <ol>
              <li>Bring people to your website.</li>
              <li>Convert websites visitors into customers.</li>
              <li>Always be ready to scale.</li>
            </ol>
            <p className="mt30">
              These are the guiding principles our web designers keep in mind,
              from the very first workshop to handing over the design files to
              the development team.
            </p>
          </div>
          <div data-aos="fade">
            <LinkBtn
              text={"Discover the results of our latest projects"}
              link="/"
              blackVersion
            />
          </div>
        </div>
        <div
          data-aos="fade"
          className="lg:w-[32.621%] w-full lg:h-[34.6354166667vw] sm:h-[500px] h-[400px] relative rounded-[8px] overflow-hidden"
        >
          <Image
            unoptimized
            fill
            alt="banner"
            className="object-cover"
            src={
              "https://cdn.prod.website-files.com/6705382c85d21c496de94fa5/677c076fa99d4d3c556f362b_webdesign-p-800.webp"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default About;
