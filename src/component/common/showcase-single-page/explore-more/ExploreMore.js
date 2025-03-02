import LinkBtn from "@/component/common/buttons/LinkBtn";
import { caseStudiesData } from "@/component/show-case/Index";
import RegularCards from "@/component/show-case/tabs-section/regular-cards/RegularCards";
import Link from "next/link";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

function getRelatedCaseStudies(data, caseStudies) {
  return caseStudies.filter(caseStudy => data.includes(caseStudy.slug));
}


const ExploreMore = ({data}) => {

  const relatedCaseStudies = getRelatedCaseStudies(data, caseStudiesData); 
  return (
    <section>
      <div className="myContainer py1 pt-[unset]">
        <h2
          data-aos="fade-up"
          className="text-center lg:mb-[3.125vw] mb-[60px]"
        >
          Explore more case studies
        </h2>
        <RegularCards cardsData={relatedCaseStudies} />
        <div className="mt-[40px] lg:mt-[4.16666666667vw] w-full flex lg:items-end items-center justify-between lg:gap-[0.625vw] gap-[12px] flex-wrap">
          <span className="h-[1px] bg-white grow-[1] lg:mb-[0.625vw] opacity-[0.2]"></span>

          <LinkBtn text={"See all cases"} link={"/showcase"} />
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
