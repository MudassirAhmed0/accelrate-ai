"use client";
import React, { useEffect, useRef, useState } from "react";
import Tabs from "./tabs/Tabs";
import FeatureCards from "./feature-cards/FeatureCards";
import RegularCards from "./regular-cards/RegularCards";
import Link from "next/link";

const TabsSections = ({ tabs, cardsData }) => {
  const [active, setActive] = useState("");
  const [regularCardsData, setRegularCardsData] = useState([]);
  const [limit, setLimit] = useState(6);
  const containerRef = useRef(null);

  const updateScroll = () => {
    // if (window.innerWidth < 768) {
    const offset = document.querySelector("header").offsetHeight;
    const y =
      containerRef.current.getBoundingClientRect().top +
      window.pageYOffset -
      offset;
    window.scrollTo({ top: y, behavior: "smooth" });
    // }
  };
  useEffect(() => {
    const url = new URL(window.location.href);
    const service = url.searchParams.get("service");
    if (service) {
      setActive(service);
      updateScroll();
    }
  }, []);

  useEffect(() => {
    if (active) {
      setRegularCardsData(
        cardsData
          .filter((card) =>
            card.category.toLowerCase().includes(active.toLowerCase())
          )
          .slice(0, limit)
      );

      const url = new URL(window.location.href);

      // Set or update the query parameter
      url.searchParams.set("service", active);

      // Use history.pushState to update the URL in the address bar without reloading the page
      history.pushState(null, "", url.toString());
    } else {
      setRegularCardsData(cardsData.filter((card) => !card.featured));
      const url = new URL(window.location.href);

      // Set or update the query parameter
      //remove search param
      url.searchParams.delete("service");

      // Use history.pushState to update the URL in the address bar without reloading the page
      history.pushState(null, "", url.toString());
    }
  }, [active]);

  useEffect(() => {
    setRegularCardsData(cardsData.filter((card) => !card.featured));
  }, []);
  return (
    <section className="bg-black text-white py1">
      <div ref={containerRef} className="myContainer">
        <Tabs active={active} setActive={setActive} tabs={tabs} />
        <div className="flex flex-col lg:mt-[3.125vw] mt-[30px]">
          {active ? "" : <FeatureCards cardsData={cardsData} />}

          <RegularCards cardsData={regularCardsData} />
          {/* <div className="relative flex justify-center w-full lg:mt-[3.125vw] mt-14">
            <span className="w-full h-[.5px] block bg-white opacity-10 absolute left-0  top-1/2 -translate-y-1/2"></span>
            <div data-aos="fade" className="group bg-black px-4 relative z-[2]">
              <button
                
                className="group-hover:scale-95 scale-100 transition-all duration-500 ease-out poppins shadow-[inset_0_-6px_12px_rgba(0,0,0,1)] relative flex items-center lg:gap-x-[0.3125vw] bg-white text-black lg:py-[0.625vw] lg:px-[1.5625vw] px-[24px] py-[10px] rounded-[8px] lg:text18 mtext16 font-medium"
              >
                Load more project
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TabsSections;
