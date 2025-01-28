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
                className="wrapper inline-block overflow-hidden"
              >
                <span className="inline-block">{word}</span>{" "}
              </span>
            ))}
          </Link>
        );
      } else {
        // Handle normal text: Split and wrap words in spans
        return part.split(" ").map((word, wordIndex) => (
          <span
            key={wordIndex}
            className="wrapper inline-block overflow-hidden"
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
    <div className="px-[40px] py-[60px] bg-secondary-light containerWrap">
      <div className="overflow-hidden headingWrapper">
        <div className="text60 heading">
          <h2 className="text-primary-bg">Heading - AI-Powered Precision.</h2>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Human-Centric Impact. ",
              500, // wait 1s before replacing "Mice" with "Hamsters"
              "Web Development",
              500,
              "CRM and SaaS Development",
              500,
              "Fintech Development",
              500,
            ]}
            wrapper="span"
            speed={50}
            style={{
              display: "inline-block",
              fontWeight: "bold",
              fontFamily: "poppins",
              color: "var(--deep-blue)",
            }}
            repeat={Infinity}
          />
        </div>
      </div>
      <p className="text50 mt30 text-primary-bg desc">
        {wrapWordsInSpan(
          `By 2030, AI will add $15.7 trillion to the global economy. At Accelerate-AI, we help you claim <Link href="/">your share</Link> by integrating AI and automation into your business processes—quickly and effectively.`
        )}
      </p>
    </div>
  );
};

export default Content;
