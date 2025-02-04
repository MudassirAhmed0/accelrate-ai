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
        className={`${
          variant
            ? variant == "blue"
              ? " bg-[ghostwhite] "
              : ""
            : " bg-black "
        }  text-black py1`}
      >
        <div className="myContainer flex items-start justify-between">
          <div className="w-[47%] flex flex-col justify-between gap-y-[2.5vw]">
            <div>
              <h2 data-aos="fade-up">Efficiency starts with a conversation.</h2>
              <div className="text24">
                <div data-aos="fade-up" className="flex gap-x-[15px] mt30">
                  <p>(No, we won’t make you speak to a bot)</p>
                  <Link
                    href={"/"}
                    className="font-medium flex items-center gap-x-[5px] group"
                  >
                    <span>Let’s get started</span>
                    <div className="group-hover:translate-x-[3px] transition-all duration-200">
                      <TbSquareRoundedChevronRight />
                    </div>
                  </Link>
                </div>

                <div data-aos="fade-up" className="mt30">
                  <span>
                    Just a quick question? (Fill out the form) <br /> Or write
                    to us at:
                  </span>{" "}
                  <Link
                    href={"mailto:connect@accelerate-ai.tech"}
                    className="font-medium"
                  >
                    connect@accelerate-ai.tech.
                  </Link>
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
                <span className="absolute inset-0 size-full bg-black bg-opacity-[0.5] z-[1]"></span>
                <div className="absolute z-[1] top-[30%] left-[50%] translate-x-[-50%] text60 group-hover:scale-[1.1] transition-all duration-500">
                  <BsPlayCircleFill />
                </div>
                <video
                  src="/videos/home-hero.mp4"
                  className="object-cover absolute inset-0 size-full"
                  preload="auto"
                  loading="lazy"
                ></video>
              </div>
              <div className="bg-black p-[2.5vw] pt-[unset] relative z-[2] w-full text-white">
                <p className="text24">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  tenetur!
                </p>
                <div className="mt20 flex items-center gap-x-[15px] text20">
                  <span>Lorem, ipsum </span>
                  <span className="h-[1px] w-[50px] bg-white"></span>
                  <span className="text-white text-opacity-[0.8]">
                    Lorem, ipsum dolor.{" "}
                  </span>
                </div>
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
