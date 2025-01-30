"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Card = ({ data }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // Animation duration in milliseconds
      const startValue = 0;
      const endValue = data?.title || 0;
      const decimalPlaces = data?.decimal || 0;

      let startTime = null;

      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const value = (
          startValue +
          (endValue - startValue) * percentage
        ).toFixed(decimalPlaces);
        setCurrentValue(value);

        if (percentage < 1) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [isVisible, data]);

  return (
    <div
      ref={cardRef}
      className="sm:border-[1px] border-[0.23255813953vw] border-[#B8A56733] rounded-[20px] lg:py-[40px] lg:px-[1.5625vw] sm:p-[30px] p-[6.51162790698vw] flex flex-col lg:gap-y-[4.32291666667vw] sm:gap-y-[60px] gap-y-[6.97674418605vw] lg:w-[20vw] w-[50%]"
    >
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap items-baseline lg:gap-[0.52083333333vw] sm:gap-[5px] gap-[1.16279069767vw]">
          <span className="lg:text60 sm:mtext30 text-[6.97674418605vw] leading-[8.37209302326vw] f500 sm:tracking-[1.5px] tracking-[0.3488372093vw]">
            {currentValue}
            {data.suffix && data.suffix}
          </span>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: data.description }}
          className="lg:text20 sm:mtext16 text-[3.72093023256vw] leading-[5.58139534884vw] f500 text-[#BDBAB5] lg:mt-[0.15625vw] sm:mt-[5px] mt-[1.16279069767vw]"
        ></div>
      </div>
    </div>
  );
};

export default Card;
