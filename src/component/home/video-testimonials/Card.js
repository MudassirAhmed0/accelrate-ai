import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";

const Card = ({ setToggler, toggler, cardVideo, setSlideIndex, index }) => {
  return (
    <>
      <div
        data-aos="fade"
        onClick={() => {
          setSlideIndex(index);
          setToggler(!toggler);
        }}
        className="group cursor-pointer text-white hover:bg-[#7b6d6d4d] transition-all duration-[500ms] testimonialCard relative min-h-full bg-white w-[300px] min-w-[300px] sm:w-[350px] sm:min-w-[350px] lg:w-[300px] lg:min-w-[300px] rounded-[20px] text-light p-[1.5625vw] whitespace-normal overflow-hidden"
      >
        <div className="absolute inset-0 size-full">
          <span className="absolute inset-0 size-full z-[1] bg-black bg-opacity-[0.5]"></span>
          <div className="absolute z-[1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text60 group-hover:scale-[1.1] transition-all duration-500">
            <BsPlayCircleFill />
          </div>
          <video
            src={cardVideo.src}
            poster={cardVideo.poster}
            className="object-cover absolute inset-0 size-full group-hover:scale-[1.04] transition-all duration-500"
            preload="auto"
            loading="lazy"
          ></video>
        </div>
      </div>
    </>
  );
};

export default Card;
