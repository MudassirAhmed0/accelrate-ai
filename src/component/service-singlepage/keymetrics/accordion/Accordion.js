import useResponsivness from "@/hooks/useResponsivness";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { HiMinus } from "react-icons/hi";

const Accordion = ({ items, setActiveBannerImage }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);
  const { isDesktop } = useResponsivness();
  const toggleAccordion = (index) => {
    if (isDesktop) {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  useEffect(() => {
    if (isDesktop) {
      items.forEach((_, index) => {
        if (contentRefs.current[index]) {
          contentRefs.current[index].style.maxHeight = "0px";
        }
      });
      if (openIndex !== null && contentRefs.current[openIndex]) {
        contentRefs.current[
          openIndex
        ].style.maxHeight = `${contentRefs.current[openIndex].scrollHeight}px`;
      }
    }
  }, [openIndex, items, isDesktop]);

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-full border-b border-[#4c4b49] lg:border-0 pb-[45px] lg:pb-[unset] mb-[45px] lg:mb-[unset]"
        >
          <div
            className={`${
              openIndex === index
                ? "lg:bg-[#1a1a1a] lg:border lg:rounded-[6px]"
                : "lg:bg-transparent lg:border-b"
            } border-[#4c4b49] overflow-hidden lg:py-[1.04166666667vw] lg:px-[2.08333333333vw] transition-colors duration-500`}
          >
            <button
              className="w-full flex justify-between items-center lg:py-[0.625vw] sm:pb-[30px] pb-[20px] transition group"
              onClick={() => {
                toggleAccordion(index);
                setActiveBannerImage(item.bannerImage);
              }}
            >
              <span className="lg:text30 mtext20 font-medium">
                {item.title}
              </span>
              <div
                className={`${
                  openIndex === index
                    ? "bg-[#f0f0f0] text-[#1C1C1C]"
                    : "bg-[#1C1C1C] text-[#f0f0f0] group-hover:lg:bg-[#4B4B4B]"
                }  relative lg:text30 font-bold lg:p-[0.3125vw] transition-all duration-500 hidden lg:block`}
              >
                <HiMinus
                  className={`${
                    openIndex === index ? "rotate-[-90deg]" : "rotate-[0deg]"
                  } absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] transition-transform`}
                />
                <HiMinus />
              </div>
            </button>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="overflow-hidden transition-all duration-300 lg:text18 mtext14 max-h-[unset] lg:max-h-0"
              dangerouslySetInnerHTML={{ __html: item.content }}
            ></div>
          </div>
          <div className="sm:mt-[30px] mt-[20px] relative aspect-[1/1.23] w-full lg:w-[32.621%] lg:min-w-[32.621%] lg:hidden block">
            <Image fill alt="banner" unoptimized src={item.bannerImage} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
