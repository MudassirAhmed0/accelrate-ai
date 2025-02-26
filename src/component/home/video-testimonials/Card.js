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
        className="shadow-2xl border-2 border-white group cursor-pointer text-white testimonialCard relative min-h-full w-[400px] min-w-[400px] sm:w-[550px] sm:min-w-[550px] lg:w-[50vw] lg:min-w-[50vw] rounded-[20px] text-light p-[1.5625vw] whitespace-normal overflow-hidden"
      >
        <div className="absolute inset-0 size-full">
          {/* <span className="absolute inset-0 size-full z-[1] bg-black bg-opacity-[0.2]"></span> */}
          <div
            style={{
              boxShadow: " 0 3px 10px rgb(255 255 255 / 0.2)",
            }}
            className="flex items-center gap-4 border-white border-2 py-2 px-6 shadow-2xl overflow-hidden bg-black rounded-full absolute z-[1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text60 group-hover:scale-[1.06] group-hover:text-black group-hover:bg-white  transition-all duration-500 ease-out"
          >
            <BsPlayCircleFill />
            <span>play</span>
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
