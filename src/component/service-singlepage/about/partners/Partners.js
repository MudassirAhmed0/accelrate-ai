"use client";
import Logo from "./Logo";
import Marquee from "react-fast-marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const logos = [
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/674882e0540a4cb72aaba499_qileo-logo-grey.svg",
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/674880c3540a4cb72aa99838_growl-logo-grey.svg",
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/6745a2228e2729b70f65bce1_logo-ramify-grey.svg",
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/67481e40bbb057fc5e71764c_logo-greenly-grey.svg",
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/676150334de02a97f8c1bea8_logo-reecall-grey.svg",
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/6745b75a2cb51c036701ec49_logo-streamnative-grey.svg",
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/67472c5c52b964cfec680287_morfo-logo-grey.svg",
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/674830ca29e558b8678f7d58_logo-123-investment-managers-grey.svg",
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/6748313d420e00a2e4b2e85e_logo-tempact-ventures-grey.svg",
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/67483250563ccf5100cbd454_logo-auguste-patrimoine-grey.svg",
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/674831d32975832afb3d9e02_logo-echopen-grey.svg",
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/6745bca28d70ad1c8e1ce596_logo-credial-grey.svg",
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/67481e8338135e82689152e5_logo-weglot-grey.svg",
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/6745bd0ec0860c1e685a9837_logo-flomodia-grey.svg",
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/67481ee40d87f1254644ee5d_logo-coudac-grey.svg",
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/67472c83ca1ad8229c225f51_logo-tse-grey.svg",
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/6745b6ffe32856e841aecd99_logo-leeto-grey.svg",
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/674820f6f5f4e311964e7b92_logo-own-grey.svg",
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/67481d30923c185a2b710212_logo-pams-grey.svg",
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/6748332296664fd4119d4a46_logo-masteris-grey.webp",
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/6745b666711db092819e2a63_logo-club-patrimoine-grey.svg",
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/67472ccbbc480f7360b99522_logo-bsport-grey.svg",
  "https://cdn.prod.website-files.com/67053868fc01e494462e71c9/6745a3c7ec1f59c603082ed4_logo-uff-grey.svg",
];
const Partners = ({ brandLogos }) => {
  useGSAP(() => {
    gsap.from(".marqueeWrapper", {
      opacity: "0",
      duration: "2",
      scrollTrigger: {
        trigger: ".marqueeWrapper",
        start: "top bottom",
      },
    });
  }, []);
  return (
    <div
      data-aos="fade"
      style={{
        maskImage:
          "linear-gradient(to right, rgba(248, 248, 255, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0))",
      }}
    >
      {brandLogos?.name ? (
        ""
      ) : (
        <Marquee>
          {brandLogos?.map((logo, index) => (
            <Logo logo={logo} key={index} />
          ))}
        </Marquee>
      )}
    </div>
  );
};

export default Partners;
