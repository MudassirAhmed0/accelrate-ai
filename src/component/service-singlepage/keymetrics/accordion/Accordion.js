import useResponsivness from "@/hooks/useResponsivness";
import Image from "next/image";
import { useState, useRef } from "react";
import { HiMinus } from "react-icons/hi";

const Accordion = ({ items, setActiveBannerImage }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);
  const { isDesktop } = useResponsivness();

  const toggleAccordion = (index) => {
    if (!isDesktop) return;

    setOpenIndex((prev) => (prev === index ? null : index));
    setActiveBannerImage(items[index]?.bannerImage);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const contentHeight = contentRefs.current[index]?.scrollHeight || 0;

        return (
          <div
            key={index}
            className="w-full border-b border-[#4c4b49] lg:border-0 pb-[45px] lg:pb-0 mb-[45px] lg:mb-0"
          >
            <div
              className={`transition-colors duration-500 ${
                isOpen
                  ? "lg:bg-[#1a1a1a] lg:border lg:rounded-[6px]"
                  : "lg:bg-transparent lg:border-b"
              } border-[#4c4b49] overflow-hidden lg:py-[1.0417vw] lg:px-[2.0833vw]`}
            >
              <button
                className="w-full flex justify-between items-center lg:py-[0.625vw] sm:pb-[30px] pb-[20px] transition group"
                onClick={() => toggleAccordion(index)}
              >
                <span className="lg:text30 mtext20 font-medium text-left">
                  {item.title}
                </span>
                <div
                  className={`relative lg:text30 font-bold lg:p-[0.3125vw] transition-all duration-500 hidden lg:block ${
                    isOpen
                      ? "bg-[#f0f0f0] text-[#1C1C1C]"
                      : "bg-[#1C1C1C] text-[#f0f0f0] group-hover:lg:bg-[#4B4B4B]"
                  }`}
                >
                  <HiMinus
                    className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-transform ${
                      isOpen ? "rotate-[-90deg]" : "rotate-0"
                    }`}
                  />
                  <HiMinus />
                </div>
              </button>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="overflow-hidden transition-all duration-300 ease-in-out lg:text18 mtext14 "
                style={{
                  maxHeight: isOpen
                    ? `${contentHeight}px`
                    : !isDesktop
                    ? "unset"
                    : "0px",
                  opacity: isOpen ? 1 : !isDesktop ? 1 : 0,
                }}
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></div>
            </div>

            {/* Mobile Image */}
            <div className="sm:mt-[30px] mt-[20px] relative aspect-[1/1.23] w-full lg:w-[32.621%] lg:min-w-[32.621%] lg:hidden block">
              <Image fill alt="banner" unoptimized src={item.bannerImage} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
