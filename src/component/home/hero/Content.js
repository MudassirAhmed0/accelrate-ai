import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Content = () => {
  const wrapWordsInSpan = (text) => {
    const regex = /(<Link[^>]*>.*?<\/Link>)/g; // Match entire <Link> elements

    // Split the text into an array of parts, keeping the <Link> intact
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (part.startsWith("<Link")) {
        // Handle <Link> element: Split the inner content into words
        const linkText = part.replace(/(<Link[^>]*>)(.*?)(<\/Link>)/, "$2"); // Extract the inner text
        const linkWords = linkText.split(" "); // Split the text inside <Link>

        return (
          <Link href="/" key={index}>
            {linkWords.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="wrapper inline-block overflow-hidden  mr-[0.8vw]"
              >
                <span className="inline-block  ">{word}</span>{" "}
              </span>
            ))}
          </Link>
        );
      } else {
        // Handle normal text: Split and wrap words in spans
        return part.split(" ").map((word, wordIndex) => (
          <span
            key={`${index}-${wordIndex}`}
            className="wrapper inline-block overflow-hidden mr-[0.8vw] "
          >
            <span className="inline-block">{word}</span>{" "}
          </span>
        ));
      }
    });
  };

  useGSAP(() => {
    gsap.from(".desc .wrapper span", {
      y: "90",
      // stagger: "0.02",
      duration: "1",
      // ease: "power4.out",
      scrollTrigger: {
        trigger: ".containerWrap",
        start: "10% 60%",
        // end: `70% 72%`,
        // scrub: 1,
        // markers: true,
      },
    });
  }, []);
  useGSAP(() => {
    gsap.from(".headingWrapper .heading", {
      y: "100",
      duration: "1",
      // ease: "power4.out",
      scrollTrigger: {
        trigger: ".headingWrapper .heading",
        start: "top bottom",
        // end: `70% 72%`,
        // markers: true,
      },
    });
  }, []);
  return (
    <div
      className="px-[40px] py-[60px] lg:py-[8vw] bg-[#1d0973] containerWrap 
gradient"
    >
      <div className="overflow-hidden headingWrapper">
        <div className="text60 heading swiss font-[600] flex gap-[1vw]">
          <h2 className="  poppins  font-[600] text-white">
            AI-Powered Precision.
          </h2>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Human-Centric Impact. ",
              500, // wait 1s before replacing "Mice" with "Hamsters"
              "",
              500,
              "Human-Centric Impact.",
              500,
              "",
              500,
            ]}
            wrapper="span"
            speed={50}
            style={{
              display: "inline-block",
              fontWeight: "600",
              fontFamily: "poppins",
              color: "white",
              opacity: "1",
            }}
            repeat={Infinity}
          />
        </div>
      </div>
      <p className="text50 mt30 text-white desc swiss flex flex-wrap  ">
        {wrapWordsInSpan(
          `By 2030, AI will add $15.7 trillion to the global economy. At Accelerate-AI, we help you claim your share by integrating AI and automation into your business processes—quickly and effectively.`
        )}
      </p>
      <div className="border border-t mt-[3vw] opacity-[0.3]"></div>
      <div className="mt-[3vw] flex justify-between text30">
        <span className="text-white swiss ">
          Turning Complexity into Intelligent Simplicity.
        </span>
        <span className="text-white swiss max-w-[29vw] mr-[10vw]">
          We are not an AI and Automation agency; We are your AI Transformation
          partners.
        </span>
      </div>
    </div>
  );
};

export default Content;
