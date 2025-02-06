"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { TbSquareRoundedChevronRight } from "react-icons/tb";
import { BsPlayCircleFill } from "react-icons/bs";
import MyLightBox from "../common/MyLightBox/Index";
import Form from "./form/Form";

const Contact = ({ variant }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showLightBox, setShowLightBox] = useState(false);
  const [showNow, setShowNow] = useState(false);
  const lightboxContainerRef = useRef(null);
  const handleOpen = () => {
    setShowLightBox(true);
    if (!showLightBox) {
      setTimeout(() => {
        if (lightboxContainerRef.current) {
          lightboxContainerRef.current.classList.remove("opacity-0");
          lightboxContainerRef.current.classList.remove("pointer-events-none");
          setShowNow(true);
        }
      }, 1500);
    } else {
      if (lightboxContainerRef.current) {
        lightboxContainerRef.current.classList.remove("opacity-0");
        lightboxContainerRef.current.classList.remove("pointer-events-none");
        setTimeout(() => {
          setShowNow(true);
        }, 1500);
      }
    }
  };

  return (
    <>
      <section
        id="contact"
        className={`${
          variant
            ? variant == "blue"
              ? " bg-[ghostwhite] "
              : ""
            : " bg-black "
        }  text-black py1`}
      >
        <div className="myContainer flex flex-wrap gap-[30px] items-stretch justify-between">
          <div className="lg:w-[47%] w-full flex flex-col justify-between lg:gap-y-[2.5vw] gap-y-[20px]">
            <div>
              <h2 data-aos="fade-up">Efficiency starts with a conversation.</h2>
              <div className="text24">
                <div data-aos="fade-up" className="mt30">
                  <span>Just a quick question? (Fill out the form)</span>
                  <div className="mt20">
                    <span> Or write to us at:</span> {""}
                    <Link
                      href={"mailto:connect@accelerate-ai.tech"}
                      className="font-medium"
                    >
                      connect@accelerate-ai.tech.
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade"
              onClick={() => {
                handleOpen();
              }}
              className="flex items-end w-full rounded-[20px] overflow-hidden relative group h-[350px] mt-auto cursor-pointer"
            >
              <div className="absolute inset-0 size-full">
                <span
                  style={{
                    background: "linear-gradient(#10101000 25%,#101010 75%)",
                  }}
                  className="absolute inset-0 size-full z-[1]"
                ></span>
                <div className="text-white absolute z-[1] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text60 group-hover:scale-[1.1] transition-all duration-500">
                  <BsPlayCircleFill />
                </div>
                <video
                  src="/videos/home-hero.mp4"
                  className="object-cover absolute inset-0 size-full"
                  preload="auto"
                  loading="lazy"
                ></video>
              </div>
              <div className="p-[20px] lg:p-[2.5vw] pt-[unset] relative z-[2] w-full text-white">
                <p className="text24">
                  We like automating things, but never relationships. Let’s
                  build something smart, together.
                </p>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </section>
      {showLightBox && (
        <MyLightBox
          slideNo={slideIndex}
          autoPlay
          showNow={showNow}
          setShowNow={setShowNow}
          lightboxContainerRef={lightboxContainerRef}
          // sources={[
          //   {
          //     source: getYouTubeVideoId(youtubeLink),
          //     type: "youtube"
          //   }
          // ]}
          sources={[
            {
              source: "/videos/home-hero.mp4",
              // source:
              //   data?.navigation_buttons?.length > 0 &&
              //   data?.navigation_buttons[0].button_link,
              type: "video",
            },
          ]}
          //   sources={[{ source: data?.youtubeId, type: "youtube" }]}
        />
      )}
    </>
  );
};

export default Contact;
